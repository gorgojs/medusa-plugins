# OfferParamDTO

Параметры товара.  Если у товара несколько значений одного параметра, передайте их с одним и тем же `name`, но разными `value`.  {% cut \"Пример\" %}  ```json translate=no \"params\": [   {     \"name\": \"Цвет для фильтра\",     \"value\": \"Зеленый\"   },   {     \"name\": \"Цвет для фильтра\",     \"value\": \"Желтый\"   } ] ```  {% endcut %} 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название характеристики.  Должно совпадать с названием характеристики на Маркете. Узнать его можно из Excel-шаблона категории или через запрос [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md).  | [default to undefined]
**value** | **string** | Значение.  | [default to undefined]

## Example

```typescript
import { OfferParamDTO } from './api';

const instance: OfferParamDTO = {
    name,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
