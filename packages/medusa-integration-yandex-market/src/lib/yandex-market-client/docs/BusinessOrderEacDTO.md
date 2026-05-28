# BusinessOrderEacDTO

Информация о коде подтверждения.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eacType** | [**OrderDeliveryEacType**](OrderDeliveryEacType.md) |  | [default to undefined]
**eacCode** | **string** | Код подтверждения ЭАПП (для типа &#x60;MERCHANT_TO_COURIER&#x60;).  | [optional] [default to undefined]

## Example

```typescript
import { BusinessOrderEacDTO } from './api';

const instance: BusinessOrderEacDTO = {
    eacType,
    eacCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
