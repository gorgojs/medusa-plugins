# V1ApproveDeclineDiscountTasksResponseResult

Результат работы метода.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fail_details** | [**Array&lt;ApproveDeclineDiscountTasksResponseFailDetail&gt;**](ApproveDeclineDiscountTasksResponseFailDetail.md) | Ошибки при создании заявки. | [optional] [default to undefined]
**success_count** | **number** | Количество заявок с успешной сменой статуса. | [optional] [default to undefined]
**fail_count** | **number** | Количество заявок, у которых не удалось сменить статус. | [optional] [default to undefined]

## Example

```typescript
import { V1ApproveDeclineDiscountTasksResponseResult } from './api';

const instance: V1ApproveDeclineDiscountTasksResponseResult = {
    fail_details,
    success_count,
    fail_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
