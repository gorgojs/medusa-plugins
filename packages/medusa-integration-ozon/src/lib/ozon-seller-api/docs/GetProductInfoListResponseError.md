# GetProductInfoListResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_id** | **number** | Идентификатор характеристики. | [optional] [default to undefined]
**code** | **string** | Код ошибки. | [optional] [default to undefined]
**field** | **string** | Поле, в котором найдена ошибка. | [optional] [default to undefined]
**level** | [**ErrorErrorLevel**](ErrorErrorLevel.md) |  | [optional] [default to undefined]
**state** | **string** | Статус товара, в котором произошла ошибка. | [optional] [default to undefined]
**texts** | [**ErrorHumanTexts**](ErrorHumanTexts.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetProductInfoListResponseError } from './api';

const instance: GetProductInfoListResponseError = {
    attribute_id,
    code,
    field,
    level,
    state,
    texts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
