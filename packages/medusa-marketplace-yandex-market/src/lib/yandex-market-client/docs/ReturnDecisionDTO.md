# ReturnDecisionDTO

Решения по возвратам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnItemId** | **number** | Идентификатор товара в возврате. | [optional] [default to undefined]
**count** | **number** | Количество единиц товара. | [optional] [default to undefined]
**comment** | **string** | Комментарий. | [optional] [default to undefined]
**reasonType** | [**ReturnDecisionReasonType**](ReturnDecisionReasonType.md) |  | [optional] [default to undefined]
**subreasonType** | [**ReturnDecisionSubreasonType**](ReturnDecisionSubreasonType.md) |  | [optional] [default to undefined]
**decisionType** | [**ReturnDecisionType**](ReturnDecisionType.md) |  | [optional] [default to undefined]
**refundAmount** | **number** | {% note warning \&quot;Вместо него используйте &#x60;amount&#x60;.\&quot; %}     {% endnote %}  Сумма возврата в копейках.  | [optional] [default to undefined]
**amount** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**partnerCompensation** | **number** | {% note warning \&quot;Вместо него используйте &#x60;partnerCompensationAmount&#x60;.\&quot; %}     {% endnote %}  Компенсация за обратную доставку в копейках.  | [optional] [default to undefined]
**partnerCompensationAmount** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**images** | **Set&lt;string&gt;** | Список хеш-кодов фотографий товара от покупателя. | [optional] [default to undefined]

## Example

```typescript
import { ReturnDecisionDTO } from './api';

const instance: ReturnDecisionDTO = {
    returnItemId,
    count,
    comment,
    reasonType,
    subreasonType,
    decisionType,
    refundAmount,
    amount,
    partnerCompensation,
    partnerCompensationAmount,
    images,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
