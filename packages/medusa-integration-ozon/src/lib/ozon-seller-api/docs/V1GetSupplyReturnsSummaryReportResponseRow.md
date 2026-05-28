# V1GetSupplyReturnsSummaryReportResponseRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** | Штрихкод товара. | [optional] [default to undefined]
**box_barcode** | **string** | Штрихкод коробки. | [optional] [default to undefined]
**box_height** | **number** | Высота коробки в метрах. | [optional] [default to undefined]
**box_id** | **number** | Идентификатор коробки. | [optional] [default to undefined]
**box_length** | **number** | Длина коробки в метрах. | [optional] [default to undefined]
**box_state** | **string** | Статус коробки: - &#x60;доступно к вывозу&#x60;; - &#x60;уже в заявке на вывоз&#x60;; - &#x60;подготовка к вывозу&#x60;; - &#x60;потеряна&#x60;; - &#x60;в пути&#x60;; - &#x60;компенсировано продавцу&#x60;; - &#x60;утилизирована&#x60;; - &#x60;собрано&#x60;; - &#x60;на СЦ&#x60;; - &#x60;у курьера&#x60;; - &#x60;неудачная попытка доставки&#x60;; - &#x60;получена&#x60;; - &#x60;отменено&#x60;; - &#x60;в процессе утилизации&#x60;; - &#x60;в пункте выдачи&#x60;; - &#x60;расформирована&#x60;.  | [optional] [default to undefined]
**box_volume** | **number** | Объём коробки в литрах. | [optional] [default to undefined]
**box_weight** | **number** | Вес коробки в килограммах. | [optional] [default to undefined]
**box_width** | **number** | Ширина коробки в метрах. | [optional] [default to undefined]
**clearing_warehouse_name** | **string** | Склад, на котором подготовили товары для вывоза. | [optional] [default to undefined]
**delivery_date** | **string** | Дата доставки товара в ПВЗ, СЦ или курьером. | [optional] [default to undefined]
**delivery_type** | **string** | Способ вывоза: - &#x60;самовывоз&#x60;; - &#x60;ПВЗ&#x60;; - &#x60;СЦ&#x60;; - &#x60;курьерская доставка&#x60;.  | [optional] [default to undefined]
**destination_warehouse_address** | **string** | Адрес склада назначения. | [optional] [default to undefined]
**destination_warehouse_name** | **string** | Название склада назначения. | [optional] [default to undefined]
**given_out_date** | **string** | Дата, когда продавец забрал товары самовывозом со склада Ozon. | [optional] [default to undefined]
**is_auto_return** | **boolean** | Признак, что заявка на вывоз была создана автоматически.  [Подробнее об автовывозе в Базе знаний продавца](https://seller-edu.ozon.ru/fbo/vozvraty-utilizaciya-izlishki/vyvoz-tovarov-so-sklada-ozon/avtovyvoz-tovarov-so-sklada-ozon)  | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Артикул товара. | [optional] [default to undefined]
**preliminary_delivery_price** | **number** | Предварительная стоимость вывоза товара со склада силами Ozon. | [optional] [default to undefined]
**quant_count** | **number** | Количество квантов в заявке на вывоз. | [optional] [default to undefined]
**quantity_for_return** | **number** | Количество единиц товара в коробке или заявке на вывоз. | [optional] [default to undefined]
**return_created_at** | **string** | Дата создания заявки на вывоз. | [optional] [default to undefined]
**return_id** | **number** | Идентификатор заявки на вывоз. | [optional] [default to undefined]
**return_state** | **string** | Статус заявки на вывоз.  Возможные значения для самовывоза со стока: - &#x60;создана&#x60;; - &#x60;собирается на складе&#x60;; - &#x60;собрана складом&#x60;; - &#x60;завершена&#x60;; - &#x60;заполнение данных&#x60;; - &#x60;утилизирована&#x60;.  Возможные значения для СЦ, ПВЗ и курьерской доставки со стока: - &#x60;создаётся&#x60;; - &#x60;собирается на складке&#x60;; - &#x60;передаём в логистику&#x60;; - &#x60;в пути&#x60;; - &#x60;завершено&#x60;; - &#x60;можно забирать часть&#x60;; - &#x60;можно забирать все&#x60;; - &#x60;утилизирована&#x60;.  Возможные значения для вывоза с поставок:  - &#x60;заполнение данных&#x60;; - &#x60;подготовка к выдаче&#x60;; - &#x60;выдача&#x60;; - &#x60;завершено&#x60;; - &#x60;отклонено складом&#x60;; - &#x60;готово к вывозу&#x60;; - &#x60;утилизировано&#x60;; - &#x60;обрабатывается&#x60;; - &#x60;собирается на складе&#x60;; - &#x60;передаётся в логистику&#x60;; - &#x60;в пути&#x60;; - &#x60;можно забрать часть&#x60;; - &#x60;можно забрать все&#x60;.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**stock_type** | **string** | Тип остатков для товаров стока: - &#x60;доступно к продаже&#x60;; - &#x60;маркируемые товары, ожидающие действий&#x60;; - &#x60;истекает срок годности&#x60;; - &#x60;брак, доступный к вывозу со стока&#x60;.  Тип остатков для товаров в коробках: - &#x60;брак&#x60;; - &#x60;опознанные излишки&#x60;; - &#x60;неопознанные излишки без SKU&#x60;.  | [optional] [default to undefined]
**utilization_date** | **string** | Дата утилизации. | [optional] [default to undefined]

## Example

```typescript
import { V1GetSupplyReturnsSummaryReportResponseRow } from './api';

const instance: V1GetSupplyReturnsSummaryReportResponseRow = {
    barcode,
    box_barcode,
    box_height,
    box_id,
    box_length,
    box_state,
    box_volume,
    box_weight,
    box_width,
    clearing_warehouse_name,
    delivery_date,
    delivery_type,
    destination_warehouse_address,
    destination_warehouse_name,
    given_out_date,
    is_auto_return,
    name,
    offer_id,
    preliminary_delivery_price,
    quant_count,
    quantity_for_return,
    return_created_at,
    return_id,
    return_state,
    sku,
    stock_type,
    utilization_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
