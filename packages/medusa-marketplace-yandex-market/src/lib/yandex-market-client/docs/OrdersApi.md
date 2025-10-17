# OrdersApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptOrderCancellation**](#acceptordercancellation) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept | Отмена заказа покупателем|
|[**getOrder**](#getorder) | **GET** /v2/campaigns/{campaignId}/orders/{orderId} | Информация об одном заказе|
|[**getOrderIdentifiersStatus**](#getorderidentifiersstatus) | **POST** /v2/campaigns/{campaignId}/orders/{orderId}/identifiers/status | Статусы проверки кодов маркировки|
|[**getOrders**](#getorders) | **GET** /v2/campaigns/{campaignId}/orders | Информация о нескольких заказах|
|[**provideOrderDigitalCodes**](#provideorderdigitalcodes) | **POST** /v2/campaigns/{campaignId}/orders/{orderId}/deliverDigitalGoods | Передача ключей цифровых товаров|
|[**provideOrderItemIdentifiers**](#provideorderitemidentifiers) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/identifiers | Передача кодов маркировки единиц товара|
|[**setOrderBoxLayout**](#setorderboxlayout) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/boxes | Подготовка заказа|
|[**setOrderShipmentBoxes**](#setordershipmentboxes) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes | Передача количества грузовых мест в заказе|
|[**updateExternalOrderId**](#updateexternalorderid) | **POST** /v2/campaigns/{campaignId}/orders/{orderId}/external-id | Передача внешнего идентификатора заказа|
|[**updateOrderItems**](#updateorderitems) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/items | Удаление товаров из заказа или уменьшение их числа|
|[**updateOrderStatus**](#updateorderstatus) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/status | Изменение статуса одного заказа|
|[**updateOrderStatuses**](#updateorderstatuses) | **POST** /v2/campaigns/{campaignId}/orders/status-update | Изменение статусов нескольких заказов|

# **acceptOrderCancellation**
> EmptyApiResponse acceptOrderCancellation(acceptOrderCancellationRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/acceptOrderCancellation.md) %}  Подтверждает или отклоняет заявку покупателя на отмену заказа, который передан службе доставки.  Покупатель может отменить заказ в течение его обработки или доставки. Если заказ еще обрабатывается (статус `PROCESSING`), вам не нужно подтверждать отмену заказа — он будет отменен автоматически.  Если заказ уже передан службе доставки (статус `DELIVERY` или `PICKUP`) и пользователь отменил его, вы можете предупредить службу об отмене в течение 48 часов.    * Служба доставки узнала об отмене до передачи заказа покупателю — подтвердите отмену с помощью запроса [PUT v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept](../../reference/orders/acceptOrderCancellation.md).   * Заказ уже доставлен — отклоните отмену с помощью этого же запроса. Тогда у покупателя останется заказ, и деньги за него возвращаться не будут.  **Как узнать об отмененных заказах:**    * Отправьте запрос [GET v2/campaigns/{campaignId}/orders](../../reference/orders/getOrders.md). В его URL добавьте входной параметр `onlyWaitingForCancellationApprove=true`.   * В кабинете или через почту — на нее придет уведомление об отмене.   * Подключите API-уведомления. Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новая заявка на отмену заказа. [{#T}](../../push-notifications/index.md)  Если в течение 48 часов вы не подтвердите или отклоните отмену, заказ будет отменен автоматически.  |**⚙️ Лимит:** 500 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    AcceptOrderCancellationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let acceptOrderCancellationRequest: AcceptOrderCancellationRequest; //

const { status, data } = await apiInstance.acceptOrderCancellation(
    campaignId,
    orderId,
    acceptOrderCancellationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptOrderCancellationRequest** | **AcceptOrderCancellationRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ответ на отмену заказа был успешно передан. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrder**
> GetOrderResponse getOrder()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOrder.md) %}  Возвращает информацию о заказе.  {% note tip \"Вы также можете настроить API-уведомления\" %}  Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью этого метода или [GET v2/campaigns/{campaignId}/orders](../../reference/orders/getOrders.md).  [{#T}](../../push-notifications/index.md)  {% endnote %}  Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/orders/getOrderBuyerInfo.md).  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)

const { status, data } = await apiInstance.getOrder(
    campaignId,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**GetOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о заказе. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderIdentifiersStatus**
> GetOrderIdentifiersStatusResponse getOrderIdentifiersStatus()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOrderIdentifiersStatus.md) %}  Возвращает статусы проверки кодов маркировки в заказе.  Заказ, в котором есть ювелирные изделия или товары с обязательной маркировкой в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/), можно перевести в статус `READY_TO_SHIP`, только когда:  1. В методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md) вы передадите Маркету:      * [УИНы](:no-translate[*uin]) по каждому ювелирному изделию в заказе;      * коды маркировки в системе :no-translate[«Честный ЗНАК»] по всем товарам в заказе, для которых она обязательна. 2. Все коды маркировки успешно пройдут проверку.  {% note info \"Проверка кодов маркировки в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/)\" %}  Неуспешный статус проверки кодов маркировки в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) не блокирует перевод заказа в статус `READY_TO_SHIP` до 28 ноября 2025 года.  {% endnote %}  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)

const { status, data } = await apiInstance.getOrderIdentifiersStatus(
    campaignId,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**GetOrderIdentifiersStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация по проверке кодов маркировки. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrders**
> GetOrdersResponse getOrders()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOrders.md) %}  Возвращает информацию о заказах. Запрос можно использовать, чтобы узнать, нет ли новых заказов.  По умолчанию данные о тестовых заказах не приходят. Чтобы их получить, передайте значение `true` в параметре `fake`.  {% note tip \"Вы также можете настроить API-уведомления\" %}  Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью этого метода или [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md).  [{#T}](../../push-notifications/index.md)  {% endnote %}  Доступна фильтрация по нескольким характеристикам заказов:  * дате оформления;  * статусу;  * идентификаторам заказов;  * этапу обработки или причине отмены;  * типу (настоящий или тестовый);  * дате отгрузки в службу доставки;  * дате и времени обновления заказа.  Информация о заказах, доставленных или отмененных больше 30 дней назад, не возвращается. Ее можно получить с помощью запроса информации об отдельном заказе [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) (если у вас есть идентификатор заказа) или запроса отчета по заказам [POST v2/campaigns/{campaignId}/stats/orders](../../reference/stats/getOrdersStats.md).  Максимальный диапазон дат за один запрос к ресурсу — 30 дней.  Результаты возвращаются постранично. Для навигации по страницам используйте параметры `page_token` и `limit`.  Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/orders/getOrderBuyerInfo.md).  {% note warning \"Ограничение для параметра `limit`\" %}  Не передавайте значение больше 50.  {% endnote %}  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderIds: Array<number>; //Фильтрация заказов по идентификаторам. <br><br> ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.  (optional) (default to undefined)
let status: Set<OrderStatusType>; //Статус заказа:  * `CANCELLED` — заказ отменен.  * `DELIVERED` — заказ получен покупателем.  * `DELIVERY` — заказ передан в службу доставки.  * `PICKUP` — заказ доставлен в пункт самовывоза.  * `PROCESSING` — заказ находится в обработке.  * `UNPAID` — заказ оформлен, но еще не оплачен (если выбрана оплата при оформлении).  (optional) (default to undefined)
let substatus: Set<OrderSubstatusType>; //Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).  Возможные значения для заказа в статусе `PROCESSING`:  * `STARTED` — заказ подтвержден, его можно начать обрабатывать. * `READY_TO_SHIP` — заказ собран и готов к отправке. * `SHIPPED` — заказ передан службе доставки.  Возможные значения для заказа в статусе `CANCELLED`:  * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.  * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.  * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:    * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;   * перерыв между первым и третьим звонком не менее 90 минут;   * соединение не короче 5 секунд.    Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400  * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.  * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.  * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.  * `SHOP_FAILED` — магазин не может выполнить заказ.  * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.  * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.  * `PROCESSING_EXPIRED` — значение более не используется.  * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.  * `DELIVERY_SERVICE_UNDELIVERED` — служба доставки не смогла доставить заказ.  * `CANCELLED_COURIER_NOT_FOUND` — не удалось найти курьера.  * `USER_WANTS_TO_CHANGE_DELIVERY_DATE` — покупатель хочет получить заказ в другой день.  * `RESERVATION_FAILED` — Маркет не может продолжить дальнейшую обработку заказа.  (optional) (default to undefined)
let fromDate: string; //Начальная дата для фильтрации заказов по дате оформления.  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной и конечной датой (параметр `toDate`) должно быть не больше 30 дней.  Значение по умолчанию: 30 дней назад от текущей даты.  (optional) (default to undefined)
let toDate: string; //Конечная дата для фильтрации заказов по дате оформления.  Показываются заказы, созданные до 00:00 указанного дня.  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной (параметр `fromDate`) и конечной датой должно быть не больше 30 дней.  Значение по умолчанию: текущая дата.  Если промежуток времени между `toDate` и `fromDate` меньше суток, то `toDate` равен `fromDate` + сутки.  (optional) (default to undefined)
let supplierShipmentDateFrom: string; //Начальная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр `shipmentDate`).  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной и конечной датой (параметр `supplierShipmentDateTo`) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  (optional) (default to undefined)
let supplierShipmentDateTo: string; //Конечная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр `shipmentDate`).  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной (параметр `supplierShipmentDateFrom`) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  Если промежуток времени между `supplierShipmentDateTo` и `supplierShipmentDateFrom` меньше суток, то `supplierShipmentDateTo` равен `supplierShipmentDateFrom` + сутки.  (optional) (default to undefined)
let updatedAtFrom: string; //Начальная дата для фильтрации заказов по дате и времени обновления (параметр `updatedAt`).  Формат даты: ISO 8601 со смещением относительно UTC. Например, `2017-11-21T00:42:42+03:00`.  Между начальной и конечной датой (параметр `updatedAtTo`) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  (optional) (default to undefined)
let updatedAtTo: string; //Конечная дата для фильтрации заказов по дате и времени обновления (параметр `updatedAt`).  Формат даты: ISO 8601 со смещением относительно UTC. Например, `2017-11-21T00:42:42+03:00`.  Между начальной (параметр `updatedAtFrom`) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  (optional) (default to undefined)
let dispatchType: OrderDeliveryDispatchType; //Способ отгрузки (optional) (default to undefined)
let fake: boolean; //Фильтрация заказов по типам:  * `false` — настоящий заказ покупателя.  * `true` — [тестовый](../../concepts/sandbox.md) заказ Маркета.  (optional) (default to false)
let hasCis: boolean; //Нужно ли вернуть только те заказы, в составе которых есть хотя бы один товар с кодом идентификации в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]):  * `true` — да.  * `false` — нет.  Такие коды присваиваются товарам, которые подлежат маркировке и относятся к определенным категориям.  (optional) (default to false)
let onlyWaitingForCancellationApprove: boolean; //**Только для модели DBS**  Фильтрация заказов по наличию запросов покупателей на отмену.  При значении `true` возвращаются только заказы, которые находятся в статусе `DELIVERY` или `PICKUP` и которые пользователи решили отменить.  Чтобы подтвердить или отклонить отмену, отправьте запрос [PUT v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept](../../reference/orders/acceptOrderCancellation).  (optional) (default to false)
let onlyEstimatedDelivery: boolean; //Фильтрация заказов с долгой доставкой (31-60 дней) по подтвержденной дате доставки:  * `true` — возвращаются только заказы с неподтвержденной датой доставки. * `false` — фильтрация не применяется.  (optional) (default to false)
let buyerType: OrderBuyerType; //Фильтрация заказов по типу покупателя.  (optional) (default to undefined)
let page: number; //{% note warning \"Если в методе есть `page_token`\" %}  Используйте его вместо параметра `page`.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром `pageSize`.  `page` игнорируется, если задан `page_token` или `limit`.  (optional) (default to 1)
let pageSize: number; //Размер страницы.  Используется вместе с параметром `page`.  `pageSize` игнорируется, если задан `page_token` или `limit`.  (optional) (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.getOrders(
    campaignId,
    orderIds,
    status,
    substatus,
    fromDate,
    toDate,
    supplierShipmentDateFrom,
    supplierShipmentDateTo,
    updatedAtFrom,
    updatedAtTo,
    dispatchType,
    fake,
    hasCis,
    onlyWaitingForCancellationApprove,
    onlyEstimatedDelivery,
    buyerType,
    page,
    pageSize,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderIds** | **Array&lt;number&gt;** | Фильтрация заказов по идентификаторам. &lt;br&gt;&lt;br&gt; ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.  | (optional) defaults to undefined|
| **status** | **Set&lt;OrderStatusType&gt;** | Статус заказа:  * &#x60;CANCELLED&#x60; — заказ отменен.  * &#x60;DELIVERED&#x60; — заказ получен покупателем.  * &#x60;DELIVERY&#x60; — заказ передан в службу доставки.  * &#x60;PICKUP&#x60; — заказ доставлен в пункт самовывоза.  * &#x60;PROCESSING&#x60; — заказ находится в обработке.  * &#x60;UNPAID&#x60; — заказ оформлен, но еще не оплачен (если выбрана оплата при оформлении).  | (optional) defaults to undefined|
| **substatus** | **Set&lt;OrderSubstatusType&gt;** | Этап обработки заказа (если он имеет статус &#x60;PROCESSING&#x60;) или причина отмены заказа (если он имеет статус &#x60;CANCELLED&#x60;).  Возможные значения для заказа в статусе &#x60;PROCESSING&#x60;:  * &#x60;STARTED&#x60; — заказ подтвержден, его можно начать обрабатывать. * &#x60;READY_TO_SHIP&#x60; — заказ собран и готов к отправке. * &#x60;SHIPPED&#x60; — заказ передан службе доставки.  Возможные значения для заказа в статусе &#x60;CANCELLED&#x60;:  * &#x60;RESERVATION_EXPIRED&#x60; — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.  * &#x60;USER_NOT_PAID&#x60; — покупатель не оплатил заказ (для типа оплаты &#x60;PREPAID&#x60;) в течение 30 минут.  * &#x60;USER_UNREACHABLE&#x60; — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:    * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;   * перерыв между первым и третьим звонком не менее 90 минут;   * соединение не короче 5 секунд.    Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400  * &#x60;USER_CHANGED_MIND&#x60; — покупатель отменил заказ по личным причинам.  * &#x60;USER_REFUSED_DELIVERY&#x60; — покупателя не устроили условия доставки.  * &#x60;USER_REFUSED_PRODUCT&#x60; — покупателю не подошел товар.  * &#x60;SHOP_FAILED&#x60; — магазин не может выполнить заказ.  * &#x60;USER_REFUSED_QUALITY&#x60; — покупателя не устроило качество товара.  * &#x60;REPLACING_ORDER&#x60; — покупатель решил заменить товар другим по собственной инициативе.  * &#x60;PROCESSING_EXPIRED&#x60; — значение более не используется.  * &#x60;PICKUP_EXPIRED&#x60; — закончился срок хранения заказа в ПВЗ.  * &#x60;DELIVERY_SERVICE_UNDELIVERED&#x60; — служба доставки не смогла доставить заказ.  * &#x60;CANCELLED_COURIER_NOT_FOUND&#x60; — не удалось найти курьера.  * &#x60;USER_WANTS_TO_CHANGE_DELIVERY_DATE&#x60; — покупатель хочет получить заказ в другой день.  * &#x60;RESERVATION_FAILED&#x60; — Маркет не может продолжить дальнейшую обработку заказа.  | (optional) defaults to undefined|
| **fromDate** | [**string**] | Начальная дата для фильтрации заказов по дате оформления.  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной и конечной датой (параметр &#x60;toDate&#x60;) должно быть не больше 30 дней.  Значение по умолчанию: 30 дней назад от текущей даты.  | (optional) defaults to undefined|
| **toDate** | [**string**] | Конечная дата для фильтрации заказов по дате оформления.  Показываются заказы, созданные до 00:00 указанного дня.  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной (параметр &#x60;fromDate&#x60;) и конечной датой должно быть не больше 30 дней.  Значение по умолчанию: текущая дата.  Если промежуток времени между &#x60;toDate&#x60; и &#x60;fromDate&#x60; меньше суток, то &#x60;toDate&#x60; равен &#x60;fromDate&#x60; + сутки.  | (optional) defaults to undefined|
| **supplierShipmentDateFrom** | [**string**] | Начальная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр &#x60;shipmentDate&#x60;).  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной и конечной датой (параметр &#x60;supplierShipmentDateTo&#x60;) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  | (optional) defaults to undefined|
| **supplierShipmentDateTo** | [**string**] | Конечная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр &#x60;shipmentDate&#x60;).  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной (параметр &#x60;supplierShipmentDateFrom&#x60;) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  Если промежуток времени между &#x60;supplierShipmentDateTo&#x60; и &#x60;supplierShipmentDateFrom&#x60; меньше суток, то &#x60;supplierShipmentDateTo&#x60; равен &#x60;supplierShipmentDateFrom&#x60; + сутки.  | (optional) defaults to undefined|
| **updatedAtFrom** | [**string**] | Начальная дата для фильтрации заказов по дате и времени обновления (параметр &#x60;updatedAt&#x60;).  Формат даты: ISO 8601 со смещением относительно UTC. Например, &#x60;2017-11-21T00:42:42+03:00&#x60;.  Между начальной и конечной датой (параметр &#x60;updatedAtTo&#x60;) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  | (optional) defaults to undefined|
| **updatedAtTo** | [**string**] | Конечная дата для фильтрации заказов по дате и времени обновления (параметр &#x60;updatedAt&#x60;).  Формат даты: ISO 8601 со смещением относительно UTC. Например, &#x60;2017-11-21T00:42:42+03:00&#x60;.  Между начальной (параметр &#x60;updatedAtFrom&#x60;) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  | (optional) defaults to undefined|
| **dispatchType** | **OrderDeliveryDispatchType** | Способ отгрузки | (optional) defaults to undefined|
| **fake** | [**boolean**] | Фильтрация заказов по типам:  * &#x60;false&#x60; — настоящий заказ покупателя.  * &#x60;true&#x60; — [тестовый](../../concepts/sandbox.md) заказ Маркета.  | (optional) defaults to false|
| **hasCis** | [**boolean**] | Нужно ли вернуть только те заказы, в составе которых есть хотя бы один товар с кодом идентификации в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]):  * &#x60;true&#x60; — да.  * &#x60;false&#x60; — нет.  Такие коды присваиваются товарам, которые подлежат маркировке и относятся к определенным категориям.  | (optional) defaults to false|
| **onlyWaitingForCancellationApprove** | [**boolean**] | **Только для модели DBS**  Фильтрация заказов по наличию запросов покупателей на отмену.  При значении &#x60;true&#x60; возвращаются только заказы, которые находятся в статусе &#x60;DELIVERY&#x60; или &#x60;PICKUP&#x60; и которые пользователи решили отменить.  Чтобы подтвердить или отклонить отмену, отправьте запрос [PUT v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept](../../reference/orders/acceptOrderCancellation).  | (optional) defaults to false|
| **onlyEstimatedDelivery** | [**boolean**] | Фильтрация заказов с долгой доставкой (31-60 дней) по подтвержденной дате доставки:  * &#x60;true&#x60; — возвращаются только заказы с неподтвержденной датой доставки. * &#x60;false&#x60; — фильтрация не применяется.  | (optional) defaults to false|
| **buyerType** | **OrderBuyerType** | Фильтрация заказов по типу покупателя.  | (optional) defaults to undefined|
| **page** | [**number**] | {% note warning \&quot;Если в методе есть &#x60;page_token&#x60;\&quot; %}  Используйте его вместо параметра &#x60;page&#x60;.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром &#x60;pageSize&#x60;.  &#x60;page&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to 1|
| **pageSize** | [**number**] | Размер страницы.  Используется вместе с параметром &#x60;page&#x60;.  &#x60;pageSize&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetOrdersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о заказах. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provideOrderDigitalCodes**
> EmptyApiResponse provideOrderDigitalCodes(provideOrderDigitalCodesRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/provideOrderDigitalCodes.md) %}  Передает ключи цифровых товаров, которые покупатель заказал и оплатил. После выполнения запроса Маркет отправит ему письмо с ключами и инструкциями по активации. Если письмо будет доставлено, Маркет переведет заказ в финальный статус `DELIVERED`.  {% note tip \"После передачи кода покупателю статус заказа изменится не сразу\" %}  Подключите API-уведомления — Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда заказ перейдет в статус `DELIVERED`.  [{#T}](../../push-notifications/index.md)  {% endnote %}  Ключ нужно передать в течение 30 минут после перехода заказа в статус `PROCESSING`.  Если в один заказ входят несколько ключей, передавайте их все в одном запросе.  Каждый товар с уникальным `id` передавайте в виде отдельного элемента в массиве `items`, а ключи товара — в массиве `codes`.  {% cut \"Пример\" %}  ```json translate=no {   \"items\": [     {       \"id\": 1,       \"codes\": [         \"code1\", \"code2\", \"code3\"       ],       \"slip\": \"slip\",       \"activate_till\": \"2025-02-18\"     },     {       \"id\": 2,       \"codes\": [         \"code4\", \"code5\", \"code6\"       ],       \"slip\": \"slip\",       \"activate_till\": \"2025-02-18\"     }   ] } ``` {% endcut %}  Товары с одинаковыми `id` также можно передавать разными элементами в массиве `items`.  {% cut \"Пример\" %}  ```json translate=no {   \"items\": [     {       \"id\": 1,       \"codes\": [         \"code1\", \"code2\"       ],       \"slip\": \"slip\",       \"activate_till\": \"2025-02-18\"     },     {       \"id\": 1,       \"codes\": [         \"code3\"       ],       \"slip\": \"slip\",       \"activate_till\": \"2025-02-18\"     }   ] } ``` {% endcut %}   |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    ProvideOrderDigitalCodesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let provideOrderDigitalCodesRequest: ProvideOrderDigitalCodesRequest; //

const { status, data } = await apiInstance.provideOrderDigitalCodes(
    campaignId,
    orderId,
    provideOrderDigitalCodesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provideOrderDigitalCodesRequest** | **ProvideOrderDigitalCodesRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пустой ответ.  {% note warning \&quot;Ответ &#x60;200&#x60; сам по себе не значит, что ключи переданы покупателю\&quot; %}  Если письмо с ключами удалось доставить, Маркет переведет заказ в финальный статус &#x60;DELIVERED&#x60;.  Статус заказа можно узнать с помощью метода [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) или [GET v2/campaigns/{campaignId}/orders](../../reference/orders/getOrders.md).  {% endnote %}  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provideOrderItemIdentifiers**
> ProvideOrderItemIdentifiersResponse provideOrderItemIdentifiers(provideOrderItemIdentifiersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/provideOrderItemIdentifiers.md) %}  {% note warning \"Если вы работаете по модели FBS\" %}  Используйте метод [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md).  {% endnote %}  Передает Маркету коды маркировки для единиц товара в указанном заказе. Подробнее о работе с маркируемыми товарами читайте в [Справке продавца на Маркете](https://yandex.ru/support/marketplace/orders/cz.html).  Маркировка товаров в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) **необязательна** для заказов от физических лиц, но **обязательна** для заказов от бизнеса.  Для модели DBS коды маркировки в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) не проверяются в ГИС МТ — проверка выполняется только для моделей FBS и Экспресс.  Принимаются коды следующих типов:  * Коды в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]). * УИН для ювелирных изделий. * РНПТ и ГТД для импортных прослеживаемых товаров.  Для каждой позиции в заказе, требующей маркировки, нужно передать список кодов — по одному для каждой единицы товара. Например, если в заказе две пары тапочек и одна пара туфель, получится список из двух кодов для первой позиции и список из одного кода для второй.  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    ProvideOrderItemIdentifiersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let provideOrderItemIdentifiersRequest: ProvideOrderItemIdentifiersRequest; //

const { status, data } = await apiInstance.provideOrderItemIdentifiers(
    campaignId,
    orderId,
    provideOrderItemIdentifiersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provideOrderItemIdentifiersRequest** | **ProvideOrderItemIdentifiersRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**ProvideOrderItemIdentifiersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ответ &#x60;200&#x60; обозначает, что коды успешно записались. Ответ содержит краткие сведения о промаркированных товарах. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOrderBoxLayout**
> SetOrderBoxLayoutResponse setOrderBoxLayout(setOrderBoxLayoutRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/setOrderBoxLayout.md) %}  {% note tip \"Подходит и для DBS\" %}  Запрос предназначен для работы с FBS-заказами, но вы можете использовать его для обработки DBS-заказов, если это удобно.  {% endnote %}  Позволяет выполнить три операции:  * передать Маркету информацию о распределении товаров по коробкам; * передать Маркету коды маркировки для товаров; * удалить товар из заказа, если его не оказалось на складе.  Если нужно что-то поправить в переданных данных, просто повторите запрос — это можно делать сколько угодно раз до перевода заказа в статус **Готов к отгрузке**. ⚠️ Если вы меняете раскладку уже после печати и расклейки ярлыков, не забудьте перепечатать их и наклеить заново.  {% cut \"Как передать информацию о распределении товаров\" %}  В этом запросе вам нужно передать Маркету список коробок и указать, какие именно товары лежат в каждой из них. Коробки могут быть двух типов:  * **Содержащие товары целиком.** Такая коробка может содержать сколько угодно единиц любых товаров.  * **Содержащие часть товара.** Такие коробки содержат по одной части одного товара. Например, одна содержит внешний блок кондиционера, а другая — внутренний блок.  ⚠️ Одна коробка не может содержать и товары целиком, и части товаров.  {% endcut %}  {% cut \"Как передавать коды маркировки и получать статус их проверки\" %}  {% note info \"Маркировка товаров в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) необязательна для заказов от физических лиц\" %}  Для заказов от бизнеса все еще нужно передавать коды маркировки.  {% endnote %}  Если в заказе есть товары, подлежащие маркировке, в запросе нужно передать соответствующие уникальные коды. [Что такое маркировка](https://yandex.ru/support/marketplace/orders/cz.html)  Принимаются коды следующих типов:  * Коды в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]). * УИН для ювелирных изделий. * РНПТ и ГТД для импортных прослеживаемых товаров.  Для каждой позиции в заказе, требующей маркировки, нужно передать список кодов — по одному для каждой единицы товара. Например, если в заказе две пары тапочек и одна пара туфель, получится список из двух кодов для первой позиции и список из одного кода для второй.  Если товар едет в нескольких коробках, код маркировки нужно передать для каждой из них.  {% note warning \"Если вы работаете по модели FBS, EXPRESS\" %}  Для заказов, в которых есть ювелирные изделия или товары с маркировкой в системе :no-translate[«Честный ЗНАК»], перевод в статус `READY_TO_SHIP` становится доступен, только когда:  1. Вы передадите Маркету :no-translate[УИНы] по каждому ювелирному изделию в заказе и коды в системе :no-translate[«Честный ЗНАК»] по всем товарам в заказе, для которых обязательна эта маркировка. 2. Все коды маркировки успешно пройдут проверку. [Как получить статусы проверки](../../reference/orders/getOrderIdentifiersStatus.md)  ⚠️ Неуспешный статус проверки кодов маркировки в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) не блокирует перевод заказа в статус `READY_TO_SHIP` до 28 ноября 2025 года.  {% endnote %}  {% endcut %}  {% cut \"Как удалить товар из заказа\" %}  Чтобы удалить товар из заказа:  1. Добавьте в запрос `allowRemove: true`. 2. Передайте распределение по коробкам без товара, который нужно удалить.  {% note warning \"Удаление нельзя отменить\" %}  Эта операция необратима: покупатель сразу получит уведомление, а состав заказа изменится.  {% endnote %}  Чтобы удалить позицию целиком, не передавайте соответствующий `OrderBoxLayoutItemDTO`. Чтобы уменьшить количество товара, передайте уменьшенное значение в поле `fullCount`.  Нельзя удалить или уменьшить количество товара, если он:  * добавлен по акции; * составляет 99% стоимости заказа; * единственный товар в заказе.  Если вы не можете отгрузить такой товар, отмените заказ. Для этого отправьте запрос методом [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md) и передайте статус заказа `CANCELLED` с причиной отмены `SHOP_FAILED`.  {% endcut %}  {% note info \"Увеличить заказ нельзя\" %}  С помощью запроса нельзя увеличить количество одинаковых товаров, добавить новые товары в заказ или заменить один товар другим.  {% endnote %}  ## Примеры  {% cut \"Товар умещается в коробку\" %}  Вот как будет выглядеть запрос, если в одной коробке едут:    * три единицы одного товара, требующего маркировки;   * одна единица другого товара, не требущего маркировки.    ```json translate=no   {       \"boxes\": [           {               \"items\": [                   {                       \"id\": 123456,                       \"fullCount\": 3,                       \"instances\": [                           {                               \"cis\": \"01030410947874432155Qbag!\\u001d93Zjqw\"                           },                           {                               \"cis\": \"010304109478gftJ14545762!\\u001dhGt264\"                           },                           {                               \"cis\": \"010304109478fRs28323ks23!\\u001dhet201\"                           }                       ]                   },                   {                       \"id\": 654321,                       \"fullCount\": 1                   }               ]           }       ]   }   ```  {% endcut %}  {% cut \"Товар едет в разных коробках\" %}  Вот как будет выглядеть запрос, если товар едет в двух коробках:    ```json translate=no   {       \"boxes\": [           {               \"items\": [                   {                       \"id\": 123456,                       \"partialCount\": {                           \"current\": 1,                           \"total\": 2                       },                       \"instances\": [                           {                               \"cis\": \"01030410947874432155Qbag!\\u001d93Zjqw\"                           }                       ]                   }               ]           },           {               \"items\": [                   {                       \"id\": 123456,                       \"partialCount\": {                           \"current\": 2,                           \"total\": 2                       },                       \"instances\": [                           {                               \"cis\": \"01030410947874432155Qbag!\\u001d93Zjqw\"                           }                       ]                   }               ]           }       ]   }   ```  {% endcut %}  {% cut \"Одинаковые товары, где каждый едет в нескольких коробках\" %}  Вот как будет выглядеть запрос, если каждый из двух одинаковых товаров едет в двух коробках:    ```json translate=no   {       \"boxes\": [           {               \"items\": [                   {                       \"id\": 123456,                       \"partialCount\": {                           \"current\": 1,                           \"total\": 2                       },                       \"instances\": [                           {                               \"cis\": \"01030410947874432155Qbag!\\u001d93Zjqw\"                           }                       ]                   }               ]           },           {               \"items\": [                   {                       \"id\": 123456,                       \"partialCount\": {                           \"current\": 2,                           \"total\": 2                       },                       \"instances\": [                           {                               \"cis\": \"01030410947874432155Qbag!\\u001d93Zjqw\"                           }                       ]                   }               ]           },           {               \"items\": [                   {                       \"id\": 123456,                       \"partialCount\": {                           \"current\": 1,                           \"total\": 2                       },                       \"instances\": [                           {                               \"cis\": \"01030410947874432155Qbag!\\u001d93Zjqw\"                           }                       ]                   }               ]           },           {               \"items\": [                   {                       \"id\": 123456,                       \"partialCount\": {                           \"current\": 2,                           \"total\": 2                       },                       \"instances\": [                           {                               \"cis\": \"01030410947874432155Qbag!\\u001d93Zjqw\"                           }                       ]                   }               ]           }       ]   }   ```  {% endcut %}  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    SetOrderBoxLayoutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let setOrderBoxLayoutRequest: SetOrderBoxLayoutRequest; //

const { status, data } = await apiInstance.setOrderBoxLayout(
    campaignId,
    orderId,
    setOrderBoxLayoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOrderBoxLayoutRequest** | **SetOrderBoxLayoutRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**SetOrderBoxLayoutResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ придет переданная раскладка с идентификаторами коробок — они понадобятся для запроса ярлыков.  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOrderShipmentBoxes**
> SetOrderShipmentBoxesResponse setOrderShipmentBoxes(setOrderShipmentBoxesRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/setOrderShipmentBoxes.md) %}  {% note warning \"Какой метод использовать вместо устаревшего\" %}  [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md)  {% endnote %}  Отгружаемый Маркету заказ может не влезть в одну коробку или упаковку — в этом случае получается, что он занимает несколько грузовых мест.  Количество грузовых мест нужно обязательно передавать Маркету, если оно не равно 1. Это делается перед переводом его в статус **Готов к отгрузке**. Подробно о том, что в какой момент нужно передавать, рассказано в [пошаговой инструкции](../../step-by-step/fbs.md).  Метод устроен немного нестандартно: количество задается длиной массива пустых объектов.  Раньше метод требовал передачи большего количества данных. Запросы, оформленные по старому образцу, работают, но лучше делать по-новому.  {% cut \"Как было раньше\" %}  Структура тела PUT-запроса:  ```text translate=no {   \"boxes\":   [     {       \"fulfilmentId\": \"{string}\",       \"weight\": {int64},       \"width\": {int64},       \"height\": {int64},       \"depth\": {int64},       \"items\":       [         {           \"id\": {int64},           \"count\": {int32}         },         ...       ]     },     ...   ] } ``` | **Параметр**  | **Тип**  | **Значение**  | | ----------- | ----------- | ----------- | | `boxes`       |           | Список грузовых мест.       |  **Параметры, вложенные в `boxes`** | **Параметр**  | **Тип**  | **Значение**  | | ----------- | ----------- | ----------- | | `fulfilmentId`       |  :no-translate[String]   | Идентификатор грузового места в информационной системе магазина. Сформируйте идентификатор по шаблону: `номер заказа на Маркете-номер грузового места`. Например, `7206821‑1, 7206821‑2` и т. д. | | `weight`       | :no-translate[Int64]        | Масса брутто грузового места (суммарная масса упаковки и содержимого) в граммах. | | `width`       | :no-translate[Int64]   | Ширина грузового места в сантиметрах.       | | `height`       | :no-translate[Int64]   | Высота грузового места в сантиметрах.       | | `depth`       | :no-translate[Int64]   | Глубина грузового места в сантиметрах.        | | `items`       | :no-translate[Int64]   | Список товаров в грузовом месте.       |  **Параметры, вложенные в `items`** | **Параметр**  | **Тип**  | **Значение**  | | ----------- | ----------- | ----------- | | `id`       | :no-translate[Int64]     | Идентификатор товара в рамках заказа.   | | `count`    | :no-translate[Int32]     | Количество единиц товара в грузовом месте.       |  {% endcut %}  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    SetOrderShipmentBoxesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let shipmentId: number; //{ % note warning \"Параметр больше не используется\" % }  Передайте любое число, чтобы получился корректный URL.  { % endnote % }  Идентификатор грузоместа.  (default to undefined)
let setOrderShipmentBoxesRequest: SetOrderShipmentBoxesRequest; //

const { status, data } = await apiInstance.setOrderShipmentBoxes(
    campaignId,
    orderId,
    shipmentId,
    setOrderShipmentBoxesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOrderShipmentBoxesRequest** | **SetOrderShipmentBoxesRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|
| **shipmentId** | [**number**] | { % note warning \&quot;Параметр больше не используется\&quot; % }  Передайте любое число, чтобы получился корректный URL.  { % endnote % }  Идентификатор грузоместа.  | defaults to undefined|


### Return type

**SetOrderShipmentBoxesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Имеет значение только тип ответа. Если ответ &#x60;ОК&#x60;, количество грузомест записано. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateExternalOrderId**
> EmptyApiResponse updateExternalOrderId(updateExternalOrderIdRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateExternalOrderId.md) %}  Передает Маркету идентификатор заказа в системе магазина.  Его нельзя передавать:  * больше одного раза; * после перехода заказа в статус `PROCESSING` с подстатусом `READY_TO_SHIP`.  Этот идентификатор отражается в документах отгрузки: акте приема-передачи, листе сборки и ярлыках.  {% note alert \"В штрихкодах могут быть только символы ASCII\" %}  Если во внешнем идентификаторе вы используете другие символы, на ярлыке в штрихкоде будет отображаться идентификатор заказа Маркета.  {% endnote %}  |**⚙️ Лимит:** 10 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    UpdateExternalOrderIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let updateExternalOrderIdRequest: UpdateExternalOrderIdRequest; //

const { status, data } = await apiInstance.updateExternalOrderId(
    campaignId,
    orderId,
    updateExternalOrderIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateExternalOrderIdRequest** | **UpdateExternalOrderIdRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Внешний идентификатор заказа успешно передан. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrderItems**
> updateOrderItems(updateOrderItemRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOrderItems.md) %}  {% note warning \"Если вы работаете по модели FBS\" %}  Используйте метод [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md).  {% endnote %}  Удаляет один или несколько товаров из заказа, если магазин не может поставить их все.  Заказ должен находится в статусе `\"status\": \"PROCESSING\"` этапа обработки `\"substatus\": \"STARTED\"`. Изменить состав нельзя после передачи статуса `\"substatus\": \"READY_TO_SHIP\"`.  {% cut \"Уменьшить количество одинаковых товаров\" %}  Передайте обновленное значение в параметре `count`.  {% endcut %}  {% cut \"Удалить товар из заказа\" %}  Передайте значение `0` в параметре `count` или не передавайте `item`.  {% endcut %}  Нельзя удалить или уменьшить количество товара, если он:  * добавлен по акции; * составляет 99% стоимости заказа; * единственный товар в заказе.  В таком случае отмените заказ — в методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md) передайте статус заказа `CANCELLED` с причиной отмены `SHOP_FAILED`.  ### Как вернутся деньги {#money}    Если покупатель оплатил товар при оформлении, Маркет вернет ему деньги за удаленные из заказа товары в течение двух дней:    * при оплате банковской картой — с момента, когда магазин переведет заказ в статус `SHIPPED`;    * при оплате через :no-translate[Apple Pay] или :no-translate[Google Pay] — с момента, когда магазин удалит товар из заказа.  {% endcut %}  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    UpdateOrderItemRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let updateOrderItemRequest: UpdateOrderItemRequest; //

const { status, data } = await apiInstance.updateOrderItems(
    campaignId,
    orderId,
    updateOrderItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderItemRequest** | **UpdateOrderItemRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Маркет успешно обработал ваш запрос. Выходные данные не ожидаются. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrderStatus**
> UpdateOrderStatusResponse updateOrderStatus(updateOrderStatusRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOrderStatus.md) %}  Изменяет статус заказа. Возможные изменения статусов:  * Если магазин подтвердил и подготовил заказ к отправке, то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"PROCESSING\"` и этап обработки `\"substatus\": \"READY_TO_SHIP\"`. * Если магазин подтвердил заказ, но не может его выполнить (например, товар числится в базе, но отсутствует на складе или нет нужного цвета), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`. * Если магазин подготовил заказ к отгрузке, но не может его выполнить (например, последний товар был поврежден или оказался с браком), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"READY_TO_SHIP\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`.  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    UpdateOrderStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let updateOrderStatusRequest: UpdateOrderStatusRequest; //

const { status, data } = await apiInstance.updateOrderStatus(
    campaignId,
    orderId,
    updateOrderStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderStatusRequest** | **UpdateOrderStatusRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**UpdateOrderStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В случае успешного изменения статуса заказа возвращается обновленная информация о заказе. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrderStatuses**
> UpdateOrderStatusesResponse updateOrderStatuses(updateOrderStatusesRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOrderStatuses.md) %}  Изменяет статусы нескольких заказов.  Возможные изменения статусов:  * Если магазин подтвердил и подготовил заказ к отправке, то заказ из статуса `\"status\": \"PROCESSING\"`и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"PROCESSING\"` и этап обработки `\"substatus\": \"READY_TO_SHIP\"`. * Если магазин подтвердил заказ, но не может его выполнить (например, товар числится в базе, но отсутствует на складе или нет нужного цвета), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`. * Если магазин подготовил заказ к отгрузке, но не может его выполнить (например, последний товар был поврежден или оказался с браком), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"READY_TO_SHIP\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`.  |**⚙️ Лимит:** 100 000 заказов в час| |-| 

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    UpdateOrderStatusesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let updateOrderStatusesRequest: UpdateOrderStatusesRequest; //

const { status, data } = await apiInstance.updateOrderStatuses(
    campaignId,
    updateOrderStatusesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderStatusesRequest** | **UpdateOrderStatusesRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**UpdateOrderStatusesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Возвращается информация об обновленных статусах заказов. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

