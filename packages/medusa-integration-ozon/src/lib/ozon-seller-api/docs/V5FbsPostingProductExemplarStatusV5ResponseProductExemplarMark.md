# V5FbsPostingProductExemplarStatusV5ResponseProductExemplarMark


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_status** | **string** | Статус проверки:   - &#x60;processing&#x60; — на проверке;   - &#x60;failed&#x60; — система не успела обработать запрос;   - &#x60;passed&#x60; — заказ готов к сборке.  | [optional] [default to undefined]
**error_codes** | **Array&lt;string&gt;** | Ошибки при проверке контрольных идентификационных знаков (КИЗ) и других маркировок. | [optional] [default to undefined]
**mark** | **string** | Значение кода маркировки. | [optional] [default to undefined]
**mark_type** | **string** | Тип кода маркировки:  - &#x60;mandatory_mark&#x60; — обязательная маркировка «Честный ЗНАК»;  - &#x60;jw_uin&#x60; — уникальный идентификационный номер (УИН) ювелирного изделия;  - &#x60;imei&#x60; — IMEI мобильного устройства.  | [optional] [default to undefined]

## Example

```typescript
import { V5FbsPostingProductExemplarStatusV5ResponseProductExemplarMark } from './api';

const instance: V5FbsPostingProductExemplarStatusV5ResponseProductExemplarMark = {
    check_status,
    error_codes,
    mark,
    mark_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
