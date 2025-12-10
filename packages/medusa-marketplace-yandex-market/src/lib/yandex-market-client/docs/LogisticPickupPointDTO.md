# LogisticPickupPointDTO

Описание пункта вывоза для возврата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор пункта вывоза. | [optional] [default to undefined]
**name** | **string** | Название пункта вывоза. | [optional] [default to undefined]
**address** | [**PickupAddressDTO**](PickupAddressDTO.md) |  | [optional] [default to undefined]
**instruction** | **string** | Дополнительные инструкции к вывозу. | [optional] [default to undefined]
**type** | [**LogisticPointType**](LogisticPointType.md) |  | [optional] [default to undefined]
**logisticPartnerId** | **number** | Идентификатор логистического партнера, к которому относится логистическая точка. | [optional] [default to undefined]

## Example

```typescript
import { LogisticPickupPointDTO } from './api';

const instance: LogisticPickupPointDTO = {
    id,
    name,
    address,
    instruction,
    type,
    logisticPartnerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
