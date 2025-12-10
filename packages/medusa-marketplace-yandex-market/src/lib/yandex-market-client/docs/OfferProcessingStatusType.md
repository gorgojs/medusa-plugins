# OfferProcessingStatusType

Статус публикации товара:  * `UNKNOWN` — неизвестный статус. * `READY` — товар прошел модерацию. Чтобы разместить его на Маркете, установите для него цену. * `IN_WORK` — товар проходит модерацию. Это занимает несколько дней. * `NEED_INFO` — товар не прошел модерацию из-за ошибок или недостающих сведений в описании товара. Информация о причинах отклонения возвращается в параметре `notes`. * `NEED_MAPPING` — у товара нельзя создать карточку. * `NEED_CONTENT` — для товара без SKU на Маркете (`marketSku`) нужно найти карточку самостоятельно (через API или кабинет продавца на Маркете) или создать ее, если товар еще не продается на Маркете. * `CONTENT_PROCESSING` — товар находится на модерации. * `SUSPENDED` — товар не прошел модерацию, так как Маркет пока не размещает подобные товары. * `REJECTED` — товар не прошел модерацию, так как Маркет не планирует размещать подобные товары. * `REVIEW` — принимается решение о размещении товара. * `CREATE_ERROR` — не удалось создать карточку товара. * `UPDATE_ERROR` — у карточки товара есть непримененные изменения. 

## Enum

* `Unknown` (value: `'UNKNOWN'`)

* `Ready` (value: `'READY'`)

* `InWork` (value: `'IN_WORK'`)

* `NeedInfo` (value: `'NEED_INFO'`)

* `NeedMapping` (value: `'NEED_MAPPING'`)

* `NeedContent` (value: `'NEED_CONTENT'`)

* `ContentProcessing` (value: `'CONTENT_PROCESSING'`)

* `Suspended` (value: `'SUSPENDED'`)

* `Rejected` (value: `'REJECTED'`)

* `Review` (value: `'REVIEW'`)

* `CreateError` (value: `'CREATE_ERROR'`)

* `UpdateError` (value: `'UPDATE_ERROR'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
