# OfferMediaFilesDTO

Информация о медиафайлах товара. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstVideoAsCover** | **boolean** | Использовать первое видео в карточке как видеообложку.  Передайте &#x60;true&#x60;, чтобы первое видео использовалось как видеообложка, или &#x60;false&#x60;, чтобы видеообложка не отображалась в карточке товара.  | [optional] [default to undefined]
**videos** | [**Array&lt;OfferMediaFileDTO&gt;**](OfferMediaFileDTO.md) | Видеофайлы товара.  | [optional] [default to undefined]
**pictures** | [**Array&lt;OfferMediaFileDTO&gt;**](OfferMediaFileDTO.md) | Изображения товара.  | [optional] [default to undefined]
**manuals** | [**Array&lt;OfferMediaFileDTO&gt;**](OfferMediaFileDTO.md) | Руководства по использованию товара.  | [optional] [default to undefined]

## Example

```typescript
import { OfferMediaFilesDTO } from './api';

const instance: OfferMediaFilesDTO = {
    firstVideoAsCover,
    videos,
    pictures,
    manuals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
