import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import * as fs from "fs/promises"
import * as path from "path"
import { MedusaError, Modules } from "@medusajs/utils"
import {
  AuthenticationInput,
  IAuthModuleService,
} from "@medusajs/framework/types"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"
import { MarketplaceModuleService } from "@gorgo/medusa-marketplace/modules/marketplace/services"
import { MarketplaceOneCCredentialsType, MarketplaceOneCSettingsType } from "../../../../../providers/marketplace-1c/types"
import { decompressAndExtract, ensureUploadDir } from "../../../../../lib/exchange-utils"
import { UPLOAD_DIR } from "../../../../../data/constants"
import { importMarketplaceProductsWorkflow } from "../../../../../workflows/provider/workflows/import-marketplace-products"
import { importMarketplaceOffersWorkflow } from "../../../../../workflows/provider/workflows/import-marketplace-offers"

function sendPlainTextResponse(
  res: MedusaResponse,
  statusCode: number,
  content: string
) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8")
  res.status(statusCode).send(content)
}

const activeSessions = new Map<string, { marketplaceId: string }>()

function getSessionId(req: MedusaRequest): string | undefined {
  return req.cookies?.["medusa_mp_1c_session_id"]
}

function isAuthValid(req: MedusaRequest) {
  const sessionId = getSessionId(req)
  return sessionId && activeSessions.has(sessionId)
}

