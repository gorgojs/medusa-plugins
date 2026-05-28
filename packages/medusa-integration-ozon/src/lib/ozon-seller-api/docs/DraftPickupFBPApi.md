# DraftPickupFBPApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpAPIFbpDraftPickUpDelete**](#fbpapifbpdraftpickupdelete) | **POST** /v1/fbp/draft/pick-up/delete | Отменить черновик заявки на pick-up поставку|
|[**fbpAPIFbpDraftPickUpProductValidate**](#fbpapifbpdraftpickupproductvalidate) | **POST** /v1/fbp/draft/pick-up/product/validate | Провалидировать список товаров для pick-up поставки|
|[**fbpAPIFbpDraftPickupCreate**](#fbpapifbpdraftpickupcreate) | **POST** /v1/fbp/draft/pick-up/create | Создать черновик заявки на pick-up поставку|
|[**fbpAPIFbpDraftPickupDlvEdit**](#fbpapifbpdraftpickupdlvedit) | **POST** /v1/fbp/draft/pick-up/dlv/edit | Изменить черновик заявки на pick-up поставку|
|[**fbpDraftPickUpRegistrate**](#fbpdraftpickupregistrate) | **POST** /v1/fbp/draft/pick-up/registrate | Перевести черновик в действующую поставку|

# **fbpAPIFbpDraftPickUpDelete**
> V1FbpDraftPickUpDeleteResponse fbpAPIFbpDraftPickUpDelete(v1FbpDraftPickUpDeleteRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftPickupFBPApi,
    Configuration,
    V1FbpDraftPickUpDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftPickupFBPApi(configuration);

let v1FbpDraftPickUpDeleteRequest: V1FbpDraftPickUpDeleteRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftPickUpDelete(
    v1FbpDraftPickUpDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftPickUpDeleteRequest** | **V1FbpDraftPickUpDeleteRequest**|  | |


### Return type

**V1FbpDraftPickUpDeleteResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик отменён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpDraftPickUpProductValidate**
> V1FbpDraftPickUpProductValidateResponse fbpAPIFbpDraftPickUpProductValidate(v1FbpDraftPickUpProductValidateRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftPickupFBPApi,
    Configuration,
    V1FbpDraftPickUpProductValidateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftPickupFBPApi(configuration);

let v1FbpDraftPickUpProductValidateRequest: V1FbpDraftPickUpProductValidateRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftPickUpProductValidate(
    v1FbpDraftPickUpProductValidateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftPickUpProductValidateRequest** | **V1FbpDraftPickUpProductValidateRequest**|  | |


### Return type

**V1FbpDraftPickUpProductValidateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список провалидирован |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpDraftPickupCreate**
> V1FbpDraftPickupCreateResponse fbpAPIFbpDraftPickupCreate(v1FbpDraftPickupCreateRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftPickupFBPApi,
    Configuration,
    V1FbpDraftPickupCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftPickupFBPApi(configuration);

let v1FbpDraftPickupCreateRequest: V1FbpDraftPickupCreateRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftPickupCreate(
    v1FbpDraftPickupCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftPickupCreateRequest** | **V1FbpDraftPickupCreateRequest**|  | |


### Return type

**V1FbpDraftPickupCreateResponse**

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

# **fbpAPIFbpDraftPickupDlvEdit**
> V1FbpDraftPickupDlvEditResponse fbpAPIFbpDraftPickupDlvEdit(v1FbpDraftPickupDlvEditRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftPickupFBPApi,
    Configuration,
    V1FbpDraftPickupDlvEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftPickupFBPApi(configuration);

let v1FbpDraftPickupDlvEditRequest: V1FbpDraftPickupDlvEditRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftPickupDlvEdit(
    v1FbpDraftPickupDlvEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftPickupDlvEditRequest** | **V1FbpDraftPickupDlvEditRequest**|  | |


### Return type

**V1FbpDraftPickupDlvEditResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация отредактирована |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpDraftPickUpRegistrate**
> V1FbpDraftPickUpRegistrateResponse fbpDraftPickUpRegistrate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DraftPickupFBPApi,
    Configuration,
    V1FbpDraftPickUpRegistrateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftPickupFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftPickUpRegistrateRequest: V1FbpDraftPickUpRegistrateRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftPickUpRegistrate(
    clientId,
    apiKey,
    v1FbpDraftPickUpRegistrateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftPickUpRegistrateRequest** | **V1FbpDraftPickUpRegistrateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftPickUpRegistrateResponse**

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

