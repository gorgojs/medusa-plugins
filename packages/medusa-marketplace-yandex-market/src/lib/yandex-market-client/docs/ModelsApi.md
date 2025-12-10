# ModelsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getModel**](#getmodel) | **GET** /v2/models/{modelId} | Информация об одной модели|
|[**getModelOffers**](#getmodeloffers) | **GET** /v2/models/{modelId}/offers | Список предложений для одной модели|
|[**getModels**](#getmodels) | **POST** /v2/models | Информация о нескольких моделях|
|[**getModelsOffers**](#getmodelsoffers) | **POST** /v2/models/offers | Список предложений для нескольких моделей|
|[**searchModels**](#searchmodels) | **GET** /v2/models | Поиск модели товара|

# **getModel**
> GetModelsResponse getModel()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getModel.md) %}  Возвращает информацию о модели товара.  Для методов `GET v2/models`, `GET v2/models/{modelId}` и `POST v2/models` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество моделей, информация о которых запрошена при помощи этих методов.  |**⚙️ Лимит:** 100 000 моделей в час| |-| 

### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let modelId: number; //Идентификатор модели товара. (default to undefined)
let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)
let currency: CurrencyType; //Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * `BYN` — белорусский рубль.  * `KZT` — казахстанский тенге.  * `RUR` — российский рубль.  * `UAH` — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  (optional) (default to undefined)

const { status, data } = await apiInstance.getModel(
    modelId,
    regionId,
    currency
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelId** | [**number**] | Идентификатор модели товара. | defaults to undefined|
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|
| **currency** | **CurrencyType** | Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * &#x60;BYN&#x60; — белорусский рубль.  * &#x60;KZT&#x60; — казахстанский тенге.  * &#x60;RUR&#x60; — российский рубль.  * &#x60;UAH&#x60; — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  | (optional) defaults to undefined|


### Return type

**GetModelsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о модели. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModelOffers**
> GetModelsOffersResponse getModelOffers()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getModelOffers.md) %}  Возвращает информацию о первых десяти предложениях, расположенных на карточке модели.  Предложения выдаются для определенного региона и располагаются в том же порядке, в котором они показываются в выдаче Маркета на карточке модели.  Для групповых моделей метод не поддерживается. Идентификатор групповой модели игнорируется.  Для методов `GET v2/models/{modelId}/offers` и `POST v2/models/offers` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество моделей, информация о которых запрошена при помощи этих методов.  |**⚙️ Лимит:** 100 000 предложений в час| |-| 

### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let modelId: number; //Идентификатор модели товара. (default to undefined)
let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)
let currency: CurrencyType; //Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * `BYN` — белорусский рубль.  * `KZT` — казахстанский тенге.  * `RUR` — российский рубль.  * `UAH` — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  (optional) (default to undefined)
let orderByPrice: SortOrderType; //Направление сортировки по цене.  Возможные значения: * `ASC` — сортировка по возрастанию. * `DESC` — сортировка по убыванию.  Значение по умолчанию: предложения выводятся в произвольном порядке.  (optional) (default to undefined)
let count: number; //Количество предложений на странице ответа. (optional) (default to 10)
let page: number; //{% note warning \"Если в методе есть `page_token`\" %}  Используйте его вместо параметра `page`.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром `pageSize`.  `page` игнорируется, если задан `page_token` или `limit`.  (optional) (default to 1)

