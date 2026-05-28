# GooglerpcStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Код ошибки. | [optional] [default to undefined]
**details** | [**Array&lt;ProtobufAny&gt;**](ProtobufAny.md) | Дополнительная информация об ошибке. | [optional] [default to undefined]
**message** | **string** | Описание ошибки. | [optional] [default to undefined]

## Example

```typescript
import { GooglerpcStatus } from './api';

const instance: GooglerpcStatus = {
    code,
    details,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
