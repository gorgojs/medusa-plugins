# GetSupplyRequestItemsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **number** | Идентификатор заявки.  {% note warning \&quot;Используется только в API\&quot; %}  По нему не получится найти заявки в кабинете продавца на Маркете. Для этого используйте &#x60;marketplaceRequestId&#x60; или &#x60;warehouseRequestId&#x60;.  {% endnote %}  | [default to undefined]

## Example

```typescript
import { GetSupplyRequestItemsRequest } from './api';

const instance: GetSupplyRequestItemsRequest = {
    requestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
