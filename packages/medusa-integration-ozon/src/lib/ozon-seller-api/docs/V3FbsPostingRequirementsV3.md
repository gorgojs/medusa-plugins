# V3FbsPostingRequirementsV3

Cписок продуктов, для которых нужно передать страну-изготовителя, номер грузовой таможенной декларации (ГТД), регистрационный номер партии товара (РНПТ), маркировку «Честный ЗНАК», другие маркировки или вес, чтобы перевести отправление в следующий статус.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products_requiring_change_country** | **Array&lt;string&gt;** | Список идентификаторов товаров (SKU), для которых нужно изменить страну-изготовитель. Чтобы изменить страну-изготовитель, используйте методы [/v2/posting/fbs/product/country/list](#operation/PostingAPI_ListCountryProductFbsPostingV2) и [/v2/posting/fbs/product/country/set](#operation/PostingAPI_SetCountryProductFbsPostingV2). | [optional] [default to undefined]
**products_requiring_gtd** | **Array&lt;string&gt;** | Список идентификаторов товаров (SKU), для которых нужно передать номера таможенной декларации (ГТД).  До сборки отправления передайте для всех перечисленных товаров номер таможенной декларации или информацию о том,  что номера нет, методом [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).  | [optional] [default to undefined]
**products_requiring_country** | **Array&lt;string&gt;** | Список идентификаторов товаров (SKU), для которых нужно передать информацию о стране-изготовителе.  Для сборки отправления передайте информацию о стране-изготовителе для всех перечисленных товаров с помощью метода [/v2/posting/fbs/product/country/set](#operation/PostingAPI_SetCountryProductFbsPostingV2).  | [optional] [default to undefined]
**products_requiring_mandatory_mark** | **Array&lt;string&gt;** | Список идентификаторов товаров (SKU), для которых нужно передать маркировку «Честный ЗНАК».  До сборки отправления передайте для всех перечисленных товаров маркировку «Честный ЗНАК» методом [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).  | [optional] [default to undefined]
**products_requiring_jw_uin** | **Array&lt;string&gt;** | Список товаров, для которых нужно передать уникальный идентификационный номер (УИН) ювелирного изделия.  До сборки отправления передайте для всех перечисленных товаров уникальный идентификационный номер (УИН) методом [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).  | [optional] [default to undefined]
**products_requiring_rnpt** | **Array&lt;string&gt;** | Список идентификаторов товаров (SKU), для которых нужно передать регистрационный номер партии товара (РНПТ).  До сборки отправления передайте для всех перечисленных товаров регистрационный номер партии товара (РНПТ) методом [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).  | [optional] [default to undefined]
**products_requiring_weight** | **Array&lt;string&gt;** | Список товаров, для которых нужно передать вес. | [optional] [default to undefined]
**products_requiring_imei** | **Array&lt;string&gt;** | Список идентификаторов товаров, для которых нужно передать IMEI. | [optional] [default to undefined]

## Example

```typescript
import { V3FbsPostingRequirementsV3 } from './api';

const instance: V3FbsPostingRequirementsV3 = {
    products_requiring_change_country,
    products_requiring_gtd,
    products_requiring_country,
    products_requiring_mandatory_mark,
    products_requiring_jw_uin,
    products_requiring_rnpt,
    products_requiring_weight,
    products_requiring_imei,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
