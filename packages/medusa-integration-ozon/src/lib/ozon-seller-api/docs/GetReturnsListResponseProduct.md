# GetReturnsListResponseProduct

Информация о товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**price** | [**SellerReturnsv1MoneyProduct**](SellerReturnsv1MoneyProduct.md) |  | [optional] [default to undefined]
**price_without_commission** | [**SellerReturnsv1MoneyWithoutCommission**](SellerReturnsv1MoneyWithoutCommission.md) |  | [optional] [default to undefined]
**commission_percent** | **number** | Процент комиссии. | [optional] [default to undefined]
**commission** | [**SellerReturnsv1MoneyCommission**](SellerReturnsv1MoneyCommission.md) |  | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]

## Example

```typescript
import { GetReturnsListResponseProduct } from './api';

const instance: GetReturnsListResponseProduct = {
    sku,
    offer_id,
    name,
    price,
    price_without_commission,
    commission_percent,
    commission,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
