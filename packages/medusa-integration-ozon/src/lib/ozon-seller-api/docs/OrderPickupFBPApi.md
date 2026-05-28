# OrderPickupFBPApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpAPIFbpOrderPickUpCancel**](#fbpapifbporderpickupcancel) | **POST** /v1/fbp/order/pick-up/cancel | Отменить pick-up поставку|
|[**fbpAPIFbpOrderPickUpDlvEdit**](#fbpapifbporderpickupdlvedit) | **POST** /v1/fbp/order/pick-up/dlv/edit | Изменить данные о точке забора|

# **fbpAPIFbpOrderPickUpCancel**
> V1FbpOrderPickUpCancelResponse fbpAPIFbpOrderPickUpCancel(v1FbpOrderPickUpCancelRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    OrderPickupFBPApi,
    Configuration,
    V1FbpOrderPickUpCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderPickupFBPApi(configuration);

let v1FbpOrderPickUpCancelRequest: V1FbpOrderPickUpCancelRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderPickUpCancel(
    v1FbpOrderPickUpCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderPickUpCancelRequest** | **V1FbpOrderPickUpCancelRequest**|  | |


### Return type

**V1FbpOrderPickUpCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус отмены |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpOrderPickUpDlvEdit**
> V1FbpOrderPickUpDlvEditResponse fbpAPIFbpOrderPickUpDlvEdit(v1FbpOrderPickUpDlvEditRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    OrderPickupFBPApi,
    Configuration,
    V1FbpOrderPickUpDlvEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderPickupFBPApi(configuration);

let v1FbpOrderPickUpDlvEditRequest: V1FbpOrderPickUpDlvEditRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderPickUpDlvEdit(
    v1FbpOrderPickUpDlvEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderPickUpDlvEditRequest** | **V1FbpOrderPickUpDlvEditRequest**|  | |


### Return type

**V1FbpOrderPickUpDlvEditResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус изменения |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

