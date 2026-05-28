# V1GetDiscountTaskListResponseTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заявки. | [optional] [default to undefined]
**created_at** | **string** | Дата создания заявки. | [optional] [default to undefined]
**end_at** | **string** | Время окончания действия заявки. | [optional] [default to undefined]
**edited_till** | **string** | Время для изменения решения. | [optional] [default to undefined]
**status** | **string** | Статус заявки. | [optional] [default to undefined]
**customer_name** | **string** | Имя покупателя. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**user_comment** | **string** | Комментарий покупателя к заявке. | [optional] [default to undefined]
**seller_comment** | **string** | Комментарий продавца к заявке. | [optional] [default to undefined]
**requested_price** | **number** | Цена по заявке. | [optional] [default to undefined]
**approved_price** | **number** | Одобренная цена. | [optional] [default to undefined]
**original_price** | **number** | Цена товара до всех скидок. | [optional] [default to undefined]
**discount** | **number** | Скидка в рублях. | [optional] [default to undefined]
**discount_percent** | **number** | Скидка в процентах. | [optional] [default to undefined]
**base_price** | **number** | Базовая цена, по которой товар продаётся на Ozon, если не участвует в акции. | [optional] [default to undefined]
**min_auto_price** | **number** | Минимальное значение цены после автоприменения скидок и акций. | [optional] [default to undefined]
**prev_task_id** | **number** | Идентификатор предыдущей заявки от покупателя по этому товару. | [optional] [default to undefined]
**is_damaged** | **boolean** | Является ли товар уценённым. &#x60;true&#x60;, если уценённый. | [optional] [default to undefined]
**moderated_at** | **string** | Дата модерации: просмотра, одобрения или отклонения заявки.  | [optional] [default to undefined]
**approved_discount** | **number** | Скидка в рублях, которую одобрил продавец. Передайте значение &#x60;0&#x60;, если продавец не одобрял заявку. | [optional] [default to undefined]
**approved_discount_percent** | **number** | Скидка в процентах, которую одобрил продавец. Передайте значение &#x60;0&#x60;, если продавец не одобрял заявку. | [optional] [default to undefined]
**is_purchased** | **boolean** | Покупал ли пользователь товар. &#x60;true&#x60;, если покупал. | [optional] [default to undefined]
**is_auto_moderated** | **boolean** | Была ли заявка промодерирована автоматически. &#x60;true&#x60;, если модерация была автоматической. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**email** | **string** | Электронный адрес сотрудника продавца, который обработал заявку. | [optional] [default to undefined]
**last_name** | **string** | Фамилия сотрудника продавца, который обработал заявку. | [optional] [default to undefined]
**first_name** | **string** | Имя сотрудника продавца, который обработал заявку. | [optional] [default to undefined]
**patronymic** | **string** | Отчество сотрудника продавца, который обработал заявку. | [optional] [default to undefined]
**approved_quantity_min** | **number** | Минимальное одобренное количество товаров. | [optional] [default to undefined]
**approved_quantity_max** | **number** | Максимальное одобренное количество товаров. | [optional] [default to undefined]
**requested_quantity_min** | **number** | Запрошенное минимальное количество товаров. | [optional] [default to undefined]
**requested_quantity_max** | **number** | Запрошенное максимальное количество товаров. | [optional] [default to undefined]
**requested_price_with_fee** | **number** | Цена по заявке c региональной наценкой. | [optional] [default to undefined]
**approved_price_with_fee** | **number** | Одобренная цена с региональной наценкой. | [optional] [default to undefined]
**approved_price_fee_percent** | **number** | Региональная наценка в процентах. | [optional] [default to undefined]

## Example

```typescript
import { V1GetDiscountTaskListResponseTask } from './api';

const instance: V1GetDiscountTaskListResponseTask = {
    id,
    created_at,
    end_at,
    edited_till,
    status,
    customer_name,
    sku,
    user_comment,
    seller_comment,
    requested_price,
    approved_price,
    original_price,
    discount,
    discount_percent,
    base_price,
    min_auto_price,
    prev_task_id,
    is_damaged,
    moderated_at,
    approved_discount,
    approved_discount_percent,
    is_purchased,
    is_auto_moderated,
    offer_id,
    email,
    last_name,
    first_name,
    patronymic,
    approved_quantity_min,
    approved_quantity_max,
    requested_quantity_min,
    requested_quantity_max,
    requested_price_with_fee,
    approved_price_with_fee,
    approved_price_fee_percent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
