# SellerRatingApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ratingAPIRatingHistoryV1**](#ratingapiratinghistoryv1) | **POST** /v1/rating/history | Получить информацию о рейтингах продавца за период|
|[**ratingAPIRatingSummaryV1**](#ratingapiratingsummaryv1) | **POST** /v1/rating/summary | Получить информацию о текущих рейтингах продавца|

# **ratingAPIRatingHistoryV1**
> V1RatingHistoryV1Response ratingAPIRatingHistoryV1(v1RatingHistoryV1Request)

Информация о рейтингах за заданный период и с фильтром по нужному рейтингу. Соответствует разделу **Рейтинги → Рейтинги продавца** в личном кабинете. 

### Example

```typescript
import {
    SellerRatingApi,
    Configuration,
    V1RatingHistoryV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerRatingApi(configuration);

let v1RatingHistoryV1Request: V1RatingHistoryV1Request; //

const { status, data } = await apiInstance.ratingAPIRatingHistoryV1(
    v1RatingHistoryV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1RatingHistoryV1Request** | **V1RatingHistoryV1Request**|  | |


### Return type

**V1RatingHistoryV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о рейтингах |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ratingAPIRatingSummaryV1**
> V1RatingSummaryV1Response ratingAPIRatingSummaryV1(body)

Рейтинг продавца по следующим показателям: индекс цен, доставки вовремя, процент отмен, жалобы и другие. Соответствует разделу **Рейтинги → Рейтинги продавца** в личном кабинете. 

### Example

```typescript
import {
    SellerRatingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerRatingApi(configuration);

let body: object; //

const { status, data } = await apiInstance.ratingAPIRatingSummaryV1(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1RatingSummaryV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о рейтингах |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

