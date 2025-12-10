# ApiKeyDTO

Информация о Api-Key-токене.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название токена. | [default to undefined]
**authScopes** | [**Set&lt;ApiKeyScopeType&gt;**](ApiKeyScopeType.md) | Доступы к методам по Api-Key-токену. | [default to undefined]

## Example

```typescript
import { ApiKeyDTO } from './api';

const instance: ApiKeyDTO = {
    name,
    authScopes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
