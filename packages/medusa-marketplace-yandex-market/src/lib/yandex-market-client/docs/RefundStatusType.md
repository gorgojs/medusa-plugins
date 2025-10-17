# RefundStatusType

Статус возврата денег:  * `STARTED_BY_USER` — создан клиентом из личного кабинета.  * `REFUND_IN_PROGRESS` — ждет решение о возврате денег.  * `REFUNDED` — деньги возвращены.  * `FAILED` — невозможно провести возврат покупателю.  * `WAITING_FOR_DECISION` — ожидает решения (DBS).  * `DECISION_MADE` — по возврату принято решение (DBS).  * `REFUNDED_WITH_BONUSES` — возврат осуществлен баллами Плюса или промокодом.  * `REFUNDED_BY_SHOP` — магазин сделал самостоятельно возврат денег.  * `COMPLETE_WITHOUT_REFUND` — возврат денег не требуется.  * `CANCELLED` — возврат отменен.  * `REJECTED` — возврат отклонен модерацией или в ПВЗ.  * `PREMODERATION_DISPUTE` — по возврату открыт спор (FBY, FBS и Экспресс).  * `PREMODERATION_DECISION_WAITING` — ожидает решения (FBY, FBS и Экспресс).  * `PREMODERATION_DECISION_MADE` — по возврату принято решение (FBY, FBS и Экспресс).  * `PREMODERATION_SELECT_DELIVERY` — пользователь выбирает способ доставки (FBY, FBS и Экспресс).  * `UNKNOWN` — неизвестный статус. 

## Enum

* `StartedByUser` (value: `'STARTED_BY_USER'`)

* `RefundInProgress` (value: `'REFUND_IN_PROGRESS'`)

* `Refunded` (value: `'REFUNDED'`)

* `Failed` (value: `'FAILED'`)

* `WaitingForDecision` (value: `'WAITING_FOR_DECISION'`)

* `DecisionMade` (value: `'DECISION_MADE'`)

* `RefundedWithBonuses` (value: `'REFUNDED_WITH_BONUSES'`)

* `RefundedByShop` (value: `'REFUNDED_BY_SHOP'`)

* `Cancelled` (value: `'CANCELLED'`)

* `Rejected` (value: `'REJECTED'`)

* `CompleteWithoutRefund` (value: `'COMPLETE_WITHOUT_REFUND'`)

* `PremoderationDispute` (value: `'PREMODERATION_DISPUTE'`)

* `PremoderationDecisionWaiting` (value: `'PREMODERATION_DECISION_WAITING'`)

* `PremoderationDecisionMade` (value: `'PREMODERATION_DECISION_MADE'`)

* `PremoderationSelectDelivery` (value: `'PREMODERATION_SELECT_DELIVERY'`)

* `Unknown` (value: `'UNKNOWN'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
