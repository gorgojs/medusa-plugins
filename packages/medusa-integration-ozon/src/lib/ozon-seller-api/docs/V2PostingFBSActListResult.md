# V2PostingFBSActListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор отгрузки. | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**delivery_method_name** | **string** | Название метода доставки. | [optional] [default to undefined]
**integration_type** | **string** | Тип интеграции со службой доставки:   - &#x60;ozon&#x60; — доставка через Ozon логистику.   - &#x60;3pl&#x60; — доставка внешней службой, продавец регистрирует заказ.  | [optional] [default to undefined]
**containers_count** | **number** | Число грузовых мест. | [optional] [default to undefined]
**status** | **string** | Статус отгрузки. | [optional] [default to undefined]
**departure_date** | **string** | Дата отгрузки. | [optional] [default to undefined]
**created_at** | **string** | Дата создания записи об отгрузке. | [optional] [default to undefined]
**updated_at** | **string** | Дата обновления записи об отгрузке. | [optional] [default to undefined]
**act_type** | **string** | Тип акта приёма-передачи для FBS продавцов. | [optional] [default to undefined]
**is_partial** | **boolean** | Признак частичной перевозки. &#x60;true&#x60;, если перевозка частичная.  Частичная перевозка значит, что отгрузка была разделена на несколько частей и по каждой из частей формируются отдельные акты.  | [optional] [default to undefined]
**has_postings_for_next_carriage** | **boolean** | Признак наличия подлежащих отгрузке отправлений, которые не попали в текущую перевозку. &#x60;true&#x60;, если такие отправления есть. | [optional] [default to undefined]
**partial_num** | **number** | Порядковый номер частичной перевозки. | [optional] [default to undefined]
**related_docs** | [**V2PostingFBSActListRelatedDocs**](V2PostingFBSActListRelatedDocs.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSActListResult } from './api';

const instance: V2PostingFBSActListResult = {
    id,
    delivery_method_id,
    delivery_method_name,
    integration_type,
    containers_count,
    status,
    departure_date,
    created_at,
    updated_at,
    act_type,
    is_partial,
    has_postings_for_next_carriage,
    partial_num,
    related_docs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
