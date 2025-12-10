# GetPriceDTO

Цена с указанием времени последнего обновления.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **number** | Цена товара. | [default to undefined]
**currencyId** | [**CurrencyType**](CurrencyType.md) |  | [default to undefined]
**updatedAt** | **string** | Время последнего обновления. | [default to undefined]

## Example

```typescript
import { GetPriceDTO } from './api';

const instance: GetPriceDTO = {
    value,
    currencyId,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
