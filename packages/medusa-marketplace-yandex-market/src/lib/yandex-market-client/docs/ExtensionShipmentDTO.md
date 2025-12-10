# ExtensionShipmentDTO

Информация об отгрузке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentStatus** | [**ShipmentStatusChangeDTO**](ShipmentStatusChangeDTO.md) |  | [optional] [default to undefined]
**availableActions** | [**Set&lt;ShipmentActionType&gt;**](ShipmentActionType.md) | Доступные действия над отгрузкой. | [default to undefined]

## Example

```typescript
import { ExtensionShipmentDTO } from './api';

const instance: ExtensionShipmentDTO = {
    currentStatus,
    availableActions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
