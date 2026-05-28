# DeliveryFBPApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpAPIFbpArchiveGet**](#fbpapifbparchiveget) | **POST** /v1/fbp/archive/get | Получить информацию о завершённой поставке|
|[**fbpAPIFbpArchiveList**](#fbpapifbparchivelist) | **POST** /v1/fbp/archive/list | Получить список завершённых поставок|
|[**fbpAPIFbpCheckActState**](#fbpapifbpcheckactstate) | **POST** /v1/fbp/act-from/get | Получить статус генерации акта приёмки|
|[**fbpAPIFbpCheckConsignmentNoteState**](#fbpapifbpcheckconsignmentnotestate) | **POST** /v1/fbp/act-to/get | Получить статус генерации транспортной накладной|
|[**fbpAPIFbpCreateAct**](#fbpapifbpcreateact) | **POST** /v1/fbp/act-from/create | Сгенерировать акт приёмки|
|[**fbpAPIFbpCreateConsignmentNote**](#fbpapifbpcreateconsignmentnote) | **POST** /v1/fbp/act-to/create | Сгенерировать транспортную накладную|
|[**fbpAPIFbpCreateLabel**](#fbpapifbpcreatelabel) | **POST** /v1/fbp/label/create | Cоздать задание на генерацию этикеток|
|[**fbpAPIFbpGetLabel**](#fbpapifbpgetlabel) | **POST** /v1/fbp/label/get | Получить статус задания на генерацию этикеток|
|[**fbpAPIFbpOrderGet**](#fbpapifbporderget) | **POST** /v1/fbp/order/get | Получить информацию о конкретной поставке|
|[**fbpAPIFbpOrderList**](#fbpapifbporderlist) | **POST** /v1/fbp/order/list | Получить список поставок|

# **fbpAPIFbpArchiveGet**
> V1FbpArchiveGetResponse fbpAPIFbpArchiveGet()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpArchiveGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpArchiveGetRequest: V1FbpArchiveGetRequest; // (optional)

const { status, data } = await apiInstance.fbpAPIFbpArchiveGet(
    v1FbpArchiveGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpArchiveGetRequest** | **V1FbpArchiveGetRequest**|  | |


### Return type

**V1FbpArchiveGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о завершённой поставке |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpArchiveList**
> V1FbpArchiveListResponse fbpAPIFbpArchiveList()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpArchiveListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpArchiveListRequest: V1FbpArchiveListRequest; // (optional)

const { status, data } = await apiInstance.fbpAPIFbpArchiveList(
    v1FbpArchiveListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpArchiveListRequest** | **V1FbpArchiveListRequest**|  | |


### Return type

**V1FbpArchiveListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список завершённых поставок |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpCheckActState**
> V1FbpCheckActStateResponse fbpAPIFbpCheckActState(v1FbpCheckActStateRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpCheckActStateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpCheckActStateRequest: V1FbpCheckActStateRequest; //

const { status, data } = await apiInstance.fbpAPIFbpCheckActState(
    v1FbpCheckActStateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpCheckActStateRequest** | **V1FbpCheckActStateRequest**|  | |


### Return type

**V1FbpCheckActStateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус генерации акта приёмки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpCheckConsignmentNoteState**
> V1FbpCheckConsignmentNoteStateResponse fbpAPIFbpCheckConsignmentNoteState(v1FbpCheckConsignmentNoteStateRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpCheckConsignmentNoteStateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpCheckConsignmentNoteStateRequest: V1FbpCheckConsignmentNoteStateRequest; //

const { status, data } = await apiInstance.fbpAPIFbpCheckConsignmentNoteState(
    v1FbpCheckConsignmentNoteStateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpCheckConsignmentNoteStateRequest** | **V1FbpCheckConsignmentNoteStateRequest**|  | |


### Return type

**V1FbpCheckConsignmentNoteStateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус генерации транспортной накладной |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpCreateAct**
> V1FbpCreateActResponse fbpAPIFbpCreateAct(v1FbpCreateActRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpCreateActRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpCreateActRequest: V1FbpCreateActRequest; //

const { status, data } = await apiInstance.fbpAPIFbpCreateAct(
    v1FbpCreateActRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpCreateActRequest** | **V1FbpCreateActRequest**|  | |


### Return type

**V1FbpCreateActResponse**

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

# **fbpAPIFbpCreateConsignmentNote**
> V1FbpCreateConsignmentNoteResponse fbpAPIFbpCreateConsignmentNote(v1FbpCreateConsignmentNoteRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpCreateConsignmentNoteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpCreateConsignmentNoteRequest: V1FbpCreateConsignmentNoteRequest; //

const { status, data } = await apiInstance.fbpAPIFbpCreateConsignmentNote(
    v1FbpCreateConsignmentNoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpCreateConsignmentNoteRequest** | **V1FbpCreateConsignmentNoteRequest**|  | |


### Return type

**V1FbpCreateConsignmentNoteResponse**

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

# **fbpAPIFbpCreateLabel**
> V1FbpCreateLabelResponse fbpAPIFbpCreateLabel()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpCreateLabelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpCreateLabelRequest: V1FbpCreateLabelRequest; // (optional)

const { status, data } = await apiInstance.fbpAPIFbpCreateLabel(
    v1FbpCreateLabelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpCreateLabelRequest** | **V1FbpCreateLabelRequest**|  | |


### Return type

**V1FbpCreateLabelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Задание создано |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpGetLabel**
> V1FbpGetLabelResponse fbpAPIFbpGetLabel()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpGetLabelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpGetLabelRequest: V1FbpGetLabelRequest; // (optional)

const { status, data } = await apiInstance.fbpAPIFbpGetLabel(
    v1FbpGetLabelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpGetLabelRequest** | **V1FbpGetLabelRequest**|  | |


### Return type

**V1FbpGetLabelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Задание создано |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpOrderGet**
> V1FbpOrderGetResponse fbpAPIFbpOrderGet(v1FbpOrderGetRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpOrderGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpOrderGetRequest: V1FbpOrderGetRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderGet(
    v1FbpOrderGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderGetRequest** | **V1FbpOrderGetRequest**|  | |


### Return type

**V1FbpOrderGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Детали поставки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpOrderList**
> V1FbpOrderListResponse fbpAPIFbpOrderList(v1FbpOrderListRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPApi,
    Configuration,
    V1FbpOrderListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPApi(configuration);

let v1FbpOrderListRequest: V1FbpOrderListRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderList(
    v1FbpOrderListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderListRequest** | **V1FbpOrderListRequest**|  | |


### Return type

**V1FbpOrderListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список поставок |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

