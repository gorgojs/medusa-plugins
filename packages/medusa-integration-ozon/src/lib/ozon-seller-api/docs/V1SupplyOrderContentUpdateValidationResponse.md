# V1SupplyOrderContentUpdateValidationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editing_errors** | [**Array&lt;SupplyOrderContentUpdateValidationResponseEditingErrorEnum&gt;**](SupplyOrderContentUpdateValidationResponseEditingErrorEnum.md) | Ошибки:  - &#x60;UNSPECIFIED&#x60; — не определено.  - &#x60;UNKNOWN&#x60; — неизвестный тип.  - &#x60;INCORRECT_SUPPLY_STATE&#x60; — нельзя изменить поставку в этом статусе.  - &#x60;DEADLINE&#x60; — нельзя изменить поставку за час до таймслота.  - &#x60;UTD_IS_UPLOADED&#x60; — документы в системе ЭДО не удалены. Аннулируйте документы в системе ЭДО. Когда отредактируете состав, сформируйте и подпишите новые документы.  - &#x60;STORAGE_WAREHOUSE_IS_NOT_WMS&#x60; — нельзя редактировать товарный состав.  - &#x60;CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS&#x60; — в этом личном кабинете нельзя изменить поставку.  - &#x60;SUPPLY_IS_VIRTUAL&#x60; — нельзя редактировать виртуальную поставку.  - &#x60;SUPPLY_DOES_NOT_BELONG_TO_COMPANY&#x60; — заявка на поставку не принадлежит вашему кабинету.  - &#x60;ASSORTMENT_REJECTION_REASON_CORRUPTED_ASSORTMENT&#x60; — не получилось добавить товар в заявку. Попробуйте ещё раз.  - &#x60;ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_ANY_FEACN&#x60;, &#x60;ASSORTMENT_REJECTION_REASON_STORAGE_BELARUS_SKU_HAS_NO_SELLER_FEACN&#x60; — у товара нет кода ТН ВЭД ЕАЭС.   - &#x60;ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_GTIN_BARCODE&#x60; — у товара нет штрихкода GTIN.  - &#x60;ASSORTMENT_REJECTION_REASON_TRACEABLE_SKU_HAS_NO_MEASUREMENT_UNIT_QUANTITY&#x60; — не указано количество товара в унифицированных единицах измерения.  | [optional] [default to undefined]
**validated_assortment** | [**SupplyOrderContentUpdateValidationResponseValidatedAssortment**](SupplyOrderContentUpdateValidationResponseValidatedAssortment.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1SupplyOrderContentUpdateValidationResponse } from './api';

const instance: V1SupplyOrderContentUpdateValidationResponse = {
    editing_errors,
    validated_assortment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
