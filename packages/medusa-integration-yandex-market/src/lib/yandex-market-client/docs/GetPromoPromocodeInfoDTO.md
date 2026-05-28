# GetPromoPromocodeInfoDTO

Информация для типа `MARKET_PROMOCODE`.  Параметр заполняется только для этого типа акции. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promocode** | **string** | Промокод. | [default to undefined]
**discount** | **number** | Процент скидки по промокоду. | [default to undefined]

## Example

```typescript
import { GetPromoPromocodeInfoDTO } from './api';

const instance: GetPromoPromocodeInfoDTO = {
    promocode,
    discount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
