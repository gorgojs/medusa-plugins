# FilterPeriod

Фильтр по дате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | Начало периода.  Формат: &#x60;YYYY-MM-DDTHH:mm:ss.sssZ&#x60;.&lt;br&gt; Пример: &#x60;2019-11-25T10:43:06.51&#x60;.  | [optional] [default to undefined]
**to** | **string** | Конец периода.  Формат: &#x60;YYYY-MM-DDTHH:mm:ss.sssZ&#x60;.&lt;br&gt; Пример: &#x60;2019-11-25T10:43:06.51&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { FilterPeriod } from './api';

const instance: FilterPeriod = {
    from,
    to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
