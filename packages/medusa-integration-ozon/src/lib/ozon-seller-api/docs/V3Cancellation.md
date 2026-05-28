# V3Cancellation

Информация об отмене.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affect_cancellation_rating** | **boolean** | Если отмена влияет на рейтинг продавца — &#x60;true&#x60;. | [optional] [default to undefined]
**cancel_reason** | **string** | Причина отмены. | [optional] [default to undefined]
**cancel_reason_id** | **number** | Идентификатор причины отмены отправления. | [optional] [default to undefined]
**cancellation_initiator** | **string** | Инициатор отмены: - &#x60;Продавец&#x60;,  - &#x60;Клиент&#x60; или &#x60;покупатель&#x60;, - &#x60;Ozon&#x60;,   - &#x60;Система&#x60;,  - &#x60;Служба доставки&#x60;.  | [optional] [default to undefined]
**cancellation_type** | **string** | Тип отмены отправления: - &#x60;seller&#x60; — отменено продавцом; - &#x60;client&#x60; или &#x60;customer&#x60; — отменено покупателем; - &#x60;ozon&#x60; — отменено Ozon; - &#x60;system&#x60;— отменено системой; - &#x60;delivery&#x60; — отменено службой доставки.  | [optional] [default to undefined]
**cancelled_after_ship** | **boolean** | Если отмена произошла после сборки отправления — &#x60;true&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { V3Cancellation } from './api';

const instance: V3Cancellation = {
    affect_cancellation_rating,
    cancel_reason,
    cancel_reason_id,
    cancellation_initiator,
    cancellation_type,
    cancelled_after_ship,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
