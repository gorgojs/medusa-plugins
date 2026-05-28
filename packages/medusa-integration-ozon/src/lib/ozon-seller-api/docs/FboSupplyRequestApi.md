# FboSupplyRequestApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cargoesAPICargoesCreate**](#cargoesapicargoescreate) | **POST** /v1/cargoes/create | Установка грузомест|
|[**cargoesAPICargoesCreateInfo**](#cargoesapicargoescreateinfo) | **POST** /v1/cargoes/create/info | Получить информацию по установке грузомест|
|[**cargoesAPICargoesDelete**](#cargoesapicargoesdelete) | **POST** /v1/cargoes/delete | Удалить грузоместо в заявке на поставку|
|[**cargoesAPICargoesDeleteStatus**](#cargoesapicargoesdeletestatus) | **POST** /v1/cargoes/delete/status | Информация о статусе удаления грузоместа|
|[**cargoesAPICargoesLabelCreate**](#cargoesapicargoeslabelcreate) | **POST** /v1/cargoes-label/create | Сгенерировать этикетки для грузомест|
|[**cargoesAPICargoesLabelFile**](#cargoesapicargoeslabelfile) | **GET** /v1/cargoes-label/file/{file_guid} | Получить PDF с этикетками грузовых мест|
|[**cargoesAPICargoesLabelGet**](#cargoesapicargoeslabelget) | **POST** /v1/cargoes-label/get | Получить идентификатор этикетки для грузомест|
|[**cargoesAPICargoesRulesGet**](#cargoesapicargoesrulesget) | **POST** /v1/cargoes/rules/get | Чек-лист по установке грузомест FBO|
|[**cargoesCreateInfoV2**](#cargoescreateinfov2) | **POST** /v2/cargoes/create/info | Получить информацию по установке грузомест|
|[**supplyDraftAPIDraftClusterList**](#supplydraftapidraftclusterlist) | **POST** /v1/cluster/list | Информация о кластерах и их складах|
|[**supplyDraftAPIDraftCreate**](#supplydraftapidraftcreate) | **POST** /v1/draft/create | Создать черновик заявки на поставку|
|[**supplyDraftAPIDraftCreateInfo**](#supplydraftapidraftcreateinfo) | **POST** /v1/draft/create/info | Информация о черновике заявки на поставку|
|[**supplyDraftAPIDraftGetWarehouseFboList**](#supplydraftapidraftgetwarehousefbolist) | **POST** /v1/warehouse/fbo/list | Поиск точек для отгрузки поставки|
|[**supplyDraftAPIDraftSupplyCreate**](#supplydraftapidraftsupplycreate) | **POST** /v1/draft/supply/create | Создать заявку на поставку по черновику|
|[**supplyDraftAPIDraftSupplyCreateStatus**](#supplydraftapidraftsupplycreatestatus) | **POST** /v1/draft/supply/create/status | Информация о создании заявки на поставку|
|[**supplyDraftAPIDraftTimeslotInfo**](#supplydraftapidrafttimeslotinfo) | **POST** /v1/draft/timeslot/info | Доступные таймслоты|
|[**supplyOrderAPISupplyOrderCancel**](#supplyorderapisupplyordercancel) | **POST** /v1/supply-order/cancel | Отменить заявку на поставку|
|[**supplyOrderAPISupplyOrderCancelStatus**](#supplyorderapisupplyordercancelstatus) | **POST** /v1/supply-order/cancel/status | Получить статус отмены заявки на поставку|
|[**supplyOrderAPISupplyOrderContentUpdate**](#supplyorderapisupplyordercontentupdate) | **POST** /v1/supply-order/content/update | Редактирование товарного состава|
|[**supplyOrderAPISupplyOrderContentUpdateStatus**](#supplyorderapisupplyordercontentupdatestatus) | **POST** /v1/supply-order/content/update/status | Информация о статусе редактирования товарного состава|
|[**supplyOrderContentUpdateValidation**](#supplyordercontentupdatevalidation) | **POST** /v1/supply-order/content/update/validation | Проверить новый товарный состав|

# **cargoesAPICargoesCreate**
> V1CargoesCreateResponse cargoesAPICargoesCreate(v1CargoesCreateRequest)

Используйте метод, чтобы передать грузоместа и товарный состав в заявку на поставку. 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1CargoesCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CargoesCreateRequest: V1CargoesCreateRequest; //

const { status, data } = await apiInstance.cargoesAPICargoesCreate(
    clientId,
    apiKey,
    v1CargoesCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesCreateRequest** | **V1CargoesCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CargoesCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Грузоместа установлены |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesAPICargoesCreateInfo**
> V1CargoesCreateInfoResponse cargoesAPICargoesCreateInfo(v1CargoesCreateInfoRequest)

<aside class=\"warning\"> 7 ноября 2025 года метод будет отключён. Переключитесь на <a href=\"#operation/CargoesCreateInfoV2\">/v2/cargoes/create/info</a>. </aside> 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1CargoesCreateInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CargoesCreateInfoRequest: V1CargoesCreateInfoRequest; //

const { status, data } = await apiInstance.cargoesAPICargoesCreateInfo(
    clientId,
    apiKey,
    v1CargoesCreateInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesCreateInfoRequest** | **V1CargoesCreateInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CargoesCreateInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат запроса |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesAPICargoesDelete**
> V1CargoesDeleteResponse cargoesAPICargoesDelete(v1CargoesDeleteRequest)

Метод для удаления грузомест в заявке на поставку.  Чтобы проверить статус удаления, используйте метод [/v1/cargoes/delete/status](#operation/CargoesAPI_CargoesDeleteStatus). 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1CargoesDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1CargoesDeleteRequest: V1CargoesDeleteRequest; //

const { status, data } = await apiInstance.cargoesAPICargoesDelete(
    v1CargoesDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesDeleteRequest** | **V1CargoesDeleteRequest**|  | |


### Return type

**V1CargoesDeleteResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Грузоместо удалено |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesAPICargoesDeleteStatus**
> V1CargoesDeleteStatusResponse cargoesAPICargoesDeleteStatus(v1CargoesDeleteStatusRequest)

Метод для получения статуса удаления грузомест в заявке на поставку.

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1CargoesDeleteStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1CargoesDeleteStatusRequest: V1CargoesDeleteStatusRequest; //

const { status, data } = await apiInstance.cargoesAPICargoesDeleteStatus(
    v1CargoesDeleteStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesDeleteStatusRequest** | **V1CargoesDeleteStatusRequest**|  | |


### Return type

**V1CargoesDeleteStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус удаления грузоместа |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesAPICargoesLabelCreate**
> V1CargoesLabelCreateResponse cargoesAPICargoesLabelCreate(v1CargoesLabelCreateRequest)

Используйте метод, чтобы сгенерировать этикетки для грузомест из заявки на поставку. 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1CargoesLabelCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CargoesLabelCreateRequest: V1CargoesLabelCreateRequest; //

const { status, data } = await apiInstance.cargoesAPICargoesLabelCreate(
    clientId,
    apiKey,
    v1CargoesLabelCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesLabelCreateRequest** | **V1CargoesLabelCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CargoesLabelCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат запроса |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesAPICargoesLabelFile**
> cargoesAPICargoesLabelFile()



### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.cargoesAPICargoesLabelFile(
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

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Этикетки грузовых мест |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesAPICargoesLabelGet**
> V1CargoesLabelGetResponse cargoesAPICargoesLabelGet(v1CargoesLabelGetRequest)

Используйте метод, чтобы получить статус формирования этикеток и идентификатор файла с ними. 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1CargoesLabelGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CargoesLabelGetRequest: V1CargoesLabelGetRequest; //

const { status, data } = await apiInstance.cargoesAPICargoesLabelGet(
    clientId,
    apiKey,
    v1CargoesLabelGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesLabelGetRequest** | **V1CargoesLabelGetRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CargoesLabelGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Этикетка для грузомест |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesAPICargoesRulesGet**
> V1CargoesRulesGetResponse cargoesAPICargoesRulesGet(v1CargoesRulesGetRequest)

Метод для получения чек-листа с правилами по установке грузомест.

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1CargoesRulesGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1CargoesRulesGetRequest: V1CargoesRulesGetRequest; //

const { status, data } = await apiInstance.cargoesAPICargoesRulesGet(
    v1CargoesRulesGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesRulesGetRequest** | **V1CargoesRulesGetRequest**|  | |


### Return type

**V1CargoesRulesGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Чек-лист по установке грузомест |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesCreateInfoV2**
> V2CargoesCreateInfoV2Response cargoesCreateInfoV2()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1721-Novyi-metod-dlia-peredachi-offer-id-pri-ustanovke-GM) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V2CargoesCreateInfoV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2CargoesCreateInfoV2Request: V2CargoesCreateInfoV2Request; // (optional)

const { status, data } = await apiInstance.cargoesCreateInfoV2(
    clientId,
    apiKey,
    v2CargoesCreateInfoV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CargoesCreateInfoV2Request** | **V2CargoesCreateInfoV2Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2CargoesCreateInfoV2Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат запроса |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyDraftAPIDraftClusterList**
> V1DraftClusterListResponse supplyDraftAPIDraftClusterList(v1DraftClusterListRequest)



### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1DraftClusterListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1DraftClusterListRequest: V1DraftClusterListRequest; //

const { status, data } = await apiInstance.supplyDraftAPIDraftClusterList(
    v1DraftClusterListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftClusterListRequest** | **V1DraftClusterListRequest**|  | |


### Return type

**V1DraftClusterListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о кластерах |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyDraftAPIDraftCreate**
> V1DraftCreateResponse supplyDraftAPIDraftCreate(v1DraftCreateRequest)

<aside class=\"warning\">Черновик заявки на поставку доступен 30 минут.  Вы можете создавать черновики заявки на поставку 2 раза в минуту и 50 раз в час. Максимум — 500 черновиков в день.  Если превысите лимит, вернётся ошибка 429.</aside>  Создать черновик заявки на поставку — прямой или кросс-докинг, а также указать поставляемые товары. 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1DraftCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1DraftCreateRequest: V1DraftCreateRequest; //

const { status, data } = await apiInstance.supplyDraftAPIDraftCreate(
    v1DraftCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftCreateRequest** | **V1DraftCreateRequest**|  | |


### Return type

**V1DraftCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Черновик заявки создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyDraftAPIDraftCreateInfo**
> V1DraftCreateInfoResponse supplyDraftAPIDraftCreateInfo(v1DraftCreateInfoRequest)

<aside class=\"warning\">Вы можете создавать черновики заявки на поставку 2 раза в минуту и 50 раз в час. Если превысите лимит, вернётся ошибка 429.</aside>  Возвращает информацию о созданном черновике заявки на поставку. В ответе вернутся склады размещения в каждом выбранном кластере, которые примут все товары. 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1DraftCreateInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1DraftCreateInfoRequest: V1DraftCreateInfoRequest; //

const { status, data } = await apiInstance.supplyDraftAPIDraftCreateInfo(
    v1DraftCreateInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftCreateInfoRequest** | **V1DraftCreateInfoRequest**|  | |


### Return type

**V1DraftCreateInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о черновике заявки на поставку |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyDraftAPIDraftGetWarehouseFboList**
> V1DraftGetWarehouseFboListResponse supplyDraftAPIDraftGetWarehouseFboList(v1DraftGetWarehouseFboListRequest)

Используйте метод, чтобы найти точки отгрузки для кросс-докинга и прямых поставок.  Вы можете посмотреть адреса всех точек на карте и в виде таблицы в [Базе знаний](https://seller-edu.ozon.ru/fbo/warehouses/adresa-skladov-fbo). 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1DraftGetWarehouseFboListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1DraftGetWarehouseFboListRequest: V1DraftGetWarehouseFboListRequest; //

const { status, data } = await apiInstance.supplyDraftAPIDraftGetWarehouseFboList(
    v1DraftGetWarehouseFboListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftGetWarehouseFboListRequest** | **V1DraftGetWarehouseFboListRequest**|  | |


### Return type

**V1DraftGetWarehouseFboListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о складах |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyDraftAPIDraftSupplyCreate**
> V1DraftSupplyCreateResponse supplyDraftAPIDraftSupplyCreate(v1DraftSupplyCreateRequest)



### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1DraftSupplyCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1DraftSupplyCreateRequest: V1DraftSupplyCreateRequest; //

const { status, data } = await apiInstance.supplyDraftAPIDraftSupplyCreate(
    v1DraftSupplyCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftSupplyCreateRequest** | **V1DraftSupplyCreateRequest**|  | |


### Return type

**V1DraftSupplyCreateResponse**

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

# **supplyDraftAPIDraftSupplyCreateStatus**
> V1DraftSupplyCreateStatusResponse supplyDraftAPIDraftSupplyCreateStatus(v1DraftSupplyCreateStatusRequest)



### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1DraftSupplyCreateStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1DraftSupplyCreateStatusRequest: V1DraftSupplyCreateStatusRequest; //

const { status, data } = await apiInstance.supplyDraftAPIDraftSupplyCreateStatus(
    v1DraftSupplyCreateStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftSupplyCreateStatusRequest** | **V1DraftSupplyCreateStatusRequest**|  | |


### Return type

**V1DraftSupplyCreateStatusResponse**

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

# **supplyDraftAPIDraftTimeslotInfo**
> V1DraftTimeslotInfoResponse supplyDraftAPIDraftTimeslotInfo(v1DraftTimeslotInfoRequest)

<aside class=\"warning\">Черновик заявки на поставку доступен 30 минут.</aside>  Возвращает доступные таймслоты на конечных складах отгрузки. Для кросс-док поставок вернутся таймслоты склада отгрузки, который был передан при создании черновика. 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1DraftTimeslotInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1DraftTimeslotInfoRequest: V1DraftTimeslotInfoRequest; //

const { status, data } = await apiInstance.supplyDraftAPIDraftTimeslotInfo(
    v1DraftTimeslotInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DraftTimeslotInfoRequest** | **V1DraftTimeslotInfoRequest**|  | |


### Return type

**V1DraftTimeslotInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Таймслоты |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderCancel**
> V1SupplyOrderCancelResponse supplyOrderAPISupplyOrderCancel(v1SupplyOrderCancelRequest)



### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1SupplyOrderCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SupplyOrderCancelRequest: V1SupplyOrderCancelRequest; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderCancel(
    clientId,
    apiKey,
    v1SupplyOrderCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderCancelRequest** | **V1SupplyOrderCancelRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SupplyOrderCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отмена заявки на поставку в процессе |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderCancelStatus**
> V1SupplyOrderCancelStatusResponse supplyOrderAPISupplyOrderCancelStatus(v1SupplyOrderCancelStatusRequest)



### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1SupplyOrderCancelStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SupplyOrderCancelStatusRequest: V1SupplyOrderCancelStatusRequest; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderCancelStatus(
    clientId,
    apiKey,
    v1SupplyOrderCancelStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderCancelStatusRequest** | **V1SupplyOrderCancelStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SupplyOrderCancelStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус отмены заявки на поставку |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderContentUpdate**
> V1SupplyOrderContentUpdateResponse supplyOrderAPISupplyOrderContentUpdate(v1SupplyOrderContentUpdateRequest)

Метод для редактирования товарного состава в заявке на поставку.  Чтобы проверить статус редактирования, используйте метод [/v1/supply-order/content/update/status](#operation/SupplyOrderAPI_SupplyOrderContentUpdateStatus). 

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1SupplyOrderContentUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1SupplyOrderContentUpdateRequest: V1SupplyOrderContentUpdateRequest; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderContentUpdate(
    v1SupplyOrderContentUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderContentUpdateRequest** | **V1SupplyOrderContentUpdateRequest**|  | |


### Return type

**V1SupplyOrderContentUpdateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Товарный состав обновлён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderContentUpdateStatus**
> V1SupplyOrderContentUpdateStatusResponse supplyOrderAPISupplyOrderContentUpdateStatus(v1SupplyOrderContentUpdateStatusRequest)

Метод для получения статуса редактирования товарного состава.

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1SupplyOrderContentUpdateStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1SupplyOrderContentUpdateStatusRequest: V1SupplyOrderContentUpdateStatusRequest; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderContentUpdateStatus(
    v1SupplyOrderContentUpdateStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderContentUpdateStatusRequest** | **V1SupplyOrderContentUpdateStatusRequest**|  | |


### Return type

**V1SupplyOrderContentUpdateStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус редактирования |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderContentUpdateValidation**
> V1SupplyOrderContentUpdateValidationResponse supplyOrderContentUpdateValidation()

Используйте этот метод, если в [/v1/supply-order/content/update/status](#operation/SupplyOrderAPI_SupplyOrderContentUpdateStatus) вы получили ошибку `SUPPLY_CONTENT_NOT_VALID`.

### Example

```typescript
import {
    FboSupplyRequestApi,
    Configuration,
    V1SupplyOrderContentUpdateValidationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FboSupplyRequestApi(configuration);

let v1SupplyOrderContentUpdateValidationRequest: V1SupplyOrderContentUpdateValidationRequest; // (optional)

const { status, data } = await apiInstance.supplyOrderContentUpdateValidation(
    v1SupplyOrderContentUpdateValidationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderContentUpdateValidationRequest** | **V1SupplyOrderContentUpdateValidationRequest**|  | |


### Return type

**V1SupplyOrderContentUpdateValidationResponse**

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

