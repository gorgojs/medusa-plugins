# TariffObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор тарифа | [optional] [default to undefined]
**providerKey** | **string** | Идентификатор службы доставки, которой принадлежит тариф | [optional] [default to undefined]
**name** | **string** | Название тарифа | [optional] [default to undefined]
**description** | **string** | Описание тарифа | [optional] [default to undefined]
**aliasName** | **string** | Альтернативное название тарифа | [optional] [default to undefined]
**weightMin** | **number** | Минимальное ограничение по весу для тарифа (граммы) | [optional] [default to undefined]
**weightMax** | **number** | Максимальное ограничение по весу для тарифа (граммы) | [optional] [default to undefined]
**pickupType** | **number** | Тип приема тарифа (1 - от двери, 2 - от ПВЗ, null - доступны оба варианта) | [optional] [default to undefined]
**deliveryType** | **number** | Тип выдачи тарифа (1 - до двери, 2 - до ПВЗ, null - доступны оба варианта) | [optional] [default to undefined]

## Example

```typescript
import { TariffObject } from './api';

const instance: TariffObject = {
    id,
    providerKey,
    name,
    description,
    aliasName,
    weightMin,
    weightMax,
    pickupType,
    deliveryType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
