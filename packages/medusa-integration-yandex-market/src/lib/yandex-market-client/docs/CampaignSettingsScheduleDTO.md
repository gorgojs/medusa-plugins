# CampaignSettingsScheduleDTO

Расписание работы службы доставки в своем регионе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableOnHolidays** | **boolean** | Признак работы службы доставки в государственные праздники. Возможные значения. * &#x60;false&#x60; — служба доставки не работает в праздничные дни. * &#x60;true&#x60; — служба доставки работает в праздничные дни.  | [optional] [default to undefined]
**customHolidays** | **Set&lt;string&gt;** | Список дней, в которые служба доставки не работает. Дни магазин указал в кабинете продавца на Маркете. | [default to undefined]
**customWorkingDays** | **Set&lt;string&gt;** | Список выходных и праздничных дней, в которые служба доставки работает. Дни магазин указал в кабинете продавца на Маркете. | [default to undefined]
**period** | [**CampaignSettingsTimePeriodDTO**](CampaignSettingsTimePeriodDTO.md) |  | [optional] [default to undefined]
**totalHolidays** | **Set&lt;string&gt;** | Итоговый список нерабочих дней службы доставки. Список рассчитывается с учетом выходных, нерабочих дней и государственных праздников. Информацию по ним магазин указывает в кабинете продавца на Маркете. | [default to undefined]
**weeklyHolidays** | **Set&lt;number&gt;** | Список выходных дней недели и государственных праздников. | [default to undefined]

## Example

```typescript
import { CampaignSettingsScheduleDTO } from './api';

const instance: CampaignSettingsScheduleDTO = {
    availableOnHolidays,
    customHolidays,
    customWorkingDays,
    period,
    totalHolidays,
    weeklyHolidays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
