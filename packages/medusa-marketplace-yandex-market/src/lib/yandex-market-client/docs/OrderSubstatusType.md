# OrderSubstatusType

Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).  * Значения для заказа в статусе `PROCESSING`:      * `STARTED` — заказ подтвержден, его можно начать обрабатывать.      * `READY_TO_SHIP` — заказ собран и готов к отправке.  * Значения для заказа в статусе `CANCELLED`:      * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.      * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.      * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:        * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;       * перерыв между первым и третьим звонком не менее 90 минут;       * соединение не короче 5 секунд.        Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400.      * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.      * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.      * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.      * `SHOP_FAILED` — магазин не может выполнить заказ.      * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.      * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.      * `PROCESSING_EXPIRED` — значение более не используется.      * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.      * `TOO_MANY_DELIVERY_DATE_CHANGES` — заказ переносили слишком много раз.      * `TOO_LONG_DELIVERY` — заказ доставляется слишком долго.      * `INCORRECT_PERSONAL_DATA` — для заказа из-за рубежа указаны неправильные данные получателя, заказ не пройдет проверку на таможне.  * `TECHNICAL_ERROR` — техническая ошибка на стороне Маркета. Обратитесь в поддержку.  Также могут возвращаться другие значения. Обрабатывать их не нужно. 

## Enum

* `ReservationExpired` (value: `'RESERVATION_EXPIRED'`)

* `UserNotPaid` (value: `'USER_NOT_PAID'`)

* `UserUnreachable` (value: `'USER_UNREACHABLE'`)

* `UserChangedMind` (value: `'USER_CHANGED_MIND'`)

* `UserRefusedDelivery` (value: `'USER_REFUSED_DELIVERY'`)

* `UserRefusedProduct` (value: `'USER_REFUSED_PRODUCT'`)

* `ShopFailed` (value: `'SHOP_FAILED'`)

* `UserRefusedQuality` (value: `'USER_REFUSED_QUALITY'`)

* `ReplacingOrder` (value: `'REPLACING_ORDER'`)

* `ProcessingExpired` (value: `'PROCESSING_EXPIRED'`)

* `PendingExpired` (value: `'PENDING_EXPIRED'`)

* `ShopPendingCancelled` (value: `'SHOP_PENDING_CANCELLED'`)

* `PendingCancelled` (value: `'PENDING_CANCELLED'`)

* `UserFraud` (value: `'USER_FRAUD'`)

* `ReservationFailed` (value: `'RESERVATION_FAILED'`)

* `UserPlacedOtherOrder` (value: `'USER_PLACED_OTHER_ORDER'`)

* `UserBoughtCheaper` (value: `'USER_BOUGHT_CHEAPER'`)

* `MissingItem` (value: `'MISSING_ITEM'`)

* `BrokenItem` (value: `'BROKEN_ITEM'`)

* `WrongItem` (value: `'WRONG_ITEM'`)

* `PickupExpired` (value: `'PICKUP_EXPIRED'`)

* `DeliveryProblems` (value: `'DELIVERY_PROBLEMS'`)

* `LateContact` (value: `'LATE_CONTACT'`)

* `Custom` (value: `'CUSTOM'`)

* `DeliveryServiceFailed` (value: `'DELIVERY_SERVICE_FAILED'`)

* `WarehouseFailedToShip` (value: `'WAREHOUSE_FAILED_TO_SHIP'`)

* `DeliveryServiceUndelivered` (value: `'DELIVERY_SERVICE_UNDELIVERED'`)

* `Preorder` (value: `'PREORDER'`)

* `AwaitConfirmation` (value: `'AWAIT_CONFIRMATION'`)

* `Started` (value: `'STARTED'`)

* `Packaging` (value: `'PACKAGING'`)

* `ReadyToShip` (value: `'READY_TO_SHIP'`)

* `Shipped` (value: `'SHIPPED'`)

* `AsyncProcessing` (value: `'ASYNC_PROCESSING'`)

* `WaitingUserInput` (value: `'WAITING_USER_INPUT'`)

