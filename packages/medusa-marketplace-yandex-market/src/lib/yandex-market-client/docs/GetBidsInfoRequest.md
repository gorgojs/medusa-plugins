# GetBidsInfoRequest

description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skus** | **Set&lt;string&gt;** | Список товаров, для которых нужно получить значения ставок.  Если список не задан, постранично возвращаются все товары со ставками.  Если список задан, результаты возвращаются одной страницей, а параметры &#x60;page_token&#x60; и &#x60;limit&#x60; игнорируются.  | [optional] [default to undefined]

## Example

```typescript
import { GetBidsInfoRequest } from './api';

const instance: GetBidsInfoRequest = {
    skus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
