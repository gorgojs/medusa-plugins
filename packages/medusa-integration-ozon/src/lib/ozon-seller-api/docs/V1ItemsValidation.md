# V1ItemsValidation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasons** | **Array&lt;string&gt;** | Причина ошибки: - &#x60;ITEM_REJECTION_REASON_OUT_OF_ASSORTMENT&#x60; — товар не входит в ассортимент; - &#x60;ITEM_REJECTION_REASON_INVALID&#x60; — недействительный товар; - &#x60;ITEM_REJECTION_REASON_INCOMPATIBLE_WAREHOUSE&#x60; — товар нельзя разместить на выбранном складе; - &#x60;ITEM_REJECTION_REASON_EMPTY_BARCODE&#x60; — нет штрихкода; - &#x60;ITEM_REJECTION_REASON_EMPTY_PS_ATTRIBUTE&#x60; — нет обязательного атрибута товара; - &#x60;ITEM_REJECTION_REASON_MULTIPLICITY&#x60; — количество товара в поставке не кратно продаваемым партиям; - &#x60;ITEM_REJECTION_REASON_NO_PRICE&#x60; — нет цены; - &#x60;ITEM_REJECTION_REASON_INVALID_ITEM_COUNT_MAX&#x60; — количество товара больше максимального; - &#x60;ITEM_REJECTION_REASON_INVALID_ITEM_COUNT_ZERO&#x60; — количество товара равно нулю; - &#x60;ITEM_REJECTION_REASON_INCOMPATIBLE_SHIPMENT_TYPE&#x60; — тип отгрузки несовместим с товаром; - &#x60;ITEM_REJECTION_REASON_ECONOM_QUANT_IS_NOT_FROZEN&#x60; — количество товара в эконом упаковке не фиксировано; - &#x60;ITEM_REJECTION_REASON_QUANTITY_NOT_MULTIPLE_BY_QUANT&#x60; — количество товара не кратно упаковке; - &#x60;ITEM_REJECTION_REASON_INVALID_QUANT_VALUE&#x60; — некорректное значение количества товара в упаковке; - &#x60;ITEM_REJECTION_REASON_JEWELRY_FORBIDDEN_FOR_ECONOM&#x60; — ювелирные изделия запрещены для эконом отгрузки; - &#x60;ITEM_REJECTION_REASON_NON_UNIQUE_ECONOM_ITEM_IN_REQUEST&#x60; — дублирующийся товар в эконом отгрузке в запросе; - &#x60;ITEM_REJECTION_REASON_NON_UNIQUE_ECONOM_ITEM_IN_DESTINATION_BUNDLE&#x60; — дублирующийся товар в эконом отгрузке; - &#x60;ITEM_REJECTION_REASON_SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS&#x60; — товар отклонён из-за ограничений на приёмку; - &#x60;ITEM_REJECTION_REASON_SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар с меткой &#x60;is_ettn_required&#x60; не разрешён; - &#x60;ITEM_REJECTION_REASON_SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар без метки &#x60;is_ettn_required&#x60; не разрешён; - &#x60;ITEM_REJECTION_REASON_SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED&#x60; — товар с тегом отслеживаемости не разрешён; - &#x60;ITEM_REJECTION_REASON_SKU_IS_RESTRICTED&#x60; — товар ограничен к приёмке; - &#x60;ITEM_REJECTION_REASON_EMPTY_CLUSTER&#x60; — нет кластера; - &#x60;ITEM_REJECTION_REASON_SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар с обязательным тегом UTD не разрешён; - &#x60;ITEM_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN&#x60; — у товара для хранения в Беларуси нет кода ТН ВЭД; - &#x60;ITEM_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN&#x60; — у товара для хранения в Беларуси нет кода ТН ВЭД продавца; - &#x60;ITEM_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_GTIN_BARCODE&#x60; — у товара нет штрихкода GTIN; - &#x60;ITEM_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY&#x60; — у товара нет указанного количества в единицах.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { V1ItemsValidation } from './api';

const instance: V1ItemsValidation = {
    reasons,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
