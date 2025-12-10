# TariffDTO

Информация о тарифах, по которым нужно заплатить за услуги Маркета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TariffType**](TariffType.md) |  | [default to undefined]
**percent** | **number** | Значение тарифа в процентах. | [optional] [default to undefined]
**amount** | **number** | Значение тарифа. | [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [default to undefined]
**parameters** | [**Array&lt;TariffParameterDTO&gt;**](TariffParameterDTO.md) | Параметры расчета тарифа. | [default to undefined]

## Example

```typescript
import { TariffDTO } from './api';

const instance: TariffDTO = {
    type,
    percent,
    amount,
    currency,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
