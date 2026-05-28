# V2ReportReturnsCreateRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_schema** | **string** | Фильтр по схеме работы:  - &#x60;FBS&#x60; — возвраты на свой склад.  - &#x60;FBO&#x60; — возвраты на склад маркетплейса. - &#x60;ALL&#x60; — все возвраты.  | [optional] [default to undefined]
**date_from** | **string** | Дата, с которой данные отображаются в отчёте.  Доступно только за последние три месяца.  | [default to undefined]
**date_to** | **string** | Дата, по которую данные отображаются в отчёте.  Доступно только за последние три месяца.  | [default to undefined]
**status** | **string** | Фильтр по статусу возврата: - &#x60;DisputeOpened&#x60; — открыт спор с покупателем; - &#x60;OnSellerApproval&#x60; — на согласовании у продавца; - &#x60;ArrivedAtReturnPlace&#x60; — в пункте выдачи; - &#x60;OnSellerClarification&#x60; — на уточнении у продавца; - &#x60;OnSellerClarificationAfterPartialCompensation&#x60; — на уточнении у продавца после частичной компенсации; - &#x60;OfferedPartialCompensation&#x60; — предложена частичная компенсация; - &#x60;ReturnMoneyApproved&#x60; — одобрен возврат денег; - &#x60;PartialCompensationReturned&#x60; — вернули часть денег; - &#x60;CancelledDisputeNotOpen&#x60; — возврат отклонён, спор не открыт; - &#x60;Rejected&#x60; — заявка отклонена; - &#x60;CrmRejected&#x60; — заявка отклонена Ozon; - &#x60;Cancelled&#x60; — заявка отменена; - &#x60;Approved&#x60; — заявка одобрена продавцом; - &#x60;ApprovedByOzon&#x60; — заявка одобрена Ozon; - &#x60;ReceivedBySeller&#x60; — продавец получил возврат; - &#x60;MovingToSeller&#x60; — возврат на пути к продавцу; - &#x60;ReturnCompensated&#x60; — продавец получил компенсацию; - &#x60;ReturningToSellerByCourier&#x60; — курьер везёт возврат продавцу; - &#x60;Utilizing&#x60; — на утилизации; - &#x60;Utilized&#x60; — утилизирован; - &#x60;MoneyReturned&#x60; — покупателю вернули всю сумму; - &#x60;PartialCompensationInProcess&#x60; — одобрен частичный возврат денег; - &#x60;DisputeYouOpened&#x60; — продавец открыл спор; - &#x60;CompensationRejected&#x60; — отказано в компенсации; - &#x60;DisputeOpening&#x60; — обращение в поддержку отправлено; - &#x60;CompensationOffered&#x60; — ожидает вашего решения по компенсации; - &#x60;WaitingCompensation&#x60; — ожидает компенсации; - &#x60;SendingError&#x60; — ошибка при отправке обращения в поддержку; - &#x60;CompensationRejectedBySla&#x60; — истёк срок решения; - &#x60;CompensationRejectedBySeller&#x60; — продавец отказался от компенсации; - &#x60;MovingToOzon&#x60; — едет на склад Ozon; - &#x60;ReturnedToOzon&#x60; — на складе Ozon; - &#x60;MoneyReturnedBySystem&#x60; — быстрый возврат; - &#x60;WaitingShipment&#x60; — ожидает отправки.  | [default to undefined]

## Example

```typescript
import { V2ReportReturnsCreateRequestFilter } from './api';

const instance: V2ReportReturnsCreateRequestFilter = {
    delivery_schema,
    date_from,
    date_to,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
