# V1CarriageEttnStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **Array&lt;string&gt;** | Ошибки проверки электронной ТТН на прослеживаемой отгрузке. | [optional] [default to undefined]
**status** | **string** | Статус проверки электронной ТТН на прослеживаемой отгрузке:  - &#x60;NOT_UPLOADED&#x60; — не загружена;  - &#x60;PROCESSING&#x60; — в процессе проверки;  - &#x60;SUCCESS&#x60; — проверена;  - &#x60;FAILED&#x60; — ошибка.  | [optional] [default to undefined]

## Example

```typescript
import { V1CarriageEttnStatusResponse } from './api';

const instance: V1CarriageEttnStatusResponse = {
    errors,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
