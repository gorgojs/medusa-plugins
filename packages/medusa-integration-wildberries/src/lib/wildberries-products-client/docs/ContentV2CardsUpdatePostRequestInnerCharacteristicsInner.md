# ContentV2CardsUpdatePostRequestInnerCharacteristicsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Characteristic ID | [default to undefined]
**value** | **any** | Characteristic values. &lt;br&gt; Data type — array of strings or number — depends on the characteristic data type. For more details see the description of the &#x60;charcType&#x60; field in the [Subject characteristics](./work-with-products#tag//paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) method. &lt;br&gt; The allowed number of values is specified in the &#x60;maxCount&#x60; field of the [Subject characteristics](./work-with-products#tag//paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) method  | [default to undefined]

## Example

```typescript
import { ContentV2CardsUpdatePostRequestInnerCharacteristicsInner } from './api';

const instance: ContentV2CardsUpdatePostRequestInnerCharacteristicsInner = {
    id,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
