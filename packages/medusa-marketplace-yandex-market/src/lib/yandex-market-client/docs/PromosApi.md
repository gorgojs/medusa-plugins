# PromosApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deletePromoOffers**](#deletepromooffers) | **POST** /v2/businesses/{businessId}/promos/offers/delete | Удаление товаров из акции|
|[**getPromoOffers**](#getpromooffers) | **POST** /v2/businesses/{businessId}/promos/offers | Получение списка товаров, которые участвуют или могут участвовать в акции|
|[**getPromos**](#getpromos) | **POST** /v2/businesses/{businessId}/promos | Получение списка акций|
|[**updatePromoOffers**](#updatepromooffers) | **POST** /v2/businesses/{businessId}/promos/offers/update | Добавление товаров в акцию или изменение их цен|

# **deletePromoOffers**
> DeletePromoOffersResponse deletePromoOffers(deletePromoOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/deletePromoOffers.md) %}  Убирает товары из акции.  Изменения начинают действовать в течение 4–6 часов. Узнать, применились ли они, можно с помощью параметра `processing` в ответе метода [POST v2/businesses/{businessId}/promos](../../reference/promos/getPromos.md).  |**⚙️ Лимит:** 10 000 запросов в час| |-| 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    DeletePromoOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let deletePromoOffersRequest: DeletePromoOffersRequest; //

const { status, data } = await apiInstance.deletePromoOffers(
    businessId,
    deletePromoOffersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePromoOffersRequest** | **DeletePromoOffersRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**DeletePromoOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат удаления товаров из акции. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPromoOffers**
> GetPromoOffersResponse getPromoOffers(getPromoOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getPromoOffers.md) %}  Возвращает список товаров, которые участвуют или могут участвовать в акции.  {% note warning \"Условия участия в акциях могут меняться\" %}  Например, `maxPromoPrice`.  Установленные цены меняться не будут — `price` и `promoPrice`.  {% endnote %}  |**⚙️ Лимит:** 10 000 запросов в час, не более 500 товаров в запросе| |-| 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    GetPromoOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let getPromoOffersRequest: GetPromoOffersRequest; //
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.getPromoOffers(
    businessId,
    getPromoOffersRequest,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getPromoOffersRequest** | **GetPromoOffersRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetPromoOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров, которые участвуют или могут участвовать в акции. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPromos**
> GetPromosResponse getPromos()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getPromos.md) %}  Возвращает информацию об акциях Маркета. Не возвращает данные об акциях, которые создал продавец.  По умолчанию возвращаются акции, в которых продавец участвует или может принять участие.  Чтобы получить текущие или завершенные акции, передайте параметр `participation`.  Типы акций, которые возвращаются в ответе:  * прямая скидка; * флеш-акция; * скидка по промокоду.  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    GetPromosRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let getPromosRequest: GetPromosRequest; // (optional)

const { status, data } = await apiInstance.getPromos(
    businessId,
    getPromosRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getPromosRequest** | **GetPromosRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**GetPromosResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список акций Маркета. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePromoOffers**
> UpdatePromoOffersResponse updatePromoOffers(updatePromoOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updatePromoOffers.md) %}  Добавляет товары в акцию или изменяет цены на товары, которые участвуют в акции.  Изменения начинают действовать в течение 4–6 часов. Узнать, применились ли они, можно с помощью параметра `processing` в ответе метода [POST v2/businesses/{businessId}/promos](../../reference/promos/getPromos.md).  |**⚙️ Лимит:** 10 000 запросов в час| |-| 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    UpdatePromoOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let updatePromoOffersRequest: UpdatePromoOffersRequest; //

const { status, data } = await apiInstance.updatePromoOffers(
    businessId,
    updatePromoOffersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePromoOffersRequest** | **UpdatePromoOffersRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**UpdatePromoOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат добавления товаров в акцию или обновления их цен. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

