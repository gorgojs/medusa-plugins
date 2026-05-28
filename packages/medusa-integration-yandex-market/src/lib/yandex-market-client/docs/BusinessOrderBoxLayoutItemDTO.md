# BusinessOrderBoxLayoutItemDTO

Информация о товаре в коробке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в заказе.  Параметр &#x60;id&#x60; в &#x60;items&#x60;.  | [default to undefined]
**fullCount** | **number** | Количество единиц товара в коробке.  | [optional] [default to undefined]
**partialCount** | [**BusinessOrderBoxLayoutPartialCountDTO**](BusinessOrderBoxLayoutPartialCountDTO.md) |  | [optional] [default to undefined]
**instances** | [**Array&lt;BriefOrderItemInstanceDTO&gt;**](BriefOrderItemInstanceDTO.md) | Переданные коды маркировки. | [optional] [default to undefined]

## Example

```typescript
import { BusinessOrderBoxLayoutItemDTO } from './api';

const instance: BusinessOrderBoxLayoutItemDTO = {
    id,
    fullCount,
    partialCount,
    instances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
