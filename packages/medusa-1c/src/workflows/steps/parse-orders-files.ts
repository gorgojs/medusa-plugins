import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { createReadStream } from "fs";
import { ParseFileStepInput, OrdersOutput, OnecDocument } from "../../types";
import { Logger } from "@medusajs/framework/types";
import { BitrixOrdersParser } from "../../utils/parsing/bitrix-orders-parser";

export const parseOrdersFilesStep = createStep(
  "parse-orders-files-step",
  async (filePaths: ParseFileStepInput, { container }): Promise<StepResponse<OrdersOutput>> => {
    const logger = container.resolve<Logger>("logger");
    const parser = new BitrixOrdersParser();

    const documents: OnecDocument[] = [];

    parser.onDocument((doc) => {
      documents.push(doc);
    });

    try {
      if (filePaths?.length) {
        logger.info(`[1C Integration] Parsing orders files: ${filePaths.join(", ")}`);
        await Promise.all(
          filePaths.map((filePath) => parser.parse(createReadStream(filePath)))
        );
        logger.info(`[1C Integration] Parsed ${documents.length} order documents.`);
      }
    } catch (e) {
      logger.error(`[1C Integration] Failed to parse orders file: ${(e as Error).message}`);
      throw e;
    }

    return new StepResponse({ documents });
  }
);
