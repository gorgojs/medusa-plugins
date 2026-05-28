# Postingv3FbsPostingWithParams

Дополнительные поля, которые нужно добавить в ответ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_data** | **boolean** | Добавить в ответ данные аналитики. | [optional] [default to undefined]
**barcodes** | **boolean** | Добавить в ответ штрихкоды отправления. | [optional] [default to undefined]
**financial_data** | **boolean** | Добавить в ответ финансовые данные. | [optional] [default to undefined]
**legal_info** | **boolean** | Добавить в ответ юридическую информацию. | [optional] [default to undefined]
**translit** | **boolean** | Выполнить транслитерацию возвращаемых значений. | [optional] [default to undefined]

## Example

```typescript
import { Postingv3FbsPostingWithParams } from './api';

const instance: Postingv3FbsPostingWithParams = {
    analytics_data,
    barcodes,
    financial_data,
    legal_info,
    translit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
