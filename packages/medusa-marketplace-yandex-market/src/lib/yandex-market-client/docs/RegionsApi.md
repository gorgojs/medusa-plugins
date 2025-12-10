# RegionsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getRegionsCodes**](#getregionscodes) | **POST** /v2/regions/countries | Список допустимых кодов стран|
|[**searchRegionChildren**](#searchregionchildren) | **GET** /v2/regions/{regionId}/children | Информация о дочерних регионах|
|[**searchRegionsById**](#searchregionsbyid) | **GET** /v2/regions/{regionId} | Информация о регионе|
|[**searchRegionsByName**](#searchregionsbyname) | **GET** /v2/regions | Поиск регионов по их имени|

# **getRegionsCodes**
> GetRegionsCodesResponse getRegionsCodes()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getRegionsCodes.md) %}  Возвращает список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2].  Страна производства `countryCode` понадобится при продаже товаров из-за рубежа для бизнеса. [Инструкция](../../step-by-step/business-info.md)  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    RegionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionsApi(configuration);

const { status, data } = await apiInstance.getRegionsCodes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetRegionsCodesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2]. |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRegionChildren**
> GetRegionWithChildrenResponse searchRegionChildren()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchRegionChildren.md) %}  Возвращает информацию о регионах, являющихся дочерними по отношению к региону, идентификатор которого указан в запросе.  Для методов `GET v2/regions`, `GET v2/regions/{regionId}` и `GET v2/regions/{regionId}/children` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество регионов, информация о которых запрошена при помощи этих методов (не более 100 000 регионов).  Объем запросов к ресурсу, который возможно выполнить в течение суток, зависит от суммарного количества регионов.  |**⚙️ Лимит:** 50 000 запросов в час| |-| 

### Example

```typescript
import {
    RegionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionsApi(configuration);

let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)
let page: number; //{% note warning \"Если в методе есть `page_token`\" %}  Используйте его вместо параметра `page`.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром `pageSize`.  `page` игнорируется, если задан `page_token` или `limit`.  (optional) (default to 1)
let pageSize: number; //Размер страницы.  Используется вместе с параметром `page`.  `pageSize` игнорируется, если задан `page_token` или `limit`.  (optional) (default to undefined)

const { status, data } = await apiInstance.searchRegionChildren(
    regionId,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|
| **page** | [**number**] | {% note warning \&quot;Если в методе есть &#x60;page_token&#x60;\&quot; %}  Используйте его вместо параметра &#x60;page&#x60;.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром &#x60;pageSize&#x60;.  &#x60;page&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to 1|
| **pageSize** | [**number**] | Размер страницы.  Используется вместе с параметром &#x60;page&#x60;.  &#x60;pageSize&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to undefined|


### Return type

**GetRegionWithChildrenResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Регионы, являющиеся дочерними к указанному в запросе. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRegionsById**
> GetRegionsResponse searchRegionsById()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchRegionsById.md) %}  Возвращает информацию о регионе.  Для методов `GET v2/regions`, `GET v2/regions/{regionId}` и `GET v2/regions/{regionId}/children` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество регионов, информация о которых запрошена при помощи этих методов (не более 100 000 регионов).  Объем запросов к ресурсу, который возможно выполнить в течение суток, зависит от суммарного количества регионов.  |**⚙️ Лимит:** 50 000 запросов в час| |-| 

### Example

```typescript
import {
    RegionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionsApi(configuration);

let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)

const { status, data } = await apiInstance.searchRegionsById(
    regionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|


### Return type

**GetRegionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Найденный регион. |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRegionsByName**
> GetRegionsResponse searchRegionsByName()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchRegionsByName.md) %}  Возвращает информацию о регионе, удовлетворяющем заданным в запросе условиям поиска.  Если найдено несколько регионов, удовлетворяющих условиям поиска, возвращается информация по каждому найденному региону (но не более десяти регионов) для возможности определения нужного региона по родительским регионам.  Для методов `GET v2/regions`, `GET v2/regions/{regionId}` и `GET v2/regions/{regionId}/children` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество регионов, информация о которых запрошена при помощи этих методов (не более 100 000 регионов).  Объем запросов к ресурсу, который возможно выполнить в течение суток, зависит от суммарного количества регионов.  {% note warning \"Ограничение для параметра `limit`\" %}  Не передавайте значение больше 20.  {% endnote %}  |**⚙️ Лимит:** 50 000 запросов в час| |-| 

### Example

```typescript
import {
    RegionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegionsApi(configuration);

let name: string; //Название региона.  Важно учитывать регистр: первая буква должна быть заглавной, остальные — строчными. Например, `Москва`.  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.searchRegionsByName(
    name,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Название региона.  Важно учитывать регистр: первая буква должна быть заглавной, остальные — строчными. Например, &#x60;Москва&#x60;.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetRegionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список найденных регионов. |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

