# GetConditionalCancellationListV2RequestFilters

Фильтры.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_initiator** | [**Array&lt;V2CancellationInitiatorEnum&gt;**](V2CancellationInitiatorEnum.md) | Инициатор отмены: - &#x60;SELLER&#x60; — продавец,  - &#x60;CLIENT&#x60; — покупатель, - &#x60;OZON&#x60; — Ozon,   - &#x60;SYSTEM&#x60; — система,  - &#x60;DELIVERY&#x60; — служба доставки.  | [optional] [default to undefined]
**posting_number** | **Array&lt;string&gt;** | Фильтр по номеру отправления. | [optional] [default to undefined]
**state** | [**V2CancellationStateEnumFilters**](V2CancellationStateEnumFilters.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetConditionalCancellationListV2RequestFilters } from './api';

const instance: GetConditionalCancellationListV2RequestFilters = {
    cancellation_initiator,
    posting_number,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
