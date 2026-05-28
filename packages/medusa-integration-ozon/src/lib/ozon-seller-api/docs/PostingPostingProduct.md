# PostingPostingProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **string** | Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:  - &#x60;RUB&#x60; — российский рубль, - &#x60;BYN&#x60; — белорусский рубль, - &#x60;KZT&#x60; — тенге, - &#x60;EUR&#x60; — евро, - &#x60;USD&#x60; — доллар США, - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**price** | **string** | Цена товара. | [optional] [default to undefined]
**required_qty_for_digital_code** | **number** | Количество кодов цифровых товаров, которое нужно передать по товару в отправлении. Передайте коды цифровых товаров с помощью метода [/v1/posting/digital/codes/upload](#operation/UploadPostingCodes). | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { PostingPostingProduct } from './api';

const instance: PostingPostingProduct = {
    currency_code,
    name,
    offer_id,
    price,
    required_qty_for_digital_code,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
