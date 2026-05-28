# AverageDeliveryTimeSummaryResponseTariff

Информация о тарифе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | **number** | Процент от цены товаров. | [optional] [default to undefined]
**start** | **number** | Значение метрики среднего времени доставки. | [optional] [default to undefined]
**tariff_status** | [**AverageDeliveryTimeSummaryResponseTariffStatus**](AverageDeliveryTimeSummaryResponseTariffStatus.md) |  | [optional] [default to undefined]
**tariff_value** | **number** | Процент к базовому тарифу логистики FBO. | [optional] [default to undefined]

## Example

```typescript
import { AverageDeliveryTimeSummaryResponseTariff } from './api';

const instance: AverageDeliveryTimeSummaryResponseTariff = {
    fee,
    start,
    tariff_status,
    tariff_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
