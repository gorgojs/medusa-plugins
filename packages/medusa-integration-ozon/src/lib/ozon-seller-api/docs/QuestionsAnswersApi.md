# QuestionsAnswersApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**questionAnswerCreate**](#questionanswercreate) | **POST** /v1/question/answer/create | Создать ответ на вопрос|
|[**questionAnswerDelete**](#questionanswerdelete) | **POST** /v1/question/answer/delete | Удалить ответ на вопрос|
|[**questionAnswerList**](#questionanswerlist) | **POST** /v1/question/answer/list | Список ответов на вопрос|
|[**questionChangeStatus**](#questionchangestatus) | **POST** /v1/question/change-status | Изменить статус вопросов|
|[**questionCount**](#questioncount) | **POST** /v1/question/count | Количество вопросов по статусам|
|[**questionInfo**](#questioninfo) | **POST** /v1/question/info | Информация о вопросе|
|[**questionList**](#questionlist) | **POST** /v1/question/list | Список вопросов|
|[**questionTopSku**](#questiontopsku) | **POST** /v1/question/top-sku | Товары с наибольшим количеством вопросов|

# **questionAnswerCreate**
> V1QuestionAnswerCreateResponse questionAnswerCreate(v1QuestionAnswerCreateRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration,
    V1QuestionAnswerCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1QuestionAnswerCreateRequest: V1QuestionAnswerCreateRequest; //

const { status, data } = await apiInstance.questionAnswerCreate(
    clientId,
    apiKey,
    v1QuestionAnswerCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1QuestionAnswerCreateRequest** | **V1QuestionAnswerCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1QuestionAnswerCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Идентификатор ответа на вопрос |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **questionAnswerDelete**
> questionAnswerDelete(v1QuestionAnswerDeleteRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration,
    V1QuestionAnswerDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1QuestionAnswerDeleteRequest: V1QuestionAnswerDeleteRequest; //

const { status, data } = await apiInstance.questionAnswerDelete(
    clientId,
    apiKey,
    v1QuestionAnswerDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1QuestionAnswerDeleteRequest** | **V1QuestionAnswerDeleteRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ответ удалён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **questionAnswerList**
> V1QuestionAnswerListResponse questionAnswerList(v1QuestionAnswerListRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration,
    V1QuestionAnswerListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1QuestionAnswerListRequest: V1QuestionAnswerListRequest; //

const { status, data } = await apiInstance.questionAnswerList(
    clientId,
    apiKey,
    v1QuestionAnswerListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1QuestionAnswerListRequest** | **V1QuestionAnswerListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1QuestionAnswerListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список ответов на вопрос |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **questionChangeStatus**
> questionChangeStatus()

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration,
    V1QuestionChangeStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1QuestionChangeStatusRequest: V1QuestionChangeStatusRequest; // (optional)

const { status, data } = await apiInstance.questionChangeStatus(
    clientId,
    apiKey,
    v1QuestionChangeStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1QuestionChangeStatusRequest** | **V1QuestionChangeStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус изменён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **questionCount**
> V1QuestionCountResponse questionCount()

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.questionCount(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1QuestionCountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество вопросов по статусам |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **questionInfo**
> V1QuestionInfoResponse questionInfo()

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration,
    V1QuestionInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1QuestionInfoRequest: V1QuestionInfoRequest; // (optional)

const { status, data } = await apiInstance.questionInfo(
    clientId,
    apiKey,
    v1QuestionInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1QuestionInfoRequest** | **V1QuestionInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1QuestionInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о вопросе |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **questionList**
> V1QuestionListResponse questionList(v1QuestionListRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration,
    V1QuestionListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1QuestionListRequest: V1QuestionListRequest; //

const { status, data } = await apiInstance.questionList(
    clientId,
    apiKey,
    v1QuestionListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1QuestionListRequest** | **V1QuestionListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1QuestionListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список вопросов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **questionTopSku**
> V1QuestionTopSkuResponse questionTopSku()

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).  Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/1198-Metody-dlia-raboty-s-voprosami-otvetami). 

### Example

```typescript
import {
    QuestionsAnswersApi,
    Configuration,
    V1QuestionTopSkuRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuestionsAnswersApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1QuestionTopSkuRequest: V1QuestionTopSkuRequest; // (optional)

const { status, data } = await apiInstance.questionTopSku(
    clientId,
    apiKey,
    v1QuestionTopSkuRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1QuestionTopSkuRequest** | **V1QuestionTopSkuRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1QuestionTopSkuResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Идентификаторы товаров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

