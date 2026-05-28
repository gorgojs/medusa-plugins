# CreateWarehouseFBSRequestOptions

Параметры склада.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Комментарий для курьера при отгрузке с типом &#x60;PICK_UP&#x60;. | [optional] [default to undefined]
**courier_phones** | **Array&lt;string&gt;** | Номера телефонов для курьера при отгрузке с типом &#x60;PICK_UP&#x60;. Укажите в формате +7(XXX)XXX-XX-XX. | [optional] [default to undefined]
**is_auto_assembly** | **boolean** | &#x60;true&#x60;, если автосборка включена.  | [optional] [default to undefined]
**is_waybill_enabled** | **boolean** | &#x60;true&#x60;, если печать транспортной накладной включена.  | [optional] [default to undefined]

## Example

```typescript
import { CreateWarehouseFBSRequestOptions } from './api';

const instance: CreateWarehouseFBSRequestOptions = {
    comment,
    courier_phones,
    is_auto_assembly,
    is_waybill_enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
