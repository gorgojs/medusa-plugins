# FBOApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postingAPIGetFboPosting**](#postingapigetfboposting) | **POST** /v2/posting/fbo/get | Информация об отправлении|
|[**postingAPIGetFboPostingList**](#postingapigetfbopostinglist) | **POST** /v2/posting/fbo/list | Список отправлений|
|[**postingAPIGetPostingFboCancelReasonList**](#postingapigetpostingfbocancelreasonlist) | **POST** /v1/posting/fbo/cancel-reason/list | Причины отмены отправлений по схеме FBO|
|[**supplierAPISupplierAvailableWarehouses**](#supplierapisupplieravailablewarehouses) | **GET** /v1/supplier/available_warehouses | Загруженность складов Ozon|
|[**supplyOrderAPIGetSupplyOrderTimeslotStatus**](#supplyorderapigetsupplyordertimeslotstatus) | **POST** /v1/supply-order/timeslot/status | Статус интервала поставки|
|[**supplyOrderAPIGetSupplyOrderTimeslots**](#supplyorderapigetsupplyordertimeslots) | **POST** /v1/supply-order/timeslot/get | Интервалы поставки|
|[**supplyOrderAPISupplyOrderPassCreate**](#supplyorderapisupplyorderpasscreate) | **POST** /v1/supply-order/pass/create | Указать данные о водителе и автомобиле|
|[**supplyOrderAPISupplyOrderPassStatus**](#supplyorderapisupplyorderpassstatus) | **POST** /v1/supply-order/pass/status | Статус ввода данных о водителе и автомобиле|
|[**supplyOrderAPISupplyOrderStatusCounter**](#supplyorderapisupplyorderstatuscounter) | **POST** /v1/supply-order/status/counter | Количество заявок по статусам|
|[**supplyOrderAPIUpdateSupplyOrderTimeslot**](#supplyorderapiupdatesupplyordertimeslot) | **POST** /v1/supply-order/timeslot/update | Обновить интервал поставки|
|[**supplyOrderBundle**](#supplyorderbundle) | **POST** /v1/supply-order/bundle | Состав поставки или заявки на поставку|
|[**supplyOrderGet**](#supplyorderget) | **POST** /v3/supply-order/get | Информация о заявке на поставку|
|[**supplyOrderList**](#supplyorderlist) | **POST** /v3/supply-order/list | Список заявок на поставку на склад Ozon|

# **postingAPIGetFboPosting**
> V2FboPostingResponse postingAPIGetFboPosting(postingGetFboPostingRequest)

Возвращает информацию об отправлении по его идентификатору.

### Example

```typescript
import {
    FBOApi,
    Configuration,
    PostingGetFboPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingGetFboPostingRequest: PostingGetFboPostingRequest; //

const { status, data } = await apiInstance.postingAPIGetFboPosting(
    clientId,
    apiKey,
    postingGetFboPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingGetFboPostingRequest** | **PostingGetFboPostingRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2FboPostingResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об отправлении |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetFboPostingList**
> V2FboPostingListResponse postingAPIGetFboPostingList(postingGetFboPostingListRequest)

Возвращает список отправлений за указанный период времени.  Если период больше года, вернётся ошибка `PERIOD_IS_TOO_LONG`.    Дополнительно можно отфильтровать отправления по их статусу. 

### Example

```typescript
import {
    FBOApi,
    Configuration,
    PostingGetFboPostingListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingGetFboPostingListRequest: PostingGetFboPostingListRequest; //

const { status, data } = await apiInstance.postingAPIGetFboPostingList(
    clientId,
    apiKey,
    postingGetFboPostingListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingGetFboPostingListRequest** | **PostingGetFboPostingListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2FboPostingListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отправлений |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetPostingFboCancelReasonList**
> V1CancelReasonListResponseFbo postingAPIGetPostingFboCancelReasonList()

Возвращает список причин отмены для всех FBO-отправлений.

### Example

```typescript
import {
    FBOApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.postingAPIGetPostingFboCancelReasonList(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CancelReasonListResponseFbo**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Причины отмены отправлений |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplierAPISupplierAvailableWarehouses**
> V1SupplierAvailableWarehousesResponse supplierAPISupplierAvailableWarehouses()

Метод возвращает список активных складов Ozon с информацией об их средней загруженности на ближайшее время.

### Example

```typescript
import {
    FBOApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.supplierAPISupplierAvailableWarehouses(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SupplierAvailableWarehousesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о загруженности складов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPIGetSupplyOrderTimeslotStatus**
> V1GetSupplyOrderTimeslotStatusResponse supplyOrderAPIGetSupplyOrderTimeslotStatus(v1GetSupplyOrderTimeslotStatusRequest)


### Example

```typescript
import {
    FBOApi,
    Configuration,
    V1GetSupplyOrderTimeslotStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetSupplyOrderTimeslotStatusRequest: V1GetSupplyOrderTimeslotStatusRequest; //

const { status, data } = await apiInstance.supplyOrderAPIGetSupplyOrderTimeslotStatus(
    clientId,
    apiKey,
    v1GetSupplyOrderTimeslotStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetSupplyOrderTimeslotStatusRequest** | **V1GetSupplyOrderTimeslotStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetSupplyOrderTimeslotStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус данных |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPIGetSupplyOrderTimeslots**
> V1GetSupplyOrderTimeslotsResponse supplyOrderAPIGetSupplyOrderTimeslots(v1GetSupplyOrderTimeslotsRequest)


### Example

```typescript
import {
    FBOApi,
    Configuration,
    V1GetSupplyOrderTimeslotsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetSupplyOrderTimeslotsRequest: V1GetSupplyOrderTimeslotsRequest; //

const { status, data } = await apiInstance.supplyOrderAPIGetSupplyOrderTimeslots(
    clientId,
    apiKey,
    v1GetSupplyOrderTimeslotsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetSupplyOrderTimeslotsRequest** | **V1GetSupplyOrderTimeslotsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetSupplyOrderTimeslotsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список интервалов поставки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderPassCreate**
> V1SupplyOrderPassCreateResponse supplyOrderAPISupplyOrderPassCreate(v1SupplyOrderPassCreateRequest)


### Example

```typescript
import {
    FBOApi,
    Configuration,
    V1SupplyOrderPassCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SupplyOrderPassCreateRequest: V1SupplyOrderPassCreateRequest; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderPassCreate(
    clientId,
    apiKey,
    v1SupplyOrderPassCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderPassCreateRequest** | **V1SupplyOrderPassCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SupplyOrderPassCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Данные указаны |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderPassStatus**
> V1SupplyOrderPassStatusResponse supplyOrderAPISupplyOrderPassStatus(v1SupplyOrderPassStatusRequest)


### Example

```typescript
import {
    FBOApi,
    Configuration,
    V1SupplyOrderPassStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SupplyOrderPassStatusRequest: V1SupplyOrderPassStatusRequest; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderPassStatus(
    clientId,
    apiKey,
    v1SupplyOrderPassStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderPassStatusRequest** | **V1SupplyOrderPassStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SupplyOrderPassStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderStatusCounter**
> V1SupplyOrderStatusCounterResponse supplyOrderAPISupplyOrderStatusCounter(body)

Возвращает количество заявок в конкретном статусе.

### Example

```typescript
import {
    FBOApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderStatusCounter(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SupplyOrderStatusCounterResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус заявки и количество заявок в этом статусе |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPIUpdateSupplyOrderTimeslot**
> V1UpdateSupplyOrderTimeslotResponse supplyOrderAPIUpdateSupplyOrderTimeslot(v1UpdateSupplyOrderTimeslotRequest)


### Example

```typescript
import {
    FBOApi,
    Configuration,
    V1UpdateSupplyOrderTimeslotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1UpdateSupplyOrderTimeslotRequest: V1UpdateSupplyOrderTimeslotRequest; //

const { status, data } = await apiInstance.supplyOrderAPIUpdateSupplyOrderTimeslot(
    clientId,
    apiKey,
    v1UpdateSupplyOrderTimeslotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1UpdateSupplyOrderTimeslotRequest** | **V1UpdateSupplyOrderTimeslotRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1UpdateSupplyOrderTimeslotResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Интервал обновлён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderBundle**
> V1GetSupplyOrderBundleResponse supplyOrderBundle(v1GetSupplyOrderBundleRequest)

Используйте метод, чтобы получить товарный состав поставки или черновика заявки на поставку. Одним вызовом метода можно получить состав одной поставки или черновика заявки. 

### Example

```typescript
import {
    FBOApi,
    Configuration,
    V1GetSupplyOrderBundleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let v1GetSupplyOrderBundleRequest: V1GetSupplyOrderBundleRequest; //

const { status, data } = await apiInstance.supplyOrderBundle(
    v1GetSupplyOrderBundleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetSupplyOrderBundleRequest** | **V1GetSupplyOrderBundleRequest**|  | |


### Return type

**V1GetSupplyOrderBundleResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Состав поставки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderGet**
> V3SupplyOrderGetResponse supplyOrderGet()

Учитываются заявки с поставкой на конкретный склад и через [виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).

### Example

```typescript
import {
    FBOApi,
    Configuration,
    V3SupplyOrderGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let v3SupplyOrderGetRequest: V3SupplyOrderGetRequest; // (optional)

const { status, data } = await apiInstance.supplyOrderGet(
    v3SupplyOrderGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3SupplyOrderGetRequest** | **V3SupplyOrderGetRequest**|  | |


### Return type

**V3SupplyOrderGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о заявке |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderList**
> V3SupplyOrderListResponse supplyOrderList()

Учитываются заявки с поставкой на конкретный склад и через [виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).

### Example

```typescript
import {
    FBOApi,
    Configuration,
    V3SupplyOrderListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBOApi(configuration);

let v3SupplyOrderListRequest: V3SupplyOrderListRequest; // (optional)

const { status, data } = await apiInstance.supplyOrderList(
    v3SupplyOrderListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3SupplyOrderListRequest** | **V3SupplyOrderListRequest**|  | |


### Return type

**V3SupplyOrderListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список заявок на поставку |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

