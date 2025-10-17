# GenerateOfferBarcodesRequest

Товары, для которых нужно сгенерировать штрихкоды. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Список товаров, для которых нужно сгенерировать штрихкоды. | [default to undefined]
**skipIfExists** | **boolean** | Для каких товаров нужно сгенерировать штрихкоды:  * &#x60;false&#x60; — для всех, которые переданы в запросе. * &#x60;true&#x60; — только для тех, у которых их нет.  | [optional] [default to true]

## Example

```typescript
import { GenerateOfferBarcodesRequest } from './api';

const instance: GenerateOfferBarcodesRequest = {
    offerIds,
    skipIfExists,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
