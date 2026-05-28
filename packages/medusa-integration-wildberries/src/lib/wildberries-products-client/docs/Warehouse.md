# Warehouse

Seller\'s warehouse details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name | [optional] [default to undefined]
**officeId** | **number** | Office ID | [optional] [default to undefined]
**id** | **number** | ID | [optional] [default to undefined]
**cargoType** | **number** | The type of goods:   - &#x60;1&#x60; — small-sized goods   - &#x60;2&#x60; — over dimensional cargo (ODC)   - &#x60;3&#x60; — dimensional cargo+ (CD+)  | [optional] [default to undefined]
**deliveryType** | **number** | The type of deliveries:   - &#x60;1&#x60; — Fulfillment By Wildberries (FBS)   - &#x60;2&#x60; — Delivery By Supplier (DBS)   - &#x60;3&#x60; — Delivery by WB courier (DBW)   - &#x60;5&#x60; — In-Store Pickup (C&amp;C)   - &#x60;6&#x60; — Express Delivery By Supplier (EDBS)  | [optional] [default to undefined]
**isDeleting** | **boolean** | Warehouse is being deleted:   - &#x60;false&#x60; — no   - &#x60;true&#x60; — yes  After deletion, the warehouse will disappear from the list  | [optional] [default to undefined]
**isProcessing** | **boolean** | Warehouse is being updated:   - &#x60;false&#x60; — no   - &#x60;true&#x60; — yes, update and deletion of inventory is not available  Data update may take several minutes  | [optional] [default to undefined]

## Example

```typescript
import { Warehouse } from './api';

const instance: Warehouse = {
    name,
    officeId,
    id,
    cargoType,
    deliveryType,
    isDeleting,
    isProcessing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
