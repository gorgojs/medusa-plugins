# GoodsQuestionsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGoodsQuestionAnswers**](#getgoodsquestionanswers) | **POST** /v1/businesses/{businessId}/goods-questions/answers | Получение ответов на вопрос|
|[**getGoodsQuestions**](#getgoodsquestions) | **POST** /v1/businesses/{businessId}/goods-questions | Получение вопросов о товарах продавца|
|[**updateGoodsQuestionTextEntity**](#updategoodsquestiontextentity) | **POST** /v1/businesses/{businessId}/goods-questions/update | Создание, изменение и удаление ответа или комментария|

# **getGoodsQuestionAnswers**
> GetAnswersResponse getGoodsQuestionAnswers(getAnswersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getGoodsQuestionAnswers.md) %}  Возвращает ответы на вопрос о товаре по указанным фильтрам.  Результаты возвращаются постранично, одна страница содержит не более 50 ответов.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getGoodsQuestionAnswers.md) %} 

### Example

```typescript
import {
    GoodsQuestionsApi,
    Configuration,
    GetAnswersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsQuestionsApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let getAnswersRequest: GetAnswersRequest; //
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.  (optional) (default to undefined)
let limit: number; //{{ limit-param-description }}  (optional) (default to 25)

const { status, data } = await apiInstance.getGoodsQuestionAnswers(
    businessId,
    getAnswersRequest,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getAnswersRequest** | **GetAnswersRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  | (optional) defaults to undefined|
| **limit** | [**number**] | {{ limit-param-description }}  | (optional) defaults to 25|


### Return type

**GetAnswersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список ответов на вопрос. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGoodsQuestions**
> GetQuestionsResponse getGoodsQuestions()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getGoodsQuestions.md) %}  Возвращает вопросы о товарах продавца по указанным фильтрам.  Результаты возвращаются постранично, одна страница содержит не более 50 вопросов.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getGoodsQuestions.md) %} 

### Example

```typescript
import {
    GoodsQuestionsApi,
    Configuration,
    GetQuestionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsQuestionsApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.  (optional) (default to undefined)
let limit: number; //{{ limit-param-description }}  (optional) (default to 25)
let getQuestionsRequest: GetQuestionsRequest; // (optional)

const { status, data } = await apiInstance.getGoodsQuestions(
    businessId,
    pageToken,
    limit,
    getQuestionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getQuestionsRequest** | **GetQuestionsRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  | (optional) defaults to undefined|
| **limit** | [**number**] | {{ limit-param-description }}  | (optional) defaults to 25|


### Return type

**GetQuestionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список вопросов. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGoodsQuestionTextEntity**
> UpdateGoodsQuestionTextEntityResponse updateGoodsQuestionTextEntity(updateGoodsQuestionTextEntityRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateGoodsQuestionTextEntity.md) %}  Создание, изменение и удаление ответа или комментария.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/updateGoodsQuestionTextEntity.md) %} 

### Example

```typescript
import {
    GoodsQuestionsApi,
    Configuration,
    UpdateGoodsQuestionTextEntityRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsQuestionsApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let updateGoodsQuestionTextEntityRequest: UpdateGoodsQuestionTextEntityRequest; //

const { status, data } = await apiInstance.updateGoodsQuestionTextEntity(
    businessId,
    updateGoodsQuestionTextEntityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGoodsQuestionTextEntityRequest** | **UpdateGoodsQuestionTextEntityRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**UpdateGoodsQuestionTextEntityResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о созданном ответе или комментарии.  Возвращается только при операции создания (&#x60;operationType&#x60; &#x3D; &#x60;CREATE&#x60;). При обновлении и удалении возвращается пустой ответ.  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#questions)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

