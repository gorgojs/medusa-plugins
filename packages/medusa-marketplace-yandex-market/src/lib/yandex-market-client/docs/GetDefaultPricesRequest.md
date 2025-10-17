# GetDefaultPricesRequest

Запрос списка цен.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Идентификаторы товаров, информация о которых нужна.  | [optional] [default to undefined]
**archived** | **boolean** | Находится ли товар в архиве. | [optional] [default to undefined]

## Example

```typescript
import { GetDefaultPricesRequest } from './api';

const instance: GetDefaultPricesRequest = {
    offerIds,
    archived,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
