# ColumnMap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_clientNumber** | **string** | Номер заказа в системе клиента | [default to undefined]
**order_weight** | **number** | Вес всего заказа в граммах | [optional] [default to undefined]
**order_height** | **number** | Высота заказа в сантиметрах | [optional] [default to undefined]
**order_length** | **number** | Длина заказа в сантиметрах | [optional] [default to undefined]
**order_width** | **number** | Ширина заказа в сантиметрах | [optional] [default to undefined]
**order_providerKey** | **string** | Код службы доставки | [optional] [default to undefined]
**order_providerConnectId** | **number** | ID подключения к СД | [optional] [default to undefined]
**order_pickupType** | **number** | Тип забора груза (1 - от двери клиента; 2 – клиент привозит заказ на склад СД) | [default to undefined]
**order_deliveryType** | **number** | Тип доставки (1 - до двери; 2 – до ПВЗ) | [default to undefined]
**order_pointInId** | **number** | Идентификатор точки забора товара в системе apiship | [optional] [default to undefined]
**order_pointOutId** | **number** | Идентификатор точки выдачи товара в системе apiship | [optional] [default to undefined]
**order_tariffId** | **number** | Тариф службы доставки, по которому осуществляется доставка | [default to undefined]
**order_deliveryTimeStart** | **string** | Начальное время доставки | [optional] [default to undefined]
**order_deliveryTimeEnd** | **string** | Конечное время доставки | [optional] [default to undefined]
**cost_assessedCost** | **number** | Оценочная стоимость / сумма страховки (в рублях) | [default to undefined]
**cost_codCost** | **number** | Сумма наложенного платежа с учетом НДС (в рублях) | [default to undefined]
**cost_deliveryCost** | **number** | Стоимость доставки с получателя. codCost должен содержать в себе эту сумму. | [optional] [default to undefined]
**sender_phone** | **string** | Контактный телефон | [default to undefined]
**sender_companyName** | **string** | Название компании | [optional] [default to undefined]
**sender_contactName** | **string** | ФИО контактного лица | [default to undefined]
**sender_countryCode** | **string** | Код страны в соответствии с ISO 3166-1 alpha-2 | [default to undefined]
**sender_region** | **string** | Область или республика или край | [default to undefined]
**sender_city** | **string** | Город или населенный пункт | [default to undefined]
**sender_street** | **string** | Улица | [default to undefined]
**sender_house** | **string** | Дом | [default to undefined]
**sender_block** | **string** | Строение/Корпус | [optional] [default to undefined]
**sender_office** | **string** | Офис/Квартира | [optional] [default to undefined]
**sender_email** | **string** | Контактный email адрес | [optional] [default to undefined]
**sender_AddressString** | **string** | Адрес одной строкой | [optional] [default to undefined]
**recipient_phone** | **string** | Контактный телефон | [default to undefined]
**recipient_companyName** | **string** | Название компании | [optional] [default to undefined]
**recipient_contactName** | **string** | ФИО контактного лица | [default to undefined]
**recipient_countryCode** | **string** | Код страны в соответствии с ISO 3166-1 alpha-2 | [default to undefined]
**recipient_region** | **string** | Область или республика или край | [default to undefined]
**recipient_city** | **string** | Город или населенный пункт | [default to undefined]
**recipient_street** | **string** | Улица | [default to undefined]
**recipient_house** | **string** | Дом | [default to undefined]
**recipient_block** | **string** | Строение/Корпус | [optional] [default to undefined]
**recipient_office** | **string** | Офис/Квартира | [optional] [default to undefined]
**recipient_email** | **string** | Контактный email адрес | [optional] [default to undefined]
**recipient_AddressString** | **string** | Адрес одной строкой | [optional] [default to undefined]
**item_description** | **string** | Наименование товара | [default to undefined]
**item_quantity** | **number** | Кол-во товара | [default to undefined]
**item_articul** | **string** | Артикул товара | [optional] [default to undefined]
**item_barcode** | **string** | ШК предмета | [optional] [default to undefined]
**item_assessedCost** | **number** | Оценочная стоимость единицы товара в рублях | [optional] [default to undefined]
**item_cost** | **number** | Наложенная стоимость товара в рублях | [optional] [default to undefined]
**item_weight** | **number** | Вес единицы товара в граммах | [default to undefined]
**item_height** | **number** | Высота единицы товара в сантиметрах | [optional] [default to undefined]
**item_length** | **number** | Длина единицы товара в сантиметрах | [optional] [default to undefined]
**item_width** | **number** | Ширина единицы товара в сантиметрах | [optional] [default to undefined]
**place_placeNumber** | **string** | Номер места в информационной системе клиента | [optional] [default to undefined]
**place_barcode** | **string** | Штрихкод места | [optional] [default to undefined]
**place_height** | **number** | Высота места в сантиметрах | [optional] [default to undefined]
**place_width** | **number** | Ширина места в сантиметрах | [optional] [default to undefined]
**place_length** | **number** | Длина места в сантиметрах | [optional] [default to undefined]
**place_weight** | **number** | Вес места в граммах | [optional] [default to undefined]
**place_items** | [**Array&lt;Item&gt;**](Item.md) | Содержимое места | [optional] [default to undefined]
**extraParams_** | **string** | Дополнительная услуга (вместо звёздочки в названии параметра необходимо подставить название дополнительной услуги) | [optional] [default to undefined]

## Example

```typescript
import { ColumnMap } from './api';

const instance: ColumnMap = {
    order_clientNumber,
    order_weight,
    order_height,
    order_length,
    order_width,
    order_providerKey,
    order_providerConnectId,
    order_pickupType,
    order_deliveryType,
    order_pointInId,
    order_pointOutId,
    order_tariffId,
    order_deliveryTimeStart,
    order_deliveryTimeEnd,
    cost_assessedCost,
    cost_codCost,
    cost_deliveryCost,
    sender_phone,
    sender_companyName,
    sender_contactName,
    sender_countryCode,
    sender_region,
    sender_city,
    sender_street,
    sender_house,
    sender_block,
    sender_office,
    sender_email,
    sender_AddressString,
    recipient_phone,
    recipient_companyName,
    recipient_contactName,
    recipient_countryCode,
    recipient_region,
    recipient_city,
    recipient_street,
    recipient_house,
    recipient_block,
    recipient_office,
    recipient_email,
    recipient_AddressString,
    item_description,
    item_quantity,
    item_articul,
    item_barcode,
    item_assessedCost,
    item_cost,
    item_weight,
    item_height,
    item_length,
    item_width,
    place_placeNumber,
    place_barcode,
    place_height,
    place_width,
    place_length,
    place_weight,
    place_items,
    extraParams_,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
