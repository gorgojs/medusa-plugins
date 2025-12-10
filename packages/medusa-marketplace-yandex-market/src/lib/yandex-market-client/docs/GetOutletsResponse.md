# GetOutletsResponse

Ответ на запрос информации о точках продаж.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outlets** | [**Array&lt;FullOutletDTO&gt;**](FullOutletDTO.md) | Информация о точках продаж. | [default to undefined]
**paging** | [**ScrollingPagerDTO**](ScrollingPagerDTO.md) |  | [optional] [default to undefined]
**pager** | [**FlippingPagerDTO**](FlippingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetOutletsResponse } from './api';

const instance: GetOutletsResponse = {
    outlets,
    paging,
    pager,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
