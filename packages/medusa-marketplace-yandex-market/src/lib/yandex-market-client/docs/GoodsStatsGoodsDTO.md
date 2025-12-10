# GoodsStatsGoodsDTO

Информация о товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shopSku** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]
**marketSku** | **number** | Идентификатор карточки товара на Маркете. | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**price** | **number** | Цена товара в валюте, которая установлена [в кабинете продавца на Маркете](https://partner.market.yandex.ru/). | [optional] [default to undefined]
**categoryId** | **number** | Идентификатор категории товара на Маркете. | [optional] [default to undefined]
**categoryName** | **string** | Название категории товара на Маркете. | [optional] [default to undefined]
**weightDimensions** | [**GoodsStatsWeightDimensionsDTO**](GoodsStatsWeightDimensionsDTO.md) |  | [optional] [default to undefined]
**warehouses** | [**Array&lt;GoodsStatsWarehouseDTO&gt;**](GoodsStatsWarehouseDTO.md) | Информация о складах, на которых хранится товар.  Параметр не приходит, если товара нет ни на одном складе.  | [optional] [default to undefined]
**tariffs** | [**Array&lt;TariffDTO&gt;**](TariffDTO.md) | Информация о тарифах, по которым нужно заплатить за услуги Маркета.  По некоторым услугам могут возвращаться несколько разных стоимостей. Например, в модели FBS стоимость услуги &#x60;SORTING&#x60; (обработка заказа) зависит от способа отгрузки и количества заказов в отгрузке. Подробнее о тарифах на услуги читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/introduction/rates/models/).  | [optional] [default to undefined]
**pictures** | **Set&lt;string&gt;** | Ссылки (URL) изображений товара в хорошем качестве. | [optional] [default to undefined]

## Example

```typescript
import { GoodsStatsGoodsDTO } from './api';

const instance: GoodsStatsGoodsDTO = {
    shopSku,
    marketSku,
    name,
    price,
    categoryId,
    categoryName,
    weightDimensions,
    warehouses,
    tariffs,
    pictures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
