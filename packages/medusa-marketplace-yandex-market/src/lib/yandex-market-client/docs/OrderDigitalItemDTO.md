# OrderDigitalItemDTO

Цифровой товар.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в заказе.  Он приходит в ответе на запрос [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) — параметр &#x60;id&#x60; в &#x60;items&#x60;.  | [default to undefined]
**code** | **string** | {% note warning \&quot;Вместо него используйте &#x60;codes&#x60;\&quot; %}  Совместное использование обоих параметров приведет к ошибке.  {% endnote %}  Сам ключ.  | [optional] [default to undefined]
**codes** | **Set&lt;string&gt;** | Ключи, относящиеся к товару. | [optional] [default to undefined]
**slip** | **string** | Инструкция по активации.  Для форматирования текста можно использовать теги HTML:  * \\&lt;h&gt;, \\&lt;h1&gt;, \\&lt;h2&gt; и так далее — для заголовков; * \\&lt;br&gt; и \\&lt;p&gt; — для переноса строки; * \\&lt;ol&gt; — для нумерованного списка; * \\&lt;ul&gt; — для маркированного списка; * \\&lt;li&gt; — для создания элементов списка (должен находиться внутри \\&lt;ol&gt; или \\&lt;ul&gt;); * \\&lt;div&gt; — поддерживается, но не влияет на отображение текста.  | [default to undefined]
**activate_till** | **string** | Дата, до которой нужно активировать ключи. Если ключи действуют бессрочно, укажите любую дату в отдаленном будущем.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]

## Example

```typescript
import { OrderDigitalItemDTO } from './api';

const instance: OrderDigitalItemDTO = {
    id,
    code,
    codes,
    slip,
    activate_till,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
