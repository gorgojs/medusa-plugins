# DraftDropOffFBPApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpDraftDropOffCreate**](#fbpdraftdropoffcreate) | **POST** /v1/fbp/draft/drop-off/create | Создать черновик для доставки в drop-off пункт|
|[**fbpDraftDropOffDelete**](#fbpdraftdropoffdelete) | **POST** /v1/fbp/draft/drop-off/delete | Удалить черновик для доставки в drop-off пункт|
|[**fbpDraftDropOffDlvEdit**](#fbpdraftdropoffdlvedit) | **POST** /v1/fbp/draft/drop-off/dlv/edit | Отредактировать детали доставки для drop-off черновика|
|[**fbpDraftDropOffPointList**](#fbpdraftdropoffpointlist) | **POST** /v1/fbp/draft/drop-off/point/list | Получить список drop-off пунктов в провинции|
|[**fbpDraftDropOffPointTimetable**](#fbpdraftdropoffpointtimetable) | **POST** /v1/fbp/draft/drop-off/point/timetable | Получить расписание работы drop-off пункта|
|[**fbpDraftDropOffProductValidate**](#fbpdraftdropoffproductvalidate) | **POST** /v1/fbp/draft/drop-off/product/validate | Проверить список товаров, которые склад партнёра может принять|
|[**fbpDraftDropOffProvinceList**](#fbpdraftdropoffprovincelist) | **POST** /v1/fbp/draft/drop-off/province/list | Получить список провинций|
|[**fbpDraftDropOffRegistrate**](#fbpdraftdropoffregistrate) | **POST** /v1/fbp/draft/drop-off/registrate | Перевести черновик в действующую поставку|

# **fbpDraftDropOffCreate**
> V1FbpDraftDropOffCreateResponse fbpDraftDropOffCreate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffCreateRequest: V1FbpDraftDropOffCreateRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffCreate(
    clientId,
    apiKey,
    v1FbpDraftDropOffCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffCreateRequest** | **V1FbpDraftDropOffCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffCreateResponse**

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

# **fbpDraftDropOffDelete**
> V1FbpDraftDropOffDeleteResponse fbpDraftDropOffDelete()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffDeleteRequest: V1FbpDraftDropOffDeleteRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffDelete(
    clientId,
    apiKey,
    v1FbpDraftDropOffDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffDeleteRequest** | **V1FbpDraftDropOffDeleteRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffDeleteResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик удалён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpDraftDropOffDlvEdit**
> V1FbpDraftDropOffDlvEditResponse fbpDraftDropOffDlvEdit()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffDlvEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffDlvEditRequest: V1FbpDraftDropOffDlvEditRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffDlvEdit(
    clientId,
    apiKey,
    v1FbpDraftDropOffDlvEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffDlvEditRequest** | **V1FbpDraftDropOffDlvEditRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffDlvEditResponse**

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

# **fbpDraftDropOffPointList**
> V1FbpDraftDropOffPointListResponse fbpDraftDropOffPointList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffPointListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffPointListRequest: V1FbpDraftDropOffPointListRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffPointList(
    clientId,
    apiKey,
    v1FbpDraftDropOffPointListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffPointListRequest** | **V1FbpDraftDropOffPointListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffPointListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список drop-off пунктов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpDraftDropOffPointTimetable**
> V1FbpDraftDropOffPointTimetableResponse fbpDraftDropOffPointTimetable()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffPointTimetableRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffPointTimetableRequest: V1FbpDraftDropOffPointTimetableRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffPointTimetable(
    clientId,
    apiKey,
    v1FbpDraftDropOffPointTimetableRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffPointTimetableRequest** | **V1FbpDraftDropOffPointTimetableRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffPointTimetableResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Расписание работы |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpDraftDropOffProductValidate**
> V1FbpDraftDropOffProductValidateResponse fbpDraftDropOffProductValidate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffProductValidateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffProductValidateRequest: V1FbpDraftDropOffProductValidateRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffProductValidate(
    clientId,
    apiKey,
    v1FbpDraftDropOffProductValidateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffProductValidateRequest** | **V1FbpDraftDropOffProductValidateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffProductValidateResponse**

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

# **fbpDraftDropOffProvinceList**
> V1FbpDraftDropOffProvinceListResponse fbpDraftDropOffProvinceList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffProvinceListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffProvinceListRequest: V1FbpDraftDropOffProvinceListRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffProvinceList(
    clientId,
    apiKey,
    v1FbpDraftDropOffProvinceListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffProvinceListRequest** | **V1FbpDraftDropOffProvinceListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffProvinceListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список провинций |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpDraftDropOffRegistrate**
> V1FbpDraftDropOffRegistrateResponse fbpDraftDropOffRegistrate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftDropOffFBPApi,
    Configuration,
    V1FbpDraftDropOffRegistrateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDropOffRegistrateRequest: V1FbpDraftDropOffRegistrateRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDropOffRegistrate(
    clientId,
    apiKey,
    v1FbpDraftDropOffRegistrateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDropOffRegistrateRequest** | **V1FbpDraftDropOffRegistrateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDropOffRegistrateResponse**

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

