# ItemsValidationRejectedItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasons** | [**Array&lt;RejectedItemsReasonEnum&gt;**](RejectedItemsReasonEnum.md) | Причины отклонения:  - &#x60;UNSPECIFIED&#x60; — не определена;  - &#x60;OUT_OF_ASSORTMENT&#x60; — товар не входит в ассортимент;  - &#x60;INVALID&#x60; — недействительный товар;  - &#x60;INCOMPATIBLE_WAREHOUSE&#x60; — товар нельзя разместить на выбранном складе;  - &#x60;EMPTY_BARCODE&#x60; — нет штрихкода;  - &#x60;EMPTY_PS_ATTRIBUTE&#x60; — нет обязательного атрибута товара;  - &#x60;MULTIPLICITY&#x60; — количество товара в поставке не кратно продаваемым партиям;  - &#x60;NO_PRICE&#x60; — нет цены;  - &#x60;INVALID_ITEM_COUNT_MAX&#x60; — количество товара больше максимального;  - &#x60;INVALID_ITEM_COUNT_ZERO&#x60; — количество товара равно нулю;  - &#x60;SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS&#x60; — товар отклонён из-за ограничений на приёмку;  - &#x60;SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар с меткой &#x60;is_ettn_required&#x60; не разрешён;  - &#x60;SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар без метки &#x60;is_ettn_required&#x60; не разрешён;  - &#x60;SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED&#x60; — товар с тегом отслеживаемости не разрешён;  - &#x60;SKU_IS_RESTRICTED&#x60; — товар ограничен к приёмке;  - &#x60;EMPTY_CLUSTER&#x60; — нет кластера;  - &#x60;SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар с обязательным тегом UTD не разрешён;  - &#x60;CORRUPTED_ASSORTMENT&#x60; — не получилось добавить товар в заявку;  - &#x60;STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN&#x60; — у товара для хранения в Беларуси нет кода ТН ВЭД;  - &#x60;STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN&#x60;— у товара для хранения в Беларуси нет кода ТН ВЭД продавца;  - &#x60;TRACEABLE_SKU_HAS_NO_GTIN_BARCODE&#x60; — у товара нет штрихкода GTIN;  - &#x60;TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY&#x60; — у товара нет указанного количества в единицах;  - &#x60;SKU_HAS_INVALID_HS_CODE&#x60; — у товара некорректный HS-код;  - &#x60;SKU_HAS_STORAGE_COUNTRY_RESTRICTIONS&#x60; — у товара есть ограничения по стране хранения;  - &#x60;UNDEFINED&#x60; — неизвестная ошибка.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { ItemsValidationRejectedItems } from './api';

const instance: ItemsValidationRejectedItems = {
    reasons,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
