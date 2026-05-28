# LogisticPointFeatureType

Свойство пункта выдачи:  * `RETURN_ALLOWED` — пункт выдачи принимает возвраты.  {% note warning \"Проверка ограничений\" %}  Признак не учитывает ограничения ПВЗ на прием различных товаров в возврате. Для проверки по конкретному набору товаров используйте метод [POST v1/campaigns/{campaignId}/return-delivery-options](../../reference/delivery-options/getReturnDeliveryOptions.md).  {% endnote %} 

## Enum

* `ReturnAllowed` (value: `'RETURN_ALLOWED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
