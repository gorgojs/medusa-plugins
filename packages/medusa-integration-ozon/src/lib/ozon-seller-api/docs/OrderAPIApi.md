# OrderAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**orderAPIOrderCancel**](#orderapiordercancel) | **POST** /v1/order/cancel | Отменить заказ|
|[**orderAPIOrderCancelCheck**](#orderapiordercancelcheck) | **POST** /v1/order/cancel/check | Проверить возможность отмены заказа|
|[**orderAPIOrderCancelStatus**](#orderapiordercancelstatus) | **POST** /v1/order/cancel/status | Получить статус отмены заказа|
|[**orderAPIOrderCreate**](#orderapiordercreate) | **POST** /v2/order/create | Создать заказ|

# **orderAPIOrderCancel**
> V1OrderCancelResponse orderAPIOrderCancel(v1OrderCancelRequest)

Отменяет заказ со всеми отправлениями. Используйте идентификатор причины отмены `reasons.id` из метода [/v1/cancel-reason/list-by-order](#operation/CancelReasonListByOrder). 

### Example

```typescript
import {
    OrderAPIApi,
    Configuration,
    V1OrderCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderAPIApi(configuration);

let v1OrderCancelRequest: V1OrderCancelRequest; //

const { status, data } = await apiInstance.orderAPIOrderCancel(
    v1OrderCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1OrderCancelRequest** | **V1OrderCancelRequest**|  | |


### Return type

**V1OrderCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заказ отменён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderAPIOrderCancelCheck**
> V1OrderCancelCheckResponse orderAPIOrderCancelCheck(v1OrderCancelCheckRequest)

Возвращает возможность отмены заказа для покупателя. 

### Example

```typescript
import {
    OrderAPIApi,
    Configuration,
    V1OrderCancelCheckRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderAPIApi(configuration);

let v1OrderCancelCheckRequest: V1OrderCancelCheckRequest; //

const { status, data } = await apiInstance.orderAPIOrderCancelCheck(
    v1OrderCancelCheckRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1OrderCancelCheckRequest** | **V1OrderCancelCheckRequest**|  | |


### Return type

**V1OrderCancelCheckResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат проверки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderAPIOrderCancelStatus**
> V1OrderCancelStatusResponse orderAPIOrderCancelStatus(v1OrderCancelStatusRequest)


### Example

```typescript
import {
    OrderAPIApi,
    Configuration,
    V1OrderCancelStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderAPIApi(configuration);

let v1OrderCancelStatusRequest: V1OrderCancelStatusRequest; //

const { status, data } = await apiInstance.orderAPIOrderCancelStatus(
    v1OrderCancelStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1OrderCancelStatusRequest** | **V1OrderCancelStatusRequest**|  | |


### Return type

**V1OrderCancelStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус отмены заказа |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderAPIOrderCreate**
> V1OrderCreateResponse orderAPIOrderCreate(v1OrderCreateRequest)

Создаёт заказ для покупателя и получателя в системе Ozon. Передайте вариант доставки из ответа метода [/v2/delivery/checkout](#operation/DeliveryCheckout).  В ответе могут быть не все отправления. Получите список всех отправлений по номеру заказа `order_number` методом: - [/v2/posting/fbo/list](#operation/PostingAPI_GetFboPostingList) — для схемы FBO; - [/v3/posting/fbs/list](#operation/PostingAPI_GetFbsPostingListV3) — для схемы FBS. 

### Example

```typescript
import {
    OrderAPIApi,
    Configuration,
    V1OrderCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderAPIApi(configuration);

let v1OrderCreateRequest: V1OrderCreateRequest; //

const { status, data } = await apiInstance.orderAPIOrderCreate(
    v1OrderCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1OrderCreateRequest** | **V1OrderCreateRequest**|  | |


### Return type

**V1OrderCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заказ создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

