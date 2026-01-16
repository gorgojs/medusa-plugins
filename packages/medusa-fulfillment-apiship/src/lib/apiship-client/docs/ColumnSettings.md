# ColumnSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateFormat** | **string** | Формат даты в таблице | [default to undefined]
**nameFormat** | **boolean** | Формат ФИО в таблице (true(или 1) - ФИО в разных столбцах; false(или 0) - ФИО в одном столбце) | [default to undefined]
**itemsNewRow** | **boolean** | Тип расположения данных о товарных вложениях (true - располагаются в строке информации о заказе; false - располагаются под информацией о заказе) | [default to undefined]
**timeFormat** | **string** | Формат времени в таблице | [default to undefined]
**rowStart** | **number** | Порядковый номер первой считываемой строки таблицы | [optional] [default to undefined]
**rowEnd** | **number** | Порядковый номер последней считываемой строки таблицы | [optional] [default to undefined]

## Example

```typescript
import { ColumnSettings } from './api';

const instance: ColumnSettings = {
    dateFormat,
    nameFormat,
    itemsNewRow,
    timeFormat,
    rowStart,
    rowEnd,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
