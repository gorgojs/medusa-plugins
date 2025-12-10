# OrdersStatsItemDTO

Список товаров в заказе после возможных изменений.  В ходе обработки заказа Маркет может удалить из него единицы товаров — при проблемах на складе или по инициативе пользователя.  * Если из заказа удалены все единицы товара, его не будет в списке `items` — только в списке `initialItems`.  * Если в заказе осталась хотя бы одна единица товара, он будет и в списке `items` (с уменьшенным количеством единиц `count`), и в списке `initialItems` (с первоначальным количеством единиц `initialCount`). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerName** | **string** | Название товара. | [optional] [default to undefined]
**marketSku** | **number** | Идентификатор карточки товара на Маркете. | [optional] [default to undefined]
**shopSku** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]
**count** | **number** | Количество единиц товара с учетом удаленных единиц.  Если из заказа удалены все единицы товара, он попадет только в список &#x60;initialItems&#x60;.  | [optional] [default to undefined]
**prices** | [**Array&lt;OrdersStatsPriceDTO&gt;**](OrdersStatsPriceDTO.md) | Цена или скидки на товар. | [optional] [default to undefined]
**warehouse** | [**OrdersStatsWarehouseDTO**](OrdersStatsWarehouseDTO.md) |  | [optional] [default to undefined]
**details** | [**Array&lt;OrdersStatsDetailsDTO&gt;**](OrdersStatsDetailsDTO.md) | Информация об удалении товара из заказа. | [optional] [default to undefined]
**cisList** | **Set&lt;string&gt;** | Список кодов идентификации товара в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]). | [optional] [default to undefined]
**initialCount** | **number** | Первоначальное количество единиц товара. | [optional] [default to undefined]
**bidFee** | **number** | Списанная ставка ближайшего конкурента.  Указывается в процентах от стоимости товара и умножается на 100. Например, ставка 5% обозначается как 500.  | [optional] [default to undefined]
**cofinanceThreshold** | **number** | Порог для скидок с Маркетом на момент оформления заказа. [Что это такое?](https://yandex.ru/support/marketplace/marketing/smart-pricing.html#sponsored-discounts)  Точность — два знака после запятой.  | [optional] [default to undefined]
**cofinanceValue** | **number** | Скидка с Маркетом. [Что это такое?](https://yandex.ru/support/marketplace/marketing/smart-pricing.html#sponsored-discounts)  Точность — два знака после запятой.  | [optional] [default to undefined]

## Example

```typescript
import { OrdersStatsItemDTO } from './api';

const instance: OrdersStatsItemDTO = {
    offerName,
    marketSku,
    shopSku,
    count,
    prices,
    warehouse,
    details,
    cisList,
    initialCount,
    bidFee,
    cofinanceThreshold,
    cofinanceValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
