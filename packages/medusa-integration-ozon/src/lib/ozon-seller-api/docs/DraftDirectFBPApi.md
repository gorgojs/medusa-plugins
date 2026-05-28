# DraftDirectFBPApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpAPIFbpDraftDirectTplDlvCreate**](#fbpapifbpdraftdirecttpldlvcreate) | **POST** /v1/fbp/draft/direct/tpl-dlv/create | Создать черновик заявки на доставку сторонней транспортной компанией|
|[**fbpAPIFbpDraftDirectTplDlvEdit**](#fbpapifbpdraftdirecttpldlvedit) | **POST** /v1/fbp/draft/direct/tpl-dlv/edit | Редактировать черновик поставки со способом доставки сторонней транспортной компанией|
|[**fbpDraftDirectCreate**](#fbpdraftdirectcreate) | **POST** /v1/fbp/draft/direct/create | Создать черновик заявки на поставку без указания способа доставки|
|[**fbpDraftDirectDelete**](#fbpdraftdirectdelete) | **POST** /v1/fbp/draft/direct/delete | Удалить черновик заявки на поставку|
|[**fbpDraftDirectGetTimeslot**](#fbpdraftdirectgettimeslot) | **POST** /v1/fbp/draft/direct/timeslot/get | Получить список таймслотов для прямой поставки|
|[**fbpDraftDirectProductValidate**](#fbpdraftdirectproductvalidate) | **POST** /v1/fbp/draft/direct/product/validate | Проверить список товаров для склада партнёра|
|[**fbpDraftDirectRegistrate**](#fbpdraftdirectregistrate) | **POST** /v1/fbp/draft/direct/registrate | Перевести черновик в действующую поставку|
|[**fbpDraftDirectSellerDlvCreate**](#fbpdraftdirectsellerdlvcreate) | **POST** /v1/fbp/draft/direct/seller-dlv/create | Создать черновик с доставкой силами продавца|
|[**fbpDraftDirectSellerDlvEdit**](#fbpdraftdirectsellerdlvedit) | **POST** /v1/fbp/draft/direct/seller-dlv/edit | Обновить информацию о доставке силами продавца в черновике|
|[**fbpDraftDirectTimeslotEdit**](#fbpdraftdirecttimeslotedit) | **POST** /v1/fbp/draft/direct/timeslot/edit | Отредактировать таймслот в черновике|

# **fbpAPIFbpDraftDirectTplDlvCreate**
> V1FbpDraftDirectTplDlvCreateResponse fbpAPIFbpDraftDirectTplDlvCreate(v1FbpDraftDirectTplDlvCreateRequest)

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectTplDlvCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let v1FbpDraftDirectTplDlvCreateRequest: V1FbpDraftDirectTplDlvCreateRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftDirectTplDlvCreate(
    v1FbpDraftDirectTplDlvCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectTplDlvCreateRequest** | **V1FbpDraftDirectTplDlvCreateRequest**|  | |


### Return type

**V1FbpDraftDirectTplDlvCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус генерации |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpDraftDirectTplDlvEdit**
> V1FbpDraftDirectTplDlvEditResponse fbpAPIFbpDraftDirectTplDlvEdit(v1FbpDraftDirectTplDlvEditRequest)

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectTplDlvEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let v1FbpDraftDirectTplDlvEditRequest: V1FbpDraftDirectTplDlvEditRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftDirectTplDlvEdit(
    v1FbpDraftDirectTplDlvEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectTplDlvEditRequest** | **V1FbpDraftDirectTplDlvEditRequest**|  | |


### Return type

**V1FbpDraftDirectTplDlvEditResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик изменён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpDraftDirectCreate**
> V1FbpDraftDirectCreateResponse fbpDraftDirectCreate(v1FbpDraftDirectCreateRequest)

 Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDirectCreateRequest: V1FbpDraftDirectCreateRequest; //

const { status, data } = await apiInstance.fbpDraftDirectCreate(
    clientId,
    apiKey,
    v1FbpDraftDirectCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectCreateRequest** | **V1FbpDraftDirectCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDirectCreateResponse**

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

# **fbpDraftDirectDelete**
> V1FbpDraftDirectDeleteResponse fbpDraftDirectDelete(v1FbpDraftDirectDeleteRequest)

 Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDirectDeleteRequest: V1FbpDraftDirectDeleteRequest; //

const { status, data } = await apiInstance.fbpDraftDirectDelete(
    clientId,
    apiKey,
    v1FbpDraftDirectDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectDeleteRequest** | **V1FbpDraftDirectDeleteRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDirectDeleteResponse**

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

# **fbpDraftDirectGetTimeslot**
> V1FbpDraftDirectGetTimeslotResponse fbpDraftDirectGetTimeslot()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectGetTimeslotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let v1FbpDraftDirectGetTimeslotRequest: V1FbpDraftDirectGetTimeslotRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDirectGetTimeslot(
    v1FbpDraftDirectGetTimeslotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectGetTimeslotRequest** | **V1FbpDraftDirectGetTimeslotRequest**|  | |


### Return type

**V1FbpDraftDirectGetTimeslotResponse**

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

# **fbpDraftDirectProductValidate**
> V1FbpDraftDirectProductValidateResponse fbpDraftDirectProductValidate(v1FbpDraftDirectProductValidateRequest)

 Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectProductValidateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDirectProductValidateRequest: V1FbpDraftDirectProductValidateRequest; //

const { status, data } = await apiInstance.fbpDraftDirectProductValidate(
    clientId,
    apiKey,
    v1FbpDraftDirectProductValidateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectProductValidateRequest** | **V1FbpDraftDirectProductValidateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDirectProductValidateResponse**

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

# **fbpDraftDirectRegistrate**
> V1FbpDraftDirectRegistrateResponse fbpDraftDirectRegistrate(v1FbpDraftDirectRegistrateRequest)

 Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectRegistrateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpDraftDirectRegistrateRequest: V1FbpDraftDirectRegistrateRequest; //

const { status, data } = await apiInstance.fbpDraftDirectRegistrate(
    clientId,
    apiKey,
    v1FbpDraftDirectRegistrateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectRegistrateRequest** | **V1FbpDraftDirectRegistrateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpDraftDirectRegistrateResponse**

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

# **fbpDraftDirectSellerDlvCreate**
> V1FbpDraftDirectSellerDlvCreateResponse fbpDraftDirectSellerDlvCreate()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectSellerDlvCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let v1FbpDraftDirectSellerDlvCreateRequest: V1FbpDraftDirectSellerDlvCreateRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDirectSellerDlvCreate(
    v1FbpDraftDirectSellerDlvCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectSellerDlvCreateRequest** | **V1FbpDraftDirectSellerDlvCreateRequest**|  | |


### Return type

**V1FbpDraftDirectSellerDlvCreateResponse**

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

# **fbpDraftDirectSellerDlvEdit**
> V1FbpDraftDirectSellerDlvEditResponse fbpDraftDirectSellerDlvEdit()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectSellerDlvEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let v1FbpDraftDirectSellerDlvEditRequest: V1FbpDraftDirectSellerDlvEditRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDirectSellerDlvEdit(
    v1FbpDraftDirectSellerDlvEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectSellerDlvEditRequest** | **V1FbpDraftDirectSellerDlvEditRequest**|  | |


### Return type

**V1FbpDraftDirectSellerDlvEditResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик обновлён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpDraftDirectTimeslotEdit**
> V1FbpDraftDirectTimeslotEditResponse fbpDraftDirectTimeslotEdit()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DraftDirectFBPApi,
    Configuration,
    V1FbpDraftDirectTimeslotEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DraftDirectFBPApi(configuration);

let v1FbpDraftDirectTimeslotEditRequest: V1FbpDraftDirectTimeslotEditRequest; // (optional)

const { status, data } = await apiInstance.fbpDraftDirectTimeslotEdit(
    v1FbpDraftDirectTimeslotEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftDirectTimeslotEditRequest** | **V1FbpDraftDirectTimeslotEditRequest**|  | |


### Return type

**V1FbpDraftDirectTimeslotEditResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Таймслот отредактирован |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

