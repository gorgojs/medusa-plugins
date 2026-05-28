# UinDTO

Статус проверки и :no-translate[УИН].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **string** | УИН товара. | [default to undefined]
**status** | [**UinStatusType**](UinStatusType.md) |  | [default to undefined]
**substatus** | [**UinSubstatusType**](UinSubstatusType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UinDTO } from './api';

const instance: UinDTO = {
    value,
    status,
    substatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
