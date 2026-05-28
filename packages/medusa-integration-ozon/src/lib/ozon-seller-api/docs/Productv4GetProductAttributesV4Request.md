# Productv4GetProductAttributesV4Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Productv4Filter**](Productv4Filter.md) |  | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.  Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]
**limit** | **number** | Количество значений на странице. | [optional] [default to undefined]
**sort_by** | **string** | Параметр, по которому товары будут отсортированы: - &#x60;sku&#x60; — сортировка по идентификатору товара в системе Ozon; - &#x60;offer_id&#x60; — сортировка по артикулу товара; - &#x60;id&#x60; — сортировка по идентификатору товара; - &#x60;title&#x60; — сортировка по названию товара.  | [optional] [default to undefined]
**sort_dir** | **string** | Направление сортировки: - &#x60;asc&#x60; — по возрастанию, - &#x60;desc&#x60; — по убыванию.  | [optional] [default to undefined]

## Example

```typescript
import { Productv4GetProductAttributesV4Request } from './api';

const instance: Productv4GetProductAttributesV4Request = {
    filter,
    last_id,
    limit,
    sort_by,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
