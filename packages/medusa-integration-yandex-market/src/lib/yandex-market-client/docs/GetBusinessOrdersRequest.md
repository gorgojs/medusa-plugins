# GetBusinessOrdersRequest

Запрос на получение информации о заказах бизнеса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderIds** | **Set&lt;number&gt;** | Идентификаторы заказов. | [optional] [default to undefined]
**externalOrderIds** | **Set&lt;string&gt;** | Внешние идентификаторы заказов. | [optional] [default to undefined]
**programTypes** | [**Set&lt;SellingProgramType&gt;**](SellingProgramType.md) | Модели работы магазина на Маркете. | [optional] [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Идентификаторы кампаний магазинов. | [optional] [default to undefined]
**statuses** | [**Set&lt;OrderStatusType&gt;**](OrderStatusType.md) | Статусы заказов. | [optional] [default to undefined]
**substatuses** | [**Set&lt;OrderSubstatusType&gt;**](OrderSubstatusType.md) | Этапы обработки или причины отмены заказов. | [optional] [default to undefined]
**dates** | [**OrderDatesFilterDTO**](OrderDatesFilterDTO.md) |  | [optional] [default to undefined]
**fake** | **boolean** | Тип заказа:  * &#x60;false&#x60; — настоящий заказ покупателя.  * &#x60;true&#x60; — [тестовый заказ](../../concepts/sandbox.md) Маркета.  | [optional] [default to undefined]
**waitingForCancellationApprove** | **boolean** | **Только для модели DBS**  Фильтр для получения заказов, по которым есть запросы на отмену.  При значении &#x60;true&#x60; возвращаются только те заказы, которые находятся в статусе &#x60;DELIVERY&#x60; или &#x60;PICKUP&#x60;, и пользователи решили их отменить.  | [optional] [default to undefined]
**sourcePlatforms** | [**Set&lt;OrderSourcePlatformType&gt;**](OrderSourcePlatformType.md) | Площадки-источники заказов. | [optional] [default to undefined]

## Example

```typescript
import { GetBusinessOrdersRequest } from './api';

const instance: GetBusinessOrdersRequest = {
    orderIds,
    externalOrderIds,
    programTypes,
    campaignIds,
    statuses,
    substatuses,
    dates,
    fake,
    waitingForCancellationApprove,
    sourcePlatforms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
