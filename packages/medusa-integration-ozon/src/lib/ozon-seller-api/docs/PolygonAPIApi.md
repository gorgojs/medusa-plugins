# PolygonAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**polygonAPIBindPolygon**](#polygonapibindpolygon) | **POST** /v1/polygon/bind | Свяжите метод доставки с полигоном доставки|
|[**polygonAPICreatePolygon**](#polygonapicreatepolygon) | **POST** /v1/polygon/create | Создайте полигон доставки|

# **polygonAPIBindPolygon**
> object polygonAPIBindPolygon(polygonv1PolygonBindRequest)


### Example

```typescript
import {
    PolygonAPIApi,
    Configuration,
    Polygonv1PolygonBindRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PolygonAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let polygonv1PolygonBindRequest: Polygonv1PolygonBindRequest; //

const { status, data } = await apiInstance.polygonAPIBindPolygon(
    clientId,
    apiKey,
    polygonv1PolygonBindRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **polygonv1PolygonBindRequest** | **Polygonv1PolygonBindRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


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
|**200** | Успешно |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **polygonAPICreatePolygon**
> Polygonv1PolygonCreateResponse polygonAPICreatePolygon(polygonv1PolygonCreateRequest)

Вы можете добавить полигон к методу доставки.  Создайте полигон, получив его координаты на https://geojson.io: отметьте на карте минимум 3 точки и соедините их линиями. 

### Example

```typescript
import {
    PolygonAPIApi,
    Configuration,
    Polygonv1PolygonCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PolygonAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let polygonv1PolygonCreateRequest: Polygonv1PolygonCreateRequest; //

const { status, data } = await apiInstance.polygonAPICreatePolygon(
    clientId,
    apiKey,
    polygonv1PolygonCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **polygonv1PolygonCreateRequest** | **Polygonv1PolygonCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Polygonv1PolygonCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Полигон создан |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

