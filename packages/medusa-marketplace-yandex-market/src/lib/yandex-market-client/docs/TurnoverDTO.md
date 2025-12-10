# TurnoverDTO

Информация об оборачиваемости товара.  Подробнее о хранении и оборачиваемости товаров читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/storage/logistics#turnover). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**turnover** | [**TurnoverType**](TurnoverType.md) |  | [default to undefined]
**turnoverDays** | **number** | Значение в днях. | [optional] [default to undefined]

## Example

```typescript
import { TurnoverDTO } from './api';

const instance: TurnoverDTO = {
    turnover,
    turnoverDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
