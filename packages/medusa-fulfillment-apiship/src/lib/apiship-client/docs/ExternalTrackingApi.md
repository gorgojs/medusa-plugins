# ExternalTrackingApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**externalTrackingOrdersOrderIdDelete**](#externaltrackingordersorderiddelete) | **DELETE** /externalTracking/orders/{orderId} | Удаление трекинга заказа|
|[**externalTrackingOrdersPost**](#externaltrackingorderspost) | **POST** /externalTracking/orders | Трекинг внешних заказов|

# **externalTrackingOrdersOrderIdDelete**
> ExternalTrackingDeleteOrderResponse externalTrackingOrdersOrderIdDelete()

Удаление трекинга заказа

### Example

```typescript
import {
    ExternalTrackingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalTrackingApi(configuration);

let orderId: string; //ID трекинга (default to undefined)

const { status, data } = await apiInstance.externalTrackingOrdersOrderIdDelete(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] | ID трекинга | defaults to undefined|


### Return type

**ExternalTrackingDeleteOrderResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **externalTrackingOrdersPost**
> Array<ExternalTrackingOrderResponseInner> externalTrackingOrdersPost(externalTrackingOrdersRequestInner)

Отслеживание заказов, созданных не через ApiShip. Поддерживаемые службы доставки: 5POST, Boxberry, BXB, КСЭ, Logsis,Major Express, Почта России

### Example

```typescript
import {
    ExternalTrackingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExternalTrackingApi(configuration);

let externalTrackingOrdersRequestInner: Array<ExternalTrackingOrdersRequestInner>; //Объект типа

const { status, data } = await apiInstance.externalTrackingOrdersPost(
    externalTrackingOrdersRequestInner
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalTrackingOrdersRequestInner** | **Array<ExternalTrackingOrdersRequestInner>**| Объект типа | |


### Return type

**Array<ExternalTrackingOrderResponseInner>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

