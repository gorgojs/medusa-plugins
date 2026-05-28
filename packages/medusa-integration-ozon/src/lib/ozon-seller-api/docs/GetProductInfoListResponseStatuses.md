# GetProductInfoListResponseStatuses

Информация о статусах товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_created** | **boolean** | &#x60;true&#x60;, если товар создан корректно.  | [optional] [default to undefined]
**moderate_status** | **string** | Статус модерации. | [optional] [default to undefined]
**status** | **string** | Статус товара. | [optional] [default to undefined]
**status_description** | **string** | Описание статуса товара. | [optional] [default to undefined]
**status_failed** | **string** | Статус товара, в котором возникла ошибка. | [optional] [default to undefined]
**status_name** | **string** | Название статуса товара. | [optional] [default to undefined]
**status_tooltip** | **string** | Описание статуса. | [optional] [default to undefined]
**status_updated_at** | **string** | Время последнего изменения статуса. | [optional] [default to undefined]
**validation_status** | **string** | Статус валидации. | [optional] [default to undefined]

## Example

```typescript
import { GetProductInfoListResponseStatuses } from './api';

const instance: GetProductInfoListResponseStatuses = {
    is_created,
    moderate_status,
    status,
    status_description,
    status_failed,
    status_name,
    status_tooltip,
    status_updated_at,
    validation_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
