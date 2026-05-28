# SupplyRequestDTO

Информация о заявке на поставку, вывоз или утилизацию.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**SupplyRequestIdDTO**](SupplyRequestIdDTO.md) |  | [default to undefined]
**type** | [**SupplyRequestType**](SupplyRequestType.md) |  | [default to undefined]
**subtype** | [**SupplyRequestSubType**](SupplyRequestSubType.md) |  | [default to undefined]
**status** | [**SupplyRequestStatusType**](SupplyRequestStatusType.md) |  | [default to undefined]
**updatedAt** | **string** | Дата и время последнего обновления заявки. | [default to undefined]
**counters** | [**SupplyRequestCountersDTO**](SupplyRequestCountersDTO.md) |  | [default to undefined]
**parentLink** | [**SupplyRequestReferenceDTO**](SupplyRequestReferenceDTO.md) |  | [optional] [default to undefined]
**childrenLinks** | [**Array&lt;SupplyRequestReferenceDTO&gt;**](SupplyRequestReferenceDTO.md) | Ссылки на дочерние заявки. | [optional] [default to undefined]
**targetLocation** | [**SupplyRequestLocationDTO**](SupplyRequestLocationDTO.md) |  | [default to undefined]
**transitLocation** | [**SupplyRequestLocationDTO**](SupplyRequestLocationDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SupplyRequestDTO } from './api';

const instance: SupplyRequestDTO = {
    id,
    type,
    subtype,
    status,
    updatedAt,
    counters,
    parentLink,
    childrenLinks,
    targetLocation,
    transitLocation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
