# V5FbsPostingProductExemplarValidateV5ResponseProductExemplarMark


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **Array&lt;string&gt;** | Ошибки при проверке контрольных идентификационных знаков (КИЗ) и других маркировок. | [optional] [default to undefined]
**mark** | **string** | Значение кода маркировки. | [optional] [default to undefined]
**mark_type** | **string** | Тип кода маркировки:  - &#x60;mandatory_mark&#x60; — обязательная маркировка «Честный ЗНАК»;  - &#x60;jw_uin&#x60; — уникальный идентификационный номер (УИН) ювелирного изделия;  - &#x60;imei&#x60; — IMEI мобильного устройства.  | [optional] [default to undefined]
**valid** | **boolean** | Результат прохождения проверки. &#x60;true&#x60;, если контрольный идентификационный знак (КИЗ) и другие маркировки соответствуют требованиям. | [optional] [default to undefined]

## Example

```typescript
import { V5FbsPostingProductExemplarValidateV5ResponseProductExemplarMark } from './api';

const instance: V5FbsPostingProductExemplarValidateV5ResponseProductExemplarMark = {
    errors,
    mark,
    mark_type,
    valid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
