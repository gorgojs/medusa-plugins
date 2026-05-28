# V1OrderDraftValidationError

Информация об ошибке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;V1OrderDraftValidationErrorErrorType&gt;**](V1OrderDraftValidationErrorErrorType.md) | Тип ошибки:  - &#x60;ERROR_TYPE_UNSPECIFIED&#x60; — не определён;  - &#x60;ORDER_DRAFT_LOCKED&#x60; — черновик заблокирован;  - &#x60;DELIVERY_DRIVER_NAME_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина имени водителя;  - &#x60;DELIVERY_VEHICLE_GENRE_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина типа автомобиля;  - &#x60;DELIVERY_VEHICLE_REGISTRATION_PLATE_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина номера автомобиля;  - &#x60;DELIVERY_TPL_NAME_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина имени стороннего перевозчика;  - &#x60;DELIVERY_TRACKING_NUMBER_LENGTH_MAXIMUM_REACHED&#x60; — превышена длина номера отслеживания;  - &#x60;DELIVERY_DRIVER_NAME_EMPTY&#x60; — ФИО водителя не указано;  - &#x60;DELIVERY_VEHICLE_GENRE_EMPTY&#x60; — тип автомобиля не указан;  - &#x60;DELIVERY_VEHICLE_REGISTRATION_PLATE_EMPTY&#x60; — номер автомобиля не указан;  - &#x60;DELIVERY_TPL_NAME_EMPTY&#x60; — название стороннего перевозчика не указано;  - &#x60;DELIVERY_TRACKING_NUMBER_EMPTY&#x60; — трек-номер не указан;  - &#x60;INVALID_BUSINESS_FLOW&#x60; — неверный бизнес-поток;  - &#x60;SUPPLY_TYPE_NOT_SUPPORTED&#x60; — тип поставки не поддерживается;  - &#x60;INVALID_STATE&#x60; — неверное состояние.  | [optional] [default to undefined]

## Example

```typescript
import { V1OrderDraftValidationError } from './api';

const instance: V1OrderDraftValidationError = {
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
