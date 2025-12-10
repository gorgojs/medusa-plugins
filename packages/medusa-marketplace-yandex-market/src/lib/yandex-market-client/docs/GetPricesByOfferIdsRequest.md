# GetPricesByOfferIdsRequest

Запрос списка цен.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Список SKU.  {% note warning \&quot;Такой список возвращается только целиком\&quot; %}  Если вы запрашиваете информацию по конкретным SKU, не заполняйте:  * &#x60;page_token&#x60; * &#x60;limit&#x60;  {% endnote %}     | [optional] [default to undefined]

## Example

```typescript
import { GetPricesByOfferIdsRequest } from './api';

const instance: GetPricesByOfferIdsRequest = {
    offerIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
