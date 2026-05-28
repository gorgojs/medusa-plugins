# V3GetProductInfoListResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availabilities** | [**Array&lt;GetProductInfoListResponseAvailability&gt;**](GetProductInfoListResponseAvailability.md) | Информация о доступности товара. | [optional] [default to undefined]
**barcodes** | **Array&lt;string&gt;** | Все штрихкоды товара. | [optional] [default to undefined]
**color_image** | **Array&lt;string&gt;** | Изображение цвета товара. | [optional] [default to undefined]
**commissions** | [**Array&lt;GetProductInfoListResponseCommission&gt;**](GetProductInfoListResponseCommission.md) | Информация о комиссиях. | [optional] [default to undefined]
**created_at** | **string** | Дата и время создания товара. | [optional] [default to undefined]
**currency_code** | **string** | Валюта. | [optional] [default to undefined]
**description_category_id** | **number** | Идентификатор категории. Используйте его с методами [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes) и [/v1/description-category/attribute/values](#operation/DescriptionCategoryAPI_GetAttributeValues).  | [optional] [default to undefined]
**discounted_fbo_stocks** | **number** | Остатки уценённого товара на складе Ozon. | [optional] [default to undefined]
**errors** | [**Array&lt;GetProductInfoListResponseError&gt;**](GetProductInfoListResponseError.md) | Информация об ошибках при создании или валидации товара. | [optional] [default to undefined]
**has_discounted_fbo_item** | **boolean** | Признак, что у товара есть уценённые аналоги на складе Ozon. | [optional] [default to undefined]
**id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** | Массив ссылок на изображения. Изображения в массиве расположены в порядке их расположения на сайте. Если параметр &#x60;primary_image&#x60; не указан, первое изображение в массиве главное для товара.  | [optional] [default to undefined]
**images360** | **Array&lt;string&gt;** | Массив изображений 360. | [optional] [default to undefined]
**is_archived** | **boolean** | &#x60;true&#x60;, если товар архивирован вручную.  | [optional] [default to undefined]
**is_autoarchived** | **boolean** | &#x60;true&#x60;, если товар архивирован автоматически.  | [optional] [default to undefined]
**is_discounted** | **boolean** | Признак, является ли товар уценённым:   - Если товар создавался продавцом как уценённый — &#x60;true&#x60;.    - Если товар не уценённый или был уценён Ozon — &#x60;false&#x60;.  | [optional] [default to undefined]
**is_kgt** | **boolean** | Признак крупногабаритного товара. | [optional] [default to undefined]
**is_prepayment_allowed** | **boolean** | &#x60;true&#x60;, если возможна предоплата.  | [optional] [default to undefined]
**is_super** | **boolean** | Признак супер-товара.  [Подробнее о супер-товарах в Базе знаний продавца](https://seller-edu.ozon.ru/fbo/rabota-so-stokom/super-tovary)  | [optional] [default to undefined]
**min_price** | **string** | Минимальная цена товара после применения акций. | [optional] [default to undefined]
**model_info** | [**GetProductInfoListResponseModelInfo**](GetProductInfoListResponseModelInfo.md) |  | [optional] [default to undefined]
**name** | **string** | Название. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**old_price** | **string** | Цена до учёта скидок. На карточке товара отображается зачёркнутой. | [optional] [default to undefined]
**price** | **string** | Цена товара с учётом скидок — это значение показывается на карточке товара. | [optional] [default to undefined]
**price_indexes** | [**GetProductInfoListResponsePriceIndexes**](GetProductInfoListResponsePriceIndexes.md) |  | [optional] [default to undefined]
**primary_image** | **Array&lt;string&gt;** | Главное изображение товара. | [optional] [default to undefined]
**promotions** | [**Array&lt;V3GetProductInfoListResponsePromotion&gt;**](V3GetProductInfoListResponsePromotion.md) | Акции. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**sources** | [**Array&lt;GetProductInfoListResponseSource&gt;**](GetProductInfoListResponseSource.md) | Информация об источниках создания товара. | [optional] [default to undefined]
**statuses** | [**GetProductInfoListResponseStatuses**](GetProductInfoListResponseStatuses.md) |  | [optional] [default to undefined]
**stocks** | [**GetProductInfoListResponseStocks**](GetProductInfoListResponseStocks.md) |  | [optional] [default to undefined]
**type_id** | **number** | Идентификатор типа товара. | [optional] [default to undefined]
**updated_at** | **string** | Дата последнего обновления товара. | [optional] [default to undefined]
**vat** | **string** | Ставка НДС для товара. | [optional] [default to undefined]
**visibility_details** | [**GetProductInfoListResponseVisibilityDetails**](GetProductInfoListResponseVisibilityDetails.md) |  | [optional] [default to undefined]
**volume_weight** | **number** | Объёмный вес товара. | [optional] [default to undefined]

## Example

```typescript
import { V3GetProductInfoListResponseItem } from './api';

const instance: V3GetProductInfoListResponseItem = {
    availabilities,
    barcodes,
    color_image,
    commissions,
    created_at,
    currency_code,
    description_category_id,
    discounted_fbo_stocks,
    errors,
    has_discounted_fbo_item,
    id,
    images,
    images360,
    is_archived,
    is_autoarchived,
    is_discounted,
    is_kgt,
    is_prepayment_allowed,
    is_super,
    min_price,
    model_info,
    name,
    offer_id,
    old_price,
    price,
    price_indexes,
    primary_image,
    promotions,
    sku,
    sources,
    statuses,
    stocks,
    type_id,
    updated_at,
    vat,
    visibility_details,
    volume_weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
