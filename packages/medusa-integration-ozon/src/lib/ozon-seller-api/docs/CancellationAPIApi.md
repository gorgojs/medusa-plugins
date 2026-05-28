# CancellationAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancellationAPIConditionalCancellationApproveV2**](#cancellationapiconditionalcancellationapprovev2) | **POST** /v2/conditional-cancellation/approve | Подтвердить заявку на отмену rFBS|
|[**cancellationAPIConditionalCancellationRejectV2**](#cancellationapiconditionalcancellationrejectv2) | **POST** /v2/conditional-cancellation/reject | Отклонить заявку на отмену rFBS|
|[**cancellationAPIGetConditionalCancellationListV2**](#cancellationapigetconditionalcancellationlistv2) | **POST** /v2/conditional-cancellation/list | Получить список заявок на отмену rFBS|

# **cancellationAPIConditionalCancellationApproveV2**
> cancellationAPIConditionalCancellationApproveV2(v2ConditionalCancellationMoveV2Request)

Метод позволяет согласовать заявку на отмену в статусе `ON_APPROVAL`. Заказ будет отменён, а деньги вернутся покупателю.

### Example

```typescript
import {
    CancellationAPIApi,
    Configuration,
    V2ConditionalCancellationMoveV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CancellationAPIApi(configuration);

let v2ConditionalCancellationMoveV2Request: V2ConditionalCancellationMoveV2Request; //

const { status, data } = await apiInstance.cancellationAPIConditionalCancellationApproveV2(
    v2ConditionalCancellationMoveV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ConditionalCancellationMoveV2Request** | **V2ConditionalCancellationMoveV2Request**|  | |


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
|**200** | Заявка подтверждена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancellationAPIConditionalCancellationRejectV2**
> cancellationAPIConditionalCancellationRejectV2(v2ConditionalCancellationMoveV2Request)

Метод позволяет отклонить заявку на отмену в статусе `ON_APPROVAL`. В параметре `comment` опишите причину. Заказ останется в том же статусе, и его нужно будет доставить покупателю.

### Example

```typescript
import {
    CancellationAPIApi,
    Configuration,
    V2ConditionalCancellationMoveV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CancellationAPIApi(configuration);

let v2ConditionalCancellationMoveV2Request: V2ConditionalCancellationMoveV2Request; //

const { status, data } = await apiInstance.cancellationAPIConditionalCancellationRejectV2(
    v2ConditionalCancellationMoveV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ConditionalCancellationMoveV2Request** | **V2ConditionalCancellationMoveV2Request**|  | |


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
|**200** | Заявка отклонена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancellationAPIGetConditionalCancellationListV2**
> V2GetConditionalCancellationListV2Response cancellationAPIGetConditionalCancellationListV2(v2GetConditionalCancellationListV2Request)

Метод для получения списка заявок на отмену rFBS-заказов.

### Example

```typescript
import {
    CancellationAPIApi,
    Configuration,
    V2GetConditionalCancellationListV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CancellationAPIApi(configuration);

let v2GetConditionalCancellationListV2Request: V2GetConditionalCancellationListV2Request; //

const { status, data } = await apiInstance.cancellationAPIGetConditionalCancellationListV2(
    v2GetConditionalCancellationListV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2GetConditionalCancellationListV2Request** | **V2GetConditionalCancellationListV2Request**|  | |


### Return type

**V2GetConditionalCancellationListV2Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список заявок на отмену |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

