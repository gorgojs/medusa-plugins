import {
	createProductsWorkflow,
	updateProductsWorkflow,
	useQueryGraphStep,
} from "@medusajs/medusa/core-flows";
import {
	createWorkflow,
	transform,
	WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import {
	CreateProductWorkflowInputDTO,
	ProductCategoryDTO,
	UpdateProductWorkflowInputDTO,
} from "@medusajs/framework/types";
import { ProductDTO, ShippingProfileDTO } from "@medusajs/types";
import _ from "lodash";
import slugify from "sluga";
import { parseFilesStep } from "../steps/parse-files";
import {
	flattenClassifierGroups,
	parseDictionaryOptions,
	parseProductOptions,
} from "../utils/product-utils";
import { OnecData, OnecExchangeWorkflowInput } from "../types";
import { processCategoriesRecursivelyStep } from "../steps/process-categories";

export const onecExchangeWorkflow = createWorkflow(
	"sync-from-erp",
	(input: OnecExchangeWorkflowInput) => {
		const onecData = parseFilesStep(input);

		const { data: stores } = useQueryGraphStep({
			entity: "store",
			fields: ["default_sales_channel_id"],
		}).config({ name: "stores" });

		const { data: shippingProfiles } = useQueryGraphStep({
			entity: "shipping_profile",
			fields: ["id"],
			pagination: { skip: 0, take: 1 },
		}).config({ name: "shipping-profile" });

		const externalIdsFilters = transform({ onecData }, (data) =>
			data.onecData.products.map((product) => `${product.id}`),
		);

		const { data: existingProducts } = useQueryGraphStep({
			entity: "product",
			fields: ["id", "external_id", "variants.*"],
			filters: { external_id: externalIdsFilters },
		}).config({ name: "existing-products" });

		const externalCatgoriesIdsFilters = transform({ onecData }, (data) =>
			flattenClassifierGroups(data.onecData.classifierGroups).map(
				(cg) => cg.id,
			),
		);

		const categoryHandlesFilters = transform({ onecData }, (data) => [
			...new Set(
				flattenClassifierGroups(data.onecData.classifierGroups).map(
					(cg) => slugify(cg.name),
				),
			),
		]);

		const { data: existingCategories } = useQueryGraphStep({
			entity: "product_category",
			fields: ["id", "handle", "metadata"],
			filters: {
				$or: [
					{ metadata: { onec_id: externalCatgoriesIdsFilters } },
					{ handle: categoryHandlesFilters },
				],
			},
		}).config({ name: "existing-categories" });

		const processedCategories = processCategoriesRecursivelyStep({
			classifierGroups: onecData.classifierGroups,
			existingCategories,
		});

		const { productsToCreate, productsToUpdate } = transform(
			{
				processedCategories,
				existingProducts,
				shippingProfiles,
				stores,
				onecData,
			},
			(data: {
				processedCategories: ProductCategoryDTO[];
				existingProducts: ProductDTO[];
				shippingProfiles: ShippingProfileDTO[];
				stores: { default_sales_channel_id: string }[];
				onecData: OnecData;
			}) => {
				const productsToCreate: CreateProductWorkflowInputDTO[] = [];
				const productsToUpdate: UpdateProductWorkflowInputDTO[] = [];

				const defaultOptions = [
					{ title: "Default", values: ["Default"] },
				];
				const parsedOptions = parseDictionaryOptions(
					data.onecData.properties,
					data.onecData.settings?.attributes,
				);

				data.onecData.products.forEach((onecProduct) => {
					const [defaultAttributes, variantOptions, metadata] =
						parseProductOptions(
							onecProduct,
							data.onecData.properties,
							data.onecData.settings?.attributes,
						);

					const category_ids = data.processedCategories
						.filter(
							(cat) =>
								cat.metadata?.onec_id === onecProduct.groupId,
						)
						.map((cat) => cat.id);

					const productPayload = {
						title: onecProduct.name,
						category_ids,
						description: onecProduct.description,
						handle: slugify(onecProduct.name),
						external_id: onecProduct.id,
						variants: [],
						metadata,
						options:
							parsedOptions.length > 0
								? parsedOptions
								: defaultOptions,
						...defaultAttributes,
					};

					const existingProduct = data.existingProducts.find(
						(p) => p.external_id === productPayload.external_id,
					);

					if (existingProduct) {
						const existingVariant = existingProduct.variants?.[0];
						const updatePayload = {
							...productPayload,
							id: existingProduct.id,
							variants: existingVariant
								? [
										{
											id: existingVariant.id,
											title: "Default variant",
											barcode: onecProduct.barcode,
											sku: onecProduct.article,
											options: _.isEmpty(variantOptions)
												? { Default: "Default" }
												: variantOptions,
										},
									]
								: [],
						};
						productsToUpdate.push(
							updatePayload as UpdateProductWorkflowInputDTO,
						);
					} else {
						const createPayload = {
							...productPayload,
							variants: [
								{
									title: "Default variant",
									barcode: onecProduct.barcode,
									sku: onecProduct.article,
									options: _.isEmpty(variantOptions)
										? { Default: "Default" }
										: variantOptions,
								},
							],
						};
						productsToCreate.push(
							createPayload as CreateProductWorkflowInputDTO,
						);
					}
				});

				return { productsToCreate, productsToUpdate };
			},
		);

		createProductsWorkflow.runAsStep({
			input: { products: productsToCreate },
		});
		updateProductsWorkflow.runAsStep({
			input: { products: productsToUpdate },
		});

		return new WorkflowResponse({ input });
	},
);
