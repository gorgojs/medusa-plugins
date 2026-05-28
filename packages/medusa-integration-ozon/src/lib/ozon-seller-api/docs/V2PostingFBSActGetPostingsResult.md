# V2PostingFBSActGetPostingsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор акта. | [optional] [default to undefined]
**multi_box_qty** | **number** | Количество коробок, в которые упакован товар. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**status** | **string** | Статус отправления. | [optional] [default to undefined]
**seller_error** | **string** | Расшифровка кода ошибки. | [optional] [default to undefined]
**updated_at** | **string** | Дата и время обновления записи об отправлении. | [optional] [default to undefined]
**created_at** | **string** | Дата и время создания записи об отправлении. | [optional] [default to undefined]
**products** | [**Array&lt;V2PostingFBSActGetProducts&gt;**](V2PostingFBSActGetProducts.md) | Список товаров в отправлении. | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSActGetPostingsResult } from './api';

const instance: V2PostingFBSActGetPostingsResult = {
    id,
    multi_box_qty,
    posting_number,
    status,
    seller_error,
    updated_at,
    created_at,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
