# V5FbsPostingProductExemplarValidateV5RequestProductExemplar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gtd** | **string** | Номер грузовой таможенной декларации (ГТД). | [optional] [default to undefined]
**marks** | [**Array&lt;V5FbsPostingProductExemplarValidateV5RequestProductExemplarMark&gt;**](V5FbsPostingProductExemplarValidateV5RequestProductExemplarMark.md) | Список контрольных идентификационных знаков (КИЗ) и других маркировок в одном экземпляре. | [optional] [default to undefined]
**rnpt** | **string** | Регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**weight** | **number** | Фактический вес экземпляра. | [optional] [default to undefined]

## Example

```typescript
import { V5FbsPostingProductExemplarValidateV5RequestProductExemplar } from './api';

const instance: V5FbsPostingProductExemplarValidateV5RequestProductExemplar = {
    gtd,
    marks,
    rnpt,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
