# FBSWarehouseAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**archiveWarehouseFBS**](#archivewarehousefbs) | **POST** /v1/warehouse/archive | Перенести склад в архив|
|[**getWarehouseFBSOperationStatus**](#getwarehousefbsoperationstatus) | **POST** /v1/warehouse/operation/status | Получить статус операции|
|[**unarchiveWarehouseFBS**](#unarchivewarehousefbs) | **POST** /v1/warehouse/unarchive | Перенести склад из архива|
|[**updateWarehouseFBS**](#updatewarehousefbs) | **POST** /v1/warehouse/fbs/update | Обновить склад|
|[**updateWarehouseFBSFirstMile**](#updatewarehousefbsfirstmile) | **POST** /v1/warehouse/fbs/first-mile/update | Обновить первую милю|
|[**warehouseAPICreateWarehouseFBS**](#warehouseapicreatewarehousefbs) | **POST** /v1/warehouse/fbs/create | Создать склад|
|[**warehouseAPIListDropOffPointsForCreateFBSWarehouse**](#warehouseapilistdropoffpointsforcreatefbswarehouse) | **POST** /v1/warehouse/fbs/create/drop-off/list | Получить список drop-off пунктов для создания склада|
|[**warehouseAPIListDropOffPointsForUpdateFBSWarehouse**](#warehouseapilistdropoffpointsforupdatefbswarehouse) | **POST** /v1/warehouse/fbs/update/drop-off/list | Получить список drop-off пунктов для изменения информации склада|
|[**warehouseFBSCreateReturnPointList**](#warehousefbscreatereturnpointlist) | **POST** /v1/warehouse/fbs/create/return-point/list | Получить список пунктов возврата для создания склада|
|[**warehouseFBSReturnMileInfo**](#warehousefbsreturnmileinfo) | **POST** /v1/warehouse/fbs/return-mile/info | Получить информацию о возвратной миле|
|[**warehouseFBSUpdateReturnPointList**](#warehousefbsupdatereturnpointlist) | **POST** /v1/warehouse/fbs/update/return-point/list | Получить список пунктов возврата для обновления склада|
|[**warehouseFbsCreateDropOffTimeslotList**](#warehousefbscreatedropofftimeslotlist) | **POST** /v1/warehouse/fbs/create/drop-off/timeslot/list | Получить список таймслотов для создания склада с отгрузкой drop-off|
|[**warehouseFbsCreatePickUpTimeslotList**](#warehousefbscreatepickuptimeslotlist) | **POST** /v1/warehouse/fbs/create/pick-up/timeslot/list | Получить список таймслотов для создания склада с отгрузкой pick-up|
|[**warehouseFbsPickUpCourierCancel**](#warehousefbspickupcouriercancel) | **POST** /v1/warehouse/fbs/pickup/courier/cancel | Отменить вызов курьера на забор отгрузки pick-up|
|[**warehouseFbsPickUpCourierCreate**](#warehousefbspickupcouriercreate) | **POST** /v1/warehouse/fbs/pickup/courier/create | Создать вызов курьера на забор отгрузки pick-up|
|[**warehouseFbsPickUpHistoryList**](#warehousefbspickuphistorylist) | **POST** /v1/warehouse/fbs/pickup/history/list | Получить историю отгрузок курьерам|
|[**warehouseFbsPickUpPlanningList**](#warehousefbspickupplanninglist) | **POST** /v1/warehouse/fbs/pickup/planning/list | Получить список складов для планирования отгрузок курьеру|
|[**warehouseFbsReturnMileCheck**](#warehousefbsreturnmilecheck) | **POST** /v1/warehouse/fbs/return-mile/check | Проверить необходимость установки возвратной мили на склад|
|[**warehouseFbsUpdateDropOffTimeslotList**](#warehousefbsupdatedropofftimeslotlist) | **POST** /v1/warehouse/fbs/update/drop-off/timeslot/list | Получить список таймслотов для обновления склада с отгрузкой drop-off|
|[**warehouseFbsUpdatePickUpTimeslotList**](#warehousefbsupdatepickuptimeslotlist) | **POST** /v1/warehouse/fbs/update/pick-up/timeslot/list | Получить список таймслотов для обновления склада с отгрузкой pick-up|
|[**warehouseInvalidProductsGet**](#warehouseinvalidproductsget) | **POST** /v1/warehouse/invalid-products/get | Получить список товаров с ограничениями по доставке|
|[**warehouseListV2**](#warehouselistv2) | **POST** /v2/warehouse/list | Список складов|
|[**warehouseWithInvalidProducts**](#warehousewithinvalidproducts) | **POST** /v1/warehouse/warehouses-with-invalid-products | Получить список складов с ограниченными для доставки товарами|

# **archiveWarehouseFBS**
> V1ArchiveWarehouseFBSResponse archiveWarehouseFBS()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon&nbsp;for&nbsp;dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1ArchiveWarehouseFBSRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ArchiveWarehouseFBSRequest: V1ArchiveWarehouseFBSRequest; // (optional)

const { status, data } = await apiInstance.archiveWarehouseFBS(
    clientId,
    apiKey,
    v1ArchiveWarehouseFBSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ArchiveWarehouseFBSRequest** | **V1ArchiveWarehouseFBSRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ArchiveWarehouseFBSResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Склад перенесён в архив |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWarehouseFBSOperationStatus**
> V1GetWarehouseFBSOperationStatusResponse getWarehouseFBSOperationStatus()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon&nbsp;for&nbsp;dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1GetWarehouseFBSOperationStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetWarehouseFBSOperationStatusRequest: V1GetWarehouseFBSOperationStatusRequest; // (optional)

const { status, data } = await apiInstance.getWarehouseFBSOperationStatus(
    clientId,
    apiKey,
    v1GetWarehouseFBSOperationStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetWarehouseFBSOperationStatusRequest** | **V1GetWarehouseFBSOperationStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetWarehouseFBSOperationStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус операции |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unarchiveWarehouseFBS**
> V1UnarchiveWarehouseFBSResponse unarchiveWarehouseFBS()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon&nbsp;for&nbsp;dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1UnarchiveWarehouseFBSRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1UnarchiveWarehouseFBSRequest: V1UnarchiveWarehouseFBSRequest; // (optional)

const { status, data } = await apiInstance.unarchiveWarehouseFBS(
    clientId,
    apiKey,
    v1UnarchiveWarehouseFBSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1UnarchiveWarehouseFBSRequest** | **V1UnarchiveWarehouseFBSRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1UnarchiveWarehouseFBSResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Склад перенесён из архива |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWarehouseFBS**
> V1UpdateWarehouseFBSResponse updateWarehouseFBS()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon&nbsp;for&nbsp;dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1UpdateWarehouseFBSRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1UpdateWarehouseFBSRequest: V1UpdateWarehouseFBSRequest; // (optional)

const { status, data } = await apiInstance.updateWarehouseFBS(
    clientId,
    apiKey,
    v1UpdateWarehouseFBSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1UpdateWarehouseFBSRequest** | **V1UpdateWarehouseFBSRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1UpdateWarehouseFBSResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, example


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Склад обновлён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWarehouseFBSFirstMile**
> V1UpdateWarehouseFBSFirstMileResponse updateWarehouseFBSFirstMile()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon&nbsp;for&nbsp;dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1UpdateWarehouseFBSFirstMileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1UpdateWarehouseFBSFirstMileRequest: V1UpdateWarehouseFBSFirstMileRequest; // (optional)

const { status, data } = await apiInstance.updateWarehouseFBSFirstMile(
    clientId,
    apiKey,
    v1UpdateWarehouseFBSFirstMileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1UpdateWarehouseFBSFirstMileRequest** | **V1UpdateWarehouseFBSFirstMileRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1UpdateWarehouseFBSFirstMileResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, example


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Первая миля обновлена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseAPICreateWarehouseFBS**
> V1CreateWarehouseFBSResponse warehouseAPICreateWarehouseFBS()

Если создаёте склад с доставкой в drop-off пункт, используйте метод [/v1/warehouse/fbs/create/drop-off/list](#operation/WarehouseAPI_ListDropOffPointsForCreateFBSWarehouse), чтобы получить точки.  Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1CreateWarehouseFBSRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let v1CreateWarehouseFBSRequest: V1CreateWarehouseFBSRequest; // (optional)

const { status, data } = await apiInstance.warehouseAPICreateWarehouseFBS(
    v1CreateWarehouseFBSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreateWarehouseFBSRequest** | **V1CreateWarehouseFBSRequest**|  | |


### Return type

**V1CreateWarehouseFBSResponse**

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

# **warehouseAPIListDropOffPointsForCreateFBSWarehouse**
> V1ListDropOffPointsForCreateFBSWarehouseResponse warehouseAPIListDropOffPointsForCreateFBSWarehouse()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1ListDropOffPointsForCreateFBSWarehouseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let v1ListDropOffPointsForCreateFBSWarehouseRequest: V1ListDropOffPointsForCreateFBSWarehouseRequest; // (optional)

const { status, data } = await apiInstance.warehouseAPIListDropOffPointsForCreateFBSWarehouse(
    v1ListDropOffPointsForCreateFBSWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ListDropOffPointsForCreateFBSWarehouseRequest** | **V1ListDropOffPointsForCreateFBSWarehouseRequest**|  | |


### Return type

**V1ListDropOffPointsForCreateFBSWarehouseResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список получен |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseAPIListDropOffPointsForUpdateFBSWarehouse**
> V1ListDropOffPointsForUpdateFBSWarehouseResponse warehouseAPIListDropOffPointsForUpdateFBSWarehouse()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1ListDropOffPointsForUpdateFBSWarehouseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let v1ListDropOffPointsForUpdateFBSWarehouseRequest: V1ListDropOffPointsForUpdateFBSWarehouseRequest; // (optional)

const { status, data } = await apiInstance.warehouseAPIListDropOffPointsForUpdateFBSWarehouse(
    v1ListDropOffPointsForUpdateFBSWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ListDropOffPointsForUpdateFBSWarehouseRequest** | **V1ListDropOffPointsForUpdateFBSWarehouseRequest**|  | |


### Return type

**V1ListDropOffPointsForUpdateFBSWarehouseResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список получен |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFBSCreateReturnPointList**
> V1WarehouseFBSCreateReturnPointListResponse warehouseFBSCreateReturnPointList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1806-Novye-beta-metody-dlia-peredachi-vozvratonoi-tochki-dlia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFBSCreateReturnPointListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFBSCreateReturnPointListRequest: V1WarehouseFBSCreateReturnPointListRequest; // (optional)

const { status, data } = await apiInstance.warehouseFBSCreateReturnPointList(
    clientId,
    apiKey,
    v1WarehouseFBSCreateReturnPointListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFBSCreateReturnPointListRequest** | **V1WarehouseFBSCreateReturnPointListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFBSCreateReturnPointListResponse**

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

# **warehouseFBSReturnMileInfo**
> V1WarehouseFBSReturnMileInfoResponse warehouseFBSReturnMileInfo()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1806-Novye-beta-metody-dlia-peredachi-vozvratonoi-tochki-dlia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFBSReturnMileInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFBSReturnMileInfoRequest: V1WarehouseFBSReturnMileInfoRequest; // (optional)

const { status, data } = await apiInstance.warehouseFBSReturnMileInfo(
    clientId,
    apiKey,
    v1WarehouseFBSReturnMileInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFBSReturnMileInfoRequest** | **V1WarehouseFBSReturnMileInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFBSReturnMileInfoResponse**

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

# **warehouseFBSUpdateReturnPointList**
> V1WarehouseFBSUpdateReturnPointListResponse warehouseFBSUpdateReturnPointList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1806-Novye-beta-metody-dlia-peredachi-vozvratonoi-tochki-dlia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFBSUpdateReturnPointListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFBSUpdateReturnPointListRequest: V1WarehouseFBSUpdateReturnPointListRequest; // (optional)

const { status, data } = await apiInstance.warehouseFBSUpdateReturnPointList(
    clientId,
    apiKey,
    v1WarehouseFBSUpdateReturnPointListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFBSUpdateReturnPointListRequest** | **V1WarehouseFBSUpdateReturnPointListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFBSUpdateReturnPointListResponse**

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

# **warehouseFbsCreateDropOffTimeslotList**
> V1WarehouseFbsCreateDropOffTimeslotListResponse warehouseFbsCreateDropOffTimeslotList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsCreateDropOffTimeslotListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsCreateDropOffTimeslotListRequest: V1WarehouseFbsCreateDropOffTimeslotListRequest; // (optional)

const { status, data } = await apiInstance.warehouseFbsCreateDropOffTimeslotList(
    clientId,
    apiKey,
    v1WarehouseFbsCreateDropOffTimeslotListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsCreateDropOffTimeslotListRequest** | **V1WarehouseFbsCreateDropOffTimeslotListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFbsCreateDropOffTimeslotListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список таймслотов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFbsCreatePickUpTimeslotList**
> V1WarehouseFbsCreatePickUpTimeslotListResponse warehouseFbsCreatePickUpTimeslotList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsCreatePickUpTimeslotListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsCreatePickUpTimeslotListRequest: V1WarehouseFbsCreatePickUpTimeslotListRequest; // (optional)

const { status, data } = await apiInstance.warehouseFbsCreatePickUpTimeslotList(
    clientId,
    apiKey,
    v1WarehouseFbsCreatePickUpTimeslotListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsCreatePickUpTimeslotListRequest** | **V1WarehouseFbsCreatePickUpTimeslotListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFbsCreatePickUpTimeslotListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список таймслотов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFbsPickUpCourierCancel**
> warehouseFbsPickUpCourierCancel(v1WarehouseFbsPickUpCourierCancelRequest)

Метод позволяет отменить запланированный приезд курьера.   [Подробнее об отгрузках курьеру на FBS в Базе знаний](https://seller-edu.ozon.ru/fbs/ozon-logistika/otgruzka-kyruery)  Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1778-Novye-metody-dlia-raboty-s-otgruzkami-kureru-na-FBS/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsPickUpCourierCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsPickUpCourierCancelRequest: V1WarehouseFbsPickUpCourierCancelRequest; //

const { status, data } = await apiInstance.warehouseFbsPickUpCourierCancel(
    clientId,
    apiKey,
    v1WarehouseFbsPickUpCourierCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsPickUpCourierCancelRequest** | **V1WarehouseFbsPickUpCourierCancelRequest**|  | |
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
|**200** | Вызов отменён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFbsPickUpCourierCreate**
> warehouseFbsPickUpCourierCreate(v1WarehouseFbsPickUpCourierCreateRequest)

Метод позволяет запланировать приезд курьера для отгрузки ему отправлений.   [Подробнее об отгрузках курьеру на FBS в Базе знаний](https://seller-edu.ozon.ru/fbs/ozon-logistika/otgruzka-kyruery)  Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1778-Novye-metody-dlia-raboty-s-otgruzkami-kureru-na-FBS/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsPickUpCourierCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsPickUpCourierCreateRequest: V1WarehouseFbsPickUpCourierCreateRequest; //

const { status, data } = await apiInstance.warehouseFbsPickUpCourierCreate(
    clientId,
    apiKey,
    v1WarehouseFbsPickUpCourierCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsPickUpCourierCreateRequest** | **V1WarehouseFbsPickUpCourierCreateRequest**|  | |
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
|**200** | Вызов создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFbsPickUpHistoryList**
> V1WarehouseFbsPickUpHistoryListResponse warehouseFbsPickUpHistoryList(v1WarehouseFbsPickUpHistoryListRequest)

[Подробнее об отгрузках курьеру в Базе знаний продавца](https://seller-edu.ozon.ru/fbs/ozon-logistika/otgruzka-kyruery)  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1778-Novye-metody-dlia-raboty-s-otgruzkami-kureru-na-FBS/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsPickUpHistoryListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsPickUpHistoryListRequest: V1WarehouseFbsPickUpHistoryListRequest; //

const { status, data } = await apiInstance.warehouseFbsPickUpHistoryList(
    clientId,
    apiKey,
    v1WarehouseFbsPickUpHistoryListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsPickUpHistoryListRequest** | **V1WarehouseFbsPickUpHistoryListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFbsPickUpHistoryListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | История отгрузок |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFbsPickUpPlanningList**
> V1WarehouseFbsPickUpPlanningListResponse warehouseFbsPickUpPlanningList()

Чтобы создать отгрузку, используйте метод [/v1/warehouse/fbs/pickup/courier/create](#operation/WarehouseFbsPickUpCourierCreate).   [Подробнее об отгрузках курьеру на FBS в Базе знаний](https://seller-edu.ozon.ru/fbs/ozon-logistika/otgruzka-kyruery)  Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1778-Novye-metody-dlia-raboty-s-otgruzkami-kureru-na-FBS/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.warehouseFbsPickUpPlanningList(
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

**V1WarehouseFbsPickUpPlanningListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFbsReturnMileCheck**
> V1WarehouseFbsReturnMileCheckResponse warehouseFbsReturnMileCheck()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1806-Novye-beta-metody-dlia-peredachi-vozvratonoi-tochki-dlia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsReturnMileCheckRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsReturnMileCheckRequest: V1WarehouseFbsReturnMileCheckRequest; // (optional)

const { status, data } = await apiInstance.warehouseFbsReturnMileCheck(
    clientId,
    apiKey,
    v1WarehouseFbsReturnMileCheckRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsReturnMileCheckRequest** | **V1WarehouseFbsReturnMileCheckRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFbsReturnMileCheckResponse**

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

# **warehouseFbsUpdateDropOffTimeslotList**
> V1WarehouseFbsUpdateDropOffTimeslotListResponse warehouseFbsUpdateDropOffTimeslotList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsUpdateDropOffTimeslotListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsUpdateDropOffTimeslotListRequest: V1WarehouseFbsUpdateDropOffTimeslotListRequest; // (optional)

const { status, data } = await apiInstance.warehouseFbsUpdateDropOffTimeslotList(
    clientId,
    apiKey,
    v1WarehouseFbsUpdateDropOffTimeslotListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsUpdateDropOffTimeslotListRequest** | **V1WarehouseFbsUpdateDropOffTimeslotListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFbsUpdateDropOffTimeslotListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список таймслотов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseFbsUpdatePickUpTimeslotList**
> V1WarehouseFbsUpdatePickUpTimeslotListResponse warehouseFbsUpdatePickUpTimeslotList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseFbsUpdatePickUpTimeslotListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseFbsUpdatePickUpTimeslotListRequest: V1WarehouseFbsUpdatePickUpTimeslotListRequest; // (optional)

const { status, data } = await apiInstance.warehouseFbsUpdatePickUpTimeslotList(
    clientId,
    apiKey,
    v1WarehouseFbsUpdatePickUpTimeslotListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseFbsUpdatePickUpTimeslotListRequest** | **V1WarehouseFbsUpdatePickUpTimeslotListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseFbsUpdatePickUpTimeslotListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список таймслотов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseInvalidProductsGet**
> V1WarehouseInvalidProductsGetResponse warehouseInvalidProductsGet()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1804-Novyi-beta-metod-dlia-polucheniia-skladov-s-nevalidnymi-tovarami/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V1WarehouseInvalidProductsGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1WarehouseInvalidProductsGetRequest: V1WarehouseInvalidProductsGetRequest; // (optional)

const { status, data } = await apiInstance.warehouseInvalidProductsGet(
    clientId,
    apiKey,
    v1WarehouseInvalidProductsGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1WarehouseInvalidProductsGetRequest** | **V1WarehouseInvalidProductsGetRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1WarehouseInvalidProductsGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров с ограничениями |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseListV2**
> V2WarehouseListV2Response warehouseListV2()

Метод возвращает список складов FBS и rFBS. Чтобы получить список складов FBO, используйте метод [/v1/warehouse/fbo/list](#operation/SupplyDraftAPI_DraftGetWarehouseFboList).  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1669-Novye-metody-dlia-sozdaniia-i-obnovleniia-FBS-skladov) в сообществе разработчиков Ozon&nbsp;for&nbsp;dev. 

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration,
    V2WarehouseListV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2WarehouseListV2Request: V2WarehouseListV2Request; // (optional)

const { status, data } = await apiInstance.warehouseListV2(
    clientId,
    apiKey,
    v2WarehouseListV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2WarehouseListV2Request** | **V2WarehouseListV2Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2WarehouseListV2Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseWithInvalidProducts**
> V1WarehouseWithInvalidProductsResponse warehouseWithInvalidProducts()

Возвращает идентификаторы складов, на которых находятся товары с ограничениями. Такие товары недоступны для доставки со склада.  Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1804-Novyi-beta-metod-dlia-polucheniia-skladov-s-nevalidnymi-tovarami/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    FBSWarehouseAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSWarehouseAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.warehouseWithInvalidProducts(
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

**V1WarehouseWithInvalidProductsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

