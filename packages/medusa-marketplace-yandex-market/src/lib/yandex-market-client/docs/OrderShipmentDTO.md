# OrderShipmentDTO

Список посылок.  В параметре может указываться несколько посылок. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор посылки, присвоенный Маркетом. | [optional] [default to undefined]
**shipmentDate** | **string** | Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [optional] [default to undefined]
**shipmentTime** | **string** | **Только для модели Экспресс**  Время, к которому магазин должен упаковать заказ и перевести его в статус &#x60;READY_TO_SHIP&#x60;. После смены статуса за заказом приедет курьер.  Поле может появиться не сразу. Запрашивайте информацию о заказе в течении 5–10 минут, пока оно не вернется.  Формат времени: 24-часовой, &#x60;ЧЧ:ММ&#x60;.  Если заказ сделан организацией, параметр не возвращается до согласования даты доставки.  | [optional] [default to undefined]
**tracks** | [**Array&lt;OrderTrackDTO&gt;**](OrderTrackDTO.md) | **Только для модели DBS**  Информация для отслеживания перемещений посылки.  | [optional] [default to undefined]
**boxes** | [**Array&lt;OrderParcelBoxDTO&gt;**](OrderParcelBoxDTO.md) | Список грузовых мест. | [optional] [default to undefined]

## Example

```typescript
import { OrderShipmentDTO } from './api';

const instance: OrderShipmentDTO = {
    id,
    shipmentDate,
    shipmentTime,
    tracks,
    boxes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
