# GetPromoBestsellerInfoDTO

Информация об акции «Бестселлеры Маркета».

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bestseller** | **boolean** | Является ли акция «Бестселлером Маркета». Подробнее об этой акции читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/bestsellers). | [default to undefined]
**entryDeadline** | **string** | До какой даты можно добавить товар в акцию «Бестселлеры Маркета».  Параметр возвращается только для текущих и будущих акций «Бестселлеры Маркета».  | [optional] [default to undefined]
**renewalEnabled** | **boolean** | Включен ли автоматический перенос ассортимента между акциями «Бестселлеры Маркета». О том, как это работает, читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/promos/market/bestsellers#next).  Параметр возвращается только для текущих и будущих акций «Бестселлеры Маркета».  | [optional] [default to undefined]

## Example

```typescript
import { GetPromoBestsellerInfoDTO } from './api';

const instance: GetPromoBestsellerInfoDTO = {
    bestseller,
    entryDeadline,
    renewalEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
