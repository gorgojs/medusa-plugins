# GetReturnsListResponseCompensationStatus

Статус компенсации.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор статуса. | [optional] [default to undefined]
**display_name** | **string** | Название статуса: - «Отправлено на компенсацию», - «Вы получили компенсацию», - «Компенсация отменена», - «Провели декомпенсацию».  | [optional] [default to undefined]
**sys_name** | **string** | Системное название статуса: - &#x60;Sent&#x60; — отправлена; - &#x60;Received&#x60; — получена; - &#x60;Canceled&#x60; — отменена; - &#x60;DecompensationSent&#x60; — проведена декомпенсация.  | [optional] [default to undefined]

## Example

```typescript
import { GetReturnsListResponseCompensationStatus } from './api';

const instance: GetReturnsListResponseCompensationStatus = {
    id,
    display_name,
    sys_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
