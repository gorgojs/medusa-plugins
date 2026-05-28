# FlippingPagerDTO

Модель для пагинации.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Сколько всего найдено элементов. | [optional] [default to undefined]
**from** | **number** | Начальный номер найденного элемента на странице. | [optional] [default to undefined]
**to** | **number** | Конечный номер найденного элемента на странице. | [optional] [default to undefined]
**currentPage** | **number** | Текущая страница. | [optional] [default to undefined]
**pagesCount** | **number** | Общее количество страниц. | [optional] [default to undefined]
**pageSize** | **number** | Размер страницы. | [optional] [default to undefined]

## Example

```typescript
import { FlippingPagerDTO } from './api';

const instance: FlippingPagerDTO = {
    total,
    from,
    to,
    currentPage,
    pagesCount,
    pageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
