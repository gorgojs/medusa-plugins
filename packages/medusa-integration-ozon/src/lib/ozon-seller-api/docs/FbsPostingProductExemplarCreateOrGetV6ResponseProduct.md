# FbsPostingProductExemplarCreateOrGetV6ResponseProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplars** | [**Array&lt;ProductExemplar&gt;**](ProductExemplar.md) | Информация об экземплярах. | [optional] [default to undefined]
**has_imei** | **boolean** | Признак наличия IMEI.  Если IMEI есть — &#x60;true&#x60;.  | [optional] [default to undefined]
**is_gtd_needed** | **boolean** | Признак того, что необходимо передать номер грузовой таможенной декларации (ГТД) для продукта и отправления. | [optional] [default to undefined]
**is_jw_uin_needed** | **boolean** | Признак того, что необходимо передать уникальный идентификационный номер ювелирного изделия (УИН). | [optional] [default to undefined]
**is_mandatory_mark_needed** | **boolean** | Признак того, что необходимо передать маркировку «Честный ЗНАК». | [optional] [default to undefined]
**is_mandatory_mark_possible** | **boolean** | Признак того, что возможно заполнить маркировку «Честный ЗНАК». | [optional] [default to undefined]
**is_rnpt_needed** | **boolean** | Признак того, что необходимо передать номер партии товара (РНПТ). | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**quantity** | **number** | Количество экземпляров. | [optional] [default to undefined]
**is_weight_needed** | **boolean** | &#x60;true&#x60;, если товар весовой.  | [optional] [default to undefined]
**weight_max** | **number** | Максимальный вес экземпляра. | [optional] [default to undefined]
**weight_min** | **number** | Минимальный вес экземпляра. | [optional] [default to undefined]

## Example

```typescript
import { FbsPostingProductExemplarCreateOrGetV6ResponseProduct } from './api';

const instance: FbsPostingProductExemplarCreateOrGetV6ResponseProduct = {
    exemplars,
    has_imei,
    is_gtd_needed,
    is_jw_uin_needed,
    is_mandatory_mark_needed,
    is_mandatory_mark_possible,
    is_rnpt_needed,
    product_id,
    quantity,
    is_weight_needed,
    weight_max,
    weight_min,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
