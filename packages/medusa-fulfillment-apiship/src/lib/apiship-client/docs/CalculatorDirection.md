# CalculatorDirection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryCode** | **string** | Код страны в соответствии с ISO 3166-1 alpha-2 | [default to undefined]
**index** | **string** | Почтовый индекс | [optional] [default to undefined]
**addressString** | **string** | Полный почтовый адрес. Если заполнен, то считается приоритетным, если не указан cityGuid. &lt;br /&gt; *Обязателен, если не указаны cityGuid или city. | [default to undefined]
**region** | **string** | Регион/Край/Область | [optional] [default to undefined]
**city** | **string** | Название города (обязательно если не заполнен cityGuid). &lt;br /&gt; *Обязателен, если не указаны cityGuid или addressString. | [default to undefined]
**cityGuid** | **string** | ФИАС код города\\поселения в базе fias.nalog.ru (обязательно, если не заполнен city). &lt;br /&gt; *Обязателен, если не указаны city или addressString. | [default to undefined]
**lat** | **number** | Широта. Обязательно указывайте, если это доставка через такси, например, Яндекс.Доставка и д.р. | [optional] [default to undefined]
**lng** | **number** | Долгота. Обязательно указывайте, если это доставка через такси, например, Яндекс.Доставка и д.р. | [optional] [default to undefined]

## Example

```typescript
import { CalculatorDirection } from './api';

const instance: CalculatorDirection = {
    countryCode,
    index,
    addressString,
    region,
    city,
    cityGuid,
    lat,
    lng,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
