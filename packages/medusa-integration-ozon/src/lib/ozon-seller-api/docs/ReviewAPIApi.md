# ReviewAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**reviewAPICommentCreate**](#reviewapicommentcreate) | **POST** /v1/review/comment/create | Оставить комментарий на отзыв|
|[**reviewAPICommentDelete**](#reviewapicommentdelete) | **POST** /v1/review/comment/delete | Удалить комментарий на отзыв|
|[**reviewAPICommentList**](#reviewapicommentlist) | **POST** /v1/review/comment/list | Список комментариев на отзыв|
|[**reviewAPIReviewChangeStatus**](#reviewapireviewchangestatus) | **POST** /v1/review/change-status | Изменить статус отзывов|
|[**reviewAPIReviewCount**](#reviewapireviewcount) | **POST** /v1/review/count | Количество отзывов по статусам|
|[**reviewAPIReviewInfo**](#reviewapireviewinfo) | **POST** /v1/review/info | Получить информацию об отзыве|
|[**reviewAPIReviewList**](#reviewapireviewlist) | **POST** /v1/review/list | Получить список отзывов|

# **reviewAPICommentCreate**
> V1CommentCreateResponse reviewAPICommentCreate(v1CommentCreateRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1190-Metody-dlia-raboty-s-otzyvami) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    ReviewAPIApi,
    Configuration,
    V1CommentCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewAPIApi(configuration);

let v1CommentCreateRequest: V1CommentCreateRequest; //

const { status, data } = await apiInstance.reviewAPICommentCreate(
    v1CommentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CommentCreateRequest** | **V1CommentCreateRequest**|  | |


### Return type

**V1CommentCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Комментарий создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviewAPICommentDelete**
> object reviewAPICommentDelete(v1CommentDeleteRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1190-Metody-dlia-raboty-s-otzyvami) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    ReviewAPIApi,
    Configuration,
    V1CommentDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewAPIApi(configuration);

let v1CommentDeleteRequest: V1CommentDeleteRequest; //

const { status, data } = await apiInstance.reviewAPICommentDelete(
    v1CommentDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CommentDeleteRequest** | **V1CommentDeleteRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Комментарий удалён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviewAPICommentList**
> V1CommentListResponse reviewAPICommentList(v1CommentListRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1190-Metody-dlia-raboty-s-otzyvami) в сообществе разработчиков Ozon for dev.  Метод возвращает информацию по комментариям на отзывы, которые прошли модерацию. 

### Example

```typescript
import {
    ReviewAPIApi,
    Configuration,
    V1CommentListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewAPIApi(configuration);

let v1CommentListRequest: V1CommentListRequest; //

const { status, data } = await apiInstance.reviewAPICommentList(
    v1CommentListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CommentListRequest** | **V1CommentListRequest**|  | |


### Return type

**V1CommentListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о комментариях на отзыв |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviewAPIReviewChangeStatus**
> object reviewAPIReviewChangeStatus(v1ReviewChangeStatusRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1190-Metody-dlia-raboty-s-otzyvami) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    ReviewAPIApi,
    Configuration,
    V1ReviewChangeStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewAPIApi(configuration);

let v1ReviewChangeStatusRequest: V1ReviewChangeStatusRequest; //

const { status, data } = await apiInstance.reviewAPIReviewChangeStatus(
    v1ReviewChangeStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ReviewChangeStatusRequest** | **V1ReviewChangeStatusRequest**|  | |


### Return type

**object**

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

# **reviewAPIReviewCount**
> V1ReviewCountResponse reviewAPIReviewCount(body)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1190-Metody-dlia-raboty-s-otzyvami) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    ReviewAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewAPIApi(configuration);

let body: object; //

const { status, data } = await apiInstance.reviewAPIReviewCount(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1ReviewCountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество обработанных и необработанных отзывов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviewAPIReviewInfo**
> V1ReviewInfoResponse reviewAPIReviewInfo(v1ReviewInfoRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1190-Metody-dlia-raboty-s-otzyvami) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    ReviewAPIApi,
    Configuration,
    V1ReviewInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewAPIApi(configuration);

let v1ReviewInfoRequest: V1ReviewInfoRequest; //

const { status, data } = await apiInstance.reviewAPIReviewInfo(
    v1ReviewInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ReviewInfoRequest** | **V1ReviewInfoRequest**|  | |


### Return type

**V1ReviewInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об отзыве |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviewAPIReviewList**
> V1ReviewListResponse reviewAPIReviewList(v1ReviewListRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1190-Metody-dlia-raboty-s-otzyvami) в сообществе разработчиков Ozon for dev.  Метод не возвращает параметры «Достоинства» и «Недостатки», если они есть в отзывах на товар. Эти параметры устарели, в новых отзывах их нет. 

### Example

```typescript
import {
    ReviewAPIApi,
    Configuration,
    V1ReviewListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewAPIApi(configuration);

let v1ReviewListRequest: V1ReviewListRequest; //

const { status, data } = await apiInstance.reviewAPIReviewList(
    v1ReviewListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ReviewListRequest** | **V1ReviewListRequest**|  | |


### Return type

**V1ReviewListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отзывов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

