# QualityRatingAffectedOrderDTO

Информация о заказе, который повлиял на индекс качества.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Идентификатор заказа. | [default to undefined]
**description** | **string** | Описание проблемы. | [default to undefined]
**componentType** | [**AffectedOrderQualityRatingComponentType**](AffectedOrderQualityRatingComponentType.md) |  | [default to undefined]

## Example

```typescript
import { QualityRatingAffectedOrderDTO } from './api';

const instance: QualityRatingAffectedOrderDTO = {
    orderId,
    description,
    componentType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
