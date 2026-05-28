# HiddenOffersApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addHiddenOffers**](#addhiddenoffers) | **POST** /v2/campaigns/{campaignId}/hidden-offers | Скрытие товаров и настройки скрытия|
|[**deleteHiddenOffers**](#deletehiddenoffers) | **POST** /v2/campaigns/{campaignId}/hidden-offers/delete | Возобновление показа товаров|
|[**getHiddenOffers**](#gethiddenoffers) | **GET** /v2/campaigns/{campaignId}/hidden-offers | Информация о скрытых вами товарах|

# **addHiddenOffers**
> EmptyApiResponse addHiddenOffers(addHiddenOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/addHiddenOffers.md) %}  Скрывает товары магазина на Маркете.  {% note info \"Данные в каталоге обновляются не мгновенно\" %}  Это занимает до нескольких минут.  {% endnote %}  {% include notitle [:no-translate[limit]](../../_auto/method_limits/addHiddenOffers.md) %} 

### Example

```typescript
import {
    HiddenOffersApi,
    Configuration,
    AddHiddenOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new HiddenOffersApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let addHiddenOffersRequest: AddHiddenOffersRequest; //Запрос на скрытие оферов.

const { status, data } = await apiInstance.addHiddenOffers(
    campaignId,
    addHiddenOffersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addHiddenOffersRequest** | **AddHiddenOffersRequest**| Запрос на скрытие оферов. | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|


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
|**200** | Настройки скрытия получены и скоро вступят в силу. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибках при работе с товарами](../../concepts/error-codes#offers)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteHiddenOffers**
> EmptyApiResponse deleteHiddenOffers(deleteHiddenOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/deleteHiddenOffers.md) %}  Возобновляет показ скрытых вами товаров магазина на Маркете.  {% note info \"Данные в каталоге обновляются не мгновенно\" %}  Это занимает до нескольких минут.  {% endnote %}  {% include notitle [:no-translate[limit]](../../_auto/method_limits/deleteHiddenOffers.md) %} 

### Example

```typescript
import {
    HiddenOffersApi,
    Configuration,
    DeleteHiddenOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new HiddenOffersApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let deleteHiddenOffersRequest: DeleteHiddenOffersRequest; //Запрос на возобновление показа оферов.

const { status, data } = await apiInstance.deleteHiddenOffers(
    campaignId,
    deleteHiddenOffersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteHiddenOffersRequest** | **DeleteHiddenOffersRequest**| Запрос на возобновление показа оферов. | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|


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
|**200** | Показ товаров возобновлен. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHiddenOffers**
> GetHiddenOffersResponse getHiddenOffers()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getHiddenOffers.md) %}  Возвращает список скрытых вами товаров для заданного магазина.  В списке будут товары, скрытые любым способом — через API, с помощью YML-фида, в кабинете и так далее.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getHiddenOffers.md) %} 

### Example

```typescript
import {
    HiddenOffersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HiddenOffersApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let offerId: Set<string>; //Идентификатор скрытого предложения.  (optional) (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.  (optional) (default to undefined)
let limit: number; //{{ limit-param-description }}  (optional) (default to 250)

const { status, data } = await apiInstance.getHiddenOffers(
    campaignId,
    offerId,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **offerId** | **Set&lt;string&gt;** | Идентификатор скрытого предложения.  | (optional) defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  | (optional) defaults to undefined|
| **limit** | [**number**] | {{ limit-param-description }}  | (optional) defaults to 250|


### Return type

**GetHiddenOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о скрытых вами товарах. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

