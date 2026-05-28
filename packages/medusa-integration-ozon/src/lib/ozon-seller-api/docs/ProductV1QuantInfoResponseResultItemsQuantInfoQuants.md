# ProductV1QuantInfoResponseResultItemsQuantInfoQuants


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcodes_extended** | [**Array&lt;ProductV1QuantInfoResponseResultItemsQuantInfoQuantsBarcodesExtended&gt;**](ProductV1QuantInfoResponseResultItemsQuantInfoQuantsBarcodesExtended.md) | Информация о штрихкодах. | [optional] [default to undefined]
**dimensions** | [**ProductV1QuantInfoResponseResultItemsQuantInfoQuantsDimensions**](ProductV1QuantInfoResponseResultItemsQuantInfoQuantsDimensions.md) |  | [optional] [default to undefined]
**marketing_price** | [**ProductV1QuantInfoResponseResultItemsQuantInfoQuantsMarketingPrice**](ProductV1QuantInfoResponseResultItemsQuantInfoQuantsMarketingPrice.md) |  | [optional] [default to undefined]
**min_price** | **string** | Минимальная цена, указанная продавцом. | [optional] [default to undefined]
**old_price** | **string** | Зачёркнутая цена, указанная продавцом. | [optional] [default to undefined]
**price** | **string** | Цена продажи, указанная продавцом. | [optional] [default to undefined]
**quant_code** | **string** | Идентификатор эконом-товара. | [optional] [default to undefined]
**quant_sice** | **number** | Размер кванта. | [optional] [default to undefined]
**shipment_type** | **string** | Тип доставки товара. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**statuses** | [**ProductV1QuantInfoResponseResultItemsQuantInfoQuantsTexts**](ProductV1QuantInfoResponseResultItemsQuantInfoQuantsTexts.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductV1QuantInfoResponseResultItemsQuantInfoQuants } from './api';

const instance: ProductV1QuantInfoResponseResultItemsQuantInfoQuants = {
    barcodes_extended,
    dimensions,
    marketing_price,
    min_price,
    old_price,
    price,
    quant_code,
    quant_sice,
    shipment_type,
    sku,
    statuses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
