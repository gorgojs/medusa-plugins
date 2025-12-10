# ParcelRequestDTO

Информация о грузовых местах в заказе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxes** | [**Array&lt;ParcelBoxRequestDTO&gt;**](ParcelBoxRequestDTO.md) | Список грузовых мест. По его длине Маркет определяет количество мест. | [default to undefined]

## Example

```typescript
import { ParcelRequestDTO } from './api';

const instance: ParcelRequestDTO = {
    boxes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
