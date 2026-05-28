# V3AddresseeFbsLists

Контактные данные получателя.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Имя покупателя. | [optional] [default to undefined]
**phone** | **string** | Контактный телефон получателя. Всегда возвращает пустую строку &#x60;\&quot;\&quot;&#x60;. Чтобы получить подменный номер телефона, используйте метод [/v3/posting/fbs/get](#operation/PostingAPI_GetFbsPostingV3).  | [optional] [default to undefined]

## Example

```typescript
import { V3AddresseeFbsLists } from './api';

const instance: V3AddresseeFbsLists = {
    name,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
