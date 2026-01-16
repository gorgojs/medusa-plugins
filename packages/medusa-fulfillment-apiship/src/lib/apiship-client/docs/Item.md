# Item


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **number** | Высота единицы товара в сантиметрах | [optional] [default to undefined]
**length** | **number** | Длина единицы товара в сантиметрах | [optional] [default to undefined]
**width** | **number** | Ширина единицы товара в сантиметрах | [optional] [default to undefined]
**weight** | **number** | Вес единицы товара в граммах | [optional] [default to undefined]
**articul** | **string** | Артикул товара | [optional] [default to undefined]
**markCode** | **string** | Код маркировки (UTF-8) | [optional] [default to undefined]
**description** | **string** | Наименование товара | [default to undefined]
**quantity** | **number** | Кол-во товара. Если указан markCode, то кол-во не может быть &gt; 1 | [default to undefined]
**quantityDelivered** | **number** | Заполняется только при частичной доставке и показывает сколько единиц товара выкуплено | [optional] [default to undefined]
**assessedCost** | **number** | Оценочная стоимость единицы товара в рублях | [optional] [default to undefined]
**cost** | **number** | Стоимость единицы товара с учетом НДС в рублях | [optional] [default to undefined]
**costVat** | **number** | Процентная ставка НДС: - \&#39;-1\&#39; - Без НДС; - \&#39;0\&#39; - НДС 0%; - \&#39;10\&#39; - НДС 10%; - \&#39;20\&#39; - НДС 20%; - \&#39;22\&#39; - НДС 22%; - \&#39;5\&#39; - НДС 5%; - \&#39;7\&#39; - НДС 7%;  | [optional] [default to CostVatEnum_NUMBER_MINUS_1]
**barcode** | **string** | Штрихкод на товаре | [optional] [default to undefined]
**companyName** | **string** | Наименование компании поставщика / продавца товара | [optional] [default to undefined]
**companyInn** | **string** | ИНН поставщика / продавца товара | [optional] [default to undefined]
**companyPhone** | **string** | Телефон поставщика / продавца товара | [optional] [default to undefined]
**tnved** | **string** | Код ТН ВЭД | [optional] [default to undefined]
**url** | **string** | Ссылка на страницу товара в интернет-магазине | [optional] [default to undefined]

## Example

```typescript
import { Item } from './api';

const instance: Item = {
    height,
    length,
    width,
    weight,
    articul,
    markCode,
    description,
    quantity,
    quantityDelivered,
    assessedCost,
    cost,
    costVat,
    barcode,
    companyName,
    companyInn,
    companyPhone,
    tnved,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
