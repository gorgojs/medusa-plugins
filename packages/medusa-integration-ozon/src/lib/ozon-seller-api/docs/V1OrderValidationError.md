# V1OrderValidationError

Информация об ошибке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_errors** | [**Array&lt;V1OrderValidationErrorErrorType&gt;**](V1OrderValidationErrorErrorType.md) | Тип ошибки:  - &#x60;ERROR_TYPE_UNSPECIFIED&#x60; — не определён;  - &#x60;DELIVERY_DRIVER_NAME_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина ФИО водителя;  - &#x60;DELIVERY_VEHICLE_GENRE_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина типа автомобиля;  - &#x60;DELIVERY_VEHICLE_REGISTRATION_PLATE_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина номера автомобиля;  - &#x60;DELIVERY_TPL_NAME_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина названия стороннего перевозчика;  - &#x60;DELIVERY_TRACKING_NUMBER_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина трек-номера отслеживания;  - &#x60;DELIVERY_DRIVER_NAME_EMPTY&#x60; — ФИО водителя не указано;  - &#x60;DELIVERY_VEHICLE_GENRE_EMPTY&#x60; — тип автомобиля не указан;  - &#x60;DELIVERY_VEHICLE_REGISTRATION_PLATE_EMPTY&#x60; — номер автомобиля не указан;  - &#x60;DELIVERY_TPL_NAME_EMPTY&#x60; — название стороннего перевозчика не указано;  - &#x60;DELIVERY_TRACKING_NUMBER_EMPTY&#x60; — трек-номер не указан;  - &#x60;SUPPLY_TYPE_NOT_SUPPORTED&#x60; — тип поставки не поддерживается;  - &#x60;INVALID_BUSINESS_FLOW&#x60; — неверный бизнес-поток;  - &#x60;ORDER_LOCKED&#x60; — нельзя редактировать товарный состав;  - &#x60;INVALID_TIMESLOT&#x60; — таймслот не указан или указан неверно;  - &#x60;DROP_OFF_DETAILS_EMPTY&#x60; — детали drop-off пункта не указаны;  - &#x60;PICK_UP_ADDRESS_IS_EMPTY&#x60; — детали адреса точки забора не указаны;  - &#x60;PICK_UP_SENDER_NAME_IS_EMPTY&#x60; — ФИО отправителя не указано;  - &#x60;PICK_UP_SENDER_PHONE_IS_EMPTY&#x60; — номер телефона отправителя не указан;  - &#x60;PICK_UP_ADDRESS_IS_TOO_LARGE&#x60; — превышена длина адреса точки забора;  - &#x60;PICK_UP_SENDER_NAME_IS_TOO_LARGE&#x60; — превышена длина ФИО отправителя;  - &#x60;PICK_UP_SENDER_PHONE_IS_TOO_LARGE&#x60; — превышена длина номера телефона отправителя;  - &#x60;PICK_UP_COMMENT_IS_TOO_LARGE&#x60; — превышена длина комментария к поставке;  - &#x60;PICK_UP_DETAILS_EMPTY&#x60; — детали точки забора не указаны;  - &#x60;DROP_OFF_ADDRESS_NOT_SET&#x60; — не указан адрес drop-off пункта;  - &#x60;INVALID_STATE&#x60; — неверное состояние.  | [optional] [default to undefined]

## Example

```typescript
import { V1OrderValidationError } from './api';

const instance: V1OrderValidationError = {
    order_errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