* `WaitingBankDecision` (value: `'WAITING_BANK_DECISION'`)

* `BankRejectCreditOffer` (value: `'BANK_REJECT_CREDIT_OFFER'`)

* `CustomerRejectCreditOffer` (value: `'CUSTOMER_REJECT_CREDIT_OFFER'`)

* `CreditOfferFailed` (value: `'CREDIT_OFFER_FAILED'`)

* `AwaitDeliveryDatesConfirmation` (value: `'AWAIT_DELIVERY_DATES_CONFIRMATION'`)

* `ServiceFault` (value: `'SERVICE_FAULT'`)

* `DeliveryServiceReceived` (value: `'DELIVERY_SERVICE_RECEIVED'`)

* `UserReceived` (value: `'USER_RECEIVED'`)

* `WaitingForStocks` (value: `'WAITING_FOR_STOCKS'`)

* `AsPartOfMultiOrder` (value: `'AS_PART_OF_MULTI_ORDER'`)

* `ReadyForLastMile` (value: `'READY_FOR_LAST_MILE'`)

* `LastMileStarted` (value: `'LAST_MILE_STARTED'`)

* `Antifraud` (value: `'ANTIFRAUD'`)

* `DeliveryUserNotReceived` (value: `'DELIVERY_USER_NOT_RECEIVED'`)

* `DeliveryServiceDelivered` (value: `'DELIVERY_SERVICE_DELIVERED'`)

* `DeliveredUserNotReceived` (value: `'DELIVERED_USER_NOT_RECEIVED'`)

* `UserWantedAnotherPaymentMethod` (value: `'USER_WANTED_ANOTHER_PAYMENT_METHOD'`)

* `UserReceivedTechnicalError` (value: `'USER_RECEIVED_TECHNICAL_ERROR'`)

* `UserForgotToUseBonus` (value: `'USER_FORGOT_TO_USE_BONUS'`)

* `DeliveryServiceNotReceived` (value: `'DELIVERY_SERVICE_NOT_RECEIVED'`)

* `DeliveryServiceLost` (value: `'DELIVERY_SERVICE_LOST'`)

* `ShippedToWrongDeliveryService` (value: `'SHIPPED_TO_WRONG_DELIVERY_SERVICE'`)

* `DeliveredUserReceived` (value: `'DELIVERED_USER_RECEIVED'`)

* `WaitingTinkoffDecision` (value: `'WAITING_TINKOFF_DECISION'`)

* `CourierSearch` (value: `'COURIER_SEARCH'`)

* `CourierFound` (value: `'COURIER_FOUND'`)

* `CourierInTransitToSender` (value: `'COURIER_IN_TRANSIT_TO_SENDER'`)

* `CourierArrivedToSender` (value: `'COURIER_ARRIVED_TO_SENDER'`)

* `CourierReceived` (value: `'COURIER_RECEIVED'`)

* `CourierNotFound` (value: `'COURIER_NOT_FOUND'`)

* `CourierNotDeliverOrder` (value: `'COURIER_NOT_DELIVER_ORDER'`)

* `CourierReturnsOrder` (value: `'COURIER_RETURNS_ORDER'`)

* `CourierReturnedOrder` (value: `'COURIER_RETURNED_ORDER'`)

* `WaitingUserDeliveryInput` (value: `'WAITING_USER_DELIVERY_INPUT'`)

* `PickupServiceReceived` (value: `'PICKUP_SERVICE_RECEIVED'`)

* `PickupUserReceived` (value: `'PICKUP_USER_RECEIVED'`)

* `CancelledCourierNotFound` (value: `'CANCELLED_COURIER_NOT_FOUND'`)

* `CourierNotComeForOrder` (value: `'COURIER_NOT_COME_FOR_ORDER'`)

* `DeliveryNotManagedRegion` (value: `'DELIVERY_NOT_MANAGED_REGION'`)

* `IncompleteContactInformation` (value: `'INCOMPLETE_CONTACT_INFORMATION'`)

