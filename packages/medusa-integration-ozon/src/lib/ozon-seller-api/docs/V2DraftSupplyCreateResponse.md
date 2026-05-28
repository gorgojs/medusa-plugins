# V2DraftSupplyCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draft_id** | **number** | Идентификатор черновика. | [optional] [default to undefined]
**error_reasons** | [**Array&lt;V2DraftSupplyCreateResponseErrorReasonEnum&gt;**](V2DraftSupplyCreateResponseErrorReasonEnum.md) | Причина ошибки:  - &#x60;UNSPECIFIED&#x60; — не определена;  - &#x60;SOME_SERVICE_ERROR&#x60; — ошибка при редактировании поставки;  - &#x60;ORDER_SKU_LIMIT&#x60; — количество товаров в поставке больше 5000;  - &#x60;INVALID_QUANTITY_OR_QUANT&#x60; —  некорректное количество товара или грузомест;  - &#x60;ORDER_ALREADY_CREATED&#x60; — заказ уже создан;  - &#x60;ORDER_CREATION_IN_PROGRESS&#x60; — создание заказа в процессе;  - &#x60;DRAFT_DOES_NOT_EXIST&#x60; — черновик не существует;  - &#x60;CONTRACTOR_CAN_NOT_CREATE_ORDER&#x60; — контрагент не может создать заказ;  - &#x60;INACTIVE_CONTRACT&#x60; — нельзя редактировать состав поставки с неактивным договором;  - &#x60;DRAFT_INCORRECT_STATE&#x60; — некорректный статус черновика;  - &#x60;INVALID_VOLUME&#x60; — некорректный объём поставки;  - &#x60;INVALID_ROUTE&#x60; — некорректный маршрут;  - &#x60;INVALID_STORAGE_WAREHOUSE&#x60; — некорректный склад хранения;  - &#x60;INVALID_STORAGE_REGION&#x60; — некорректный регион хранения;  - &#x60;INVALID_SPLITTING&#x60; — некорректное разделение;  - &#x60;INVALID_SUPPLY_CONTENT&#x60; — некорректное содержимое поставки;  - &#x60;TIMESLOT_NOT_AVAILABLE&#x60; — нет доступных таймслотов;  - &#x60;SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE&#x60; — требуется распределение SKU, но оно невозможно;  - &#x60;XDOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER&#x60; — поставка кросс-докингом через пункт выдачи заказов недоступна для продавца;  - &#x60;DRAFT_IS_LOCKED&#x60; — черновик заблокирован;  - &#x60;INVALID_PACKAGE_UNITS_COUNTS&#x60; — некорректное количество грузомест;  - &#x60;SELLER_CONVERSATION_DOES_NOT_EXIST&#x60; — точка отгрузки с таким &#x60;id&#x60; не существует;  - &#x60;USER_CAN_NOT_CREATE_SELLER_CONVERSATION&#x60; — пользователь не может создать диалог с продавцом;  - &#x60;SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED_FOR_DROP_OFF_POINT&#x60; — товар с меткой &#x60;is_ettn_required&#x60; не разрешён для точки отгрузки;  - &#x60;INVALID_SELLER_WAREHOUSE&#x60; — склад продавца недоступен;  - &#x60;PICKUP_ORDER_LIMIT_EXCEEDED&#x60; — превышен лимит заказов на самовывоз;  - &#x60;MINIMUM_VOLUME_IN_LITRES_INVALID&#x60; — некорректный минимальный объём в литрах;  - &#x60;INVALID_CLUSTERS_COUNT&#x60; — переданы не все кластеры из расчёта;  - &#x60;CAN_NOT_CREATE_ORDER&#x60; — не удалось создать заказ;  - &#x60;UNDEFINED&#x60; — неизвестная ошибка.  | [optional] [default to undefined]

## Example

```typescript
import { V2DraftSupplyCreateResponse } from './api';

const instance: V2DraftSupplyCreateResponse = {
    draft_id,
    error_reasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
