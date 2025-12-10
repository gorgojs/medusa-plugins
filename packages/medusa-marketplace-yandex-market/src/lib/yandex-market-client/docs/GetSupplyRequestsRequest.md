# GetSupplyRequestsRequest

Модель для фильтрации и сортировки заявок на поставку. Фильтры по `requestDateFrom` и `requestDateTo` отбирают заявки по targetLocation->requestedDate и transitLocation->requestedDate. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestIds** | **Set&lt;number&gt;** | Идентификаторы заявок. | [optional] [default to undefined]
**requestDateFrom** | **string** | Дата начала периода для фильтрации заявок. | [optional] [default to undefined]
**requestDateTo** | **string** | Дата окончания периода для фильтрации заявок. | [optional] [default to undefined]
**requestTypes** | [**Set&lt;SupplyRequestType&gt;**](SupplyRequestType.md) | Типы заявок для фильтрации. | [optional] [default to undefined]
**requestSubtypes** | [**Set&lt;SupplyRequestSubType&gt;**](SupplyRequestSubType.md) | Подтипы заявок для фильтрации. | [optional] [default to undefined]
**requestStatuses** | [**Set&lt;SupplyRequestStatusType&gt;**](SupplyRequestStatusType.md) | Статусы заявок для фильтрации. | [optional] [default to undefined]
**sorting** | [**SupplyRequestSortingDTO**](SupplyRequestSortingDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetSupplyRequestsRequest } from './api';

const instance: GetSupplyRequestsRequest = {
    requestIds,
    requestDateFrom,
    requestDateTo,
    requestTypes,
    requestSubtypes,
    requestStatuses,
    sorting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
