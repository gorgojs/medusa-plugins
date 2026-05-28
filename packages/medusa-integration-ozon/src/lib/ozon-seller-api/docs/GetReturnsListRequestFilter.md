# GetReturnsListRequestFilter

Фильтры. Используйте только один фильтр в запросе: `logistic_return_date`, `storage_tariffication_start_date` или `visual_status_change_moment`, иначе вернётся ошибка. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logistic_return_date** | [**V1TimeRangeReturnDate**](V1TimeRangeReturnDate.md) |  | [optional] [default to undefined]
**storage_tariffication_start_date** | [**V1TimeRangeStorageTariffication**](V1TimeRangeStorageTariffication.md) |  | [optional] [default to undefined]
**visual_status_change_moment** | [**V1TimeRangeVisualStatus**](V1TimeRangeVisualStatus.md) |  | [optional] [default to undefined]
**order_id** | **number** | Фильтр по идентификатору заказа. | [optional] [default to undefined]
**posting_numbers** | **Array&lt;string&gt;** | Фильтр по номеру отправления. Передавайте не больше 50 постингов. | [optional] [default to undefined]
**product_name** | **string** | Фильтр по названию товара. | [optional] [default to undefined]
**offer_id** | **string** | Фильтр по артикулу товара. | [optional] [default to undefined]
**visual_status_name** | **string** | Фильтр по статусу возврата: - &#x60;DisputeOpened&#x60; — открыт спор с покупателем; - &#x60;OnSellerApproval&#x60; — на согласовании у продавца; - &#x60;ArrivedAtReturnPlace&#x60; — в пункте выдачи; - &#x60;OnSellerClarification&#x60; — на уточнении у продавца; - &#x60;OnSellerClarificationAfterPartialCompensation&#x60; — на уточнении у продавца после частичной компенсации; - &#x60;OfferedPartialCompensation&#x60; — предложена частичная компенсация; - &#x60;ReturnMoneyApproved&#x60; — одобрен возврат денег; - &#x60;PartialCompensationReturned&#x60; — вернули часть денег; - &#x60;CancelledDisputeNotOpen&#x60; — возврат отклонён, спор не открыт; - &#x60;Rejected&#x60; — заявка отклонена; - &#x60;CrmRejected&#x60; — заявка отклонена Ozon; - &#x60;Cancelled&#x60; — заявка отменена; - &#x60;Approved&#x60; — заявка одобрена продавцом; - &#x60;ApprovedByOzon&#x60; — заявка одобрена Ozon; - &#x60;ReceivedBySeller&#x60; — продавец получил возврат; - &#x60;MovingToSeller&#x60; — возврат на пути к продавцу; - &#x60;ReturningToSellerByCourier&#x60; — курьер везёт возврат продавцу; - &#x60;Utilizing&#x60; — на утилизации; - &#x60;Utilized&#x60; — утилизирован; - &#x60;MoneyReturned&#x60; — покупателю вернули всю сумму; - &#x60;PartialCompensationInProcess&#x60; — одобрен частичный возврат денег; - &#x60;DisputeYouOpened&#x60; — продавец открыл спор; - &#x60;CompensationRejected&#x60; — отказано в компенсации; - &#x60;DisputeOpening&#x60; — обращение в поддержку отправлено; - &#x60;CompensationOffered&#x60; — ожидает вашего решения по компенсации; - &#x60;WaitingCompensation&#x60; — ожидает компенсации; - &#x60;SendingError&#x60; — ошибка при отправке обращения в поддержку; - &#x60;CompensationRejectedBySla&#x60; — истёк срок решения; - &#x60;CompensationRejectedBySeller&#x60; — продавец отказался от компенсации; - &#x60;MovingToOzon&#x60; — едет на склад Ozon; - &#x60;ReturnedToOzon&#x60; — на складе Ozon; - &#x60;MoneyReturnedBySystem&#x60; — быстрый возврат; - &#x60;WaitingShipment&#x60; — ожидает отправки.  | [optional] [default to undefined]
**warehouse_id** | **number** | Фильтр по идентификатору склада. Можно получить с помощью метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList). | [optional] [default to undefined]
**barcode** | **string** | Фильтр по штрихкоду возвратной этикетки. | [optional] [default to undefined]
**return_schema** | **string** | Фильтр по схеме доставки: &#x60;FBS&#x60; или &#x60;FBO&#x60;.  | [optional] [default to undefined]
**compensation_status_id** | **number** | Фильтр по статусу компенсации: - &#x60;1&#x60; — отправлена; - &#x60;2&#x60; — получена; - &#x60;3&#x60; — отменена; - &#x60;4&#x60; — проведена декомпенсация.  | [optional] [default to undefined]

## Example

```typescript
import { GetReturnsListRequestFilter } from './api';

const instance: GetReturnsListRequestFilter = {
    logistic_return_date,
    storage_tariffication_start_date,
    visual_status_change_moment,
    order_id,
    posting_numbers,
    product_name,
    offer_id,
    visual_status_name,
    warehouse_id,
    barcode,
    return_schema,
    compensation_status_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
