# SupplyDraftAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**draftCreateInfo**](#draftcreateinfo) | **POST** /v2/draft/create/info | Получить информацию о черновике заявки на поставку|
|[**draftCrossdockCreate**](#draftcrossdockcreate) | **POST** /v1/draft/crossdock/create | Создать черновик заявки на поставку кросс-докингом|
|[**draftDirectCreate**](#draftdirectcreate) | **POST** /v1/draft/direct/create | Создать черновик заявки на поставку|
|[**draftMultiClusterCreate**](#draftmulticlustercreate) | **POST** /v1/draft/multi-cluster/create | Создать черновик заявки на поставку для нескольких кластеров|
|[**draftSupplyCreate**](#draftsupplycreate) | **POST** /v2/draft/supply/create | Создать заявку на поставку по черновику|
|[**draftSupplyCreateStatus**](#draftsupplycreatestatus) | **POST** /v2/draft/supply/create/status | Получить информацию о создании заявки на поставку|
|[**draftTimeslotInfo**](#drafttimeslotinfo) | **POST** /v2/draft/timeslot/info | Получить список доступных таймслотов|
|[**warehouseFboSellerList**](#warehousefbosellerlist) | **POST** /v1/warehouse/fbo/seller/list | Получить список складов продавца|

# **draftCreateInfo**
> V2DraftCreateInfoResponse draftCreateInfo()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration,
    V2DraftCreateInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2DraftCreateInfoRequest: V2DraftCreateInfoRequest; // (optional)

const { status, data } = await apiInstance.draftCreateInfo(
    clientId,
    apiKey,
    v2DraftCreateInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2DraftCreateInfoRequest** | **V2DraftCreateInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2DraftCreateInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о черновике |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **draftCrossdockCreate**
> V1DraftCreateCommonResponse draftCrossdockCreate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration,
    V1DraftCrossdockCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1DraftCrossdockCreateRequest: V1DraftCrossdockCreateRequest; // (optional)

const { status, data } = await apiInstance.draftCrossdockCreate(
    clientId,
    apiKey,
    v1DraftCrossdockCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftCrossdockCreateRequest** | **V1DraftCrossdockCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1DraftCreateCommonResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **draftDirectCreate**
> V1DraftCreateCommonResponse draftDirectCreate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration,
    V1DraftDirectCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1DraftDirectCreateRequest: V1DraftDirectCreateRequest; // (optional)

const { status, data } = await apiInstance.draftDirectCreate(
    clientId,
    apiKey,
    v1DraftDirectCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftDirectCreateRequest** | **V1DraftDirectCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1DraftCreateCommonResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **draftMultiClusterCreate**
> V1DraftCreateCommonResponse draftMultiClusterCreate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration,
    V1DraftMultiClusterCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1DraftMultiClusterCreateRequest: V1DraftMultiClusterCreateRequest; // (optional)

const { status, data } = await apiInstance.draftMultiClusterCreate(
    clientId,
    apiKey,
    v1DraftMultiClusterCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftMultiClusterCreateRequest** | **V1DraftMultiClusterCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1DraftCreateCommonResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **draftSupplyCreate**
> V2DraftSupplyCreateResponse draftSupplyCreate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration,
    V2DraftSupplyCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2DraftSupplyCreateRequest: V2DraftSupplyCreateRequest; // (optional)

const { status, data } = await apiInstance.draftSupplyCreate(
    clientId,
    apiKey,
    v2DraftSupplyCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2DraftSupplyCreateRequest** | **V2DraftSupplyCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2DraftSupplyCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заявка создана |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **draftSupplyCreateStatus**
> V2DraftSupplyCreateStatusResponse draftSupplyCreateStatus()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration,
    V2DraftSupplyCreateStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2DraftSupplyCreateStatusRequest: V2DraftSupplyCreateStatusRequest; // (optional)

const { status, data } = await apiInstance.draftSupplyCreateStatus(
    clientId,
    apiKey,
    v2DraftSupplyCreateStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2DraftSupplyCreateStatusRequest** | **V2DraftSupplyCreateStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2DraftSupplyCreateStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о создании заявки на поставку |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **draftTimeslotInfo**
> V2DraftTimeslotInfoResponse draftTimeslotInfo()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration,
    V2DraftTimeslotInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2DraftTimeslotInfoRequest: V2DraftTimeslotInfoRequest; // (optional)

const { status, data } = await apiInstance.draftTimeslotInfo(
    clientId,
    apiKey,
    v2DraftTimeslotInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2DraftTimeslotInfoRequest** | **V2DraftTimeslotInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2DraftTimeslotInfoResponse**

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

# **warehouseFboSellerList**
> V1WarehouseFboSellerListResponse warehouseFboSellerList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1796-Novye-beta-metody-dlia-sozdaniia-zaiavok-na-postavku-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    SupplyDraftAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplyDraftAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.warehouseFboSellerList(
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

**V1WarehouseFboSellerListResponse**

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

