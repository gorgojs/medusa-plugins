# V1CancelReasonListByPostingResponseReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор причины отмены: - &#x60;501&#x60; — «Ozon перенёс срок доставки»; - &#x60;502&#x60; — «Отменили часть товаров из заказа»; - &#x60;503&#x60; — «Не применилась скидка или промокод»; - &#x60;504&#x60; — «Хочу изменить заказ и оформить заново»; - &#x60;505&#x60; — «Слишком долго ждать»; - &#x60;506&#x60; — «Нашёл дешевле»; - &#x60;508&#x60; — «Не нашёл нужную причину»; - &#x60;710&#x60; — «Указал неверный адрес».  | [optional] [default to undefined]
**name** | **string** | Причина отмены. | [optional] [default to undefined]

## Example

```typescript
import { V1CancelReasonListByPostingResponseReason } from './api';

const instance: V1CancelReasonListByPostingResponseReason = {
    id,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
