# GiveoutListResponseGiveoutDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_articles_count** | **number** | Количество товаров в отгрузке. | [optional] [default to undefined]
**created_at** | **string** | Дата и время. | [optional] [default to undefined]
**giveout_id** | **number** | Идентификатор отгрузки. | [optional] [default to undefined]
**giveout_status** | **string** | Статусы возвратной отгрузки:  - &#x60;GIVEOUT_STATUS_UNSPECIFIED&#x60; — не определён, напишите в поддержку.  - &#x60;GIVEOUT_STATUS_CREATED&#x60; — создана.  - &#x60;GIVEOUT_STATUS_APPROVED&#x60; — одобрена.  - &#x60;GIVEOUT_STATUS_COMPLETED&#x60; — завершена.  - &#x60;GIVEOUT_STATUS_CANCELLED&#x60; — отменена.  | [optional] [default to undefined]
**total_articles_count** | **number** | Общее количество товаров, которые нужно забрать со склада. | [optional] [default to undefined]
**warehouse_address** | **string** | Адрес склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { GiveoutListResponseGiveoutDetails } from './api';

const instance: GiveoutListResponseGiveoutDetails = {
    approved_articles_count,
    created_at,
    giveout_id,
    giveout_status,
    total_articles_count,
    warehouse_address,
    warehouse_id,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
