# V2ProductInfoPicturesResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**primary_photo** | **Array&lt;string&gt;** | Ссылка на главное изображение. | [optional] [default to undefined]
**photo** | **Array&lt;string&gt;** | Ссылки на фотографии товара. | [optional] [default to undefined]
**color_photo** | **Array&lt;string&gt;** | Ссылки на загруженные образцы цвета. | [optional] [default to undefined]
**photo_360** | **Array&lt;string&gt;** | Ссылки на изображения 360. | [optional] [default to undefined]
**errors** | [**Array&lt;V2ProductInfoPicturesResponseError&gt;**](V2ProductInfoPicturesResponseError.md) | Список ошибок по изображениям товара. | [optional] [default to undefined]

## Example

```typescript
import { V2ProductInfoPicturesResponseItem } from './api';

const instance: V2ProductInfoPicturesResponseItem = {
    product_id,
    primary_photo,
    photo,
    color_photo,
    photo_360,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
