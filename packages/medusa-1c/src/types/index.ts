import {
	Classifier,
	ClassifierGroup,
	ClassifierProperty,
	Product,
} from "commerceml-parser-core";

export type OnecExchangeWorkflowInput = {
	filePaths: string[];
};

export type OnecData = {
	classifier?: Classifier;
	properties: ClassifierProperty[];
	classifierGroups: ClassifierGroup[];
	products: Product[];
	settings: any;
};
