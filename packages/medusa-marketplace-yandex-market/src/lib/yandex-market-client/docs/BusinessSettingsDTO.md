# BusinessSettingsDTO

Настройки кабинета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onlyDefaultPrice** | **boolean** | Управление ценами на товары:  * &#x60;false&#x60; — можно установить цену, которая действует:   * во всех магазинах кабинета — [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md);   * в конкретном магазине — [POST v2/campaigns/{campaignId}/offer-prices/updates](../../reference/assortment/updatePrices.md). * &#x60;true&#x60; — можно установить только цену, которая действует во всех магазинах кабинета, — [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md).  | [optional] [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BusinessSettingsDTO } from './api';

const instance: BusinessSettingsDTO = {
    onlyDefaultPrice,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
