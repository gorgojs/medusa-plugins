# UpdateWarehouseStatusRequest

Запрос на изменение статуса склада.  Позволяет выключить склад или включить ранее отключенный вами склад.  Если склад был отключен Маркетом, то включить его вручную с помощью этого метода не получится. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Статус склада:  * &#x60;true&#x60; — включен. * &#x60;false&#x60; — отключен.  | [default to undefined]

## Example

```typescript
import { UpdateWarehouseStatusRequest } from './api';

const instance: UpdateWarehouseStatusRequest = {
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
