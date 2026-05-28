# V3FbsTariffication

Информация по тарификации отгрузки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_tariff_rate** | **number** | Текущий процент тарификации. | [optional] [default to undefined]
**current_tariff_type** | **string** | Текущий тип тарификации — скидка или надбавка. | [optional] [default to undefined]
**current_tariff_charge** | **string** | Текущая сумма скидки или надбавки. | [optional] [default to undefined]
**current_tariff_charge_currency_code** | **string** | Валюта суммы. | [optional] [default to undefined]
**next_tariff_rate** | **number** | Процент, по которому будет тарифицироваться отправление через указанное в параметре &#x60;next_tariff_starts_at&#x60; время. | [optional] [default to undefined]
**next_tariff_type** | **string** | Тип тарифа, по которому будет тарифицироваться отправление через указанное в параметре &#x60;next_tariff_starts_at&#x60; время — скидка или надбавка. | [optional] [default to undefined]
**next_tariff_charge** | **string** | Сумма скидки или надбавки на следующем шаге тарификации. | [optional] [default to undefined]
**next_tariff_starts_at** | **string** | Дата и время, когда начнёт применяться новый тариф.  Формат: &#x60;YYYY-MM-DDThh:mm:ss.mcsZ&#x60;.   Пример: &#x60;2023-11-13T08:05:57.657Z&#x60;.  | [optional] [default to undefined]
**next_tariff_charge_currency_code** | **string** | Валюта нового тарифа. | [optional] [default to undefined]

## Example

```typescript
import { V3FbsTariffication } from './api';

const instance: V3FbsTariffication = {
    current_tariff_rate,
    current_tariff_type,
    current_tariff_charge,
    current_tariff_charge_currency_code,
    next_tariff_rate,
    next_tariff_type,
    next_tariff_charge,
    next_tariff_starts_at,
    next_tariff_charge_currency_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
