# UpdateMappingDTO

Карточка на Маркете, которая, с вашей точки зрения, подходит товару. Чтобы определить идентификатор подходящей карточки, воспользуйтесь поиском в кабинете (**Товары** → **Каталог** → **Загрузить товары**).  По результатам проверки Маркет может привязать товар к более подходящей карточке. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketSku** | **number** | Идентификатор карточки товара на Маркете. | [optional] [default to undefined]

## Example

```typescript
import { UpdateMappingDTO } from './api';

const instance: UpdateMappingDTO = {
    marketSku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
