# OrderUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultItems** | [**Array&lt;OrderUploadItem&gt;**](OrderUploadItem.md) | Массив данных о созданных заказах | [default to undefined]
**base64** | **string** | Файл в base64 с описанием ошибок создания заказа | [optional] [default to undefined]

## Example

```typescript
import { OrderUploadResponse } from './api';

const instance: OrderUploadResponse = {
    resultItems,
    base64,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
