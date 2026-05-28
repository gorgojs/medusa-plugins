# SupplyTags

Метки поставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_ettn_required** | **boolean** | &#x60;true&#x60;, если для поставки нужна электронная ТТН.  | [optional] [default to undefined]
**is_evsd_required** | **boolean** | &#x60;true&#x60;, если в поставке есть товары с сертификацией в системе «Меркурий».  | [optional] [default to undefined]
**is_jewelry** | **boolean** | &#x60;true&#x60;, если в поставке есть ювелирные товары.  | [optional] [default to undefined]
**is_marking_possible** | **boolean** | &#x60;true&#x60;, если в поставке есть товары, для которых возможна маркировка.  | [optional] [default to undefined]
**is_marking_required** | **boolean** | &#x60;true&#x60;, если в поставке есть товары, для которых маркировка обязательна.  | [optional] [default to undefined]
**is_utd** | **boolean** | &#x60;true&#x60;, если для поставки нужно передать УПД.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyTags } from './api';

const instance: SupplyTags = {
    is_ettn_required,
    is_evsd_required,
    is_jewelry,
    is_marking_possible,
    is_marking_required,
    is_utd,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
