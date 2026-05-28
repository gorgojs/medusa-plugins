# ReturnsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelReturn**](#cancelreturn) | **POST** /v1/campaigns/{campaignId}/returns/cancel | Отмена возврата|
|[**createReturn**](#createreturn) | **POST** /v1/campaigns/{campaignId}/returns/create | Создание возврата|
|[**getReturn**](#getreturn) | **GET** /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId} | Информация о невыкупе или возврате|
|[**getReturnApplication**](#getreturnapplication) | **GET** /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/application | Получение заявления на возврат|
|[**getReturnAvailableDecisions**](#getreturnavailabledecisions) | **POST** /v1/businesses/{businessId}/returns/decisions | Получение возможных решений по возврату|
|[**getReturnPhoto**](#getreturnphoto) | **GET** /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/{itemId}/image/{imageHash} | Получение фотографий товаров в возврате|
|[**getReturns**](#getreturns) | **GET** /v2/campaigns/{campaignId}/returns | Список невыкупов и возвратов|
|[**setReturnDecision**](#setreturndecision) | **POST** /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision | Принятие или изменение решения по возврату|
|[**submitReturnDecision**](#submitreturndecision) | **POST** /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit | Передача решения по возврату|

# **cancelReturn**
> CancelReturnResponse cancelReturn(cancelReturnRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/cancelReturn.md) %}  Отменяет возврат.  Это можно сделать только до принятия в пункте выдачи (`\"shipmentStatus\": \"CREATED\"`).  {% note info \"Возврат отменяется не мгновенно\" %}  Отмена возврата применяется в течение нескольких минут и только в случае успешного завершения операции. [Как проверить статус операции](../../reference/operations/getOperations.md)  {% endnote %}  {% note tip \"Используйте этот метод в подобных ситуациях\" %}  Вы создали возврат, в котором указали 3 товара. Но покупатель передумал и решил вернуть только 2. Отмените возврат и создайте новый.  {% endnote %}  {% include notitle [:no-translate[limit]](../../_auto/method_limits/cancelReturn.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration,
    CancelReturnRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let cancelReturnRequest: CancelReturnRequest; //

const { status, data } = await apiInstance.cancelReturn(
    campaignId,
    cancelReturnRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelReturnRequest** | **CancelReturnRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|


### Return type

**CancelReturnResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об операции по отмене возврата.  {% note warning \&quot;Ответ &#x60;200&#x60; не значит, что возврат отменен\&quot; %}  При успешном выполнении запроса это произойдет через некоторое время. [Как проверить статус операции](../../reference/operations/getOperations.md)  {% endnote %}  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReturn**
> CreateReturnResponse createReturn(createReturnRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/createReturn.md) %}  Создает новый возврат.  Это можно сделать только для заказа в статусе `DELIVERED`.  {% note warning \"Перед вызовом метода\" %}  Проверьте, подходят ли пункты выдачи для возврата указанных товаров, — [POST v1/campaigns/{campaignId}/return-delivery-options](../../reference/delivery-options/getReturnDeliveryOptions.md).  {% endnote %}  {% include notitle [:no-translate[limit]](../../_auto/method_limits/createReturn.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration,
    CreateReturnRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let createReturnRequest: CreateReturnRequest; //

const { status, data } = await apiInstance.createReturn(
    campaignId,
    createReturnRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReturnRequest** | **CreateReturnRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|


### Return type

**CreateReturnResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о cозданном возврате. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибках при работе с заказами](../../concepts/error-codes#orders)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReturn**
> GetReturnResponse getReturn()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturn.md) %}  Получает информацию по одному невыкупу или возврату.  {% note tip \"Подключите API-уведомления\" %}  Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый невыкуп или возврат.  [{#T}](../../push-notifications/index.md)  {% endnote %}  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getReturn.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let returnId: number; //Идентификатор невыкупа или возврата. (default to undefined)

const { status, data } = await apiInstance.getReturn(
    campaignId,
    orderId,
    returnId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|
| **returnId** | [**number**] | Идентификатор невыкупа или возврата. | defaults to undefined|


### Return type

**GetReturnResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Детали невыкупа или возврата. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReturnApplication**
> File getReturnApplication()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturnApplication.md) %}  Загружает заявление покупателя на возврат товара.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getReturnApplication.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let returnId: number; //Идентификатор невыкупа или возврата. (default to undefined)

const { status, data } = await apiInstance.getReturnApplication(
    campaignId,
    orderId,
    returnId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|
| **returnId** | [**number**] | Идентификатор невыкупа или возврата. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заявление на возврат. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReturnAvailableDecisions**
> GetReturnAvailableDecisionsResponse getReturnAvailableDecisions(getReturnAvailableDecisionsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturnAvailableDecisions.md) %}  Возвращает список доступных решений по возврату.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getReturnAvailableDecisions.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration,
    GetReturnAvailableDecisionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let getReturnAvailableDecisionsRequest: GetReturnAvailableDecisionsRequest; //

const { status, data } = await apiInstance.getReturnAvailableDecisions(
    businessId,
    getReturnAvailableDecisionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getReturnAvailableDecisionsRequest** | **GetReturnAvailableDecisionsRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**GetReturnAvailableDecisionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Возможные решения по возврату. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReturnPhoto**
> File getReturnPhoto()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturnPhoto.md) %}  Получает фотографии товаров, которые покупатель приложил к заявлению на возврат.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getReturnPhoto.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let returnId: number; //Идентификатор невыкупа или возврата. (default to undefined)
let itemId: number; //Идентификатор товара в возврате. (default to undefined)
let imageHash: string; //Хеш ссылки изображения для загрузки. (default to undefined)

const { status, data } = await apiInstance.getReturnPhoto(
    campaignId,
    orderId,
    returnId,
    itemId,
    imageHash
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|
| **returnId** | [**number**] | Идентификатор невыкупа или возврата. | defaults to undefined|
| **itemId** | [**number**] | Идентификатор товара в возврате. | defaults to undefined|
| **imageHash** | [**string**] | Хеш ссылки изображения для загрузки. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Фотография товаров. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReturns**
> GetReturnsResponse getReturns()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturns.md) %}  Получает список невыкупов и возвратов.  Чтобы получить информацию по одному невыкупу или возврату, выполните запрос [GET v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}](../../reference/orders/getReturn.md).  {% note tip \"Подключите API-уведомления\" %}  Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый невыкуп или возврат.  [{#T}](../../push-notifications/index.md)  {% endnote %}  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getReturns.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.  (optional) (default to undefined)
let limit: number; //{{ limit-truncate-param-description }}  (optional) (default to 50)
let orderIds: Set<number>; //Идентификаторы заказов — для фильтрации результатов.  Несколько идентификаторов перечисляются через запятую без пробела.  (optional) (default to undefined)
let statuses: Set<RefundStatusType>; //Фильтр по статусам возврата денег за возвраты.  Несколько статусов перечисляются через запятую.  (optional) (default to undefined)
let shipmentStatuses: Set<ReturnShipmentStatusType>; //Фильтр по логистическим статусам невыкупов и возвратов.  Несколько статусов перечисляются через запятую.  (optional) (default to undefined)
let type: ModelReturnType; //Тип заказа для фильтрации:  * `UNREDEEMED` — невыкуп.  * `RETURN` — возврат.  Если не указать, в ответе будут и невыкупы, и возвраты.  (optional) (default to undefined)
let fromDate: string; //Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: `ГГГГ-ММ-ДД`.  (optional) (default to undefined)
let toDate: string; //Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: `ГГГГ-ММ-ДД`.  (optional) (default to undefined)
let fromDate2: string; //{% note warning \"Вместо него используйте `fromDate`.\" %}     {% endnote %}  Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  (optional) (default to undefined)
let toDate2: string; //{% note warning \"Вместо него используйте `toDate`.\" %}     {% endnote %}  Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  (optional) (default to undefined)

const { status, data } = await apiInstance.getReturns(
    campaignId,
    pageToken,
    limit,
    orderIds,
    statuses,
    shipmentStatuses,
    type,
    fromDate,
    toDate,
    fromDate2,
    toDate2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  | (optional) defaults to undefined|
| **limit** | [**number**] | {{ limit-truncate-param-description }}  | (optional) defaults to 50|
| **orderIds** | **Set&lt;number&gt;** | Идентификаторы заказов — для фильтрации результатов.  Несколько идентификаторов перечисляются через запятую без пробела.  | (optional) defaults to undefined|
| **statuses** | **Set&lt;RefundStatusType&gt;** | Фильтр по статусам возврата денег за возвраты.  Несколько статусов перечисляются через запятую.  | (optional) defaults to undefined|
| **shipmentStatuses** | **Set&lt;ReturnShipmentStatusType&gt;** | Фильтр по логистическим статусам невыкупов и возвратов.  Несколько статусов перечисляются через запятую.  | (optional) defaults to undefined|
| **type** | **ModelReturnType** | Тип заказа для фильтрации:  * &#x60;UNREDEEMED&#x60; — невыкуп.  * &#x60;RETURN&#x60; — возврат.  Если не указать, в ответе будут и невыкупы, и возвраты.  | (optional) defaults to undefined|
| **fromDate** | [**string**] | Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: &#x60;ГГГГ-ММ-ДД&#x60;.  | (optional) defaults to undefined|
| **toDate** | [**string**] | Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: &#x60;ГГГГ-ММ-ДД&#x60;.  | (optional) defaults to undefined|
| **fromDate2** | [**string**] | {% note warning \&quot;Вместо него используйте &#x60;fromDate&#x60;.\&quot; %}     {% endnote %}  Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  | (optional) defaults to undefined|
| **toDate2** | [**string**] | {% note warning \&quot;Вместо него используйте &#x60;toDate&#x60;.\&quot; %}     {% endnote %}  Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  | (optional) defaults to undefined|


### Return type

**GetReturnsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Постраничные невыкупы или возвраты магазина. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setReturnDecision**
> EmptyApiResponse setReturnDecision(setReturnDecisionRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/setReturnDecision.md) %}  {% note warning \"Какой метод использовать вместо устаревшего\" %}  [POST v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit](../../reference/orders/submitReturnDecision.md)  {% endnote %}   Выбирает решение по возврату от покупателя. После этого для подтверждения решения нужно выполнить запрос [POST v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit](../../reference/orders/submitReturnDecision.md).  {% include notitle [:no-translate[limit]](../../_auto/method_limits/setReturnDecision.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration,
    SetReturnDecisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let returnId: number; //Идентификатор невыкупа или возврата. (default to undefined)
let setReturnDecisionRequest: SetReturnDecisionRequest; //

const { status, data } = await apiInstance.setReturnDecision(
    campaignId,
    orderId,
    returnId,
    setReturnDecisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setReturnDecisionRequest** | **SetReturnDecisionRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|
| **returnId** | [**number**] | Идентификатор невыкупа или возврата. | defaults to undefined|


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
|**200** | Детали возврата. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitReturnDecision**
> EmptyApiResponse submitReturnDecision()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/submitReturnDecision.md) %}  Позволяет передать список решений по возврату.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/submitReturnDecision.md) %} 

### Example

```typescript
import {
    ReturnsApi,
    Configuration,
    SubmitReturnDecisionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let returnId: number; //Идентификатор невыкупа или возврата. (default to undefined)
let submitReturnDecisionRequest: SubmitReturnDecisionRequest; //description (optional)

const { status, data } = await apiInstance.submitReturnDecision(
    campaignId,
    orderId,
    returnId,
    submitReturnDecisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitReturnDecisionRequest** | **SubmitReturnDecisionRequest**| description | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|
| **returnId** | [**number**] | Идентификатор невыкупа или возврата. | defaults to undefined|


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
|**200** | Статус выполнения операции. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