const { status, data } = await apiInstance.getModelOffers(
    modelId,
    regionId,
    currency,
    orderByPrice,
    count,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelId** | [**number**] | Идентификатор модели товара. | defaults to undefined|
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|
| **currency** | **CurrencyType** | Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * &#x60;BYN&#x60; — белорусский рубль.  * &#x60;KZT&#x60; — казахстанский тенге.  * &#x60;RUR&#x60; — российский рубль.  * &#x60;UAH&#x60; — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  | (optional) defaults to undefined|
| **orderByPrice** | **SortOrderType** | Направление сортировки по цене.  Возможные значения: * &#x60;ASC&#x60; — сортировка по возрастанию. * &#x60;DESC&#x60; — сортировка по убыванию.  Значение по умолчанию: предложения выводятся в произвольном порядке.  | (optional) defaults to undefined|
| **count** | [**number**] | Количество предложений на странице ответа. | (optional) defaults to 10|
| **page** | [**number**] | {% note warning \&quot;Если в методе есть &#x60;page_token&#x60;\&quot; %}  Используйте его вместо параметра &#x60;page&#x60;.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром &#x60;pageSize&#x60;.  &#x60;page&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to 1|


### Return type

**GetModelsOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список предложений для модели. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModels**
> GetModelsResponse getModels(getModelsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getModels.md) %}  Возвращает информацию о моделях товаров.  В одном запросе можно получить информацию не более чем о 100 моделях.  Для методов `GET v2/models`, `GET v2/models/{modelId}` и `POST v2/models` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество моделей, информация о которых запрошена при помощи этих методов.  |**⚙️ Лимит:** 100 000 моделей в час| |-| 

### Example

```typescript
import {
    ModelsApi,
    Configuration,
    GetModelsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)
let getModelsRequest: GetModelsRequest; //
let currency: CurrencyType; //Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * `BYN` — белорусский рубль.  * `KZT` — казахстанский тенге.  * `RUR` — российский рубль.  * `UAH` — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  (optional) (default to undefined)

const { status, data } = await apiInstance.getModels(
    regionId,
    getModelsRequest,
    currency
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getModelsRequest** | **GetModelsRequest**|  | |
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|
| **currency** | **CurrencyType** | Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * &#x60;BYN&#x60; — белорусский рубль.  * &#x60;KZT&#x60; — казахстанский тенге.  * &#x60;RUR&#x60; — российский рубль.  * &#x60;UAH&#x60; — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  | (optional) defaults to undefined|


### Return type

**GetModelsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о моделях. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModelsOffers**
> GetModelsOffersResponse getModelsOffers(getModelsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getModelsOffers.md) %}  Возвращает информацию о первых десяти предложениях, расположенных на карточках моделей, идентификаторы которых указаны в запросе.  Предложения выдаются для определенного региона и располагаются в том же порядке, в котором они показываются в выдаче Маркета на карточке модели.  Для групповых моделей выдача предложений не поддерживается. Идентификаторы групповых моделей игнорируются.  В одном запросе можно получить информацию о предложениях не более чем для 100 моделей.  Для методов `GET v2/models/{modelId}/offers` и `POST v2/models/offers` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество моделей, информация о которых запрошена при помощи этих методов.  |**⚙️ Лимит:** 100 000 предложений в час| |-| 

### Example

```typescript
import {
    ModelsApi,
    Configuration,
    GetModelsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)
let getModelsRequest: GetModelsRequest; //
let currency: CurrencyType; //Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * `BYN` — белорусский рубль.  * `KZT` — казахстанский тенге.  * `RUR` — российский рубль.  * `UAH` — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  (optional) (default to undefined)
let orderByPrice: SortOrderType; //Направление сортировки по цене.  Возможные значения: * `ASC` — сортировка по возрастанию. * `DESC` — сортировка по убыванию.  Значение по умолчанию: предложения выводятся в произвольном порядке.  (optional) (default to undefined)

const { status, data } = await apiInstance.getModelsOffers(
    regionId,
    getModelsRequest,
    currency,
    orderByPrice
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getModelsRequest** | **GetModelsRequest**|  | |
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|
| **currency** | **CurrencyType** | Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * &#x60;BYN&#x60; — белорусский рубль.  * &#x60;KZT&#x60; — казахстанский тенге.  * &#x60;RUR&#x60; — российский рубль.  * &#x60;UAH&#x60; — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  | (optional) defaults to undefined|
| **orderByPrice** | **SortOrderType** | Направление сортировки по цене.  Возможные значения: * &#x60;ASC&#x60; — сортировка по возрастанию. * &#x60;DESC&#x60; — сортировка по убыванию.  Значение по умолчанию: предложения выводятся в произвольном порядке.  | (optional) defaults to undefined|


### Return type

**GetModelsOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список предложений для моделей. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchModels**
> SearchModelsResponse searchModels()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchModels.md) %}  Возвращает информацию о моделях, удовлетворяющих заданным в запросе условиям поиска.  В одном запросе можно получить информацию не более чем о 100 моделях.  Для методов `GET v2/models`, `GET v2/models/{modelId}` и `POST v2/models` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество моделей, информация о которых запрошена при помощи этих методов.  |**⚙️ Лимит:** 100 000 моделей в час| |-| 

### Example

```typescript
import {
    ModelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ModelsApi(configuration);

let query: string; //Поисковый запрос по названию модели товара. (default to undefined)
let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)
let currency: CurrencyType; //Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * `BYN` — белорусский рубль.  * `KZT` — казахстанский тенге.  * `RUR` — российский рубль.  * `UAH` — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  (optional) (default to undefined)
let page: number; //{% note warning \"Если в методе есть `page_token`\" %}  Используйте его вместо параметра `page`.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром `pageSize`.  `page` игнорируется, если задан `page_token` или `limit`.  (optional) (default to 1)
let pageSize: number; //Размер страницы.  Используется вместе с параметром `page`.  `pageSize` игнорируется, если задан `page_token` или `limit`.  (optional) (default to undefined)

const { status, data } = await apiInstance.searchModels(
    query,
    regionId,
    currency,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Поисковый запрос по названию модели товара. | defaults to undefined|
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|
| **currency** | **CurrencyType** | Валюта, в которой отображаются цены предложений на страницах с результатами поиска.  Возможные значения:  * &#x60;BYN&#x60; — белорусский рубль.  * &#x60;KZT&#x60; — казахстанский тенге.  * &#x60;RUR&#x60; — российский рубль.  * &#x60;UAH&#x60; — украинская гривна.  Значение по умолчанию: используется национальная валюта магазина (национальная валюта страны происхождения магазина).  | (optional) defaults to undefined|
| **page** | [**number**] | {% note warning \&quot;Если в методе есть &#x60;page_token&#x60;\&quot; %}  Используйте его вместо параметра &#x60;page&#x60;.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром &#x60;pageSize&#x60;.  &#x60;page&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to 1|
| **pageSize** | [**number**] | Размер страницы.  Используется вместе с параметром &#x60;page&#x60;.  &#x60;pageSize&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to undefined|


### Return type

**SearchModelsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о моделях. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

