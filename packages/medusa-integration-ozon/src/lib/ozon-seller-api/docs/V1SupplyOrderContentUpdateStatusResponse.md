# V1SupplyOrderContentUpdateStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;V1SupplyOrderContentUpdateStatusResponseErrorEnum&gt;**](V1SupplyOrderContentUpdateStatusResponseErrorEnum.md) | Список ошибок при редактировании товарного состава: - &#x60;INVALID_DRAFT_BUNDLE_ID&#x60;, &#x60;SOME_SERVICE_ERROR&#x60; — ошибка при редактировании поставки. - &#x60;HAS_UTD&#x60; — документы в системе ЭДО не удалены. Аннулируйте документы в системе ЭДО. Когда отредактируете состав, сформируйте и подпишите новые документы. - &#x60;ORDER_SKU_LIMIT&#x60; — количество товаров в поставке должно быть меньше или равно 5000. - &#x60;SAME_SKU&#x60; — товарный состав поставки остался прежним. - &#x60;SUPPLY_LOCKED&#x60; — обновление товарного состава в процессе, попробуйте позже. - &#x60;INBOUND_NO_CAPACITY&#x60; — на складе недостаточно места для поставки. - &#x60;INBOUND_LOCK&#x60;, &#x60;ORDER_LOCKED&#x60; — нельзя редактировать товарный состав. - &#x60;SUPPLY_CONTENT_NOT_VALID&#x60; — в составе поставки есть товары, которые склад не может принять. Провалидируйте товарный состав методом [/v1/supply-order/content/update/validation](#operation/SupplyOrderContentUpdateValidation). - &#x60;SUPPLY_BELONG_TO_ANOTHER_CONTRACTOR&#x60; — заявка на поставку не принадлежит вашему юридическому лицу. - &#x60;SUPPLY_BELONG_TO_ANOTHER_COMPANY&#x60; — заявка на поставку не принадлежит вашему кабинету. - &#x60;INCORRECT_SUPPLY_STATE&#x60; — нельзя изменить поставку в этом статусе. - &#x60;INCORRECT_SUPPLY_SOURCE&#x60; — нельзя изменить поставку с этим источником данных. - &#x60;INCORRECT_STORAGE_WAREHOUSE&#x60; — нельзя изменить поставку с этим складом хранения. - &#x60;NO_SUPPLY_PRODUCT_BUNDLE_ID&#x60; — отсутствует идентификатор товарного состава поставки. - &#x60;INVALID_VOLUME&#x60; — некорректный объём поставки. - &#x60;SUPPLY_IS_VIRTUAL&#x60; — нельзя редактировать виртуальную поставку. - &#x60;DEADLINE&#x60; — нельзя изменить поставку за час до таймслота. - &#x60;INACTIVE_CONTRACT&#x60; — нельзя редактировать состав поставки с истекшим договором. - &#x60;QUANTITY_OUT_OF_RANGE_BOTTOM&#x60; — количество экземпляров каждого товара должно быть больше 0. - &#x60;QUANTITY_OUT_OF_RANGE_UPPER&#x60; — количество экземпляров каждого товара должно быть меньше или равно 1 000 000. - &#x60;EMPTY_CONTENT&#x60; — не сможем принять пустую поставку, добавьте товары.  | [optional] [default to undefined]
**new_bundle_id** | **string** | Идентификатор нового товарного состава поставки. | [optional] [default to undefined]
**status** | [**SupplyOrderContentUpdateStatusResponseStatusEnum**](SupplyOrderContentUpdateStatusResponseStatusEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1SupplyOrderContentUpdateStatusResponse } from './api';

const instance: V1SupplyOrderContentUpdateStatusResponse = {
    errors,
    new_bundle_id,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
