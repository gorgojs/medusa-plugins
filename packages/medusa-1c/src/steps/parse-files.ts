import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { CommerceMlImportParser } from "commerceml-parser";
import {
	Catalog,
	Classifier,
	ClassifierGroup,
	ClassifierProperty,
	Product,
} from "commerceml-parser-core";
import { createReadStream } from "fs";
import * as path from "path";
import OneCSettingsService from "../modules/1c/service";
import { ONE_C_MODULE } from "../modules/1c";
import { OnecExchangeWorkflowInput } from "../types";

export const parseFilesStep = createStep(
	"parse-files",
	async ({ filePaths }: OnecExchangeWorkflowInput, { container }) => {
		const logger = container.resolve("logger");
		const catalogImportParser = new CommerceMlImportParser();

		const catalogs: Catalog[] = [];
		const properties: ClassifierProperty[] = [];
		const products: Product[] = [];
		const classifierGroups: ClassifierGroup[] = [];
		let classifier: Classifier | undefined;

		catalogImportParser.onClassifier((cl) => {
			classifier = cl;
		});
		catalogImportParser.onClassifierProperty((cp) => {
			properties.push(cp);
		});
		catalogImportParser.onClassifierGroup((cg) => {
			classifierGroups.push(cg);
		});
		catalogImportParser.onProduct((p) => {
			products.push(p);
		});
		catalogImportParser.onCatalog((c) => {
			catalogs.push(c);
		});

		const importXmlPath = filePaths.find((p) =>
			path.basename(p).includes("import.xml"),
		);

		try {
			if (importXmlPath) {
				logger.info(
					`[1C Integration] Parsing import file: ${importXmlPath}`,
				);
				await catalogImportParser.parse(
					createReadStream(importXmlPath),
				);
				logger.info(`[1C Integration] Parsed data successfully.`);
			}
		} catch (e) {
			logger.error(
				`[1C Integration] Failed to parse files: ${(e as Error).message}`,
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
	},
);
