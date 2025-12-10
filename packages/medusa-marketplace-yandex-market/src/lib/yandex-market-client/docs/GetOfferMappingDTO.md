# GetOfferMappingDTO

Информация о товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | [**GetOfferDTO**](GetOfferDTO.md) |  | [optional] [default to undefined]
**mapping** | [**GetMappingDTO**](GetMappingDTO.md) |  | [optional] [default to undefined]
**showcaseUrls** | [**Array&lt;ShowcaseUrlDTO&gt;**](ShowcaseUrlDTO.md) | Ссылки на один и тот же товар на разных витринах Маркета. | [optional] [default to undefined]

## Example

```typescript
import { GetOfferMappingDTO } from './api';

const instance: GetOfferMappingDTO = {
    offer,
    mapping,
    showcaseUrls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
