# OrderItemInstanceDTO

Переданные вами для данной позиции коды маркировки или УИНы. Коды «Честного знака» возвращаются в двух вариантах — с криптохвостом и без. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cis** | **string** | Код идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) без криптохвоста или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов Market Yandex Go). | [optional] [default to undefined]
**cisFull** | **string** | Код идентификации единицы товара в системе [«Честный ЗНАК»](https://честныйзнак.рф/) с криптохвостом. | [optional] [default to undefined]
**uin** | **string** | УИН ювелирного изделия (16-значный код) Производитель получает УИН, когда регистрирует изделие в системе контроля за оборотом драгоценных металлов и камней — ГИИС ДМДК.  | [optional] [default to undefined]
**rnpt** | **string** | Регистрационный номер партии товара.  Представляет собой строку из четырех чисел, разделенных косой чертой: ХХХХХХХХ/ХХХХХХ/ХХХХХХХ/ХХХ.  Первая часть — код таможни, которая зарегистрировала декларацию на партию товара. Далее — дата, номер декларации и номер маркированного товара в декларации.  | [optional] [default to undefined]
**gtd** | **string** | Грузовая таможенная декларация.  Представляет собой строку из трех чисел, разделенных косой чертой: ХХХХХХХХ/ХХХХХХ/ХХХХХХХ.  Первая часть — код таможни, которая зарегистрировала декларацию на ввезенные товары. Далее — дата и номер декларации.  | [optional] [default to undefined]
**countryCode** | **string** | Страна производства в формате ISO 3166-1 alpha-2. [Как получить](../../reference/regions/getRegionsCodes.md)  | [optional] [default to undefined]

## Example

```typescript
import { OrderItemInstanceDTO } from './api';

const instance: OrderItemInstanceDTO = {
    cis,
    cisFull,
    uin,
    rnpt,
    gtd,
    countryCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
