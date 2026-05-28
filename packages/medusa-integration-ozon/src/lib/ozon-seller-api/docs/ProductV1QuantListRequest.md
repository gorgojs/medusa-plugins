# ProductV1QuantListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**limit** | **number** | Максимальное количество элементов в ответе. | [optional] [default to undefined]
**visibility** | **string** | Фильтр по видимости товара: - &#x60;ALL&#x60; — все товары, кроме архивных. - &#x60;VISIBLE&#x60; — товары, которые видны покупателям. - &#x60;INVISIBLE&#x60; — товары, которые не видны покупателям. - &#x60;EMPTY_STOCK&#x60; — товары, которых нет в наличии. - &#x60;NOT_MODERATED&#x60; — товары, которые не прошли модерацию. - &#x60;MODERATED&#x60; — товары, которые прошли модерацию. - &#x60;DISABLED&#x60; — товары, которые видны покупателям, но недоступны к покупке. - &#x60;STATE_FAILED&#x60; — товары, создание которых завершилось ошибкой. - &#x60;READY_TO_SUPPLY&#x60; — товары, готовые к поставке. - &#x60;VALIDATION_STATE_PENDING&#x60; — товары, которые проходят проверку валидатором на премодерации. - &#x60;VALIDATION_STATE_FAIL&#x60; — товары, которые не прошли проверку валидатором на премодерации. - &#x60;VALIDATION_STATE_SUCCESS&#x60; — товары, которые прошли проверку валидатором на премодерации. - &#x60;TO_SUPPLY&#x60; — товары, готовые к продаже. - &#x60;IN_SALE&#x60; — товары в продаже. - &#x60;REMOVED_FROM_SALE&#x60; — товары, скрытые от покупателей. - &#x60;OVERPRICED&#x60; — превышение цены. - &#x60;CRITICALLY_OVERPRICED&#x60; — критическое превышение цены. - &#x60;EMPTY_BARCODE&#x60; — пустой штрихкод. - &#x60;BARCODE_EXISTS&#x60; — штрихкод указан. - &#x60;QUARANTINE&#x60; — товар в карантине после изменения цены на 50% и больше. - &#x60;ARCHIVED&#x60; — товары в архиве. - &#x60;OVERPRICED_WITH_STOCK&#x60; — товары в продаже, цена которых выше, чем у конкурентов. - &#x60;PARTIAL_APPROVED&#x60; — товары в продаже, у которых пустое или неполное описание.  | [optional] [default to VisibilityEnum_All]

## Example

```typescript
import { ProductV1QuantListRequest } from './api';

const instance: ProductV1QuantListRequest = {
    cursor,
    limit,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
