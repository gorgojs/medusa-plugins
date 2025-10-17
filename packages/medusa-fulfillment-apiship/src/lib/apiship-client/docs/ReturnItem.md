# ReturnItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**weight** | **number** | Вес единицы товара в граммах | [optional] [default to undefined]
**articul** | **string** | Артикул товара | [optional] [default to undefined]
**markCode** | **string** | Код маркировки (UTF-8) | [optional] [default to undefined]
**description** | **string** | Наименование товара | [default to undefined]
**quantity** | **number** | Кол-во товара. Если указан markCode, то кол-во не может быть &gt; 1 | [default to undefined]
**assessedCost** | **number** | Оценочная стоимость единицы товара в рублях | [optional] [default to undefined]
**barcode** | **string** | Штрихкод на товаре | [optional] [default to undefined]
**companyName** | **string** | Наименование компании поставщика / продавца товара | [optional] [default to undefined]
**companyInn** | **string** | ИНН поставщика / продавца товара | [optional] [default to undefined]
**companyPhone** | **string** | Телефон поставщика / продавца товара | [optional] [default to undefined]

## Example

```typescript
import { ReturnItem } from './api';

const instance: ReturnItem = {
    weight,
    articul,
    markCode,
    description,
    quantity,
    assessedCost,
    barcode,
    companyName,
    companyInn,
    companyPhone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
