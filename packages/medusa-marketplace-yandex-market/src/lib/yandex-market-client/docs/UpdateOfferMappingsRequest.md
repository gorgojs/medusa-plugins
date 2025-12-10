# UpdateOfferMappingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerMappings** | [**Array&lt;UpdateOfferMappingDTO&gt;**](UpdateOfferMappingDTO.md) | Список товаров, которые нужно добавить или обновить.  {% note warning \&quot;Скоро мы уменьшим максимальное количество товаров в запросе\&quot; %}  Уже сейчас не передавайте больше 100.  {% endnote %}     | [default to undefined]
**onlyPartnerMediaContent** | **boolean** | Будут ли использоваться только переданные вами данные о товарах.  Значение по умолчанию: &#x60;false&#x60;. Чтобы удалить данные, которые добавил Маркет, передайте значение &#x60;true&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOfferMappingsRequest } from './api';

const instance: UpdateOfferMappingsRequest = {
    offerMappings,
    onlyPartnerMediaContent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
