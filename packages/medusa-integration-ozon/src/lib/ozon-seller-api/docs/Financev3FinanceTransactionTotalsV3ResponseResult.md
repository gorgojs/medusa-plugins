# Financev3FinanceTransactionTotalsV3ResponseResult

Результаты запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accruals_for_sale** | **number** | Общая стоимость товаров и возвратов в заданный период. | [optional] [default to undefined]
**compensation_amount** | **number** | Компенсации. | [optional] [default to undefined]
**money_transfer** | **number** | Начисления за доставку и возвраты при работе по схеме «Доставка по выбору продавца». | [optional] [default to undefined]
**others_amount** | **number** | Прочие начисления. | [optional] [default to undefined]
**processing_and_delivery** | **number** | Стоимость услуг обработки отправлений, сборки заказов, магистрали и последней мили, а также доставки до введения новых комиссий и тарифов с 1 февраля 2021 года.  Магистраль — доставка товаров между кластерами.  Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.  | [optional] [default to undefined]
**refunds_and_cancellations** | **number** | Стоимость обратной магистрали, обработки возвратов, отмен и невыкупа товара, а также возвратов до введения новых комиссий и тарифов с 1 февраля 2021 года.  Магистраль — доставка товаров между кластерами.  Последняя миля — доставка товаров покупателю в пункт выдачи заказов, постамат или курьером.  | [optional] [default to undefined]
**sale_commission** | **number** | Сумма комиссии, которая была удержана при продаже товара и возвращена при его возврате. | [optional] [default to undefined]
**services_amount** | **number** | Стоимость дополнительных услуг, не связанных напрямую с доставками и возвратами товаров. Например, продвижения или размещения товаров. | [optional] [default to undefined]

## Example

```typescript
import { Financev3FinanceTransactionTotalsV3ResponseResult } from './api';

const instance: Financev3FinanceTransactionTotalsV3ResponseResult = {
    accruals_for_sale,
    compensation_amount,
    money_transfer,
    others_amount,
    processing_and_delivery,
    refunds_and_cancellations,
    sale_commission,
    services_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
