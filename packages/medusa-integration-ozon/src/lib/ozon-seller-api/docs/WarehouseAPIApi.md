# WarehouseAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**warehouseAPIDeliveryMethodList**](#warehouseapideliverymethodlist) | **POST** /v1/delivery-method/list | Список методов доставки склада|
|[**warehouseAPIWarehouseList**](#warehouseapiwarehouselist) | **POST** /v1/warehouse/list | Список складов|

# **warehouseAPIDeliveryMethodList**
> WarehouseDeliveryMethodListResponse warehouseAPIDeliveryMethodList(warehouseDeliveryMethodListRequest)

<aside class=\"warning\">   Метод устаревает и будет отключён в будущем. Переключитесь на <a href=\"#operation/WarehouseAPI_DeliveryMethodListV2\">/v2/delivery-method/list</a>. </aside> 

### Example

```typescript
import {
    WarehouseAPIApi,
    Configuration,
    WarehouseDeliveryMethodListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let warehouseDeliveryMethodListRequest: WarehouseDeliveryMethodListRequest; //

const { status, data } = await apiInstance.warehouseAPIDeliveryMethodList(
    clientId,
    apiKey,
    warehouseDeliveryMethodListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseDeliveryMethodListRequest** | **WarehouseDeliveryMethodListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**WarehouseDeliveryMethodListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список методов склада |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseAPIWarehouseList**
> WarehouseWarehouseListResponse warehouseAPIWarehouseList(v1WarehouseListRequest)

Возвращает список складов FBS и rFBS. Чтобы получить список складов FBO, используйте метод [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList).  Метод можно использовать 1 раз в минуту. 

### Example

```typescript
import {
    WarehouseAPIApi,
    Configuration,
    V1WarehouseListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseListRequest: V1WarehouseListRequest; //

const { status, data } = await apiInstance.warehouseAPIWarehouseList(
    clientId,
    apiKey,
    v1WarehouseListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseListRequest** | **V1WarehouseListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**WarehouseWarehouseListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

