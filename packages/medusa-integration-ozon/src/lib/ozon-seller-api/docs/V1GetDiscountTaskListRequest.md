# V1GetDiscountTaskListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**V1DiscountTaskStatus**](V1DiscountTaskStatus.md) |  | [default to undefined]
**page** | **number** | Страница, с которой нужно выгрузить список заявок на скидку. | [optional] [default to undefined]
**limit** | **number** | Максимальное количество заявок на странице. | [default to undefined]

## Example

```typescript
import { V1GetDiscountTaskListRequest } from './api';

const instance: V1GetDiscountTaskListRequest = {
    status,
    page,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
