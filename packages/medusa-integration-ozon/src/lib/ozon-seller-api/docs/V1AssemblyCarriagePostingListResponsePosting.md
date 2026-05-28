# V1AssemblyCarriagePostingListResponsePosting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assembly_code** | **string** | Код листа подбора. | [optional] [default to undefined]
**can_print_label** | **boolean** | &#x60;true&#x60;, если можно распечатать этикетку.  | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**products** | [**Array&lt;V1AssemblyCarriagePostingListResponsePostingProduct&gt;**](V1AssemblyCarriagePostingListResponsePostingProduct.md) | Список товаров. | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyCarriagePostingListResponsePosting } from './api';

const instance: V1AssemblyCarriagePostingListResponsePosting = {
    assembly_code,
    can_print_label,
    posting_number,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
