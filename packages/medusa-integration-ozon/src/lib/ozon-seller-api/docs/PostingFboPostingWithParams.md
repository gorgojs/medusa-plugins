# PostingFboPostingWithParams

Дополнительные поля, которые нужно добавить в ответ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_data** | **boolean** | Передайте &#x60;true&#x60;, чтобы добавить в ответ данные аналитики. | [optional] [default to undefined]
**financial_data** | **boolean** | Передайте &#x60;true&#x60;, чтобы добавить в ответ финансовые данные. | [optional] [default to undefined]
**legal_info** | **boolean** | Передайте &#x60;true&#x60;, чтобы добавить в ответ юридическую информацию. | [optional] [default to undefined]

## Example

```typescript
import { PostingFboPostingWithParams } from './api';

const instance: PostingFboPostingWithParams = {
    analytics_data,
    financial_data,
    legal_info,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
