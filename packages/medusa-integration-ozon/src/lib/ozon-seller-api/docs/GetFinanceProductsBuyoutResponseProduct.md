# GetFinanceProductsBuyoutResponseProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Сумма к начислению. | [optional] [default to undefined]
**buyout_price** | **number** | Цена выкупа товара с НДС. | [optional] [default to undefined]
**deduction_by_category_percent** | **number** | Скидка по категории в процентах. | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**seller_price_per_instance** | **number** | Цена продавца с учётом скидки. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**vat_percent** | **number** | Ставка НДС для товара в процентах. | [optional] [default to undefined]

## Example

```typescript
import { GetFinanceProductsBuyoutResponseProduct } from './api';

const instance: GetFinanceProductsBuyoutResponseProduct = {
    amount,
    buyout_price,
    deduction_by_category_percent,
    name,
    offer_id,
    posting_number,
    quantity,
    seller_price_per_instance,
    sku,
    vat_percent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
