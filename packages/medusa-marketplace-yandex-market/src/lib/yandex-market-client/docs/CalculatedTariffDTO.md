# CalculatedTariffDTO

Информация об услугах Маркета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**CalculatedTariffType**](CalculatedTariffType.md) |  | [default to undefined]
**amount** | **number** | Стоимость услуги в рублях. | [optional] [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [optional] [default to undefined]
**parameters** | [**Array&lt;TariffParameterDTO&gt;**](TariffParameterDTO.md) | Параметры расчета тарифа. | [default to undefined]

## Example

```typescript
import { CalculatedTariffDTO } from './api';

const instance: CalculatedTariffDTO = {
    type,
    amount,
    currency,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
