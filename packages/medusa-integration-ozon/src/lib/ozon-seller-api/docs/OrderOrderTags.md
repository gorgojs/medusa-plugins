# OrderOrderTags

Метки заявки на поставку.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_econom** | **boolean** | &#x60;true&#x60;, если заявка на поставку относится к товарам «Суперэконом».  | [optional] [default to undefined]
**is_pickup** | **boolean** | &#x60;true&#x60;, если доступна отгрузка курьером.  | [optional] [default to undefined]
**is_quant** | **boolean** | Признак, что в поставке есть кванты. | [optional] [default to undefined]
**is_super_fbo** | **boolean** | &#x60;true&#x60;, если продавец подключён к Super-поставкам.  | [optional] [default to undefined]
**is_virtual** | **boolean** | &#x60;true&#x60;, если заявка на поставку виртуальная.  | [optional] [default to undefined]
**original_supply_id** | **number** | Идентификатор исходной поставки. | [optional] [default to undefined]
**product_super_fbo** | **boolean** | &#x60;true&#x60;, если заявка на поставку относится к Super-товарам.  | [optional] [default to undefined]
**seller_warehouse_id** | **number** | Идентификатор склада продавца. | [optional] [default to undefined]

## Example

```typescript
import { OrderOrderTags } from './api';

const instance: OrderOrderTags = {
    is_econom,
    is_pickup,
    is_quant,
    is_super_fbo,
    is_virtual,
    original_supply_id,
    product_super_fbo,
    seller_warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
