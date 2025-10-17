# ReturnDTO

Невыкуп или возврат в заказе.  Параметров `logisticPickupPoint`, `shipmentRecipientType` и `shipmentStatus` может не быть в случае возврата:   * С опцией **Быстрый возврат денег за дешевый брак**, когда товар остается у покупателя (`fastReturn=true`).   * По заказу от бизнеса, если:     * статус возврата `STARTED_BY_USER` или `WAITING_FOR_DECISION`;     * возврат отменен до передачи товара.  Статус возврата денег `refundStatus` актуален только для `returnType=RETURN`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор невыкупа или возврата. | [default to undefined]
**orderId** | **number** | Номер заказа. | [default to undefined]
**creationDate** | **string** | Дата создания невыкупа или возврата клиентом.  Формат даты: ISO 8601 со смещением относительно UTC.  | [optional] [default to undefined]
**updateDate** | **string** | Дата обновления невыкупа или возврата.  Формат даты: ISO 8601 со смещением относительно UTC.  | [optional] [default to undefined]
**refundStatus** | [**RefundStatusType**](RefundStatusType.md) |  | [optional] [default to undefined]
**logisticPickupPoint** | [**LogisticPickupPointDTO**](LogisticPickupPointDTO.md) |  | [optional] [default to undefined]
**pickupTillDate** | **string** | Дата, до которой можно забрать товар.  Только для невыкупов и возвратов в логистическом статусе &#x60;READY_FOR_PICKUP&#x60;.  Формат даты: ISO 8601 со смещением относительно UTC.  | [optional] [default to undefined]
**shipmentRecipientType** | [**RecipientType**](RecipientType.md) |  | [optional] [default to undefined]
**shipmentStatus** | [**ReturnShipmentStatusType**](ReturnShipmentStatusType.md) |  | [optional] [default to undefined]
**refundAmount** | **number** | {% note warning \&quot;Вместо него используйте &#x60;amount&#x60;.\&quot; %}     {% endnote %}  Сумма возврата в копейках.  | [optional] [default to undefined]
**amount** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;ReturnItemDTO&gt;**](ReturnItemDTO.md) | Список товаров в невыкупе или возврате. | [default to undefined]
**returnType** | [**ModelReturnType**](ModelReturnType.md) |  | [default to undefined]
**fastReturn** | **boolean** | Используется ли опция **Быстрый возврат денег за дешевый брак**.  Актуально только для &#x60;returnType&#x3D;RETURN&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { ReturnDTO } from './api';

const instance: ReturnDTO = {
    id,
    orderId,
    creationDate,
    updateDate,
    refundStatus,
    logisticPickupPoint,
    pickupTillDate,
    shipmentRecipientType,
    shipmentStatus,
    refundAmount,
    amount,
    items,
    returnType,
    fastReturn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
