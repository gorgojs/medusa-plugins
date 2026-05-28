# ReportCreateCompanyProductsReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **string** | Язык ответа:   - &#x60;RU&#x60; — русский,   - &#x60;EN&#x60; — английский.  | [optional] [default to 'DEFAULT']
**offer_id** | **Array&lt;string&gt;** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**search** | **string** | Поиск по содержанию записи, проверяет наличие. | [optional] [default to undefined]
**sku** | **Array&lt;number&gt;** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**visibility** | **string** | Фильтр по видимости товара:   - &#x60;ALL&#x60; — все товары, кроме архивных.   - &#x60;VISIBLE&#x60; — товары, которые видны покупателям.   - &#x60;INVISIBLE&#x60; — товары, которые не видны покупателям.   - &#x60;EMPTY_STOCK&#x60; — товары, у которых не указано наличие.   - &#x60;NOT_MODERATED&#x60; — товары, которые не прошли модерацию.   - &#x60;MODERATED&#x60; — товары, которые прошли модерацию.   - &#x60;DISABLED&#x60; — товары, которые видны покупателям, но недоступны к покупке.   - &#x60;STATE_FAILED&#x60; — товары, создание которых завершилось ошибкой.   - &#x60;READY_TO_SUPPLY&#x60; — товары, готовые к поставке.   - &#x60;VALIDATION_STATE_PENDING&#x60; — товары, которые проходят проверку валидатором на премодерации.   - &#x60;VALIDATION_STATE_FAIL&#x60; — товары, которые не прошли проверку валидатором на премодерации.   - &#x60;VALIDATION_STATE_SUCCESS&#x60; — товары, которые прошли проверку валидатором на премодерации.   - &#x60;TO_SUPPLY&#x60; — товары, готовые к продаже.   - &#x60;IN_SALE&#x60; — товары в продаже.   - &#x60;REMOVED_FROM_SALE&#x60; — товары, скрытые от покупателей.   - &#x60;BANNED&#x60; — заблокированные товары.   - &#x60;OVERPRICED&#x60; — товары с завышенной ценой.   - &#x60;CRITICALLY_OVERPRICED&#x60; — товары со слишком завышенной ценой.   - &#x60;EMPTY_BARCODE&#x60; — товары без штрихкода.   - &#x60;BARCODE_EXISTS&#x60; — товары со штрихкодом.   - &#x60;QUARANTINE&#x60; — товары на карантине после изменения цены более чем на 50%.  | [optional] [default to 'ALL']

## Example

```typescript
import { ReportCreateCompanyProductsReportRequest } from './api';

const instance: ReportCreateCompanyProductsReportRequest = {
    language,
    offer_id,
    search,
    sku,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
