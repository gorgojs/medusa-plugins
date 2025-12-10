# ChatCustomerDTO

Информация о покупателе в чате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Публичное имя покупателя в Яндекс Паспорте, которое отображается в сервисах Яндекса.  | [optional] [default to undefined]
**publicId** | **string** | Публичный идентификатор пользователя в Яндекс Паспорте.  {% cut \&quot;Примеры, где используется\&quot; %}  * Маркет: &#x60;https://market.yandex.ru/user/{public-id}/reviews&#x60; * Дзен: &#x60;https://zen.yandex.ru/user/{public-id}&#x60; * Отзывы: &#x60;https://yandex.ru/user/{public-id}&#x60;  {% endcut %}  Подробнее о публичных данных читайте в [документации Яндекс ID](https://yandex.ru/support/id/ru/data/public-data).  | [optional] [default to undefined]

## Example

```typescript
import { ChatCustomerDTO } from './api';

const instance: ChatCustomerDTO = {
    name,
    publicId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
