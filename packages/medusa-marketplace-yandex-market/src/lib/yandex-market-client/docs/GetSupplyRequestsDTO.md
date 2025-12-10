# GetSupplyRequestsDTO

Список заявок и информация по ним.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**Array&lt;SupplyRequestDTO&gt;**](SupplyRequestDTO.md) | Список заявок. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetSupplyRequestsDTO } from './api';

const instance: GetSupplyRequestsDTO = {
    requests,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
