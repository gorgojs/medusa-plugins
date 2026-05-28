# PostingMarksResponseIssuedExemplar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplar_id** | **number** | Идентификатор экземпляра. | [optional] [default to undefined]
**mandatory_marks** | **Array&lt;string&gt;** | Cписок маркировок выданных покупателям экземпляров. | [optional] [default to undefined]
**posting_number** | **string** | Идентификатор отправления. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { PostingMarksResponseIssuedExemplar } from './api';

const instance: PostingMarksResponseIssuedExemplar = {
    exemplar_id,
    mandatory_marks,
    posting_number,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
