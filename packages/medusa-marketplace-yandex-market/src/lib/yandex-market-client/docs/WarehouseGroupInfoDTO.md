# WarehouseGroupInfoDTO

Информация о группе, к которой принадлежит склад.  Возвращается только для складов в группах.  [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название группы, к которой принадлежит склад. | [default to undefined]
**id** | **number** | Идентификатор группы складов. | [default to undefined]

## Example

```typescript
import { WarehouseGroupInfoDTO } from './api';

const instance: WarehouseGroupInfoDTO = {
    name,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
