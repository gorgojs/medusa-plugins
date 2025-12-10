# UserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ИД | [optional] [readonly] [default to undefined]
**companyId** | **string** | ИД компании | [optional] [readonly] [default to undefined]
**login** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | Доступные роли пользователя | [optional] [readonly] [default to undefined]
**useDraft** | **boolean** | Заказ создается как черновик | [optional] [default to undefined]
**offerAccepted** | **string** | Дата принятия оферты | [optional] [default to undefined]
**created** | **string** | Дата создания | [optional] [readonly] [default to undefined]
**updated** | **string** | Дата изменения | [optional] [readonly] [default to undefined]

## Example

```typescript
import { UserResponse } from './api';

const instance: UserResponse = {
    id,
    companyId,
    login,
    email,
    roles,
    useDraft,
    offerAccepted,
    created,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
