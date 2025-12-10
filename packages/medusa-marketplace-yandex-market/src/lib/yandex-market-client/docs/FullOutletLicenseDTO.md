# FullOutletLicenseDTO

Информация о лицензии.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор лицензии.  Параметр указывается, только если нужно изменить информацию о существующей лицензии. Ее идентификатор можно узнать с помощью запроса [GET v2/campaigns/{campaignId}/outlets/licenses](../../reference/outlets/getOutletLicenses.md). При передаче информации о новой лицензии указывать идентификатор не нужно.  Идентификатор лицензии присваивается Маркетом. Не путайте его с номером, указанным на лицензии: он передается в параметре &#x60;number&#x60;.  | [optional] [default to undefined]
**outletId** | **number** | Идентификатор точки продаж, для которой действительна лицензия. | [default to undefined]
**licenseType** | [**LicenseType**](LicenseType.md) |  | [default to undefined]
**number** | **string** | Номер лицензии. | [default to undefined]
**dateOfIssue** | **string** | Дата выдачи лицензии.  Формат даты: ISO 8601 со смещением относительно UTC. Нужно передать дату, указанную на лицензии, время &#x60;00:00:00&#x60; и часовой пояс, соответствующий региону точки продаж. Например, если лицензия для точки продаж в Москве выдана 13 ноября 2017 года, то параметр должен иметь значение &#x60;2017-11-13T00:00:00+03:00&#x60;.  Не может быть позже даты окончания срока действия, указанной в параметре &#x60;dateOfExpiry&#x60;.  | [default to undefined]
**dateOfExpiry** | **string** | Дата окончания действия лицензии.  Формат даты: ISO 8601 со смещением относительно UTC. Нужно передать дату, указанную на лицензии, время &#x60;00:00:00&#x60; и часовой пояс, соответствующий региону точки продаж. Например, если действие лицензии для точки продаж в Москве заканчивается 20 ноября 2022 года, то параметр должен иметь значение &#x60;2022-11-20T00:00:00+03:00&#x60;.  Не может быть раньше даты выдачи, указанной в параметре &#x60;dateOfIssue&#x60;.  | [default to undefined]
**checkStatus** | [**LicenseCheckStatusType**](LicenseCheckStatusType.md) |  | [optional] [default to undefined]
**checkComment** | **string** | Причина, по которой лицензия не прошла проверку.  Параметр возвращается, только если параметр &#x60;checkStatus&#x60; имеет значение &#x60;FAIL&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { FullOutletLicenseDTO } from './api';

const instance: FullOutletLicenseDTO = {
    id,
    outletId,
    licenseType,
    number,
    dateOfIssue,
    dateOfExpiry,
    checkStatus,
    checkComment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
