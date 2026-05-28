# PromoOfferUpdateWarningDTO

Предупреждение, которое появилось при добавлении товара в акцию или изменении его цен.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**PromoOfferUpdateWarningCodeType**](PromoOfferUpdateWarningCodeType.md) |  | [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Идентификаторы кампаний тех магазинов, для которых получены предупреждения.  Не возвращается, если предупреждения действуют для всех магазинов в кабинете.  | [optional] [default to undefined]

## Example

```typescript
import { PromoOfferUpdateWarningDTO } from './api';

const instance: PromoOfferUpdateWarningDTO = {
    code,
    campaignIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
