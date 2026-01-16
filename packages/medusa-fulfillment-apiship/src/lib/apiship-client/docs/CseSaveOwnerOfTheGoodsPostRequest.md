# CseSaveOwnerOfTheGoodsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerName** | **string** | Наименование контрагента | [default to undefined]
**OwnerLegalName** | **string** | Юридическое наименование контрагента | [default to undefined]
**OwnerINN** | **string** | ИНН контрагента - 10 символов | [default to undefined]
**OwnerKPP** | **string** | КПП контрагента - 9 символов | [default to undefined]
**AccountName** | **string** | Наименование банка | [default to undefined]
**AccountBIK** | **string** | БИК – 9 символов | [default to undefined]
**AccountNumber** | **string** | Номер счета – 20 символов | [default to undefined]
**providerConnectId** | **string** | ID подключения к СД | [optional] [default to undefined]

## Example

```typescript
import { CseSaveOwnerOfTheGoodsPostRequest } from './api';

const instance: CseSaveOwnerOfTheGoodsPostRequest = {
    OwnerName,
    OwnerLegalName,
    OwnerINN,
    OwnerKPP,
    AccountName,
    AccountBIK,
    AccountNumber,
    providerConnectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
