# V1AnalyticsTurnoverStocksResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads** | **number** | Среднесуточное количество проданных единиц товара за последние 60 дней. | [optional] [default to undefined]
**current_stock** | **number** | Остаток товара, шт. | [optional] [default to undefined]
**idc** | **number** | На сколько дней хватит остатка товара с учётом среднесуточных продаж. | [optional] [default to undefined]
**idc_grade** | **string** | Уровень остатка товара: - &#x60;GRADES_NONE&#x60; — ожидаются поставки; - &#x60;GRADES_NOSALES&#x60; — нет продаж; - &#x60;GRADES_GREEN&#x60; — зелёный, «хороший»; - &#x60;GRADES_YELLOW&#x60; — жёлтый, «средний»; - &#x60;GRADES_RED&#x60; — красный, «плохой»; - &#x60;GRADES_CRITICAL&#x60; — критический.  | [optional] [default to IdcGradeEnum_GradesNone]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**turnover** | **number** | Фактическая оборачиваемость в днях. | [optional] [default to undefined]
**turnover_grade** | **string** | Уровень оборачиваемости: - &#x60;GRADES_NONE&#x60; — ожидаются поставки; - &#x60;GRADES_NOSALES&#x60; — нет продаж; - &#x60;GRADES_GREEN&#x60; — зелёный, «хороший»; - &#x60;GRADES_YELLOW&#x60; — жёлтый, «средний»; - &#x60;GRADES_RED&#x60; — красный, «плохой»; - &#x60;GRADES_CRITICAL&#x60; — критический.  | [optional] [default to TurnoverGradeEnum_GradesNone]

## Example

```typescript
import { V1AnalyticsTurnoverStocksResponseItem } from './api';

const instance: V1AnalyticsTurnoverStocksResponseItem = {
    ads,
    current_stock,
    idc,
    idc_grade,
    name,
    offer_id,
    sku,
    turnover,
    turnover_grade,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
