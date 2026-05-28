# V1ProductPricesDetailsResponsePrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_price** | [**MoneyMoneyCustomerPrice**](MoneyMoneyCustomerPrice.md) |  | [optional] [default to undefined]
**discount_percent** | **number** | Процент скидки за счёт Ozon. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**price** | [**MoneyMoney**](MoneyMoney.md) |  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { V1ProductPricesDetailsResponsePrice } from './api';

const instance: V1ProductPricesDetailsResponsePrice = {
    customer_price,
    discount_percent,
    offer_id,
    price,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
