# DeliveryCheckoutResponseUnavailableReasonEnum

Причина недоступности: - `UNSPECIFIED` — доставка доступна; - `UNKNOWN` — неизвестная причина; - `OUT_OF_STOCK` — товар закончился; - `BANNED_FOR_AREA` — товар заблокирован для этой области; - `BANNED_FOR_LEGAL` — товар заблокирован для юридических лиц; - `BANNED` — товар заблокирован; - `BANNED_FOR_NOT_PREMIUM` — товар заблокирован для покупателей без подписки Premium; - `DELIVERY_UNAVAILABLE` — доставка недоступна, например, курьеры перегружены; - `BANNED_FOR_INDIVIDUAL` — товар заблокирован для физических лиц; - `INVALID_WEIGHT` — вес товара не указан; - `INVALID_MULTIPLICITY` — недопустимая кратность в штуках; - `NOT_FOUND_POINTS_DARK_STORES` — пункты в массиве дарксторов не найдены; - `INVALID_MULTI_WAREHOUSES` — товары в заказе с разными схемами доставки неверно распределены; - `MIN_PRICE` — сплит не прошёл минимальную цену; - `OZONE_DELIVERY_UNAVAILABLE` — доставка Ozon недоступна; - `RFBS_DELIVERY_UNAVAILABLE` — доставка по системе rFBS недоступна; - `HACK_COURIER_TAGS` — способ доставки исключён по правилу приоритетного показа; - `NO_SLA` — норматив комплектации отсутствует; - `DELIVERY_VARIANT_IS_CLOSING` — способ доставки в неподходящем статусе; - `TPL_NOT_INTEGRATED` — точки, по которым возврат невозможен; - `NOT_ALL_WAREHOUSES_ARE_SERVED` — доставка со склада отправления отсутствует; - `DELIVERY_SLOTS_NOT_FOUND` — таймслоты отсутствуют; - `NO_ROUTE` — маршрут не найден; - `CAPACITY_LIMIT` — таймслоты отсеяны из-за заполненности капаситета; - `PACKAGE_MAX_VOLUME_WEIGHT_RESTRICTION` — ограничение на максимальный объёмный вес посылки; - `PACKAGE_MAX_WEIGHT_RESTRICTION` — ограничение на максимальный физический вес посылки, в килограммах до тысячных грамма; - `MAX_COST_RESTRICTION` — ограничение на максимальную стоимость заказа, учитывается стоимость товаров, их доставки, но не учитывается страховой сбор в рублях; - `MIN_PACKAGE_WEIGHT_RESTRICTION` — ограничение на минимальный физический вес посылки в килограммах до тысячных грамма; - `MIN_COST_RESTRICTION` — ограничение на минимальную стоимость товаров заказа в рублях; - `MAX_DIMENSIONS_RESTRICTION` — ограничение на максимальные габариты посылки в сантиметрах; - `PRODUCT_TYPES_RESTRICTION` — ограничение на допустимые в заказе товарные категории; - `PRODUCT_TAGS_RESTRICTION` — ограничение на допустимые в заказе теги товаров; - `SELECTED_DELIVERY_METHOD_UNAVAILABLE` — выбранный способ доставки стал недоступным; - `SELECTED_DELIVERY_TIMESLOT_UNAVAILABLE` — выбранный таймслот стал недоступным; - `MARKETPLACE_UNAVAILABLE` — в заказе товары нескольких маркетплейсов, оформить заказ можно только с 1; - `INVALID_PVZ_FOR_KGT` — выбранный ПВЗ не подходит для КГТ; - `LEGAL_USER_PREMIUM_SPLIT` — юридическим лицам запрещена покупка подписки Premium; - `USER_ALREADY_HAS_PREMIUM` — у пользователя уже есть подписка Premium и она не подарочная; - `WAIT_FOR_PAY_SUBSCRIPTION` — пользователь купил премиум-подписку, но не оплатил заказ или подписка ещё не перешла в активный статус; - `ADDRESS_NOT_SET ` — адрес не установлен; - `PICKUP_POINT_DISABLED` — ПВЗ недоступен; - `LEGAL_PREORDER` — предзаказ недоступен юридическим лицам; - `DELIVERY_TYPE_FOR_PREORDER` — тип доставки недоступен для предзаказа; - `CROSS_BORDER_PICKUP` — CrossBorder-товары не доставляются в пункты выдачи; - `ORDER_CUSTOMS_TYPES` — ограничения на таможенные типы; - `PACKAGE_MAX_COST` — ограничение на максимальную стоимость посылки,учитывается стоимость товаров и их доставки; - `SUPER_ECONOM` — недоступный «суперэконом»; - `ECONOM_NOT_FULL_QUANT` — неполный квант; - `EMPTY_DELIVERY_METHODS` — нет доступных способов доставки; 

