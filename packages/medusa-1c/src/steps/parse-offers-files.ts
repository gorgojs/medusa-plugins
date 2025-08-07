import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { CommerceMlOffersParser } from "commerceml-parser";
import {
  Classifier,
  Offer,
  OffersPackage,
  Warehouse,
} from "commerceml-parser-core";
import { createReadStream } from "fs";
import { ParseFileStepInput } from "../types";
import * as fs from "fs/promises";
import * as path from "path";
import { UPLOAD_DIR } from "../data/constants";
import { Logger } from "@medusajs/framework/types";

export const parseOffersFilesStep = createStep(
  "parse-offer-files",
  async (filePaths: ParseFileStepInput, { container }) => {
    const logger = container.resolve<Logger>("logger");
    const offerParser = new CommerceMlOffersParser();

    let classifier: Classifier | undefined;
    let offersPackage: OffersPackage = {} as OffersPackage;
    const offers: Offer[] = [];
    const warehouses: Warehouse[] = [];

    offerParser.onClassifier((cl) => {
      classifier = cl;
    });
    offerParser.onOffersPackage((cg) => {
      offersPackage = cg;
    });
    offerParser.onOffer((cp) => {
      offers.push(cp);
    });
    offerParser.onWarehouse((cg) => {
      warehouses.push(cg);
    });

    try {
      if (filePaths) {
        logger.info(
          `[1C Integration] Parsing import files: ${filePaths.join(", ")}`
        );
        await Promise.all(
          filePaths.map((filePath) =>
            offerParser.parse(createReadStream(filePath))
          )
        );
        logger.info(`[1C Integration] Parsed data successfully.`);
      }
    } catch (e) {
      logger.error(
        `[1C Integration] Failed to parse import file: ${(e as Error).message}`
      );
      throw e;
    }

    await fs.writeFile(
      path.join(UPLOAD_DIR, "ouput_offers.json"),
      JSON.stringify(
        {
          classifier,
          offersPackage,
          offers,
          warehouses,
        },
        null,
        2
      )
    );

    return new StepResponse({
      classifier,
      offersPackage,
      offers,
      warehouses,
    });
  }
);
