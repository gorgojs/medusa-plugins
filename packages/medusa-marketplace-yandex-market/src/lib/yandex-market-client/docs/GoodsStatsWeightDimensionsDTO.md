# GoodsStatsWeightDimensionsDTO

Информация о весе и габаритах товара.  Если товар уже привязан к карточке (`marketSku`), в ответе вернутся габариты из карточки Маркета, а не размеры, которые вы передаете. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **number** | Длина товара в сантиметрах. | [optional] [default to undefined]
**width** | **number** | Ширина товара в сантиметрах. | [optional] [default to undefined]
**height** | **number** | Высота товара в сантиметрах. | [optional] [default to undefined]
**weight** | **number** | Вес товара в килограммах. | [optional] [default to undefined]

## Example

```typescript
import { GoodsStatsWeightDimensionsDTO } from './api';

const instance: GoodsStatsWeightDimensionsDTO = {
    length,
    width,
    height,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