* `IncompleteMultiOrder` (value: `'INCOMPLETE_MULTI_ORDER'`)

* `InappropriateWeightSize` (value: `'INAPPROPRIATE_WEIGHT_SIZE'`)

* `TechnicalError` (value: `'TECHNICAL_ERROR'`)

* `SortingCenterLost` (value: `'SORTING_CENTER_LOST'`)

* `CourierSearchNotStarted` (value: `'COURIER_SEARCH_NOT_STARTED'`)

* `Lost` (value: `'LOST'`)

* `AwaitPayment` (value: `'AWAIT_PAYMENT'`)

* `AwaitLavkaReservation` (value: `'AWAIT_LAVKA_RESERVATION'`)

* `UserWantsToChangeAddress` (value: `'USER_WANTS_TO_CHANGE_ADDRESS'`)

* `FullNotRansom` (value: `'FULL_NOT_RANSOM'`)

* `PrescriptionMismatch` (value: `'PRESCRIPTION_MISMATCH'`)

* `DropoffLost` (value: `'DROPOFF_LOST'`)

* `DropoffClosed` (value: `'DROPOFF_CLOSED'`)

* `DeliveryToStoreStarted` (value: `'DELIVERY_TO_STORE_STARTED'`)

* `UserWantsToChangeDeliveryDate` (value: `'USER_WANTS_TO_CHANGE_DELIVERY_DATE'`)

* `WrongItemDelivered` (value: `'WRONG_ITEM_DELIVERED'`)

* `DamagedBox` (value: `'DAMAGED_BOX'`)

* `AwaitDeliveryDates` (value: `'AWAIT_DELIVERY_DATES'`)

* `LastMileCourierSearch` (value: `'LAST_MILE_COURIER_SEARCH'`)

* `PickupPointClosed` (value: `'PICKUP_POINT_CLOSED'`)

* `LegalInfoChanged` (value: `'LEGAL_INFO_CHANGED'`)

* `UserHasNoTimeToPickupOrder` (value: `'USER_HAS_NO_TIME_TO_PICKUP_ORDER'`)

* `DeliveryCustomsArrived` (value: `'DELIVERY_CUSTOMS_ARRIVED'`)

* `DeliveryCustomsCleared` (value: `'DELIVERY_CUSTOMS_CLEARED'`)

* `FirstMileDeliveryServiceReceived` (value: `'FIRST_MILE_DELIVERY_SERVICE_RECEIVED'`)

* `AwaitAutoDeliveryDates` (value: `'AWAIT_AUTO_DELIVERY_DATES'`)

* `AwaitUserPersonalData` (value: `'AWAIT_USER_PERSONAL_DATA'`)

* `NoPersonalDataExpired` (value: `'NO_PERSONAL_DATA_EXPIRED'`)

* `CustomsProblems` (value: `'CUSTOMS_PROBLEMS'`)

* `AwaitCashier` (value: `'AWAIT_CASHIER'`)

* `WaitingPostpaidBudgetReservation` (value: `'WAITING_POSTPAID_BUDGET_RESERVATION'`)

* `AwaitServiceableConfirmation` (value: `'AWAIT_SERVICEABLE_CONFIRMATION'`)

* `PostpaidBudgetReservationFailed` (value: `'POSTPAID_BUDGET_RESERVATION_FAILED'`)

* `AwaitCustomPriceConfirmation` (value: `'AWAIT_CUSTOM_PRICE_CONFIRMATION'`)

* `ReadyForPickup` (value: `'READY_FOR_PICKUP'`)

* `TooManyDeliveryDateChanges` (value: `'TOO_MANY_DELIVERY_DATE_CHANGES'`)

* `TooLongDelivery` (value: `'TOO_LONG_DELIVERY'`)

* `DeferredPayment` (value: `'DEFERRED_PAYMENT'`)

* `PostpaidFailed` (value: `'POSTPAID_FAILED'`)

* `IncorrectPersonalData` (value: `'INCORRECT_PERSONAL_DATA'`)

* `Unknown` (value: `'UNKNOWN'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
