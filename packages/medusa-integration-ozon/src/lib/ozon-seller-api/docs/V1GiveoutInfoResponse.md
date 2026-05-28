# V1GiveoutInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**articles** | [**Array&lt;GiveoutInfoResponseArticleDetails&gt;**](GiveoutInfoResponseArticleDetails.md) | Артикулы товаров. | [optional] [default to undefined]
**giveout_id** | **number** | Идентификатор отгрузки. | [optional] [default to undefined]
**giveout_status** | **string** | Статусы возвратной отгрузки:  - &#x60;GIVEOUT_STATUS_UNSPECIFIED&#x60; — не определён, напишите в поддержку.  - &#x60;GIVEOUT_STATUS_CREATED&#x60; — создана.  - &#x60;GIVEOUT_STATUS_APPROVED&#x60; — одобрена.  - &#x60;GIVEOUT_STATUS_COMPLETED&#x60; — завершена.  - &#x60;GIVEOUT_STATUS_CANCELLED&#x60; — отменена.  | [optional] [default to undefined]
**warehouse_address** | **string** | Адрес склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { V1GiveoutInfoResponse } from './api';

const instance: V1GiveoutInfoResponse = {
    articles,
    giveout_id,
    giveout_status,
    warehouse_address,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
