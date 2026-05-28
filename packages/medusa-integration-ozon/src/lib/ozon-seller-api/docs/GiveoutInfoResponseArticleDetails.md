# GiveoutInfoResponseArticleDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **boolean** | &#x60;true&#x60;, если отгрузка подтверждена.  | [optional] [default to undefined]
**delivery_schema** | **string** | Cхема доставки:  - &#x60;GIVEOUT_DELIVERY_SCHEMA_UNSPECIFIED&#x60; — не определёна, напишите в поддержку.  - &#x60;GIVEOUT_DELIVERY_SCHEMA_FBO&#x60; — FBO.  - &#x60;GIVEOUT_DELIVERY_SCHEMA_FBS&#x60; — FBS.  | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**seller_id** | **number** | Идентификатор продавца. | [optional] [default to undefined]

## Example

```typescript
import { GiveoutInfoResponseArticleDetails } from './api';

const instance: GiveoutInfoResponseArticleDetails = {
    approved,
    delivery_schema,
    name,
    seller_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
