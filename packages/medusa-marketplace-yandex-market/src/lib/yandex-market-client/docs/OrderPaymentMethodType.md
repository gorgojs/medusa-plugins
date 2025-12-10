# OrderPaymentMethodType

Способ оплаты заказа:  * Значения, если выбрана оплата при оформлении заказа (`\"paymentType\": \"PREPAID\"`):    * `YANDEX` — банковской картой.    * `APPLE_PAY` — Apple Pay.    * `GOOGLE_PAY` — Google Pay.    * `CREDIT` — в кредит.    * `TINKOFF_CREDIT` — в кредит в Тинькофф Банке.    * `TINKOFF_INSTALLMENTS` — рассрочка в Тинькофф Банке.    * `EXTERNAL_CERTIFICATE` — подарочным сертификатом (например, из приложения «Сбербанк Онлайн»).    * `SBP` — через систему быстрых платежей.    * `B2B_ACCOUNT_PREPAYMENT` — заказ оплачивает организация.   * Значения, если выбрана оплата при получении заказа (`\"paymentType\": \"POSTPAID\"`):    * `CARD_ON_DELIVERY` — банковской картой.    * `BOUND_CARD_ON_DELIVERY` — привязанной картой при получении.    * `BNPL_BANK_ON_DELIVERY` — супер Сплитом.    * `BNPL_ON_DELIVERY` — Сплитом.    * `CASH_ON_DELIVERY` — наличными.    * `B2B_ACCOUNT_POSTPAYMENT` — заказ оплачивает организация после доставки.  * `UNKNOWN` — неизвестный тип.  Значение по умолчанию: `CASH_ON_DELIVERY`. 

## Enum

* `CashOnDelivery` (value: `'CASH_ON_DELIVERY'`)

* `CardOnDelivery` (value: `'CARD_ON_DELIVERY'`)

* `BoundCardOnDelivery` (value: `'BOUND_CARD_ON_DELIVERY'`)

* `BnplBankOnDelivery` (value: `'BNPL_BANK_ON_DELIVERY'`)

* `BnplOnDelivery` (value: `'BNPL_ON_DELIVERY'`)

* `Yandex` (value: `'YANDEX'`)

* `ApplePay` (value: `'APPLE_PAY'`)

* `ExternalCertificate` (value: `'EXTERNAL_CERTIFICATE'`)

* `Credit` (value: `'CREDIT'`)

* `GooglePay` (value: `'GOOGLE_PAY'`)

* `TinkoffCredit` (value: `'TINKOFF_CREDIT'`)

* `Sbp` (value: `'SBP'`)

* `TinkoffInstallments` (value: `'TINKOFF_INSTALLMENTS'`)

* `B2BAccountPrepayment` (value: `'B2B_ACCOUNT_PREPAYMENT'`)

* `B2BAccountPostpayment` (value: `'B2B_ACCOUNT_POSTPAYMENT'`)

* `Unknown` (value: `'UNKNOWN'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
