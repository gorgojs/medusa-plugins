# V3FbsPostingProductExemplarInfoV3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplar_id** | **number** | Идентификатор экземпляра. | [optional] [default to undefined]
**mandatory_mark** | **string** | Обязательная маркировка «Честный ЗНАК». | [optional] [default to undefined]
**gtd** | **string** | Номер грузовой таможенной декларации (ГТД). | [optional] [default to undefined]
**is_gtd_absent** | **boolean** | Признак того, что не указан номер таможенной декларации. | [optional] [default to undefined]
**rnpt** | **string** | Регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**is_rnpt_absent** | **boolean** | Признак того, что не указан регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**weight** | **number** | Фактический вес экземпляра. | [optional] [default to undefined]
**imei** | **Array&lt;string&gt;** | Список IMEI мобильных устройств. | [optional] [default to undefined]

## Example

```typescript
import { V3FbsPostingProductExemplarInfoV3 } from './api';

const instance: V3FbsPostingProductExemplarInfoV3 = {
    exemplar_id,
    mandatory_mark,
    gtd,
    is_gtd_absent,
    rnpt,
    is_rnpt_absent,
    weight,
    imei,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
