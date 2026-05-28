# V1Certificate

Информация о сертификате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_id** | **number** | Идентификатор. | [optional] [default to undefined]
**certificate_number** | **string** | Номер. | [optional] [default to undefined]
**certificate_name** | **string** | Название. | [optional] [default to undefined]
**type_code** | **string** | Тип. | [optional] [default to undefined]
**status_code** | **string** | Статус. | [optional] [default to undefined]
**accordance_type_code** | **string** | Тип соответствия требованиям. | [optional] [default to undefined]
**rejection_reason_code** | **string** | Причина отклонения сертификата. | [optional] [default to undefined]
**verification_comment** | **string** | Комментарий модератора. | [optional] [default to undefined]
**issue_date** | **string** | Дата создания. | [optional] [default to undefined]
**expire_date** | **string** | Дата окончания действия. | [optional] [default to undefined]
**products_count** | **number** | Количество товаров, привязанных к сертификату. | [optional] [default to undefined]

## Example

```typescript
import { V1Certificate } from './api';

const instance: V1Certificate = {
    certificate_id,
    certificate_number,
    certificate_name,
    type_code,
    status_code,
    accordance_type_code,
    rejection_reason_code,
    verification_comment,
    issue_date,
    expire_date,
    products_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
