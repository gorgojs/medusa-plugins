import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import * as fs from "fs/promises";
import * as path from "path";
import { MedusaError } from "@medusajs/utils";
import OnecService from "../../../modules/1c/service";
import { ONE_C_MODULE } from "../../../modules/1c";
import {
  decompressAndExtract,
  ensureUploadDir,
} from "../../../utils/exchange-utils";
import { UPLOAD_DIR } from "../../../data/constants";
import {
  AuthenticationInput,
  IAuthModuleService,
} from "@medusajs/framework/types";
import { onecImportWorkflow } from "../../../workflows/onec-import-workflow";
import { onecOffersWorkflow } from "../../../workflows/onec-offers-workflow";
import { onecOrdersWorkflow } from "../../../workflows/onec-orders-workflow";
import { buildOrdersXml } from "../../../utils/orders-xml-builder";
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils";
import { IOrderModuleService } from "@medusajs/types";

function sendPlainTextResponse(
  res: MedusaResponse,
  statusCode: number,
  content: string
) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(statusCode).send(content);
}

const active1CSessions = new Set<string>();

function getSessionId(req: MedusaRequest): string | undefined {
  return req.cookies["medusa_1c_session_id"];
}

function isAuthValid(req: MedusaRequest) {
  const sessionId = getSessionId(req);
  return sessionId && active1CSessions.has(sessionId);
}

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const logger = req.scope.resolve("logger");
  const oneCSettingsService: OnecService =
    req.scope.resolve(ONE_C_MODULE);

  const settings = await oneCSettingsService.getSettings();

  const { type, mode } = req.query as {
    type?: string;
    mode?: string;
    filename?: string;
  };

  if (type === "catalog" || type === "sale") {
    const sessionId = getSessionId(req);

    if (mode !== "checkauth") {
      if (!sessionId || !isAuthValid(req)) {
        logger.debug(
          `[1C Integration] ${mode}: Authentication failed (1C session cookie missing or invalid).`
        );
        return sendPlainTextResponse(
          res,
          401,
          `failure\nAuthentication failed for ${mode}`
        );
      }
    }

    switch (mode) {
      case "checkauth":
        let checkAuthValid = false;

        if (req.headers.authorization) {
          const authModuleService: IAuthModuleService = req.scope.resolve(
            Modules.AUTH
          );

          try {
            const [login, password] = Buffer.from(
              req.headers.authorization.split(" ")[1],
              "base64"
            )
              .toString()
              .split(":");

            if (login && password) {
              const { success, error } =
                await authModuleService.authenticate("emailpass", {
                  body: {
                    email: login,
                    password: password,
                  },
                  authScope: "admin",
                } as AuthenticationInput);

              if (success) {
                checkAuthValid = true;
                logger.debug(
                  `[1C Integration] User '${login}' authenticated successfully.`
                );
              } else if (error) {
                logger.warn(
                  `[1C Integration] User '${login}' authentication failed: ${error}`
                );
                checkAuthValid = false;
              }
            }
          } catch (error) {
            logger.debug(
              `[1C Integration] Authentication attempt failed for user: ${(error as Error).message}`
            );
            checkAuthValid = false;
          }
        }

        if (!checkAuthValid) {
          logger.debug(
            "[1C Integration] Checkauth: Authentication failed (Invalid credentials or insufficient permissions)."
          );
          return sendPlainTextResponse(
            res,
            401,
            `failure\nAuthentication failed for ${mode}`
          );
        } else {
          const newCookieName = "medusa_1c_session_id";
          const newCookieValue = `sess_${Date.now()}_${Math.random()
            .toString(36)
            .substring(2, 15)}`;
          active1CSessions.add(newCookieValue);
          logger.debug(
            `[1C Integration] Checkauth: New session ${newCookieName}=${newCookieValue}`
          );
          res.cookie(newCookieName, newCookieValue, {
            httpOnly: true,
            path: "/",
          });
          return sendPlainTextResponse(
            res,
            200,
            `success\n${newCookieName}\n${newCookieValue}`
          );
        }

      case "init":
        logger.debug(`[1C Integration] Init`);
        const sessionDir = path.join(UPLOAD_DIR, sessionId!);
        try {
          await fs.rm(sessionDir, { recursive: true, force: true });
          logger.debug(
            `[1C Integration] Cleaned up session directory: ${sessionDir}`
          );
        } catch (error) {
          logger.error(
            `[1C Integration] Failed to clean up session directory ${sessionDir}: ${error}`
          );
        }

        const zipSupported = settings?.useZip ? "yes" : "no";
        const fileLimit = settings?.chunkSize ?? 1024 * 1024 * 100;
        return sendPlainTextResponse(
          res,
          200,
          `zip=${zipSupported}\nfile_limit=${fileLimit}`
        );

      case "import":
        const importSessionDir = path.join(UPLOAD_DIR, sessionId!);
        logger.debug(
          `[1C Integration] Import: Starting import for session ${sessionId}`
        );
        try {
          let files = await fs.readdir(importSessionDir);

          for (const file of files) {
            if (path.extname(file).toLowerCase() === ".zip") {
              const zipFilePath = path.join(importSessionDir, file);
              logger.debug(`[1C Integration] Decompressing ${zipFilePath}`);
              await decompressAndExtract(zipFilePath, importSessionDir);
              await fs.unlink(zipFilePath);
            }
          }

          files = await fs.readdir(importSessionDir);

          const importFiles = files
            .filter((f) => f.startsWith("import") && f.endsWith(".xml"))
            .map((f) => path.join(importSessionDir, f));

          const offerFiles = files
            .filter((f) => f.startsWith("offers") && f.endsWith(".xml"))
            .map((f) => path.join(importSessionDir, f));

          const orderFiles = files
            .filter((f) => f.startsWith("orders") && f.endsWith(".xml"))
            .map((f) => path.join(importSessionDir, f));

          if (importFiles.length > 0) {
            logger.info(
              "[1C Integration] Found import.xml. Running Import Workflow."
            );
            const { errors } = await onecImportWorkflow(req.scope).run({
              input: { import: importFiles },
              throwOnError: true,
            });
            if (errors?.length > 0) throw errors[0].error;
          }

          if (offerFiles.length > 0) {
            logger.info(
              "[1C Integration] Found offers.xml. Running Offers Workflow."
            );
            const { errors } = await onecOffersWorkflow(req.scope).run({
              input: { offers: offerFiles },
              throwOnError: true,
            });
            if (errors?.length > 0) throw errors[0].error;
          }

          if (orderFiles.length > 0) {
            logger.info(
              "[1C Integration] Found orders.xml. Running Orders Workflow."
            );
            const { errors } = await onecOrdersWorkflow(req.scope).run({
              input: { orders: orderFiles },
              throwOnError: true,
            });
            if (errors?.length > 0) throw errors[0].error;
          }

          if (importFiles.length === 0 && offerFiles.length === 0 && orderFiles.length === 0) {
            logger.warn(
              `[1C Integration] Import: No import, offer or order files found to import for session ${sessionId}`
            );
          }

          logger.debug(
            `[1C Integration] Import step completed for session ${sessionId}`
          );
          return sendPlainTextResponse(res, 200, "success");
        } catch (error) {
          const msg = error instanceof Error
            ? error.message
            : typeof error === "object"
            ? JSON.stringify(error)
            : String(error);
          logger.error(`[1C Integration] Import: Failed for session ${sessionId}: ${msg}`);
          return sendPlainTextResponse(res, 500, `failure\n${msg}`);
        }

      case "query":
        if (type !== "sale") {
          logger.debug(`[1C Integration] Query: only supported for type=sale.`);
          return sendPlainTextResponse(res, 200, `failure\nQuery mode is only supported for type=sale`);
        }

        try {
          logger.debug(`[1C Integration] Query: Exporting Medusa orders to 1C`);
          const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY);
          const orderService = req.scope.resolve<IOrderModuleService>(Modules.ORDER);

          const allOrders = await remoteQuery({
            entryPoint: "order",
            fields: [
              "id", "display_id", "status", "email", "currency_code", "total", "created_at",
              "metadata",
              "customer.id", "customer.first_name", "customer.last_name", "customer.email",
              "shipping_address.first_name", "shipping_address.last_name",
              "shipping_address.address_1", "shipping_address.address_2", "shipping_address.city",
              "shipping_address.phone", "shipping_address.postal_code",
              "items.id", "items.title", "items.variant_id", "items.variant_sku", "items.quantity",
              "items.unit_price", "items.product_id", "items.detail.quantity",
            ],
          });

          const toExport = allOrders.filter(
            (o: any) => o.status !== "canceled" && !o.metadata?.onec_exported_at && !o.metadata?.onec_order_id
          );

          if (!toExport.length) {
            logger.info(`[1C Integration] Query: No new orders to export.`);
            res.setHeader("Content-Type", "text/xml; charset=utf-8");
            return res.status(200).send(
              `<?xml version="1.0" encoding="UTF-8"?><КоммерческаяИнформация ВерсияСхемы="2.10" ДатаФормирования="${new Date().toISOString().substring(0, 19)}"></КоммерческаяИнформация>`
            );
          }

          const productIds = [...new Set(
            toExport.flatMap((o: any) => (o.items ?? []).map((i: any) => i.product_id).filter(Boolean))
          )];
          const externalIdByProductId = new Map<string, string>();
          if (productIds.length) {
            const products = await remoteQuery({
              entryPoint: "product",
              fields: ["id", "external_id"],
              variables: { id: productIds },
            });
            for (const p of products) {
              if (p.external_id) externalIdByProductId.set(p.id, p.external_id);
            }
          }

          const variantIds = [...new Set(
            toExport.flatMap((o: any) => (o.items ?? []).map((i: any) => i.variant_id).filter(Boolean))
          )];
          const variantDataMap = new Map<string, { options: Record<string, string>; onec_characteristic_id?: string }>();
          if (variantIds.length) {
            const variants = await remoteQuery({
              entryPoint: "variant",
              fields: ["id", "options.value", "options.option.title", "metadata"],
              variables: { id: variantIds },
            });
            for (const v of variants) {
              const optionValues: Record<string, string> = {};
              for (const opt of (v.options ?? [])) {
                const title = opt.option?.title;
                if (title && title !== "Default Option") {
                  optionValues[title] = opt.value;
                }
              }
              variantDataMap.set(v.id, {
                options: optionValues,
                onec_characteristic_id: v.metadata?.onec_characteristic_id as string | undefined,
              });
            }
          }

          for (const order of toExport) {
            for (const item of (order.items ?? [])) {
              item.onec_product_id = externalIdByProductId.get(item.product_id) || item.variant_sku;
              const variantData = variantDataMap.get(item.variant_id);
              item.variant_option_values = variantData?.options ?? {};
              item.onec_characteristic_id = variantData?.onec_characteristic_id;
            }
          }

          const xml = buildOrdersXml(toExport);

          await orderService.updateOrders(
            toExport.map((o: any) => ({
              id: o.id,
              metadata: { ...o.metadata, onec_exported_at: new Date().toISOString() },
            }))
          );

          logger.info(`[1C Integration] Query: Exported ${toExport.length} orders to 1C.`);
          res.setHeader("Content-Type", "text/xml; charset=utf-8");
          return res.status(200).send(xml);
        } catch (error) {
          const msg = error instanceof Error ? error.message : JSON.stringify(error);
          logger.error(`[1C Integration] Query: Failed to export orders: ${msg}`);
          return sendPlainTextResponse(res, 500, `failure\n${msg}`);
        }

      case "success":
        logger.debug(
          `[1C Integration] Success: Exchange completed for session ${sessionId}. Cleaning up.`
        );
        const successSessionDir = path.join(UPLOAD_DIR, sessionId!);
        try {
          await fs.rm(successSessionDir, {
            recursive: true,
            force: true,
          });
          active1CSessions.delete(sessionId!);
          logger.debug(
            `[1C Integration] Cleaned up session directory and session data for ${sessionId}.`
          );
        } catch (error) {
          logger.error(
            `[1C Integration] Failed to clean up session directory ${successSessionDir}: ${error}`
          );
        }
        return sendPlainTextResponse(res, 200, "success");

      default:
        return sendPlainTextResponse(
          res,
          400,
          "failure\nInvalid mode parameter for GET request"
        );
    }
  }

  return sendPlainTextResponse(res, 400, "failure\nInvalid type parameter");
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const logger = req.scope.resolve("logger");

  const { type, mode, filename } = req.query as {
    type?: string;
    mode?: string;
    filename?: string;
  };

  const sessionId = getSessionId(req);
  if (!sessionId || !isAuthValid(req)) {
    logger.debug(
      "[1C Integration] File Upload (POST): Authentication failed (1C session cookie missing or invalid)."
    );
    return sendPlainTextResponse(
      res,
      401,
      "failure\nAuthentication failed for file upload"
    );
  }

  if ((type !== "catalog" && type !== "sale") || mode !== "file" || !filename) {
    return sendPlainTextResponse(
      res,
      400,
      "failure\nInvalid parameters for POST request"
    );
  }

  logger.debug(
    `[1C Integration] File Upload: Receiving chunk for file: ${filename} for session ${sessionId}`
  );

  const body = req.body as Buffer;
  if (!body || body.length === 0) {
    logger.debug(
      `[1C Integration] File Upload: No file content for ${filename}.`
    );
    return sendPlainTextResponse(
      res,
      400,
      `failure\nNo file content received for ${filename}.`
    );
  }

  await ensureUploadDir();
  const sessionDir = path.join(UPLOAD_DIR, sessionId);
  await fs.mkdir(sessionDir, { recursive: true });

  try {
    const filePath = path.join(sessionDir, filename);
    await fs.appendFile(filePath, body);
    logger.debug(`[1C Integration] File Upload: Saved chunk to ${filePath}`);
    return sendPlainTextResponse(res, 200, "success");
  } catch (error) {
    logger.error(
      `[1C Integration] File upload error for ${filename}: ${error}`
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
