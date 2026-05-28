# ProductProductInfoPicturesResponsePicture


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_360** | **boolean** | Признак, что картинка — изображение 360. | [optional] [default to undefined]
**is_color** | **boolean** | Признак, что картинка — образец цвета. | [optional] [default to undefined]
**is_primary** | **boolean** | Признак, что картинка — главное изображение. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**state** | **string** | Статус загрузки изображения.   Если вызывали метод [/v1/product/pictures/import](#operation/ProductAPI_ProductImportPictures), то в ответе метода всегда будет &#x60;imported&#x60; — картинка не обработана. Чтобы посмотреть финальный статус, примерно через 10 секунд вызовите метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures).  Если вызывали метод [/v1/product/pictures/info](#operation/ProductAPI_ProductInfoPictures), вы увидите один из статусов: - &#x60;uploaded&#x60; — изображение загружено; - &#x60;pending&#x60; — при загрузке изображения возникла ошибка. Повторите попытку позже.  | [optional] [default to undefined]
**url** | **string** | Адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG. | [optional] [default to undefined]

## Example

```typescript
import { ProductProductInfoPicturesResponsePicture } from './api';

const instance: ProductProductInfoPicturesResponsePicture = {
    is_360,
    is_color,
    is_primary,
    product_id,
    state,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
