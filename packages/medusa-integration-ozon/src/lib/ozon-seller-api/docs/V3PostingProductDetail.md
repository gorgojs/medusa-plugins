# V3PostingProductDetail

Размеры товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**V3Dimensions**](V3Dimensions.md) |  | [optional] [default to undefined]
**mandatory_mark** | **Array&lt;string&gt;** | Обязательная маркировка товара. | [optional] [default to undefined]
**name** | **string** | Название. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**price** | **string** | Цена товара с учётом скидок — это значение показывается на карточке товара. | [optional] [default to undefined]
**jw_uin** | **Array&lt;string&gt;** | Уникальный идентификационный номер (УИН) ювелирного изделия. | [optional] [default to undefined]
**currency_code** | **string** | Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**is_blr_traceable** | **boolean** | Признак прослеживаемости товара. | [optional] [default to undefined]
**is_marketplace_buyout** | **boolean** | Признак выкупа товара в ЕАЭС и другие страны. &lt;br&gt; [Подробнее о продаже товаров в ЕАЭС и другие страны в Базе знаний](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/prodaji-tovarov-v-eaes-i-drugie-strany#%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B2%D1%8B%D0%BA%D1%83%D0%BF%D0%B0%D0%B5%D1%82-ozon) | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара на Ozon. | [optional] [default to undefined]
**is_weight_needed** | **boolean** | &#x60;true&#x60;, если товар весовой.  | [optional] [default to undefined]
**weight_max** | **number** | Максимальный вес экземпляра. | [optional] [default to undefined]
**weight_min** | **number** | Минимальный вес экземпляра. | [optional] [default to undefined]
**has_imei** | **boolean** | Признак наличия IMEI.  Если IMEI есть — &#x60;true&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { V3PostingProductDetail } from './api';

const instance: V3PostingProductDetail = {
    dimensions,
    mandatory_mark,
    name,
    offer_id,
    price,
    jw_uin,
    currency_code,
    is_blr_traceable,
    is_marketplace_buyout,
    quantity,
    sku,
    is_weight_needed,
    weight_max,
    weight_min,
    has_imei,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
