# DeliveryMethodListResponseDeliveryMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_id** | **number** | Идентификатор продавца. | [optional] [default to undefined]
**created_at** | **string** | Дата и время создания метода доставки. | [optional] [default to undefined]
**cutoff** | **string** | Время, до которого продавцу нужно собрать заказ. | [optional] [default to undefined]
**id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**name** | **string** | Название метода доставки. | [optional] [default to undefined]
**provider_id** | **number** | Идентификатор службы доставки. | [optional] [default to undefined]
**sla_cut_in** | **number** | Минимальное время на сборку заказа в минутах в соответствии с настройками склада. | [optional] [default to undefined]
**status** | **string** | Статус метода доставки:   - &#x60;NEW&#x60; — создан,   - &#x60;EDITED&#x60; — редактируется,   - &#x60;ACTIVE&#x60; — активный,   - &#x60;DISABLED&#x60; — неактивный.  | [optional] [default to undefined]
**template_id** | **number** | Идентификатор услуги по доставке заказа. | [optional] [default to undefined]
**updated_at** | **string** | Дата и время последнего обновления метода метода доставки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryMethodListResponseDeliveryMethod } from './api';

const instance: DeliveryMethodListResponseDeliveryMethod = {
    company_id,
    created_at,
    cutoff,
    id,
    name,
    provider_id,
    sla_cut_in,
    status,
    template_id,
    updated_at,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
