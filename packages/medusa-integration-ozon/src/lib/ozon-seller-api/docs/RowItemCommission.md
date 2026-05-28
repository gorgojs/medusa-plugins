# RowItemCommission

Комиссия за доставку.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Сумма. | [optional] [default to undefined]
**bonus** | **number** | Баллы за скидки. | [optional] [default to undefined]
**commission** | **number** | Итоговая комиссия с учётом скидок и наценки.  &lt;aside class&#x3D;\&quot;warning\&quot;&gt; Для отчётов до 30 апреля 2024 года. &lt;/aside&gt;  | [optional] [default to undefined]
**compensation** | **number** | Доплата за счёт Ozon.  &lt;aside class&#x3D;\&quot;warning\&quot;&gt; Для отчётов до 30 апреля 2024 года. &lt;/aside&gt;  | [optional] [default to undefined]
**price_per_instance** | **number** | Цена за экземпляр. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**standard_fee** | **number** | Базовое вознаграждение Ozon. | [optional] [default to undefined]
**bank_coinvestment** | **number** | Выплаты по механикам лояльности партнёров: зелёные цены. | [optional] [default to undefined]
**stars** | **number** | Выплаты по механикам лояльности партнёров: звёзды. | [optional] [default to undefined]
**pick_up_point_coinvestment** | **number** | Выплаты по механикам лояльности партнёров: АПВЗ. | [optional] [default to undefined]
**total** | **number** | Итого к начислению. | [optional] [default to undefined]

## Example

```typescript
import { RowItemCommission } from './api';

const instance: RowItemCommission = {
    amount,
    bonus,
    commission,
    compensation,
    price_per_instance,
    quantity,
    standard_fee,
    bank_coinvestment,
    stars,
    pick_up_point_coinvestment,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
