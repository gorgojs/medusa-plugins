# ItemMarketing

Маркетинговые акции продавца.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**Array&lt;MarketingAction&gt;**](MarketingAction.md) | Маркетинговые акции продавца. Параметры &#x60;date_from&#x60;, &#x60;date_to&#x60;, &#x60;title&#x60; и &#x60;value&#x60; указываются для каждой акции продавца. | [optional] [default to undefined]
**current_period_from** | **string** | Дата и время начала текущего периода по всем действующим акциям. | [optional] [default to undefined]
**current_period_to** | **string** | Дата и время окончания текущего периода по всем действующим акциям. | [optional] [default to undefined]
**ozon_actions_exist** | **boolean** | &#x60;true&#x60;, если к товару можно применить акцию за счёт Ozon.  | [optional] [default to undefined]

## Example

```typescript
import { ItemMarketing } from './api';

const instance: ItemMarketing = {
    actions,
    current_period_from,
    current_period_to,
    ozon_actions_exist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
