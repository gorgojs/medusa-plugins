# GetReturnsListResponseLogistic

Информация о возврате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**technical_return_moment** | **string** | Дата, когда заказ поставили на технический возврат. | [optional] [default to undefined]
**final_moment** | **string** | Дата, когда возврат прибыл на фулфилмент или выдан продавцу. | [optional] [default to undefined]
**cancelled_with_compensation_moment** | **string** | Дата, когда продавцу компенсировали возврат. | [optional] [default to undefined]
**return_date** | **string** | Дата, когда покупатель вернул товар. | [optional] [default to undefined]
**barcode** | **string** | Штрихкод этикетки возврата. | [optional] [default to undefined]

## Example

```typescript
import { GetReturnsListResponseLogistic } from './api';

const instance: GetReturnsListResponseLogistic = {
    technical_return_moment,
    final_moment,
    cancelled_with_compensation_moment,
    return_date,
    barcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
