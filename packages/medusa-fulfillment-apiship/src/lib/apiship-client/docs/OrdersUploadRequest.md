# OrdersUploadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerKey** | **string** | Код службы доставки | [default to undefined]
**mode** | **string** | Метод загрузки заказов | [optional] [default to undefined]
**errorsToFile** | **boolean** | Флаг возвращения base64 строки исходного файла с ошибками создания, если имеются. (true - в исходный файл будут записаны ошибки создания и в ответе будет возвращена base64 строка данного файла; false - в файл не будут записаны ошибки) | [optional] [default to undefined]
**file** | **any** |  | [default to undefined]
**columnSettings** | [**ColumnSettings**](ColumnSettings.md) |  | [default to undefined]
**columnMap** | [**ColumnMap**](ColumnMap.md) |  | [default to undefined]
**defaultData** | [**DefaultData**](DefaultData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrdersUploadRequest } from './api';

const instance: OrdersUploadRequest = {
    providerKey,
    mode,
    errorsToFile,
    file,
    columnSettings,
    columnMap,
    defaultData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
