# V5FbsPostingProductExemplarValidateV5ResponseProductExemplar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **Array&lt;string&gt;** | Ошибки валидации экземпляра. | [optional] [default to undefined]
**gtd** | **string** | Номер грузовой таможенной декларации (ГТД). | [optional] [default to undefined]
**marks** | [**Array&lt;V5FbsPostingProductExemplarValidateV5ResponseProductExemplarMark&gt;**](V5FbsPostingProductExemplarValidateV5ResponseProductExemplarMark.md) | Ошибки при проверке контрольных идентификационных знаков (КИЗ) и других маркировок. | [optional] [default to undefined]
**rnpt** | **string** | Регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**valid** | **boolean** | Результат прохождения проверки. &#x60;true&#x60;, если код экземпляра соответствует требованиям. | [optional] [default to undefined]
**weight** | **number** | Фактический вес экземпляра. | [optional] [default to undefined]

## Example

```typescript
import { V5FbsPostingProductExemplarValidateV5ResponseProductExemplar } from './api';

const instance: V5FbsPostingProductExemplarValidateV5ResponseProductExemplar = {
    errors,
    gtd,
    marks,
    rnpt,
    valid,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
