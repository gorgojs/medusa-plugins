# SetOrderBoxLayoutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxes** | [**Array&lt;OrderBoxLayoutDTO&gt;**](OrderBoxLayoutDTO.md) | Список коробок. | [default to undefined]
**allowRemove** | **boolean** | Передайте &#x60;true&#x60;, если вы собираетесь удалить часть товаров из заказа. | [optional] [default to false]

## Example

```typescript
import { SetOrderBoxLayoutRequest } from './api';

const instance: SetOrderBoxLayoutRequest = {
    boxes,
    allowRemove,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
