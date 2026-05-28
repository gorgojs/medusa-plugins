# BusinessOrderBoxLayoutDTO

Информация о коробке (для заказов в кабинете).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;BusinessOrderBoxLayoutItemDTO&gt;**](BusinessOrderBoxLayoutItemDTO.md) | Список товаров в коробке.  Если в коробке едет часть большого товара, в списке может быть только один пункт.  | [default to undefined]
**boxId** | **number** | Идентификатор коробки. | [default to undefined]
**barcode** | **string** | Идентификатор грузового места в системе магазина. | [default to undefined]

## Example

```typescript
import { BusinessOrderBoxLayoutDTO } from './api';

const instance: BusinessOrderBoxLayoutDTO = {
    items,
    boxId,
    barcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
