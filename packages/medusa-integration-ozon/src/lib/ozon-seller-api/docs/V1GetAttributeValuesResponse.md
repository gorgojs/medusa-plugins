# V1GetAttributeValuesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в ответе вернулась только часть значений характеристики: - &#x60;true&#x60; — сделайте повторный запрос с новым параметром &#x60;last_value_id&#x60; для получения остальных значений; - &#x60;false&#x60; — ответ содержит все значения характеристики.  | [optional] [default to undefined]
**result** | [**Array&lt;V1GetAttributeValuesResponseDictionaryValue&gt;**](V1GetAttributeValuesResponseDictionaryValue.md) | Значения характеристики. | [optional] [default to undefined]

## Example

```typescript
import { V1GetAttributeValuesResponse } from './api';

const instance: V1GetAttributeValuesResponse = {
    has_next,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
