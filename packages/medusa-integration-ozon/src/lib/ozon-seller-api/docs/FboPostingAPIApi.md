# FboPostingAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postingAPIPostingCancel**](#postingapipostingcancel) | **POST** /v1/posting/cancel | Отменить отправление из заказа|
|[**postingAPIPostingCancelStatus**](#postingapipostingcancelstatus) | **POST** /v1/posting/cancel/status | Проверить статус отмены отправления|
|[**postingAPIPostingMarks**](#postingapipostingmarks) | **POST** /v1/posting/marks | Получить маркировки экземпляров из отправления|

# **postingAPIPostingCancel**
> V1PostingCancelResponse postingAPIPostingCancel(v1PostingCancelRequest)

Отменяет отправление из заказа. Используйте идентификатор причины отмены `reasons.id` из метода [/v1/cancel-reason/list-by-posting](#operation/CancelReasonAPI_CancelReasonListByPosting). 

### Example

```typescript
import {
    FboPostingAPIApi,
    Configuration,
    V1PostingCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboPostingAPIApi(configuration);

let v1PostingCancelRequest: V1PostingCancelRequest; //

const { status, data } = await apiInstance.postingAPIPostingCancel(
    v1PostingCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingCancelRequest** | **V1PostingCancelRequest**|  | |


### Return type

**V1PostingCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Сообщение со статусом отмены |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingCancelStatus**
> V1PostingCancelStatusResponse postingAPIPostingCancelStatus(v1PostingCancelStatusRequest)


### Example

```typescript
import {
    FboPostingAPIApi,
    Configuration,
    V1PostingCancelStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboPostingAPIApi(configuration);

let v1PostingCancelStatusRequest: V1PostingCancelStatusRequest; //

const { status, data } = await apiInstance.postingAPIPostingCancelStatus(
    v1PostingCancelStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingCancelStatusRequest** | **V1PostingCancelStatusRequest**|  | |


### Return type

**V1PostingCancelStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус отмены отправления |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingMarks**
> V1PostingMarksResponse postingAPIPostingMarks(v1PostingMarksRequest)

Возвращает статусы выдачи экземпляров и коды маркировки «Честный ЗНАК» для каждого отправления.  Укажите в чеке и выведите из оборота маркировки экземпляров из параметра `issued_exemplars` в ответе. 

### Example

```typescript
import {
    FboPostingAPIApi,
    Configuration,
    V1PostingMarksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboPostingAPIApi(configuration);

let v1PostingMarksRequest: V1PostingMarksRequest; //

const { status, data } = await apiInstance.postingAPIPostingMarks(
    v1PostingMarksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingMarksRequest** | **V1PostingMarksRequest**|  | |


### Return type

**V1PostingMarksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список экземпляров отправления с маркировками |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

