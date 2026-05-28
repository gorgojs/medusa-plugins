# CreateCompanyPostingsReportRequestWith

Дополнительные поля, которые нужно добавить в ответ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_data** | **boolean** | &#x60;true&#x60;, чтобы добавить в ответ дополнительную информацию.  | [optional] [default to undefined]
**analytics_data** | **boolean** | &#x60;true&#x60;, чтобы добавить в ответ аналитику. Передайте значение &#x60;filter.delivery_schema &#x3D; fbs&#x60;, иначе вернётся ошибка.  | [optional] [default to undefined]
**customer_data** | **boolean** | &#x60;true&#x60;, чтобы добавить в ответ информацию о покупателе.  | [optional] [default to undefined]
**jewelry_codes** | **boolean** | &#x60;true&#x60;, чтобы добавить в ответ информацию о ювелирных изделиях.  | [optional] [default to undefined]

## Example

```typescript
import { CreateCompanyPostingsReportRequestWith } from './api';

const instance: CreateCompanyPostingsReportRequestWith = {
    additional_data,
    analytics_data,
    customer_data,
    jewelry_codes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
