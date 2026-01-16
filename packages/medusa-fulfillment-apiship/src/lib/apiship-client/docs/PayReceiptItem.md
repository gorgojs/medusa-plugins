# PayReceiptItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **number** | Стоимость единицы товара с учетом НДС в рублях | [default to undefined]
**quantity** | **number** | Кол-во товара | [default to undefined]
**title** | **string** | Наименование товара | [default to undefined]
**vatRate** | **number** | Код процентной ставки НДС | [optional] [default to undefined]
**barcode** | **string** | Штрихкод на товаре | [optional] [default to undefined]
**companyName** | **string** | Наименование компании поставщика / продавца товара | [optional] [default to undefined]
**companyInn** | **string** | ИНН поставщика / продавца товара | [optional] [default to undefined]

## Example

```typescript
import { PayReceiptItem } from './api';

const instance: PayReceiptItem = {
    price,
    quantity,
    title,
    vatRate,
    barcode,
    companyName,
    companyInn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
