# V1ItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon_path** | **string** | Ссылка на изображение товара. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**barcode** | **string** | Штрихкод товара. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**quant** | **number** | Количество товаров в одной упаковке. | [optional] [default to undefined]
**is_quant_editable** | **boolean** | &#x60;true&#x60;, если количество товаров в одной упаковке можно изменить.  | [optional] [default to undefined]
**volume_in_litres** | **number** | Объём товара в литрах. | [optional] [default to undefined]
**total_volume_in_litres** | **number** | Объём всех товаров в литрах. | [optional] [default to undefined]
**contractor_item_code** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**sfbo_attribute** | [**V1ItemSfboAttribute**](V1ItemSfboAttribute.md) |  | [optional] [default to undefined]
**shipment_type** | [**V1BundleItemShipmentType**](V1BundleItemShipmentType.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Теги товаров из поставки или заявки на поставку.  Возможные значения: - &#x60;EVSD_REQUIRED&#x60; — товар с сертификацией «Меркурий»; - &#x60;MARKING_REQUIRED&#x60; — товар с обязательной маркировкой «Честный ЗНАК»; - &#x60;MARKING_POSSIBLE&#x60; — товар с возможной маркировкой «Честный ЗНАК»; - &#x60;JEWELRY&#x60; — товар с признаком ювелирного изделия; - &#x60;TRACEABLE&#x60; — товар с признаком прослеживаемости; - &#x60;ETTN_REQUIRED&#x60; — товар с признаком прослеживаемости, для которого необходима электронная ТТН; - &#x60;UNDEFINED&#x60; — неизвестный тег.  | [optional] [default to undefined]
**placement_zone** | **string** | Зона размещения товара: - &#x60;UNSPECIFIED&#x60; — не указана; - &#x60;CLOSED_ZONE&#x60; — закрытая зона; - &#x60;DANGEROUS_GOODS&#x60; — товар 2–4 класса опасности; - &#x60;PRODUCTS&#x60; — продукты; - &#x60;SORT&#x60; — сортируемый товар; - &#x60;NON_SORT&#x60; — несортируемый товар; - &#x60;OVERSIZE&#x60; — крупногабаритный товар; - &#x60;JEWELRY&#x60; — ювелирные изделия; - &#x60;UNRESOLVED&#x60; — неизвестная зона.  | [optional] [default to PlacementZoneEnum_Unspecified]

## Example

```typescript
import { V1ItemResponse } from './api';

const instance: V1ItemResponse = {
    icon_path,
    sku,
    name,
    quantity,
    barcode,
    product_id,
    quant,
    is_quant_editable,
    volume_in_litres,
    total_volume_in_litres,
    contractor_item_code,
    sfbo_attribute,
    shipment_type,
    tags,
    placement_zone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
