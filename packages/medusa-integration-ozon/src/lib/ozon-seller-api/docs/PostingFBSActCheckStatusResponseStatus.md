# PostingFBSActCheckStatusResponseStatus

Результат работы метода.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**act_type** | **string** | Тип документов.  Если значение &#x60;ozon_digital&#x60;, используйте методы [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus)      и [/v2/posting/fbs/digital/act/get-pdf](#operation/PostingAPI_PostingFBSGetDigitalAct) для получения электронной транспортной накладной.  | [optional] [default to undefined]
**added_to_act** | **Array&lt;string&gt;** | Массив c номерами отправлений, которые добавлены в перевозку. Эти отправления нужно передать сегодня. | [optional] [default to undefined]
**removed_from_act** | **Array&lt;string&gt;** | Массив с номерами отправлений, которые не попали в перевозку. Такие отправления нужно передавать со следующей отгрузкой. | [optional] [default to undefined]
**status** | **string** | Статус запроса:  - &#x60;in_process&#x60; — документы формируются, нужно подождать.  - &#x60;ready&#x60; — документы сформированы и готовы для скачивания.  - &#x60;error&#x60; — произошла ошибка при формировании документов, запросите документы повторно.  - &#x60;cancelled&#x60; — создание документов отменено, запросите их повторно.  - &#x60;The next postings aren\&#39;t ready&#x60; — произошла ошибка, отправления не включены в отгрузку. Подождите некоторое время и проверьте результат запроса. Если ошибка повторяется, обратитесь в службу поддержки.  | [optional] [default to undefined]
**is_partial** | **boolean** | Признак частичной перевозки. &#x60;true&#x60;, если перевозка частичная.  Частичная перевозка значит, что отгрузка была разделена на несколько частей.  | [optional] [default to undefined]
**has_postings_for_next_carriage** | **boolean** | &#x60;true&#x60;, если есть отправления, не попавшие в текущую перевозку, но которые нужно отгрузить.  Если в ответе вернулось &#x60;true&#x60;, подтвердите отгрузку или создайте новый акт через метод [/v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate) и проверьте их статус. Повторяйте действия, пока в ответе не вернётся &#x60;false&#x60;.  | [optional] [default to undefined]
**partial_num** | **number** | Порядковый номер частичной перевозки. | [optional] [default to undefined]

## Example

```typescript
import { PostingFBSActCheckStatusResponseStatus } from './api';

const instance: PostingFBSActCheckStatusResponseStatus = {
    act_type,
    added_to_act,
    removed_from_act,
    status,
    is_partial,
    has_postings_for_next_carriage,
    partial_num,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
