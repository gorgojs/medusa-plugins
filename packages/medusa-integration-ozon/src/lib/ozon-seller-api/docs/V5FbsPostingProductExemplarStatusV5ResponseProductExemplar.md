# V5FbsPostingProductExemplarStatusV5ResponseProductExemplar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplar_id** | **number** | Идентификатор экземпляра. | [optional] [default to undefined]
**gtd** | **string** | Номер грузовой таможенной декларации (ГТД). | [optional] [default to undefined]
**gtd_check_status** | **string** | Статус проверки грузовой таможенной декларации. | [optional] [default to undefined]
**gtd_error_codes** | **Array&lt;string&gt;** | Коды ошибок при проверке грузовой таможенной декларации. | [optional] [default to undefined]
**is_gtd_absent** | **boolean** | Признак того, что не указан номер таможенной декларации (ГТД). | [optional] [default to undefined]
**is_rnpt_absent** | **boolean** | Признак того, что не указан регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**marks** | [**Array&lt;V5FbsPostingProductExemplarStatusV5ResponseProductExemplarMark&gt;**](V5FbsPostingProductExemplarStatusV5ResponseProductExemplarMark.md) | Список контрольных идентификационных знаков (КИЗ) и других маркировок в одном экземпляре. | [optional] [default to undefined]
**rnpt** | **string** | Регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**rnpt_check_status** | **string** | Статус проверки регистрационного номера партии товара. | [optional] [default to undefined]
**rnpt_error_codes** | **Array&lt;string&gt;** | Коды ошибок при проверке регистрационного номера партии товара. | [optional] [default to undefined]
**weight** | **number** | Фактический вес экземпляра. | [optional] [default to undefined]
**weight_check_status** | **string** | Статус проверки фактического веса. | [optional] [default to undefined]
**weight_error_codes** | **Array&lt;string&gt;** | Коды ошибок при проверке фактического веса. | [optional] [default to undefined]

## Example

```typescript
import { V5FbsPostingProductExemplarStatusV5ResponseProductExemplar } from './api';

const instance: V5FbsPostingProductExemplarStatusV5ResponseProductExemplar = {
    exemplar_id,
    gtd,
    gtd_check_status,
    gtd_error_codes,
    is_gtd_absent,
    is_rnpt_absent,
    marks,
    rnpt,
    rnpt_check_status,
    rnpt_error_codes,
    weight,
    weight_check_status,
    weight_error_codes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
