# TypeTimeOfDay

Время, до которого нужно передать отправления, чтобы получить скидку за отгрузку.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **number** | Час. | [optional] [default to undefined]
**minutes** | **number** | Минута. | [optional] [default to undefined]
**nanos** | **number** | Наносекунда. | [optional] [default to undefined]
**seconds** | **number** | Секунда. | [optional] [default to undefined]

## Example

```typescript
import { TypeTimeOfDay } from './api';

const instance: TypeTimeOfDay = {
    hours,
    minutes,
    nanos,
    seconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
