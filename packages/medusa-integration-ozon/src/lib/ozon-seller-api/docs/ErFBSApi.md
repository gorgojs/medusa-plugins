# ErFBSApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**polygonBind**](#polygonbind) | **POST** /v2/polygon/bind | Связать метод доставки с полигоном|
|[**polygonDelete**](#polygondelete) | **POST** /v1/polygon/delete | Удалить полигон из области доставки|
|[**polygonList**](#polygonlist) | **POST** /v1/polygon/list | Получить список установленных полигонов на метод доставки|
|[**polygonTimeCoordinatesUpdate**](#polygontimecoordinatesupdate) | **POST** /v1/polygon/time/coordinates/update | Обновить координаты полигона доставки|
|[**polygonTimeSet**](#polygontimeset) | **POST** /v1/polygon/time/set | Установить новое время доставки в полигоне|
|[**warehouseERFBSAggregatorCreate**](#warehouseerfbsaggregatorcreate) | **POST** /v1/warehouse/erfbs/aggregator/create | Создать склад с методом доставки «Партнёры Ozon»|
|[**warehouseERFBSAggregatorDeliveryMethodUpdate**](#warehouseerfbsaggregatordeliverymethodupdate) | **POST** /v1/warehouse/erfbs/aggregator/delivery-method/update | Обновить метод доставки «Партнёры Ozon»|
|[**warehouseERFBSNonIntegratedCreate**](#warehouseerfbsnonintegratedcreate) | **POST** /v1/warehouse/erfbs/non-integrated/create | Создать склад с методом доставки «Вы или сторонняя служба»|
|[**warehouseERFBSNonIntegratedDeliveryMethodUpdate**](#warehouseerfbsnonintegrateddeliverymethodupdate) | **POST** /v1/warehouse/erfbs/non-integrated/delivery-method/update | Обновить метод доставки «Вы или сторонняя служба»|
|[**warehouseERFBSUpdate**](#warehouseerfbsupdate) | **POST** /v1/warehouse/erfbs/update | Обновить склад|

# **polygonBind**
> polygonBind()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V2PolygonBindRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2PolygonBindRequest: V2PolygonBindRequest; // (optional)

const { status, data } = await apiInstance.polygonBind(
    clientId,
    apiKey,
    v2PolygonBindRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2PolygonBindRequest** | **V2PolygonBindRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


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
|**200** | Успешно |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **polygonDelete**
> polygonDelete()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1PolygonDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PolygonDeleteRequest: V1PolygonDeleteRequest; // (optional)

const { status, data } = await apiInstance.polygonDelete(
    clientId,
    apiKey,
    v1PolygonDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PolygonDeleteRequest** | **V1PolygonDeleteRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


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
|**200** | Успешно |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **polygonList**
> V1PolygonListResponse polygonList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1PolygonListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PolygonListRequest: V1PolygonListRequest; // (optional)

const { status, data } = await apiInstance.polygonList(
    clientId,
    apiKey,
    v1PolygonListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PolygonListRequest** | **V1PolygonListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1PolygonListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список полигонов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **polygonTimeCoordinatesUpdate**
> polygonTimeCoordinatesUpdate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1PolygonTimeCoordinatesUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PolygonTimeCoordinatesUpdateRequest: V1PolygonTimeCoordinatesUpdateRequest; // (optional)

const { status, data } = await apiInstance.polygonTimeCoordinatesUpdate(
    clientId,
    apiKey,
    v1PolygonTimeCoordinatesUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PolygonTimeCoordinatesUpdateRequest** | **V1PolygonTimeCoordinatesUpdateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


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
|**200** | Успешно |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **polygonTimeSet**
> polygonTimeSet()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1PolygonTimeSetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PolygonTimeSetRequest: V1PolygonTimeSetRequest; // (optional)

const { status, data } = await apiInstance.polygonTimeSet(
    clientId,
    apiKey,
    v1PolygonTimeSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PolygonTimeSetRequest** | **V1PolygonTimeSetRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


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
|**200** | Успешно |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseERFBSAggregatorCreate**
> V1WarehouseERFBSAggregatorCreateResponse warehouseERFBSAggregatorCreate(v1WarehouseERFBSAggregatorCreateRequest)

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.  [Подробнее о схеме realFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express) 

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1WarehouseERFBSAggregatorCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseERFBSAggregatorCreateRequest: V1WarehouseERFBSAggregatorCreateRequest; //

const { status, data } = await apiInstance.warehouseERFBSAggregatorCreate(
    clientId,
    apiKey,
    v1WarehouseERFBSAggregatorCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseERFBSAggregatorCreateRequest** | **V1WarehouseERFBSAggregatorCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseERFBSAggregatorCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Склад создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseERFBSAggregatorDeliveryMethodUpdate**
> V1WarehouseERFBSAggregatorDeliveryMethodUpdateResponse warehouseERFBSAggregatorDeliveryMethodUpdate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.  [Подробнее о схеме rFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express) 

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest: V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest; // (optional)

const { status, data } = await apiInstance.warehouseERFBSAggregatorDeliveryMethodUpdate(
    clientId,
    apiKey,
    v1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest** | **V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseERFBSAggregatorDeliveryMethodUpdateResponse**

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

# **warehouseERFBSNonIntegratedCreate**
> V1WarehouseERFBSNonIntegratedCreateResponse warehouseERFBSNonIntegratedCreate(v1WarehouseERFBSNonIntegratedCreateRequest)

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.  [Подробнее о схеме realFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express) 

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1WarehouseERFBSNonIntegratedCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseERFBSNonIntegratedCreateRequest: V1WarehouseERFBSNonIntegratedCreateRequest; //

const { status, data } = await apiInstance.warehouseERFBSNonIntegratedCreate(
    clientId,
    apiKey,
    v1WarehouseERFBSNonIntegratedCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseERFBSNonIntegratedCreateRequest** | **V1WarehouseERFBSNonIntegratedCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseERFBSNonIntegratedCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Склад создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseERFBSNonIntegratedDeliveryMethodUpdate**
> V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateResponse warehouseERFBSNonIntegratedDeliveryMethodUpdate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.  [Подробнее о схеме rFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express) 

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest: V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest; // (optional)

const { status, data } = await apiInstance.warehouseERFBSNonIntegratedDeliveryMethodUpdate(
    clientId,
    apiKey,
    v1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest** | **V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateResponse**

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

# **warehouseERFBSUpdate**
> V1WarehouseERFBSUpdateResponse warehouseERFBSUpdate(v1WarehouseERFBSUpdateRequest)

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1765-Novye-metody-dlia-sozdaniia-i-upravleniia-rFBS-express-skladami/) в сообществе разработчиков Ozon for dev.  [Подробнее о схеме realFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express) 

### Example

```typescript
import {
    ErFBSApi,
    Configuration,
    V1WarehouseERFBSUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ErFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseERFBSUpdateRequest: V1WarehouseERFBSUpdateRequest; //

const { status, data } = await apiInstance.warehouseERFBSUpdate(
    clientId,
    apiKey,
    v1WarehouseERFBSUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseERFBSUpdateRequest** | **V1WarehouseERFBSUpdateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseERFBSUpdateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Склад обновлён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

