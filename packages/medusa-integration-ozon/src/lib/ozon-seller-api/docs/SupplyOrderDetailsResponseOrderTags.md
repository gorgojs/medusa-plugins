# SupplyOrderDetailsResponseOrderTags

Метки заявки на поставку.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_econom** | **boolean** | &#x60;true&#x60;, если в заявке на поставку есть товары «Суперэконом».  | [optional] [default to undefined]
**is_super_fbo** | **boolean** | &#x60;true&#x60;, если продавец подключён к Super-поставкам.  | [optional] [default to undefined]
**is_virtual** | **boolean** | &#x60;true&#x60;, если заявка на поставку виртуальная.  | [optional] [default to undefined]
**original_supply_id** | **number** | Идентификатор исходной поставки. | [optional] [default to undefined]
**product_super_fbo** | **boolean** | &#x60;true&#x60;, если в заявке на поставку есть Super-товары.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderDetailsResponseOrderTags } from './api';

const instance: SupplyOrderDetailsResponseOrderTags = {
    is_econom,
    is_super_fbo,
    is_virtual,
    original_supply_id,
    product_super_fbo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
