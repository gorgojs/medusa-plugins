# GetProductRatingBySkuResponseRatingGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**Array&lt;GetProductRatingBySkuResponseRatingCondition&gt;**](GetProductRatingBySkuResponseRatingCondition.md) | Список условий, увеличивающих контент-рейтинг товара. | [optional] [default to undefined]
**improve_at_least** | **number** | Количество атрибутов, которые нужно заполнить для получения максимального балла в этой группе характеристик. | [optional] [default to undefined]
**improve_attributes** | [**Array&lt;GetProductRatingBySkuResponseRatingImproveAttribute&gt;**](GetProductRatingBySkuResponseRatingImproveAttribute.md) | Cписок атрибутов, заполнение которых может увеличить контент-рейтинг товара. | [optional] [default to undefined]
**key** | **string** | Идентификатор группы. | [optional] [default to undefined]
**name** | **string** | Название группы. | [optional] [default to undefined]
**rating** | **number** | Рейтинг в группе. | [optional] [default to undefined]
**weight** | **number** | Процент влияния характеристик группы на контент-рейтинг. | [optional] [default to undefined]

## Example

```typescript
import { GetProductRatingBySkuResponseRatingGroup } from './api';

const instance: GetProductRatingBySkuResponseRatingGroup = {
    conditions,
    improve_at_least,
    improve_attributes,
    key,
    name,
    rating,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
