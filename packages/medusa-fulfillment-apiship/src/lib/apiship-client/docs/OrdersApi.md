# OrdersApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addOrder**](#addorder) | **POST** /orders | Создание заказа|
|[**addReturnOrder**](#addreturnorder) | **POST** /orders/return | Создание заказа на возврат (клиентский возврат)|
|[**addSyncOrder**](#addsyncorder) | **POST** /orders/sync | Создание синхронного заказа|
|[**cancelOrder**](#cancelorder) | **GET** /orders/{orderId}/cancel | Отмена заказа|
|[**deleteOrder**](#deleteorder) | **DELETE** /orders/{orderId} | Удаление заказа|
|[**getOrderInfo**](#getorderinfo) | **GET** /orders/{orderId} | Получение информации по заказу|
|[**ordersOrderIdCodeGet**](#ordersorderidcodeget) | **GET** /orders/{orderId}/code | Получение кода подтверждения|
|[**ordersOrderIdCourierGet**](#ordersorderidcourierget) | **GET** /orders/{orderId}/courier | Получение информации о курьере|
|[**resend**](#resend) | **POST** /orders/{orderId}/resend | Повторная отправка заказа в СД|
|[**updateOrder**](#updateorder) | **PUT** /orders/{orderId} | Изменение заказа|
|[**updateOrderItems**](#updateorderitems) | **POST** /orders/{orderId}/items | Обновление товаров заказа|
|[**uploadOrders**](#uploadorders) | **POST** /orders/upload | Загрузка xlsx файла c данными о заказах|
|[**validateOrder**](#validateorder) | **POST** /orders/validate | Валидация заказа|

# **addOrder**
> OrderResponse addOrder()

Создание заказа в системе

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let platform: string; //ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! (optional) (default to undefined)
let orderRequest: OrderRequest; //Объект типа OrderRequest (optional)

const { status, data } = await apiInstance.addOrder(
    platform,
    orderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**| Объект типа OrderRequest | |
| **platform** | [**string**] | ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! | (optional) defaults to undefined|


### Return type

**OrderResponse**

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

# **addReturnOrder**
> OrderSyncResponse addReturnOrder()

Если по каким-то причинам товар не подошёл получателю, эта услуга легко позволит вернуть его отправителю. На данный момент поддерживается клиентский возврат для СДЕК, Почты России, E-Bulky и 5Post.

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderReturnRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderReturnRequest: OrderReturnRequest; //Объект типа OrderReturnRequest (optional)

const { status, data } = await apiInstance.addReturnOrder(
    orderReturnRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderReturnRequest** | **OrderReturnRequest**| Объект типа OrderReturnRequest | |


### Return type

**OrderSyncResponse**

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

# **addSyncOrder**
> OrderSyncResponse addSyncOrder()

Создание синхронного заказа в системе

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let platform: string; //ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! (optional) (default to undefined)
let orderRequest: OrderRequest; //Объект типа OrderRequest (optional)

const { status, data } = await apiInstance.addSyncOrder(
    platform,
    orderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**| Объект типа OrderRequest | |
| **platform** | [**string**] | ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! | (optional) defaults to undefined|


### Return type

**OrderSyncResponse**

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

# **cancelOrder**
> CancelOrderResponse cancelOrder()

Данный метод пытается удалить или отменить заказа из системы провайдера.

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа, который необходимо отменить (default to undefined)

const { status, data } = await apiInstance.cancelOrder(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | ID заказа, который необходимо отменить | defaults to undefined|


### Return type

**CancelOrderResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOrder**
> DeleteOrderResponse deleteOrder()

Помечает заказ удаленным. Данный метод не удаляет заказ из системы провайдера и не отменяет его. **В случае со СДЭК, заказ удаляется и из системы службы доставки.**

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа, который необходимо удалить (default to undefined)

const { status, data } = await apiInstance.deleteOrder(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | ID заказа, который необходимо удалить | defaults to undefined|


### Return type

**DeleteOrderResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderInfo**
> OrderInfoResponse getOrderInfo()

Получает информацию по заказу

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа (default to undefined)

const { status, data } = await apiInstance.getOrderInfo(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | ID заказа | defaults to undefined|


### Return type

**OrderInfoResponse**

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

# **ordersOrderIdCodeGet**
> PlacementCodeResponse ordersOrderIdCodeGet()

Получения кода подтверждения

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа (default to undefined)

const { status, data } = await apiInstance.ordersOrderIdCodeGet(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | ID заказа | defaults to undefined|


### Return type

**PlacementCodeResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersOrderIdCourierGet**
> OrderCourierResponse ordersOrderIdCourierGet()

Получение информации о курьере, назначенном на заказ

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа (default to undefined)

const { status, data } = await apiInstance.ordersOrderIdCourierGet(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | ID заказа | defaults to undefined|


### Return type

**OrderCourierResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend**
> OrderResponse resend()

Повторно отправляет заказ в СД

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа (default to undefined)

const { status, data } = await apiInstance.resend(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | ID заказа | defaults to undefined|


### Return type

**OrderResponse**

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

# **updateOrder**
> SuccessResponse updateOrder()

Изменение заказа в системе

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа, который необходимо изменить (default to undefined)
let platform: string; //ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! (optional) (default to undefined)
let orderRequest: OrderRequest; //Объект типа OrderRequest (optional)

const { status, data } = await apiInstance.updateOrder(
    orderId,
    platform,
    orderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**| Объект типа OrderRequest | |
| **orderId** | [**number**] | ID заказа, который необходимо изменить | defaults to undefined|
| **platform** | [**string**] | ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **updateOrderItems**
> SuccessResponse updateOrderItems()

Обновление доступно, если у заказа указано только 1 место, либо товары переданы в items заказа

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    UpdateOrderItemsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderId: number; //ID заказа (default to undefined)
let platform: string; //ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! (optional) (default to undefined)
let updateOrderItemsRequest: UpdateOrderItemsRequest; //Объект типа UpdateOrderItemsRequest (optional)

const { status, data } = await apiInstance.updateOrderItems(
    orderId,
    platform,
    updateOrderItemsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderItemsRequest** | **UpdateOrderItemsRequest**| Объект типа UpdateOrderItemsRequest | |
| **orderId** | [**number**] | ID заказа | defaults to undefined|
| **platform** | [**string**] | ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **uploadOrders**
> OrderUploadResponse uploadOrders()

Загрузка xlsx файла c данными о заказах

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrdersUploadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let ordersUploadRequest: OrdersUploadRequest; //Объект типа OrderRequest (optional)

const { status, data } = await apiInstance.uploadOrders(
    ordersUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordersUploadRequest** | **OrdersUploadRequest**| Объект типа OrderRequest | |


### Return type

**OrderUploadResponse**

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

# **validateOrder**
> ValidateOrderResponse validateOrder()

Валидация заказа в системе без отправки в Службу Доставки

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let platform: string; //ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! (optional) (default to undefined)
let orderRequest: OrderRequest; //Объект типа OrderRequest (optional)

const { status, data } = await apiInstance.validateOrder(
    platform,
    orderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**| Объект типа OrderRequest | |
| **platform** | [**string**] | ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно! | (optional) defaults to undefined|


### Return type

**ValidateOrderResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | valid:true или сообщение об ошибках |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

