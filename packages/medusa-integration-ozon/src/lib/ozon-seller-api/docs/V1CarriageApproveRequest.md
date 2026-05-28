# V1CarriageApproveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriage_id** | **number** | Идентификатор отгрузки. | [default to undefined]
**containers_count** | **number** | Количество грузовых мест.   Используйте параметр, если вы подключены к доверительной приёмке и отгружаете заказы грузовыми местами. Если вы не подключены к доверительной приёмке, пропустите его.  | [optional] [default to undefined]

## Example

```typescript
import { V1CarriageApproveRequest } from './api';

const instance: V1CarriageApproveRequest = {
    carriage_id,
    containers_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
