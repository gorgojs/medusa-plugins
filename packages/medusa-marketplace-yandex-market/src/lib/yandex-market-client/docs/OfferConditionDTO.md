# OfferConditionDTO

Состояние уцененного товара. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OfferConditionType**](OfferConditionType.md) |  | [optional] [default to undefined]
**quality** | [**OfferConditionQualityType**](OfferConditionQualityType.md) |  | [optional] [default to undefined]
**reason** | **string** | Описание товара. Подробно опишите дефекты, насколько они заметны и где их искать.  | [optional] [default to undefined]

## Example

```typescript
import { OfferConditionDTO } from './api';

const instance: OfferConditionDTO = {
    type,
    quality,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
