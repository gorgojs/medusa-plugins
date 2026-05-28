# SupplyCheckEditDeadlineExpireRule

Правило крайнего срока редактирования грузомест.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_applicable** | **boolean** | &#x60;true&#x60;, если правило применимо к текущей поставке.  | [optional] [default to undefined]
**is_required** | **boolean** | &#x60;true&#x60;, если правило обязательно для текущей поставки.  | [optional] [default to undefined]
**satisfied** | **boolean** | &#x60;true&#x60;, если крайний срок для редактирования не наступил.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCheckEditDeadlineExpireRule } from './api';

const instance: SupplyCheckEditDeadlineExpireRule = {
    is_applicable,
    is_required,
    satisfied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
