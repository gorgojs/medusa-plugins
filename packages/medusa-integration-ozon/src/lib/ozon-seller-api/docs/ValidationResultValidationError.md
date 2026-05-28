# ValidationResultValidationError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**characteristic** | [**ValidationErrorCharacteristicEnum**](ValidationErrorCharacteristicEnum.md) |  | [optional] [default to undefined]
**restriction_price** | [**V1Money**](V1Money.md) |  | [optional] [default to undefined]
**restriction_vwc** | **number** | Значение ограничения по объёмно-весовым характеристикам — ОВХ. | [optional] [default to undefined]
**template_id** | **number** | Идентификатор услуги по доставке заказа, на которой установлено ограничение. | [optional] [default to undefined]
**type** | [**ValidationResultValidationErrorTypeEnum**](ValidationResultValidationErrorTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationResultValidationError } from './api';

const instance: ValidationResultValidationError = {
    characteristic,
    restriction_price,
    restriction_vwc,
    template_id,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
