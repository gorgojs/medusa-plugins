# SearchShipmentsResponseDTO

Информация об отгрузках.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipments** | [**Array&lt;ShipmentInfoDTO&gt;**](ShipmentInfoDTO.md) | Список с информацией об отгрузках. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SearchShipmentsResponseDTO } from './api';

const instance: SearchShipmentsResponseDTO = {
    shipments,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
