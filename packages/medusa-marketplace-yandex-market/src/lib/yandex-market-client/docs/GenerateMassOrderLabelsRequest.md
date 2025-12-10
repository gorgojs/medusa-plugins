# GenerateMassOrderLabelsRequest

Данные, необходимые для генерации файла. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. | [default to undefined]
**orderIds** | **Set&lt;number&gt;** | Список идентификаторов заказов. | [default to undefined]
**sortingType** | [**LabelsSortingType**](LabelsSortingType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GenerateMassOrderLabelsRequest } from './api';

const instance: GenerateMassOrderLabelsRequest = {
    businessId,
    orderIds,
    sortingType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
