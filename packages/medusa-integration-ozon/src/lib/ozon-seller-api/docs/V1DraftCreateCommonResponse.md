# V1DraftCreateCommonResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draft_id** | **number** | Идентификатор черновика. Используйте в методе [/v2/draft/create/info](#operation/DraftCreateInfo). | [optional] [default to undefined]
**errors** | [**Array&lt;DraftCreateCommonResponseError&gt;**](DraftCreateCommonResponseError.md) | Ошибки. | [optional] [default to undefined]

## Example

```typescript
import { V1DraftCreateCommonResponse } from './api';

const instance: V1DraftCreateCommonResponse = {
    draft_id,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
