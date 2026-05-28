# DeliveryMethodListV2ResponseDeliveryMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания метода доставки. | [optional] [default to undefined]
**cutoff** | **string** | Время, до которого продавцу нужно собрать заказ. | [optional] [default to undefined]
**id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**is_express** | **boolean** | &#x60;true&#x60;, если доступна быстрая доставка Ozon Express.  | [optional] [default to undefined]
**name** | **string** | Название метода доставки. | [optional] [default to undefined]
**provider_id** | **number** | Идентификатор службы доставки. | [optional] [default to undefined]
**sla_cut_in** | **number** | Минимальное время на сборку заказа в минутах в соответствии с настройками склада. | [optional] [default to undefined]
**status** | **string** | Статус метода доставки: - &#x60;NEW&#x60; — создан, - &#x60;EDITED&#x60; — редактируется, - &#x60;ACTIVE&#x60; — активный, - &#x60;DISABLED&#x60; — неактивный, - &#x60;WAITING&#x60; — на проверке, - &#x60;BROKEN&#x60; — с ошибкой.  | [optional] [default to 'NEW']
**template_id** | **number** | Идентификатор услуги по доставке заказа. | [optional] [default to undefined]
**tpl_integration_type** | **string** | Тип интеграции со службой доставки: - &#x60;aggregator&#x60; — доставка внешней службой, Ozon регистрирует заказ; - &#x60;3pl_tracking&#x60; — доставка внешней службой, продавец регистрирует заказ; - &#x60;non_integrated&#x60; — доставка силами продавца; - &#x60;hybrid&#x60; — гибридная интеграция.  | [optional] [default to undefined]
**updated_at** | **string** | Дата и время последнего обновления метода метода доставки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryMethodListV2ResponseDeliveryMethod } from './api';

const instance: DeliveryMethodListV2ResponseDeliveryMethod = {
    created_at,
    cutoff,
    id,
    is_express,
    name,
    provider_id,
    sla_cut_in,
    status,
    template_id,
    tpl_integration_type,
    updated_at,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
