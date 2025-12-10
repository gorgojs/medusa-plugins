# PromoOfferParticipationStatusMultiFilterType

Фильтр для товаров, которые могут участвовать в акции:  * `MANUALLY_ADDED` — товары, которые добавлены вручную.  * `RENEWED` — товары, которые добавлены автоматически из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».  * `RENEW_FAILED` — товары, которые не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».  * `NOT_MANUALLY_ADDED` — товары, которые не участвуют в акции и те, которые добавлены автоматически.  * `MINIMUM_FOR_PROMOS` — товары с [установленным минимумом по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`. Такие товары участвуют в акции с ценой `maxPromoPrice`. Только для акций «Бестселлеры Маркета».  Если не передать параметр `statuses`, вернутся все товары.  Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index). 

## Enum

* `ManuallyAdded` (value: `'MANUALLY_ADDED'`)

* `Renewed` (value: `'RENEWED'`)

* `RenewFailed` (value: `'RENEW_FAILED'`)

* `NotManuallyAdded` (value: `'NOT_MANUALLY_ADDED'`)

* `MinimumForPromos` (value: `'MINIMUM_FOR_PROMOS'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
