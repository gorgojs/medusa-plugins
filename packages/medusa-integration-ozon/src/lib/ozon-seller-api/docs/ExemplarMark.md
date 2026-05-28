# ExemplarMark


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mark** | **string** | Значение кода маркировки. | [optional] [default to undefined]
**mark_type** | **string** | Тип кода маркировки:  - &#x60;mandatory_mark&#x60; — обязательная маркировка «Честный ЗНАК»;  - &#x60;jw_uin&#x60; — уникальный идентификационный номер (УИН) ювелирного изделия;  - &#x60;imei&#x60; — IMEI мобильного устройства.  | [optional] [default to undefined]

## Example

```typescript
import { ExemplarMark } from './api';

const instance: ExemplarMark = {
    mark,
    mark_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
