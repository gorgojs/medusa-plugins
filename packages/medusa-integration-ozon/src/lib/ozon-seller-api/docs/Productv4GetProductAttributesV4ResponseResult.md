# Productv4GetProductAttributesV4ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Array&lt;ProductGetProductAttributesV4ResponseAttribute&gt;**](ProductGetProductAttributesV4ResponseAttribute.md) | Список характеристик товара. | [optional] [default to undefined]
**attributes_with_defaults** | **Array&lt;number&gt;** | Список идентификаторов характеристик со значением по умолчанию. | [optional] [default to undefined]
**barcode** | **string** | Штрихкод. | [optional] [default to undefined]
**barcodes** | **Array&lt;string&gt;** | Все штрихкоды товара. | [optional] [default to undefined]
**description_category_id** | **number** | Идентификатор категории. Используйте его с методами [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes) и [/v1/description-category/attribute/values](#operation/DescriptionCategoryAPI_GetAttributeValues).  | [optional] [default to undefined]
**color_image** | **string** | Маркетинговый цвет. | [optional] [default to undefined]
**complex_attributes** | [**Array&lt;GetProductAttributesV4ResponseAttribute&gt;**](GetProductAttributesV4ResponseAttribute.md) | Массив вложенных характеристик. | [optional] [default to undefined]
**depth** | **number** | Глубина. | [optional] [default to undefined]
**dimension_unit** | **string** | Единица измерения габаритов:   - &#x60;mm&#x60; — миллиметры,   - &#x60;cm&#x60; — сантиметры,   - &#x60;in&#x60; — дюймы.  | [optional] [default to undefined]
**height** | **number** | Высота упаковки. | [optional] [default to undefined]
**id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**images** | [**Array&lt;GetProductAttributesResponseImage&gt;**](GetProductAttributesResponseImage.md) | Массив ссылок на изображения товара. Порядок изображений аналогичен порядку в карточке товаров. | [optional] [default to undefined]
**model_info** | [**V4GetProductAttributesResponseModelInfo**](V4GetProductAttributesResponseModelInfo.md) |  | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**pdf_list** | [**Array&lt;V4GetProductAttributesResponsePdf&gt;**](V4GetProductAttributesResponsePdf.md) | Массив PDF-файлов. | [optional] [default to undefined]
**primary_image** | **string** | Ссылка на главное изображение товара. | [optional] [default to undefined]
**sku** | **string** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**type_id** | **number** | Идентификатор типа товара. | [optional] [default to undefined]
**weight** | **number** | Вес товара в упаковке. | [optional] [default to undefined]
**weight_unit** | **string** | Единица измерения веса. | [optional] [default to undefined]
**width** | **number** | Ширина упаковки. | [optional] [default to undefined]

## Example

```typescript
import { Productv4GetProductAttributesV4ResponseResult } from './api';

const instance: Productv4GetProductAttributesV4ResponseResult = {
    attributes,
    attributes_with_defaults,
    barcode,
    barcodes,
    description_category_id,
    color_image,
    complex_attributes,
    depth,
    dimension_unit,
    height,
    id,
    images,
    model_info,
    name,
    offer_id,
    pdf_list,
    primary_image,
    sku,
    type_id,
    weight,
    weight_unit,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
