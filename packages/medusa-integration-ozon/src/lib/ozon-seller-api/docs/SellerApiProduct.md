# SellerApiProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**price** | **number** | Текущая цена товара без скидки. | [optional] [default to undefined]
**action_price** | **number** | Цена товара по акции. | [optional] [default to undefined]
**alert_max_action_price_failed** | **boolean** | &#x60;true&#x60;, если цена товара выше рекомендуемой. Товар отмечен красным и может быть исключён из акции.  | [optional] [default to undefined]
**alert_max_action_price** | **number** | Рекомендуемая цена товара по акции. | [optional] [default to undefined]
**max_action_price** | **number** | Максимально возможная цена товара по акции. | [optional] [default to undefined]
**add_mode** | **string** | Тип добавления товара в акцию: автоматически или вручную продавцом.  | [optional] [default to undefined]
**min_stock** | **number** | Минимальное число единиц товара в акции типа «Скидка на сток». | [optional] [default to undefined]
**stock** | **number** | Число единиц товара в акции типа «Скидка на сток». | [optional] [default to undefined]
**current_boost** | **number** | Размер бустинга товара. | [optional] [default to undefined]
**price_min_elastic** | **number** | Цена товара для минимального размера бустинга. | [optional] [default to undefined]
**price_max_elastic** | **number** | Цена товара для максимального размера бустинга. | [optional] [default to undefined]
**min_boost** | **number** | Минимальный размер бустинга в процентах. | [optional] [default to undefined]
**max_boost** | **number** | Максимальный размер бустинга в процентах. | [optional] [default to undefined]

## Example

```typescript
import { SellerApiProduct } from './api';

const instance: SellerApiProduct = {
    id,
    price,
    action_price,
    alert_max_action_price_failed,
    alert_max_action_price,
    max_action_price,
    add_mode,
    min_stock,
    stock,
    current_boost,
    price_min_elastic,
    price_max_elastic,
    min_boost,
    max_boost,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
