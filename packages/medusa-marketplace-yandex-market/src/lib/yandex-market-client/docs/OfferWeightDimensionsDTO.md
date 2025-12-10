# OfferWeightDimensionsDTO

Габариты упаковки и вес товара.  Если товар занимает несколько коробок, перед измерением размеров сложите их компактно.  ![Схема измерения многоместных грузов](../../_images/reference/boxes-measure.png) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **number** | Длина упаковки в см.  | [default to undefined]
**width** | **number** | Ширина упаковки в см.  | [default to undefined]
**height** | **number** | Высота упаковки в см.  | [default to undefined]
**weight** | **number** | Вес товара в кг с учетом упаковки (брутто).  | [default to undefined]

## Example

```typescript
import { OfferWeightDimensionsDTO } from './api';

const instance: OfferWeightDimensionsDTO = {
    length,
    width,
    height,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
