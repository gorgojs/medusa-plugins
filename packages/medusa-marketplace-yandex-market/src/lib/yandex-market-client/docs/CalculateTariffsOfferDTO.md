# CalculateTariffsOfferDTO

Параметры товара, для которого нужно рассчитать стоимость услуг.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryId** | **number** | Идентификатор категории товара на Маркете.  Для расчета стоимости услуг необходимо указать идентификатор [листовой категории](*list-category) товара.  Чтобы узнать идентификатор категории, к которой относится товар, воспользуйтесь запросом [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  | [default to undefined]
**price** | **number** | Цена товара в рублях. | [default to undefined]
**length** | **number** | Длина товара в сантиметрах. | [default to undefined]
**width** | **number** | Ширина товара в сантиметрах. | [default to undefined]
**height** | **number** | Высота товара в сантиметрах. | [default to undefined]
**weight** | **number** | Вес товара в килограммах. | [default to undefined]
**quantity** | **number** | Квант продажи — количество единиц товара в одном товарном предложении. | [optional] [default to 1]

## Example

```typescript
import { CalculateTariffsOfferDTO } from './api';

const instance: CalculateTariffsOfferDTO = {
    categoryId,
    price,
    length,
    width,
    height,
    weight,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
