import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { CommerceMlImportParser } from "commerceml-parser";
import {
  Catalog,
  Classifier,
  ClassifierGroup,
  ClassifierProperty,
  Product,
} from "../../types/commerceml";
import { createReadStream } from "fs";
import OneCSettingsService from "../../modules/1c/service";
import { ONE_C_MODULE } from "../../modules/1c";
import { ParseFileStepInput } from "../../types";
import { Logger } from "@medusajs/framework/types";

export const parseImportFilesStep = createStep(
  "parse-import-files",
  async (filePaths: ParseFileStepInput, { container }) => {
    const logger = container.resolve<Logger>("logger");
    const importParser = new CommerceMlImportParser();

    const catalogs: Catalog[] = [];
    const properties: ClassifierProperty[] = [];
    const products: Product[] = [];
    const classifierGroups: ClassifierGroup[] = [];
    let classifier: Classifier | undefined;

    importParser.onClassifier((cl) => {
      classifier = cl;
    });
    importParser.onClassifierProperty((cp) => {
      properties.push(cp);
    });
    importParser.onClassifierGroup((cg) => {
      classifierGroups.push(cg);
    });
    importParser.onProduct((p) => {
      products.push(p);
    });
    importParser.onCatalog((c) => {
      catalogs.push(c);
    });

    try {
      if (filePaths) {
        logger.info(`[1C Integration] Parsing import file: ${filePaths}`);
        await Promise.all(
          filePaths.map((filePath) =>
            importParser.parse(createReadStream(filePath))
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

    const oneCSettingsService: OneCSettingsService =
      container.resolve(ONE_C_MODULE);
    const settings = await oneCSettingsService.getSettings();

    return new StepResponse({
      classifier,
      properties,
      classifierGroups,
      products,
      settings,
    });
  }
);
