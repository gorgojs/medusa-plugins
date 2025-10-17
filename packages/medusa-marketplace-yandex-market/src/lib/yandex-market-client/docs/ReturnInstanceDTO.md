# ReturnInstanceDTO

Логистическая информация по возврату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stockType** | [**ReturnInstanceStockType**](ReturnInstanceStockType.md) |  | [optional] [default to undefined]
**status** | [**ReturnInstanceStatusType**](ReturnInstanceStatusType.md) |  | [optional] [default to undefined]
**cis** | **string** | Код идентификации единицы товара в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]). | [optional] [default to undefined]
**imei** | **string** | Международный идентификатор мобильного оборудования. | [optional] [default to undefined]

## Example

```typescript
import { ReturnInstanceDTO } from './api';

const instance: ReturnInstanceDTO = {
    stockType,
    status,
    cis,
    imei,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
