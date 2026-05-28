# V3FbsPostingProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**price** | **string** | Цена товара. | [optional] [default to undefined]
**quantity** | **number** | Количество товара в отправлении. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**currency_code** | **string** | Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**is_blr_traceable** | **boolean** | Признак прослеживаемости товара. | [optional] [default to undefined]
**is_marketplace_buyout** | **boolean** | Признак выкупа товара в ЕАЭС и другие страны. &lt;br&gt; [Подробнее о продаже товаров в ЕАЭС и другие страны в Базе знаний](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/prodaji-tovarov-v-eaes-i-drugie-strany#%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B2%D1%8B%D0%BA%D1%83%D0%BF%D0%B0%D0%B5%D1%82-ozon) | [optional] [default to undefined]
**imei** | **Array&lt;string&gt;** | Список IMEI мобильных устройств. | [optional] [default to undefined]

## Example

```typescript
import { V3FbsPostingProduct } from './api';

const instance: V3FbsPostingProduct = {
    name,
    offer_id,
    price,
    quantity,
    sku,
    currency_code,
    is_blr_traceable,
    is_marketplace_buyout,
    imei,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
