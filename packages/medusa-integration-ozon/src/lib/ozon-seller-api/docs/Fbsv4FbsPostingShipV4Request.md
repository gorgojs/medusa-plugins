# Fbsv4FbsPostingShipV4Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packages** | [**Array&lt;FbsPostingShipV4RequestPackage&gt;**](FbsPostingShipV4RequestPackage.md) | Список упаковок. Каждая упаковка содержит список отправлений, на которые делится заказ. | [default to undefined]
**posting_number** | **string** | Номер отправления. | [default to undefined]
**_with** | [**FbsPostingShipV4RequestWith**](FbsPostingShipV4RequestWith.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Fbsv4FbsPostingShipV4Request } from './api';

const instance: Fbsv4FbsPostingShipV4Request = {
    packages,
    posting_number,
    _with,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
