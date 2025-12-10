# ExtendedOrderDataCheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Ссылка на чек | [optional] [default to undefined]
**fiscalNumber** | **string** | Номер фискального накопителя | [optional] [default to undefined]
**fiscalDocumentNumber** | **string** | Порядковый номер фискального документа | [optional] [default to undefined]
**fiscalAttribute** | **string** | Фискальный признак документа | [optional] [default to undefined]
**type** | **number** | 1 - приход; 2- возврат | [optional] [default to undefined]
**amount** | **number** | Сумма по чеку (в рублях) | [optional] [default to undefined]
**createdProvider** | **string** | Дата и время формирования чека | [optional] [default to undefined]
**created** | **string** | Дата и время получения информации о чеке | [optional] [default to undefined]

## Example

```typescript
import { ExtendedOrderDataCheck } from './api';

const instance: ExtendedOrderDataCheck = {
    url,
    fiscalNumber,
    fiscalDocumentNumber,
    fiscalAttribute,
    type,
    amount,
    createdProvider,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
