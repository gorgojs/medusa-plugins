# Supply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Supply ID | [optional] [default to undefined]
**done** | **boolean** | An indication that the supply is closed   - &#x60;true&#x60; — closed   - &#x60;false&#x60; — open  | [optional] [default to undefined]
**createdAt** | **string** | Supply creation date (RFC3339) | [optional] [default to undefined]
**closedAt** | **string** | Supply close date (RFC3339) | [optional] [default to undefined]
**scanDt** | **string** | Supply scan date (RFC3339) | [optional] [default to undefined]
**name** | **string** | Supply name | [optional] [default to undefined]
**cargoType** | **number** | Type of cargo:   - &#x60;1&#x60; — small-sized goods   - &#x60;2&#x60; — over dimensional cargo (ODC)   - &#x60;3&#x60; — dimensional cargo+ (CD+)  | [optional] [default to undefined]
**crossBorderType** | **number** | Supply type:   - &#x60;0&#x60; — non-cross-border   - &#x60;1&#x60; — cross-border   - &#x60;null&#x60; — no value  | [optional] [default to undefined]
**destinationOfficeId** | **number** | ID of the destination office for the supply. If &#x60;null&#x60;, destination office ID is not specified | [optional] [default to undefined]

## Example

```typescript
import { Supply } from './api';

const instance: Supply = {
    id,
    done,
    createdAt,
    closedAt,
    scanDt,
    name,
    cargoType,
    crossBorderType,
    destinationOfficeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
