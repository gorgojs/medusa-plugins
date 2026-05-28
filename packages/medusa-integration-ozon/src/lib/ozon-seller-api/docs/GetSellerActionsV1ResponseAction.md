# GetSellerActionsV1ResponseAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор акции. | [optional] [default to undefined]
**title** | **string** | Название акции. | [optional] [default to undefined]
**action_type** | **string** | Тип акции. | [optional] [default to undefined]
**description** | **string** | Описание акции. | [optional] [default to undefined]
**date_start** | **string** | Дата начала акции. | [optional] [default to undefined]
**date_end** | **string** | Дата окончания акции. | [optional] [default to undefined]
**freeze_date** | **string** | Дата приостановки акции.  Если поле заполнено, продавец не может повышать цены, изменять список товаров и уменьшать количество единиц товаров в акции.  Продавец может понижать цены и увеличивать количество единиц товара в акции.  | [optional] [default to undefined]
**potential_products_count** | **number** | Количество товаров, доступных для акции. | [optional] [default to undefined]
**participating_products_count** | **number** | Количество товаров, которые участвуют в акции. | [optional] [default to undefined]
**is_participating** | **boolean** | Участвуете вы в этой акции или нет. | [optional] [default to undefined]
**is_voucher_action** | **boolean** | Признак, что для участия в акции покупателям нужен промокод. | [optional] [default to undefined]
**banned_products_count** | **number** | Количество заблокированных товаров. | [optional] [default to undefined]
**with_targeting** | **boolean** | Признак, что акция с целевой аудиторией. | [optional] [default to undefined]
**order_amount** | **number** | Сумма заказа. | [optional] [default to undefined]
**discount_type** | **string** | Тип скидки. | [optional] [default to undefined]
**discount_value** | **number** | Размер скидки. | [optional] [default to undefined]

## Example

```typescript
import { GetSellerActionsV1ResponseAction } from './api';

const instance: GetSellerActionsV1ResponseAction = {
    id,
    title,
    action_type,
    description,
    date_start,
    date_end,
    freeze_date,
    potential_products_count,
    participating_products_count,
    is_participating,
    is_voucher_action,
    banned_products_count,
    with_targeting,
    order_amount,
    discount_type,
    discount_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
