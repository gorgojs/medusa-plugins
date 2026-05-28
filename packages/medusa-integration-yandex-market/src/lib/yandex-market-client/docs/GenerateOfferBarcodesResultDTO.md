# GenerateOfferBarcodesResultDTO

Товары, для которых не удалось сгенерировать штрихкоды.  Проверьте корректность переданных `offerId`. Если ошибка повторяется, обратитесь в службу поддержки — перейдите в [кабинет продавца на Маркете](https://partner.market.yandex.ru/business/any/support) и нажмите кнопку **Создать обращение**. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unprocessedOfferIds** | **Set&lt;string&gt;** | Список товаров, для которых не удалось сгенерировать штрихкоды. | [default to undefined]

## Example

```typescript
import { GenerateOfferBarcodesResultDTO } from './api';

const instance: GenerateOfferBarcodesResultDTO = {
    unprocessedOfferIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
