# ProductExemplar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplar_id** | **number** | Идентификатор экземпляра. | [optional] [default to undefined]
**gtd** | **string** | Номер грузовой таможенной декларации (ГТД). | [optional] [default to undefined]
**is_gtd_absent** | **boolean** | Признак того, что не указан номер грузовой таможенной декларации (ГТД). | [optional] [default to undefined]
**is_rnpt_absent** | **boolean** | Признак того, что не указан регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**marks** | [**Array&lt;ExemplarMark&gt;**](ExemplarMark.md) | Список контрольных идентификационных знаков (КИЗ) и других маркировок в одном экземпляре. | [optional] [default to undefined]
**rnpt** | **string** | Регистрационный номер партии товара (РНПТ). | [optional] [default to undefined]
**weight** | **number** | Фактический вес экземпляра. | [optional] [default to undefined]

## Example

```typescript
import { ProductExemplar } from './api';

const instance: ProductExemplar = {
    exemplar_id,
    gtd,
    is_gtd_absent,
    is_rnpt_absent,
    marks,
    rnpt,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
