# ShipmentStatusChangeDTO

Статус отгрузки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ShipmentStatusType**](ShipmentStatusType.md) |  | [optional] [default to undefined]
**description** | **string** | Описание статуса отгрузки. | [optional] [default to undefined]
**updateTime** | **string** | Время последнего изменения статуса отгрузки.  Формат даты: ISO 8601 со смещением относительно UTC.  | [optional] [default to undefined]

## Example

```typescript
import { ShipmentStatusChangeDTO } from './api';

const instance: ShipmentStatusChangeDTO = {
    status,
    description,
    updateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
