# PriceQuarantineVerdictDTO

Причина попадания товара в карантин.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PriceQuarantineVerdictType**](PriceQuarantineVerdictType.md) |  | [optional] [default to undefined]
**params** | [**Array&lt;PriceQuarantineVerdictParameterDTO&gt;**](PriceQuarantineVerdictParameterDTO.md) | Цена, из-за которой товар попал в карантин, и значения для сравнения. Конкретный набор параметров зависит от типа карантина. | [default to undefined]

## Example

```typescript
import { PriceQuarantineVerdictDTO } from './api';

const instance: PriceQuarantineVerdictDTO = {
    type,
    params,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
