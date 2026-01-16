# OrderDocsApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getLabels**](#getlabels) | **POST** /orders/labels | Получение ярлыков для заказов|
|[**getWaybills**](#getwaybills) | **POST** /orders/waybills | Получение актов приема-передачи заказов|

# **getLabels**
> GetLabels200Response getLabels()

Получение ярлыков для заказов

### Example

```typescript
import {
    OrderDocsApi,
    Configuration,
    LabelsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDocsApi(configuration);

let labelsRequest: LabelsRequest; //Объект типа LabelsRequest (optional)

const { status, data } = await apiInstance.getLabels(
    labelsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **labelsRequest** | **LabelsRequest**| Объект типа LabelsRequest | |


### Return type

**GetLabels200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWaybills**
> GetWaybills200Response getWaybills()

Получение актов приема-передачи заказов

### Example

```typescript
import {
    OrderDocsApi,
    Configuration,
    DocumentsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDocsApi(configuration);

let documentsRequest: DocumentsRequest; //Объект типа DocumentsRequest (optional)

const { status, data } = await apiInstance.getWaybills(
    documentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentsRequest** | **DocumentsRequest**| Объект типа DocumentsRequest | |


### Return type

**GetWaybills200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

