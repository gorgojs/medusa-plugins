# BidRecommendationItemDTO

Рекомендованная ставка, возможная доля показов и доступные дополнительные инструменты продвижения.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid** | **number** | Значение ставки. | [default to undefined]
**showPercent** | **number** | Доля показов.  | [default to undefined]
**benefits** | [**Set&lt;BenefitType&gt;**](BenefitType.md) | Список доступных субсидий.  Чтобы получить необходимый инструмент продвижения, установите ставку, которая будет рекомендована для этого инструмента или выше.  | [optional] [default to undefined]

## Example

```typescript
import { BidRecommendationItemDTO } from './api';

const instance: BidRecommendationItemDTO = {
    bid,
    showPercent,
    benefits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
