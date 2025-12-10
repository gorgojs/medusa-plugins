# GetQuarantineOffersResultDTO

Список товаров в карантине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | [**ScrollingPagerDTO**](ScrollingPagerDTO.md) |  | [optional] [default to undefined]
**offers** | [**Array&lt;QuarantineOfferDTO&gt;**](QuarantineOfferDTO.md) | Страница списка товаров в карантине. | [default to undefined]

## Example

```typescript
import { GetQuarantineOffersResultDTO } from './api';

const instance: GetQuarantineOffersResultDTO = {
    paging,
    offers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
