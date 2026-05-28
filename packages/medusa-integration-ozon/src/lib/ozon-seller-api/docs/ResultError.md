# ResultError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код ошибки. | [optional] [default to undefined]
**status** | **string** | Тип ошибки: - &#x60;warning&#x60; — предупреждение; - &#x60;critical&#x60; — критическая ошибка.  | [optional] [default to undefined]

## Example

```typescript
import { ResultError } from './api';

const instance: ResultError = {
    code,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
