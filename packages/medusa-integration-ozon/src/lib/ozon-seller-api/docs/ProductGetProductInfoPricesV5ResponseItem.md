# ProductGetProductInfoPricesV5ResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquiring** | **number** | Максимальная комиссия за эквайринг.  [Подробнее об эквайринге в Базе знаний продавца](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/rashody-na-dop-uslugi#экваиринг)  | [optional] [default to undefined]
**commissions** | [**ItemCommissionsv5**](ItemCommissionsv5.md) |  | [optional] [default to undefined]
**marketing_actions** | [**ItemMarketing**](ItemMarketing.md) |  | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**price** | [**ItemPricev5**](ItemPricev5.md) |  | [optional] [default to undefined]
**price_indexes** | [**GetProductInfoPricesResponseItemPriceIndexes**](GetProductInfoPricesResponseItemPriceIndexes.md) |  | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**volume_weight** | **number** | Объёмный вес товара. | [optional] [default to undefined]

## Example

```typescript
import { ProductGetProductInfoPricesV5ResponseItem } from './api';

const instance: ProductGetProductInfoPricesV5ResponseItem = {
    acquiring,
    commissions,
    marketing_actions,
    offer_id,
    price,
    price_indexes,
    product_id,
    volume_weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
