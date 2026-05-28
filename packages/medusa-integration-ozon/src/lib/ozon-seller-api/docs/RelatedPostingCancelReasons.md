# RelatedPostingCancelReasons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор причины отмены: - &#x60;352&#x60; — товар закончился на складе продавца.  - &#x60;400&#x60; — остался только бракованный товар. - &#x60;401&#x60; — продавец отклонил арбитраж. - &#x60;402&#x60; — другое (вина продавца). - &#x60;665&#x60; — покупатель не забрал заказ. - &#x60;666&#x60; — возврат из службы доставки: нет доставки в указанный регион. - &#x60;667&#x60; — заказ утерян службой доставки.  | [optional] [default to undefined]
**title** | **string** | Описание причины отмены. | [optional] [default to undefined]
**type_id** | **string** | Инициатор отмены отправления:    - &#x60;buyer&#x60; — покупатель,   - &#x60;seller&#x60; — продавец.  | [optional] [default to undefined]

## Example

```typescript
import { RelatedPostingCancelReasons } from './api';

const instance: RelatedPostingCancelReasons = {
    id,
    title,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
