# DeliveryAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deliveryAPIDeliveryPointList**](#deliveryapideliverypointlist) | **POST** /v1/delivery/point/list | Получить список точек самовывоза|
|[**deliveryCheck**](#deliverycheck) | **POST** /v1/delivery/check | Проверить доступность доставки для покупателя|
|[**deliveryCheckout**](#deliverycheckout) | **POST** /v2/delivery/checkout | Получить доступные варианты доставки|
|[**deliveryMap**](#deliverymap) | **POST** /v1/delivery/map | Отрисовать точки на карте|
|[**deliveryPointInfo**](#deliverypointinfo) | **POST** /v1/delivery/point/info | Получить информацию о точке самовывоза|

# **deliveryAPIDeliveryPointList**
> V1DeliveryPointListResponse deliveryAPIDeliveryPointList()

Возвращает координаты всех точек самовывоза без объединения в кластеры. 

### Example

```typescript
import {
    DeliveryAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryAPIApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.deliveryAPIDeliveryPointList(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1DeliveryPointListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список точек самовывоза |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryCheck**
> V1DeliveryCheckResponse deliveryCheck()

Проверяет доступность доставки Ozon для покупателя. Не учитывает ограничения по сумме покупки, категории товаров и географии. 

### Example

```typescript
import {
    DeliveryAPIApi,
    Configuration,
    V1DeliveryCheckRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryAPIApi(configuration);

let v1DeliveryCheckRequest: V1DeliveryCheckRequest; // (optional)

const { status, data } = await apiInstance.deliveryCheck(
    v1DeliveryCheckRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DeliveryCheckRequest** | **V1DeliveryCheckRequest**|  | |


### Return type

**V1DeliveryCheckResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Успешно |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryCheckout**
> V1DeliveryCheckoutResponse deliveryCheckout(v1DeliveryCheckoutRequest)

Проверяет доступность доставки товаров на указанный адрес или в точку выдачи и отображает сроки доставки.  Проверяйте наличие товаров и маршруты во время оформления заказа, чтобы точно рассчитать сроки доставки. 

### Example

```typescript
import {
    DeliveryAPIApi,
    Configuration,
    V1DeliveryCheckoutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryAPIApi(configuration);

let v1DeliveryCheckoutRequest: V1DeliveryCheckoutRequest; //

const { status, data } = await apiInstance.deliveryCheckout(
    v1DeliveryCheckoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DeliveryCheckoutRequest** | **V1DeliveryCheckoutRequest**|  | |


### Return type

**V1DeliveryCheckoutResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Успешно |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryMap**
> V1DeliveryMapResponse deliveryMap()

Возвращает объединённые кластеры точек самовывоза на области из параметра `viewport`.   Используйте значения из параметра `clusters.viewport`, чтобы получить список точек или мелких кластеров внутри большого кластера.  Используйте метод [/v1/delivery/point/info](#operation/DeliveryPointInfo), чтобы получить информацию о конкретной точке самовывоза. 

### Example

```typescript
import {
    DeliveryAPIApi,
    Configuration,
    V1DeliveryMapRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryAPIApi(configuration);

let v1DeliveryMapRequest: V1DeliveryMapRequest; // (optional)

const { status, data } = await apiInstance.deliveryMap(
    v1DeliveryMapRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DeliveryMapRequest** | **V1DeliveryMapRequest**|  | |


### Return type

**V1DeliveryMapResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Успешно |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deliveryPointInfo**
> V1DeliveryPointInfoResponse deliveryPointInfo()

Возвращает подробную информацию о точке самовывоза для пользователя. 

### Example

```typescript
import {
    DeliveryAPIApi,
    Configuration,
    V1DeliveryPointInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryAPIApi(configuration);

let v1DeliveryPointInfoRequest: V1DeliveryPointInfoRequest; // (optional)

const { status, data } = await apiInstance.deliveryPointInfo(
    v1DeliveryPointInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DeliveryPointInfoRequest** | **V1DeliveryPointInfoRequest**|  | |


### Return type

**V1DeliveryPointInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о точке самовывоза |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

