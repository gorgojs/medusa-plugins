# OrderDeliveryApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOrderBuyerInfo**](#getorderbuyerinfo) | **GET** /v2/campaigns/{campaignId}/orders/{orderId}/buyer | Информация о покупателе — физическом лице|
|[**setOrderDeliveryDate**](#setorderdeliverydate) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/delivery/date | Изменение даты доставки заказа|
|[**setOrderDeliveryTrackCode**](#setorderdeliverytrackcode) | **POST** /v2/campaigns/{campaignId}/orders/{orderId}/delivery/track | Передача трек‑номера посылки|
|[**updateOrderStorageLimit**](#updateorderstoragelimit) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/delivery/storage-limit | Продление срока хранения заказа|
|[**verifyOrderEac**](#verifyordereac) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/verifyEac | Передача кода подтверждения|

# **getOrderBuyerInfo**
> GetOrderBuyerInfoResponse getOrderBuyerInfo()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOrderBuyerInfo.md) %}  Возвращает информацию о покупателе по идентификатору заказа.  {% note info \"Как получить информацию о покупателе, который является юридическим лицом\" %}  Воспользуйтесь запросом [POST v2/campaigns/{campaignId}/orders/{orderId}/business-buyer](../../reference/order-business-information/getOrderBusinessBuyerInfo.md).  {% endnote %}  Получить данные можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY` или `PICKUP`.  |**⚙️ Лимит:** 3 000 запросов в час| |-| 

### Example

```typescript
import {
    OrderDeliveryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDeliveryApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)

const { status, data } = await apiInstance.getOrderBuyerInfo(
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

**GetOrderBuyerInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о покупателе. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOrderDeliveryDate**
> EmptyApiResponse setOrderDeliveryDate(setOrderDeliveryDateRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/setOrderDeliveryDate.md) %}  Метод изменяет дату доставки заказа в статусе `PROCESSING` или `DELIVERY`. Для заказов с другими статусами дату доставки изменить нельзя.  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrderDeliveryApi,
    Configuration,
    SetOrderDeliveryDateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDeliveryApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let setOrderDeliveryDateRequest: SetOrderDeliveryDateRequest; //

const { status, data } = await apiInstance.setOrderDeliveryDate(
    campaignId,
    orderId,
    setOrderDeliveryDateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOrderDeliveryDateRequest** | **SetOrderDeliveryDateRequest**|  | |
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
|**200** | Успешное изменение даты доставки. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOrderDeliveryTrackCode**
> EmptyApiResponse setOrderDeliveryTrackCode(setOrderDeliveryTrackCodeRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/setOrderDeliveryTrackCode.md) %}  Передает Маркету трек‑номер, по которому покупатель может отследить посылку со своим заказом через службу доставки. Если покупатели смогут узнать, на каком этапе доставки находятся их заказы, доверие покупателей к вашему магазину может возрасти.  Передать трек‑номер можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY` или `PICKUP`.  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrderDeliveryApi,
    Configuration,
    SetOrderDeliveryTrackCodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDeliveryApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let setOrderDeliveryTrackCodeRequest: SetOrderDeliveryTrackCodeRequest; //

const { status, data } = await apiInstance.setOrderDeliveryTrackCode(
    campaignId,
    orderId,
    setOrderDeliveryTrackCodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOrderDeliveryTrackCodeRequest** | **SetOrderDeliveryTrackCodeRequest**|  | |
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
|**200** | Трек‑номер посылки и идентификатор службы доставки были успешно переданы. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrderStorageLimit**
> EmptyApiResponse updateOrderStorageLimit(updateOrderStorageLimitRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOrderStorageLimit.md) %}  Продлевает срок хранения заказа в пункте выдачи продавца.  Заказ должен быть в статусе `PICKUP`. Продлить срок можно только один раз, не больше чем на 30 дней.  Новый срок хранения можно получить в параметре `outletStorageLimitDate` запроса [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md).  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrderDeliveryApi,
    Configuration,
    UpdateOrderStorageLimitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDeliveryApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let updateOrderStorageLimitRequest: UpdateOrderStorageLimitRequest; //

const { status, data } = await apiInstance.updateOrderStorageLimit(
    campaignId,
    orderId,
    updateOrderStorageLimitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderStorageLimitRequest** | **UpdateOrderStorageLimitRequest**|  | |
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
|**200** | Пустой ответ. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyOrderEac**
> VerifyOrderEacResponse verifyOrderEac(verifyOrderEacRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/verifyOrderEac.md) %}  Отправляет Маркету код подтверждения для его проверки.  **Если у магазина настроена работа с кодами подтверждения:**    В запросах [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md), [GET v2/campaigns/{campaignId}/orders](../../reference/orders/getOrders.md), [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md) в параметре `delivery`, вложенном в `order`, возвращается параметр `eacType` с типом `Enum` — тип кода подтверждения для передачи заказа.    Возможные значения:    * `MERCHANT_TO_COURIER` (временно не возвращается) — продавец передает код курьеру для получения невыкупа;   * `COURIER_TO_MERCHANT` — курьер передает код продавцу для получения заказа.    Параметр `eacType` возвращается при статусах заказа `COURIER_FOUND`, `COURIER_ARRIVED_TO_SENDER` и `DELIVERY_SERVICE_UNDELIVERED`. Если заказ в других статусах, параметр может отсутствовать.  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    OrderDeliveryApi,
    Configuration,
    VerifyOrderEacRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDeliveryApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let verifyOrderEacRequest: VerifyOrderEacRequest; //

const { status, data } = await apiInstance.verifyOrderEac(
    campaignId,
    orderId,
    verifyOrderEacRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyOrderEacRequest** | **VerifyOrderEacRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**VerifyOrderEacResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Проверка кода выполнена успешно. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

