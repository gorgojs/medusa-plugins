# PostingPostingFBSActCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers_count** | **number** | Количество грузовых мест.   Используйте параметр, если вы подключены к доверительной приёмке и отгружаете заказы грузовыми местами. Если вы не подключены к доверительной приёмке, пропустите его.  [Подробнее в Базе знаний продавца](https://docs.ozon.ru/partners/prodayoa-so-svoego-sklada-fbs/doveritel-naya-priemka-gruzovogo-mesta)  | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. Можно получить с помощью метода [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [default to undefined]
**departure_date** | **string** | Дата отгрузки. | [optional] [default to undefined]

## Example

```typescript
import { PostingPostingFBSActCreateRequest } from './api';

const instance: PostingPostingFBSActCreateRequest = {
    containers_count,
    delivery_method_id,
    departure_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
