# OfferMappingDTO

Информация о текущей карточке товара на Маркете.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketSku** | **number** | Идентификатор карточки товара на Маркете. | [optional] [default to undefined]
**modelId** | **number** | Идентификатор модели для текущей карточки товара на Маркете.  Например, две лопатки разных цветов имеют разные SKU на Маркете (параметр &#x60;marketSku&#x60;), но одинаковый идентификатор модели товара.  | [optional] [default to undefined]
**categoryId** | **number** | Идентификатор категории для текущей карточки товара на Маркете. | [optional] [default to undefined]

## Example

```typescript
import { OfferMappingDTO } from './api';

const instance: OfferMappingDTO = {
    marketSku,
    modelId,
    categoryId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
