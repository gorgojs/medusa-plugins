# V2PostingFBSActListFilter

Параметры фильтра.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Начальная дата создания отгрузок. | [default to undefined]
**date_to** | **string** | Конечная дата создания отгрузок. | [default to undefined]
**integration_type** | **string** | Тип интеграции со службой доставки:   - &#x60;ozon&#x60; — доставка через Ozon логистику.   - &#x60;aggregator&#x60; — доставка внешней службой, Ozon регистрирует заказ.   - &#x60;3pl_tracking&#x60; — доставка внешней службой, продавец регистрирует заказ.   - &#x60;non_integrated&#x60; — доставка силами продавца.  | [optional] [default to undefined]
**status** | **Array&lt;string&gt;** | Статусы перевозок:   - &#x60;new&#x60; — новая,   - &#x60;awaiting_retry&#x60; — повторная попытка создания,   - &#x60;in_process&#x60; — собирается,   - &#x60;success&#x60; — создана,   - &#x60;error&#x60; — ошибка при создании,   - &#x60;sended&#x60; — отправлена,   - &#x60;received&#x60; — получена,   - &#x60;formed&#x60; — собрана,   - &#x60;cancelled&#x60; — отменена,   - &#x60;pending&#x60; — в очереди на сборку,   - &#x60;completion_enqueued&#x60; — в очереди на завершение,   - &#x60;completion_processing&#x60; — в процессе завершения,   - &#x60;completion_failed&#x60; — ошибка при завершении,   - &#x60;cancelation_enqueued&#x60; — в очереди на отмену,   - &#x60;cancelation_processing&#x60; — в процессе отмены,   - &#x60;cancelation_failed&#x60; — ошибка при отмене,   - &#x60;completed&#x60; — завершена,   - &#x60;closed&#x60; — закрыта.  | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSActListFilter } from './api';

const instance: V2PostingFBSActListFilter = {
    date_from,
    date_to,
    integration_type,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
