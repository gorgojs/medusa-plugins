# Office

Office details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Address | [optional] [default to undefined]
**name** | **string** | Name | [optional] [default to undefined]
**city** | **string** | City | [optional] [default to undefined]
**id** | **number** | ID | [optional] [default to undefined]
**longitude** | **number** | Longitude | [optional] [default to undefined]
**latitude** | **number** | Latitude | [optional] [default to undefined]
**cargoType** | **number** | The type of goods a warehouse can accept:   - &#x60;1&#x60; — small-sized goods   - &#x60;2&#x60; — over dimensional cargo (ODC)   - &#x60;3&#x60; — dimensional cargo+ (CD+)  | [optional] [default to undefined]
**deliveryType** | **number** | The type of deliveries:   - &#x60;1&#x60; — Fulfillment By Wildberries (FBS)   - &#x60;2&#x60; — Delivery By Supplier (DBS)   - &#x60;3&#x60; — Delivery by WB courier (DBW)   - &#x60;5&#x60; — In-Store Pickup (C&amp;C)   - &#x60;6&#x60; — Express Delivery By Supplier (EDBS)  | [optional] [default to undefined]
**federalDistrict** | **string** | Federal district of the WB office. If &#x60;null&#x60;, the office is located outside the Russian Federation or the federal district is not specified | [optional] [default to undefined]
**selected** | **boolean** | The flag indicating that the office has already been selected by the supplier | [optional] [default to undefined]

## Example

```typescript
import { Office } from './api';

const instance: Office = {
    address,
    name,
    city,
    id,
    longitude,
    latitude,
    cargoType,
    deliveryType,
    federalDistrict,
    selected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
