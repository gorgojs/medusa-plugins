# FbsPostingDetailPrrOption

Информация об услуге погрузочно-разгрузочных работ. Актуально для КГТ-отправлений с доставкой силами продавца или интегрированной службой.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код услуги погрузочно-разгрузочных работ: - &#x60;lift&#x60; — подъём на лифте. - &#x60;stairs&#x60; — подъём по лестнице. - &#x60;none&#x60; — покупатель отказался от услуги, поднимать товары не нужно. - &#x60;delivery_default&#x60; — доставка включена в стоимость, по условиям оферты нужно доставить товар на этаж.  | [optional] [default to undefined]
**price** | **string** | Стоимость услуги, которую Ozon компенсирует продавцу. | [optional] [default to undefined]
**currency_code** | **string** | Валюта. | [optional] [default to undefined]
**floor** | **string** | Этаж, на который нужно поднять товар. | [optional] [default to undefined]

## Example

```typescript
import { FbsPostingDetailPrrOption } from './api';

const instance: FbsPostingDetailPrrOption = {
    code,
    price,
    currency_code,
    floor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
