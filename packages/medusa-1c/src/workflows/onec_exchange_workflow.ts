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
import {
  CreateProductVariantWorkflowInputDTO,
  ProductDTO,
  ShippingProfileDTO,
} from "@medusajs/types";
import _ from "lodash";
import slugify from "sluga";
import { flattenClassifierGroups } from "../utils/product-utils";
import {
  ImportOutput,
  OnecExchangeWorkflowInput,
  OffersOutput,
} from "../types";
import { processCategoriesRecursivelyStep } from "../steps/process-categories";
import { parseImportFilesStep } from "../steps/parse-import-files";
import { parseOffersFilesStep } from "../steps/parse-offers-files";

export const onecExchangeWorkflow = createWorkflow(
  "sync-from-erp",
  (input: OnecExchangeWorkflowInput) => {
    const importData = parseImportFilesStep(input.import);
    const offersData = parseOffersFilesStep(input.offers);

    const { data: stores } = useQueryGraphStep({
      entity: "store",
      fields: ["default_sales_channel_id", "default_currency_code"],
    }).config({ name: "stores" });

    const { data: shippingProfiles } = useQueryGraphStep({
      entity: "shipping_profile",
      fields: ["id"],
      pagination: { skip: 0, take: 1 },
    }).config({ name: "shipping-profile" });

    const externalIdsFilters = transform({ onecData: importData }, (data) =>
      data.onecData.products.map((product) => `${product.id}`)
    );

    const { data: existingProducts } = useQueryGraphStep({
      entity: "product",
      fields: ["id", "external_id", "variants.*"],
      filters: { external_id: externalIdsFilters },
    }).config({ name: "existing-products" });

    const externalCatgoriesIdsFilters = transform(
      { onecData: importData },
      (data) =>
        flattenClassifierGroups(data.onecData.classifierGroups).map(
          (cg) => cg.id
        )
    );

    const categoryHandlesFilters = transform(
      { onecData: importData },
      (data) => [
        ...new Set(
          flattenClassifierGroups(data.onecData.classifierGroups).map((cg) =>
            slugify(cg.name)
          )
        ),
      ]
    );

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
      classifierGroups: importData.classifierGroups,
      existingCategories,
    });

    const { productsToCreate, productsToUpdate } = transform(
      {
        processedCategories,
        existingProducts,
        shippingProfiles,
        stores,
        importData,
        offersData,
      },
      (data: {
        processedCategories: ProductCategoryDTO[];
        existingProducts: ProductDTO[];
        shippingProfiles: ShippingProfileDTO[];
        stores: {
          default_sales_channel_id: string;
          default_currency_code: string;
        }[];
        importData: ImportOutput;
        offersData: OffersOutput;
      }) => {
        const productsToCreate: CreateProductWorkflowInputDTO[] = [];
        const productsToUpdate: UpdateProductWorkflowInputDTO[] = [];

        const defaultOptions = [
          {
            title: "Default option",
            values: ["Default option value"],
          },
        ];

        const defaultSalesChannelId =
          data.stores[0]?.default_sales_channel_id || "";
        const defaultCurrencyCode =
          data.stores[0]?.default_currency_code || "rub";

        data.importData.products.forEach((onecProduct) => {
          const variants: CreateProductVariantWorkflowInputDTO[] = [];

          const category_ids = data.processedCategories
            .filter((cat) => cat.metadata?.onec_id === onecProduct.groupId)
            .map((cat) => cat.id);

          const productPayload:
            | CreateProductWorkflowInputDTO
            | UpdateProductWorkflowInputDTO = {
            title: onecProduct.name,
            category_ids,
            description: onecProduct.description,
            handle: slugify(onecProduct.name),
            external_id: onecProduct.id,
            options: defaultOptions,
            variants: variants,
            sales_channels: [{ id: defaultSalesChannelId }],
          };

          const existingProduct = data.existingProducts.find(
            (p) => p.external_id === productPayload.external_id
          );

          if (existingProduct) {
            productsToUpdate.push({
              ...productPayload,
              id: existingProduct.id,
            } as UpdateProductWorkflowInputDTO);
          } else {
            productsToCreate.push(
              productPayload as CreateProductWorkflowInputDTO
            );
          }
        });

        return { productsToCreate, productsToUpdate };
      }
    );

    createProductsWorkflow.runAsStep({
      input: { products: productsToCreate },
    });
    updateProductsWorkflow.runAsStep({
      input: { products: productsToUpdate },
    });

    return new WorkflowResponse({ input });
  }
);
