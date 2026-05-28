# ReportCreateCompanyPostingsReportRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_reason_id** | **Array&lt;number&gt;** | Идентификатор причины отмены. | [optional] [default to undefined]
**delivery_schema** | **Array&lt;string&gt;** | Схема работы — FBO или FBS.  За один запрос вы можете передать только одно значение: * &#x60;fbo&#x60; — чтобы получить отчёт по схеме FBO, * &#x60;fbs&#x60; — чтобы получить отчёт по схеме FBS.  | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**processed_at_from** | **string** | Время, когда заказ попал в обработку. | [optional] [default to undefined]
**processed_at_to** | **string** | Время, когда заказ появился в личном кабинете. | [optional] [default to undefined]
**sku** | **Array&lt;number&gt;** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**status_alias** | **Array&lt;string&gt;** | Текст статуса. | [optional] [default to undefined]
**statuses** | **Array&lt;number&gt;** | Числовой статус. | [optional] [default to undefined]
**title** | **string** | Название товара. | [optional] [default to undefined]
**warehouse_id** | **Array&lt;number&gt;** | Идентификатор склада. | [optional] [default to undefined]
**delivery_method_id** | **Array&lt;number&gt;** | Идентификатор способа доставки. Получите методом [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [optional] [default to undefined]
**is_express** | **boolean** | Экспресс-доставка: - &#x60;true&#x60; — только отправления с доставкой Ozon Express; - &#x60;false&#x60; — только отправления без доставки Ozon Express.  Если ничего не передать, вернутся все отправления.  | [optional] [default to undefined]

## Example

```typescript
import { ReportCreateCompanyPostingsReportRequestFilter } from './api';

const instance: ReportCreateCompanyPostingsReportRequestFilter = {
    cancel_reason_id,
    delivery_schema,
    offer_id,
    processed_at_from,
    processed_at_to,
    sku,
    status_alias,
    statuses,
    title,
    warehouse_id,
    delivery_method_id,
    is_express,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
