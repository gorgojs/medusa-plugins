# OfferPriceResponseDTO

Информация об установленной цене на товар.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор предложения из прайс-листа. | [optional] [default to undefined]
**price** | [**PriceDTO**](PriceDTO.md) |  | [optional] [default to undefined]
**marketSku** | **number** | Идентификатор карточки товара на Маркете. | [optional] [default to undefined]
**updatedAt** | **string** | Дата и время последнего обновления цены на товар. | [optional] [default to undefined]

## Example

```typescript
import { OfferPriceResponseDTO } from './api';

const instance: OfferPriceResponseDTO = {
    id,
    price,
    marketSku,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
