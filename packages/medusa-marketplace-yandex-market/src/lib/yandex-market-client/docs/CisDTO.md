# CisDTO

Статус проверки и код маркировки в системе :no-translate[«Честный ЗНАК»].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **string** | Код маркировки в системе :no-translate[«Честный ЗНАК»]. | [default to undefined]
**status** | [**CisStatusType**](CisStatusType.md) |  | [default to undefined]
**substatus** | [**CisSubstatusType**](CisSubstatusType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CisDTO } from './api';

const instance: CisDTO = {
    value,
    status,
    substatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