## Enum

* `Unspecified` (value: `'UNSPECIFIED'`)

* `Unknown` (value: `'UNKNOWN'`)

* `OutOfStock` (value: `'OUT_OF_STOCK'`)

* `BannedForArea` (value: `'BANNED_FOR_AREA'`)

* `BannedForLegal` (value: `'BANNED_FOR_LEGAL'`)

* `Banned` (value: `'BANNED'`)

* `BannedForNotPremium` (value: `'BANNED_FOR_NOT_PREMIUM'`)

* `DeliveryUnavailable` (value: `'DELIVERY_UNAVAILABLE'`)

* `BannedForIndividual` (value: `'BANNED_FOR_INDIVIDUAL'`)

* `InvalidWeight` (value: `'INVALID_WEIGHT'`)

* `InvalidMultiplicity` (value: `'INVALID_MULTIPLICITY'`)

* `NotFoundPointsDarkStores` (value: `'NOT_FOUND_POINTS_DARK_STORES'`)

* `InvalidMultiWarehouses` (value: `'INVALID_MULTI_WAREHOUSES'`)

* `MinPrice` (value: `'MIN_PRICE'`)

* `OzoneDeliveryUnavailable` (value: `'OZONE_DELIVERY_UNAVAILABLE'`)

* `RfbsDeliveryUnavailable` (value: `'RFBS_DELIVERY_UNAVAILABLE'`)

* `HackCourierTags` (value: `'HACK_COURIER_TAGS'`)

* `NoSla` (value: `'NO_SLA'`)

* `DeliveryVariantIsClosing` (value: `'DELIVERY_VARIANT_IS_CLOSING'`)

* `TplNotIntegrated` (value: `'TPL_NOT_INTEGRATED'`)

* `NotAllWarehousesAreServed` (value: `'NOT_ALL_WAREHOUSES_ARE_SERVED'`)

* `DeliverySlotsNotFound` (value: `'DELIVERY_SLOTS_NOT_FOUND'`)

* `NoRoute` (value: `'NO_ROUTE'`)

* `CapacityLimit` (value: `'CAPACITY_LIMIT'`)

* `PackageMaxVolumeWeightRestriction` (value: `'PACKAGE_MAX_VOLUME_WEIGHT_RESTRICTION'`)

* `PackageMaxWeightRestriction` (value: `'PACKAGE_MAX_WEIGHT_RESTRICTION'`)

* `MaxCostRestriction` (value: `'MAX_COST_RESTRICTION'`)

* `MinPackageWeightRestriction` (value: `'MIN_PACKAGE_WEIGHT_RESTRICTION'`)

* `MinCostRestriction` (value: `'MIN_COST_RESTRICTION'`)

* `MaxDimensionsRestriction` (value: `'MAX_DIMENSIONS_RESTRICTION'`)

* `ProductTypesRestriction` (value: `'PRODUCT_TYPES_RESTRICTION'`)

* `ProductTagsRestriction` (value: `'PRODUCT_TAGS_RESTRICTION'`)

* `SelectedDeliveryMethodUnavailable` (value: `'SELECTED_DELIVERY_METHOD_UNAVAILABLE'`)

* `SelectedDeliveryTimeslotUnavailable` (value: `'SELECTED_DELIVERY_TIMESLOT_UNAVAILABLE'`)

* `MarketplaceUnavailable` (value: `'MARKETPLACE_UNAVAILABLE'`)

* `InvalidPvzForKgt` (value: `'INVALID_PVZ_FOR_KGT'`)

* `LegalUserPremiumSplit` (value: `'LEGAL_USER_PREMIUM_SPLIT'`)

* `UserAlreadyHasPremium` (value: `'USER_ALREADY_HAS_PREMIUM'`)

* `WaitForPaySubscription` (value: `'WAIT_FOR_PAY_SUBSCRIPTION'`)

* `AddressNotSet` (value: `'ADDRESS_NOT_SET'`)

* `PickupPointDisabled` (value: `'PICKUP_POINT_DISABLED'`)

* `LegalPreorder` (value: `'LEGAL_PREORDER'`)

* `DeliveryTypeForPreorder` (value: `'DELIVERY_TYPE_FOR_PREORDER'`)

* `CrossBorderPickup` (value: `'CROSS_BORDER_PICKUP'`)

* `OrderCustomsTypes` (value: `'ORDER_CUSTOMS_TYPES'`)

* `PackageMaxCost` (value: `'PACKAGE_MAX_COST'`)

* `SuperEconom` (value: `'SUPER_ECONOM'`)

* `EconomNotFullQuant` (value: `'ECONOM_NOT_FULL_QUANT'`)

* `EmptyDeliveryMethods` (value: `'EMPTY_DELIVERY_METHODS'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
