# V1GetStrategyListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **number** | Страница списка, с которой нужно выгрузить стратегии. Минимальное значение — &#x60;1&#x60;. | [default to undefined]
**limit** | **number** | Максимальное количество стратегий на странице. Допустимые значения — от &#x60;1&#x60; до &#x60;50&#x60;. | [default to undefined]

## Example

```typescript
import { V1GetStrategyListRequest } from './api';

const instance: V1GetStrategyListRequest = {
    page,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
