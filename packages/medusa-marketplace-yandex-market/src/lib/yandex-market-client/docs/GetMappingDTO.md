# GetMappingDTO

Информация о товарах в каталоге. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketSku** | **number** | Идентификатор карточки товара на Маркете. | [optional] [default to undefined]
**marketSkuName** | **string** | Название карточки товара.  Может отсутствовать в ответе, если товар еще не привязан к карточке.  | [optional] [default to undefined]
**marketModelId** | **number** | Идентификатор модели на Маркете.  Может отсутствовать в ответе, если товар еще не привязан к карточке.  | [optional] [default to undefined]
**marketModelName** | **string** | Название модели на Маркете.  Может отсутствовать в ответе, если товар еще не привязан к карточке.  | [optional] [default to undefined]
**marketCategoryId** | **number** | Идентификатор категории на Маркете, в которую попал товар.  Может отсутствовать в ответе, если Маркет еще не определил категорию товара.  | [optional] [default to undefined]
**marketCategoryName** | **string** | Название категории карточки на Маркете.  Может отсутствовать в ответе, если Маркет еще не определил категорию товара.  | [optional] [default to undefined]

## Example

```typescript
import { GetMappingDTO } from './api';

const instance: GetMappingDTO = {
    marketSku,
    marketSkuName,
    marketModelId,
    marketModelName,
    marketCategoryId,
    marketCategoryName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
