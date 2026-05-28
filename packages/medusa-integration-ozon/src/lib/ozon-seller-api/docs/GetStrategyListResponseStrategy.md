# GetStrategyListResponseStrategy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор стратегии. | [optional] [default to undefined]
**name** | **string** | Название стратегии. | [optional] [default to undefined]
**type** | **string** | Тип стратегии: - &#x60;MIN_EXT_PRICE&#x60; — системная, - &#x60;COMP_PRICE&#x60; — пользовательская.  | [optional] [default to undefined]
**update_type** | **string** | Тип последнего изменения стратегии: - &#x60;strategyEnabled&#x60; — возобновлена, - &#x60;strategyDisabled&#x60; — остановлена, - &#x60;strategyChanged&#x60; — обновлена, - &#x60;strategyCreated&#x60; — создана, - &#x60;strategyItemsListChanged&#x60; — изменён набор товаров в стратегии.  | [optional] [default to undefined]
**updated_at** | **string** | Дата последнего изменения. | [optional] [default to undefined]
**products_count** | **number** | Количество товаров в стратегии. | [optional] [default to undefined]
**competitors_count** | **number** | Количество выбранных конкурентов. | [optional] [default to undefined]
**enabled** | **boolean** | Статус стратегии: - &#x60;true&#x60; — включена, - &#x60;false&#x60; — отключена.  | [optional] [default to undefined]

## Example

```typescript
import { GetStrategyListResponseStrategy } from './api';

const instance: GetStrategyListResponseStrategy = {
    id,
    name,
    type,
    update_type,
    updated_at,
    products_count,
    competitors_count,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
