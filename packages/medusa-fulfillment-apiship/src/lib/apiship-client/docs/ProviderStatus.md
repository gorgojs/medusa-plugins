# ProviderStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор статуса | [optional] [default to undefined]
**code** | **string** | Код статуса в сервисе | [optional] [default to undefined]
**name** | **string** | Название статуса в сервисе | [optional] [default to undefined]
**description** | **string** | Описание статуса в сервисе | [optional] [default to undefined]
**providerCode** | **string** | Код статуса в СД | [optional] [default to undefined]
**providerName** | **string** | Название статуса в СД | [optional] [default to undefined]
**providerDescription** | **string** | Описание статуса в СД | [optional] [default to undefined]
**provider** | [**ProviderStatusProvider**](ProviderStatusProvider.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProviderStatus } from './api';

const instance: ProviderStatus = {
    id,
    code,
    name,
    description,
    providerCode,
    providerName,
    providerDescription,
    provider,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