async function getMarketplaceSettings(
  req: MedusaRequest,
  marketplaceId: string
): Promise<{ credentials: MarketplaceOneCCredentialsType; settings: MarketplaceOneCSettingsType }> {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplaces = await marketplaceService.listMarketplaces(
    { id: marketplaceId },
    { select: ["id", "provider_id", "is_enabled", "credentials", "settings"] }
  )

  if (!marketplaces.length) {
    throw new MedusaError(MedusaError.Types.NOT_FOUND, `Marketplace ${marketplaceId} not found`)
  }

  return {
    credentials: marketplaces[0].credentials as MarketplaceOneCCredentialsType,
    settings: (marketplaces[0].settings || {}) as MarketplaceOneCSettingsType,
  }
}

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const logger = req.scope.resolve("logger")
  const marketplaceId = req.params.id

  const { type, mode } = req.query as {
    type?: string
    mode?: string
    filename?: string
  }

  if (type !== "catalog" && type !== "sale") {
    return sendPlainTextResponse(res, 400, "failure\nInvalid type parameter")
  }

  const sessionId = getSessionId(req)

  if (mode !== "checkauth") {
    if (!sessionId || !isAuthValid(req)) {
      logger.debug(
        `[1C Marketplace] ${mode}: Authentication failed (session cookie missing or invalid).`
      )
      return sendPlainTextResponse(
        res,
        401,
        `failure\nAuthentication failed for ${mode}`
      )
    }
  }

  let mpSettings: MarketplaceOneCSettingsType = {}
  try {
    const result = await getMarketplaceSettings(req, marketplaceId)
    mpSettings = result.settings
  } catch (error) {
    if (mode !== "checkauth") {
      return sendPlainTextResponse(res, 404, `failure\nMarketplace not found`)
    }
  }

  switch (mode) {
    case "checkauth": {
      let checkAuthValid = false

      if (req.headers.authorization) {
        const authModuleService: IAuthModuleService = req.scope.resolve(
          Modules.AUTH
        )

        try {
          const [login, password] = Buffer.from(
            req.headers.authorization.split(" ")[1],
            "base64"
          )
            .toString()
            .split(":")

          if (login && password) {
            const { success } = await authModuleService.authenticate(
              "emailpass",
              {
                body: { email: login, password: password },
                authScope: "admin",
              } as AuthenticationInput
            )

            if (success) {
              checkAuthValid = true
              logger.debug(
                `[1C Marketplace] User '${login}' authenticated for marketplace ${marketplaceId}.`
              )
            }
          }
        } catch (error) {
          logger.debug(
            `[1C Marketplace] Authentication attempt failed: ${(error as Error).message}`
          )
          checkAuthValid = false
        }
      }

      if (!checkAuthValid) {
        return sendPlainTextResponse(
          res,
          401,
          `failure\nAuthentication failed for ${mode}`
        )
      }

      const cookieName = "medusa_mp_1c_session_id"
      const cookieValue = `mpsess_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 15)}`
      activeSessions.set(cookieValue, { marketplaceId })
      logger.debug(
        `[1C Marketplace] Checkauth: New session ${cookieName}=${cookieValue}`
      )
      res.cookie(cookieName, cookieValue, {
        httpOnly: true,
        path: "/",
      })
      return sendPlainTextResponse(
        res,
        200,
        `success\n${cookieName}\n${cookieValue}`
      )
    }

    case "init": {
      logger.debug(`[1C Marketplace] Init for marketplace ${marketplaceId}`)
      const sessionDir = path.join(UPLOAD_DIR, marketplaceId, sessionId!)
      try {
        await fs.rm(sessionDir, { recursive: true, force: true })
      } catch (error) {
        logger.error(
          `[1C Marketplace] Failed to clean up session directory ${sessionDir}: ${error}`
        )
      }

      const zipSupported = mpSettings?.useZip ? "yes" : "no"
      const fileLimit = mpSettings?.chunkSize ?? 1024 * 1024 * 100
      return sendPlainTextResponse(
        res,
        200,
        `zip=${zipSupported}\nfile_limit=${fileLimit}`
      )
    }

    case "import": {
      const importSessionDir = path.join(UPLOAD_DIR, marketplaceId, sessionId!)
      logger.debug(
        `[1C Marketplace] Import: Starting import for marketplace ${marketplaceId}`
      )
      try {
        let files = await fs.readdir(importSessionDir)

        for (const file of files) {
          if (path.extname(file).toLowerCase() === ".zip") {
            const zipFilePath = path.join(importSessionDir, file)
            logger.debug(`[1C Marketplace] Decompressing ${zipFilePath}`)
            await decompressAndExtract(zipFilePath, importSessionDir)
            await fs.unlink(zipFilePath)
          }
        }

        files = await fs.readdir(importSessionDir)

        const importFiles = files
          .filter((f) => f.startsWith("import") && f.endsWith(".xml"))
          .map((f) => path.join(importSessionDir, f))

        const offerFiles = files
          .filter((f) => f.startsWith("offers") && f.endsWith(".xml"))
          .map((f) => path.join(importSessionDir, f))

        if (importFiles.length > 0) {
          logger.info(
            "[1C Marketplace] Found import.xml. Running Import Workflow."
          )
          const { errors } = await importMarketplaceProductsWorkflow(
            req.scope
          ).run({
            input: { import: importFiles },
            throwOnError: true,
          })
          if (errors?.length > 0) throw errors[0].error
        } else if (offerFiles.length > 0) {
          logger.info(
            "[1C Marketplace] Found offers.xml. Running Offers Workflow."
          )
          const { errors } = await importMarketplaceOffersWorkflow(
            req.scope
          ).run({
            input: { offers: offerFiles },
            throwOnError: true,
          })
          if (errors?.length > 0) throw errors[0].error
        } else {
          logger.warn(
            `[1C Marketplace] Import: No import or offer files found for marketplace ${marketplaceId}`
          )
        }

        logger.debug(
          `[1C Marketplace] Import step completed for marketplace ${marketplaceId}`
        )
        return sendPlainTextResponse(res, 200, "success")
      } catch (error) {
        logger.error(
          `[1C Marketplace] Import: Failed for marketplace ${marketplaceId}: ${error}`
        )
        return sendPlainTextResponse(
          res,
          500,
          `failure\n${(error as Error).message}`
        )
      }
    }

    case "query": {
      logger.debug(`[1C Marketplace] Query: Export not implemented yet.`)
      return sendPlainTextResponse(
        res,
        200,
        `failure\nExport functionality (query mode) is not implemented yet.`
      )
    }

    case "success": {
      logger.debug(
        `[1C Marketplace] Success: Exchange completed for marketplace ${marketplaceId}. Cleaning up.`
      )
      const successSessionDir = path.join(UPLOAD_DIR, marketplaceId, sessionId!)
      try {
        await fs.rm(successSessionDir, { recursive: true, force: true })
        activeSessions.delete(sessionId!)
      } catch (error) {
        logger.error(
          `[1C Marketplace] Failed to clean up session directory ${successSessionDir}: ${error}`
        )
      }
      return sendPlainTextResponse(res, 200, "success")
    }

    default:
      return sendPlainTextResponse(
        res,
        400,
        "failure\nInvalid mode parameter for GET request"
      )
  }
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const logger = req.scope.resolve("logger")
  const marketplaceId = req.params.id

  const { type, mode, filename } = req.query as {
    type?: string
    mode?: string
    filename?: string
  }

  const sessionId = getSessionId(req)
  if (!sessionId || !isAuthValid(req)) {
    return sendPlainTextResponse(
      res,
      401,
      "failure\nAuthentication failed for file upload"
    )
  }

  if ((type !== "catalog" && type !== "sale") || mode !== "file" || !filename) {
    return sendPlainTextResponse(
      res,
      400,
      "failure\nInvalid parameters for POST request"
    )
  }

  logger.debug(
    `[1C Marketplace] File Upload: Receiving chunk for file: ${filename} (marketplace ${marketplaceId})`
  )

  const body = req.body as Buffer
  if (!body || body.length === 0) {
    return sendPlainTextResponse(
      res,
      400,
      `failure\nNo file content received for ${filename}.`
    )
  }

  await ensureUploadDir()
  const sessionDir = path.join(UPLOAD_DIR, marketplaceId, sessionId)
  await fs.mkdir(sessionDir, { recursive: true })

  try {
    const filePath = path.join(sessionDir, filename)
    await fs.appendFile(filePath, body)
    logger.debug(`[1C Marketplace] File Upload: Saved chunk to ${filePath}`)
    return sendPlainTextResponse(res, 200, "success")
  } catch (error) {
    logger.error(
      `[1C Marketplace] File upload error for ${filename}: ${error}`
    )
    const errorMessage =
      error instanceof MedusaError
        ? error.message
        : error instanceof Error
          ? error.message
          : "Unknown file upload error"
    return sendPlainTextResponse(res, 500, `failure\n${errorMessage}`)
  }
}
