# ErrorHumanTexts

Описание ошибок.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **string** | Название атрибута, в котором произошла ошибка. | [optional] [default to undefined]
**description** | **string** | Описание ошибки. | [optional] [default to undefined]
**hint_code** | **string** | Код ошибки в системе Ozon. | [optional] [default to undefined]
**message** | **string** | Текст ошибки. | [optional] [default to undefined]
**params** | [**Array&lt;HumanTextsParam&gt;**](HumanTextsParam.md) | В каких параметрах допущена ошибка. | [optional] [default to undefined]
**short_description** | **string** | Краткое описание ошибки. | [optional] [default to undefined]

## Example

```typescript
import { ErrorHumanTexts } from './api';

const instance: ErrorHumanTexts = {
    attribute_name,
    description,
    hint_code,
    message,
    params,
    short_description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
