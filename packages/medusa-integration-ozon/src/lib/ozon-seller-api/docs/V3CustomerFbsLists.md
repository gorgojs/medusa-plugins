# V3CustomerFbsLists

Данные о покупателе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**V3Address**](V3Address.md) |  | [optional] [default to undefined]
**customer_id** | **number** | Идентификатор покупателя. | [optional] [default to undefined]
**name** | **string** | Имя покупателя. | [optional] [default to undefined]
**phone** | **string** | Контактный телефон покупателя. Всегда возвращает пустую строку &#x60;\&quot;\&quot;&#x60;. Чтобы получить подменный номер телефона, используйте метод [/v3/posting/fbs/get](#operation/PostingAPI_GetFbsPostingV3).  | [optional] [default to undefined]

## Example

```typescript
import { V3CustomerFbsLists } from './api';

const instance: V3CustomerFbsLists = {
    address,
    customer_id,
    name,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
