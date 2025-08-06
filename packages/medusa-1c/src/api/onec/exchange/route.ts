import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import * as zlib from "zlib";
import * as fs from "fs/promises";
import * as path from "path";
import { MedusaError } from "@medusajs/utils";
import { onecExchangeWorkflow } from "../../../workflows/onec_exchange_workflow";
import OneCSettingsService from "../../../modules/1c/service";
import { ONE_C_MODULE } from "../../../modules/1c";

const active1CSessions = new Set<string>();
const UPLOAD_DIR = path.join(process.cwd(), "uploads", "1c_exchange");

async function ensureUploadDir() {
	try {
		await fs.mkdir(UPLOAD_DIR, { recursive: true });
	} catch (error) {
		console.error(
			`[1C Integration] Failed to create upload directory: ${UPLOAD_DIR}`,
			error,
		);
		throw new MedusaError(
			MedusaError.Types.UNEXPECTED_STATE,
			"Failed to create upload directory for 1C exchange.",
		);
	}
}

function sendPlainTextResponse(
	res: MedusaResponse,
	statusCode: number,
	content: string,
) {
	res.setHeader("Content-Type", "text/plain; charset=utf-8");
	res.status(statusCode).send(content);
}

function getSessionId(req: MedusaRequest): string | undefined {
	return req.cookies["medusa_1c_session_id"];
}

function isAuthValid(req: MedusaRequest) {
	const sessionId = getSessionId(req);
	if (sessionId && active1CSessions.has(sessionId)) {
		return true;
	}
	return false;
}

