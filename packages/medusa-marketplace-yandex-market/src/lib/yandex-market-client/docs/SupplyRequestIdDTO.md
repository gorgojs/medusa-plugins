# SupplyRequestIdDTO

Идентификатор и номера заявки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заявки.  {% note warning \&quot;Используется только в API\&quot; %}  По нему не получится найти заявки в кабинете продавца на Маркете. Для этого используйте &#x60;marketplaceRequestId&#x60; или &#x60;warehouseRequestId&#x60;.  {% endnote %}  | [default to undefined]
**marketplaceRequestId** | **string** | Номер заявки на маркетплейсе.  Также указывается в кабинете продавца на Маркете.  | [optional] [default to undefined]
**warehouseRequestId** | **string** | Номер заявки на складе.  Также указывается в кабинете продавца на Маркете.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyRequestIdDTO } from './api';

const instance: SupplyRequestIdDTO = {
    id,
    marketplaceRequestId,
    warehouseRequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
