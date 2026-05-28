# ReturnsCompanyFbsInfoRequestPagination

Разделение ответа метода.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_id** | **number** | Идентификатор последнего drop-off пункта на странице. Для первого запроса оставьте это поле пустым.  Чтобы получить следующие значения, укажите &#x60;id&#x60; последнего drop-off пункта из ответа предыдущего запроса.  | [optional] [default to undefined]
**limit** | **number** | Количество drop-off пунктов на странице. Максимум — 500. | [default to undefined]

## Example

```typescript
import { ReturnsCompanyFbsInfoRequestPagination } from './api';

const instance: ReturnsCompanyFbsInfoRequestPagination = {
    last_id,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