export async function GET(req: MedusaRequest, res: MedusaResponse) {
	const logger = req.scope.resolve("logger");
	const oneCSettingsService: OneCSettingsService =
		req.scope.resolve(ONE_C_MODULE);

	const settings = await oneCSettingsService.getSettings();

	const { type, mode } = req.query as {
		type?: string;
		mode?: string;
		filename?: string;
	};

	if (type === "catalog") {
		const sessionId = getSessionId(req);

		if (mode !== "checkauth") {
			if (!sessionId || !isAuthValid(req)) {
				logger.debug(
					`[1C Integration] ${mode}: Authentication failed (1C session cookie missing or invalid).`,
				);
				return sendPlainTextResponse(
					res,
					401,
					`failure\nAuthentication failed for ${mode}`,
				);
			}
		}

		switch (mode) {
			case "checkauth":
				let checkAuthValid = true;
				if (
					!req.headers.authorization ||
					!settings?.login ||
					!settings?.password
				) {
					checkAuthValid = false;
				} else {
					const [login, password] = Buffer.from(
						req.headers.authorization.split(" ")[1],
						"base64",
					)
						.toString()
						.split(":");
					if (
						login !== settings.login ||
						password !== settings.password
					) {
						checkAuthValid = false;
					}
				}
				if (!checkAuthValid) {
					logger.debug(
						"[1C Integration] Init: Authentication failed (Invalid login or password).",
					);
					return sendPlainTextResponse(
						res,
						401,
						`failure\nAuthentication failed for ${mode}`,
					);
				} else {
					const newCookieName = "medusa_1c_session_id";
					const newCookieValue = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
					active1CSessions.add(newCookieValue);
					logger.debug(
						`[1C Integration] Checkauth: New session ${newCookieName}=${newCookieValue}`,
					);
					res.cookie(newCookieName, newCookieValue, {
						httpOnly: true,
						path: "/",
					});
					return sendPlainTextResponse(
						res,
						200,
						`success\n${newCookieName}\n${newCookieValue}`,
					);
				}

			case "init":
				logger.debug(`[1C Integration] Init`);
				const sessionDir = path.join(UPLOAD_DIR, sessionId!);
				try {
					await fs.rm(sessionDir, { recursive: true, force: true });
					logger.debug(
						`[1C Integration] Cleaned up session directory: ${sessionDir}`,
					);
				} catch (error) {
					logger.error(
						`[1C Integration] Failed to clean up session directory ${sessionDir}: ${error}`,
					);
				}

				const zipSupported = settings?.useZip ? "yes" : "no";
				const fileLimit = settings?.chunkSize ?? 1024 * 1024 * 100; // 100MB
				return sendPlainTextResponse(
					res,
					200,
					`zip=${zipSupported}\nfile_limit=${fileLimit}`,
				);

			case "import":
				const importSessionDir = path.join(UPLOAD_DIR, sessionId!);
				logger.debug(
					`[1C Integration] Import: Starting import for session ${sessionId}`,
				);
				try {
					const files = await fs.readdir(importSessionDir);
					const filePaths = files.map((f) =>
						path.join(importSessionDir, f),
					);

					if (filePaths.length === 0) {
						logger.warn(
							`[1C Integration] Import: No files found to import for session ${sessionId}`,
						);
						return sendPlainTextResponse(res, 200, "success");
					}

					const { errors } = await onecExchangeWorkflow(
						req.scope,
					).run({
						input: { filePaths },
						throwOnError: true,
					});

					if (errors?.length > 0) {
						const errorMessages = errors
							// .map((e) => e.message)
							.map((e) => e)
							.join("\n");
						logger.error(
							`[1C Integration] Import: Workflow failed for session ${sessionId}: ${errorMessages}`,
						);
						return sendPlainTextResponse(
							res,
							500,
							`failure\n${errorMessages}`,
						);
					}

					logger.debug(
						`[1C Integration] Import: Workflow completed for session ${sessionId}`,
					);
					return sendPlainTextResponse(res, 200, "success");
				} catch (error) {
					logger.error(
						`[1C Integration] Import: Failed for session ${sessionId}: ${error}`,
					);
					return sendPlainTextResponse(
						res,
						500,
						`failure\n${error.message}`,
					);
				}

			case "query":
				logger.debug(`[1C Integration] Query: Export not implemented.`);
				return sendPlainTextResponse(
					res,
					200,
					`failure\nExport functionality (query mode) is not implemented yet.`,
				);

			case "success":
				logger.debug(
					`[1C Integration] Success: Exchange completed for session ${sessionId}. Cleaning up.`,
				);
				const successSessionDir = path.join(UPLOAD_DIR, sessionId!);
				try {
					await fs.rm(successSessionDir, {
						recursive: true,
						force: true,
					});
					active1CSessions.delete(sessionId!);
					logger.debug(
						`[1C Integration] Cleaned up session directory and session data for ${sessionId}.`,
					);
				} catch (error) {
					logger.error(
						`[1C Integration] Failed to clean up session directory ${successSessionDir}: ${error}`,
					);
				}
				return sendPlainTextResponse(res, 200, "success");

			default:
				return sendPlainTextResponse(
					res,
					400,
					"failure\nInvalid mode parameter for GET request",
				);
		}
	}

	return sendPlainTextResponse(res, 400, "failure\nInvalid type parameter");
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
	const logger = req.scope.resolve("logger");
	const oneCSettingsService: OneCSettingsService =
		req.scope.resolve(ONE_C_MODULE);

	const settings = await oneCSettingsService.getSettings();

	const { type, mode, filename } = req.query as {
		type?: string;
		mode?: string;
		filename?: string;
	};

	const sessionId = getSessionId(req);
	if (!sessionId || !isAuthValid(req)) {
		logger.debug(
			"[1C Integration] File Upload (POST): Authentication failed (1C session cookie missing or invalid).",
		);
		return sendPlainTextResponse(
			res,
			401,
			"failure\nAuthentication failed for file upload",
		);
	}

	if (type !== "catalog" || mode !== "file") {
		return sendPlainTextResponse(
			res,
			400,
			"failure\nInvalid parameters for POST request",
		);
	}

	if (!filename) {
		return sendPlainTextResponse(
			res,
			400,
			"failure\nFilename not provided for file upload",
		);
	}

	logger.debug(
		`[1C Integration] File Upload: Receiving file: ${filename} for session ${sessionId}`,
	);

	// if (!req.body || req.body.length === 0) {
	if (!req.body) {
		logger.debug(
			`[1C Integration] File Upload: No file content for ${filename}.`,
		);
		return sendPlainTextResponse(
			res,
			400,
			`failure\nNo file content received for ${filename}.`,
		);
	}

	await ensureUploadDir();
	const sessionDir = path.join(UPLOAD_DIR, sessionId);
	await fs.mkdir(sessionDir, { recursive: true });

	let fileBuffer = req.body as Buffer;

	if (settings?.useZip && path.extname(filename).toLowerCase() === ".zip") {
		logger.debug(
			`[1C Integration] File Upload: Decompressing zip file ${filename}.`,
		);
		try {
            await fs.writeFile(path.join(sessionDir, `${filename}.zip`), fileBuffer);
			fileBuffer = zlib.gunzipSync(fileBuffer);
		} catch (error) {
			logger.error(
				`[1C Integration] File Upload: Failed to decompress zip file ${filename}: ${error}`,
			);
			return sendPlainTextResponse(
				res,
				500,
				`failure\nFailed to decompress file ${filename}.`,
			);
		}
	}

	try {
		const filePath = path.join(sessionDir, filename);
		await fs.writeFile(filePath, fileBuffer);
		logger.debug(`[1C Integration] File Upload: Saved file to ${filePath}`);
		return sendPlainTextResponse(res, 200, "success");
	} catch (error) {
		logger.error(
			`[1C Integration] File upload error for ${filename}: ${error}`,
		);
		const errorMessage =
			error instanceof MedusaError
				? error.message
				: error instanceof Error
					? error.message
					: "Unknown file upload error";
		return sendPlainTextResponse(res, 500, `failure\n${errorMessage}`);
	}
}
