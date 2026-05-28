# Productv1ProductImportPicturesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_image** | **string** | Маркетинговый цвет. | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** | Массив ссылок на изображения. До 30 штук. Изображения в массиве расположены в порядке их расположения на сайте.  Первое изображение в массиве будет главным.  | [optional] [default to undefined]
**images360** | **Array&lt;string&gt;** | Массив изображений 360. До 70 штук.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.  | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [default to undefined]

## Example

```typescript
import { Productv1ProductImportPicturesRequest } from './api';

const instance: Productv1ProductImportPicturesRequest = {
    color_image,
    images,
    images360,
    product_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
