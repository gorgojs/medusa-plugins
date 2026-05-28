# PromoOfferParticipationStatusType

Статус товара в акции:  * `AUTO` — добавлен автоматически во всех магазинах кабинета, в которых товар доступен для покупки.  * `PARTIALLY_AUTO` — добавлен автоматически у части магазинов.  * `MANUAL` — добавлен вручную.  * `NOT_PARTICIPATING` — не участвует в акции.  * `RENEWED` — успешно перенесен из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».  * `RENEW_FAILED` — не получилось перенести из предыдущей акции «Бестселлеры Маркета». Только для акций «Бестселлеры Маркета».  * `MINIMUM_FOR_PROMOS` — участвует в акции с ценой `maxPromoPrice` ([установлен минимум по цене для акций](*minimumForBestseller), который соответствует порогу `maxPromoPrice`). Только для акций «Бестселлеры Маркета».  Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index). 

## Enum

* `Auto` (value: `'AUTO'`)

* `PartiallyAuto` (value: `'PARTIALLY_AUTO'`)

* `Manual` (value: `'MANUAL'`)

* `NotParticipating` (value: `'NOT_PARTICIPATING'`)

* `Renewed` (value: `'RENEWED'`)

* `RenewFailed` (value: `'RENEW_FAILED'`)

* `MinimumForPromos` (value: `'MINIMUM_FOR_PROMOS'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
