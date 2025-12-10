# ListsApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllParams**](#getallparams) | **GET** /lists/providers/connections | Получение всех параметров подключения к службам доставки|
|[**getListCitiesB2cpl**](#getlistcitiesb2cpl) | **GET** /lists/providerCities/b2cpl | Получение списка городов b2cpl|
|[**getListCitiesBoxberry**](#getlistcitiesboxberry) | **GET** /lists/providerCities/boxberry | Получение списка городов boxberry|
|[**getListCitiesCdek**](#getlistcitiescdek) | **GET** /lists/providerCities/cdek | Получение списка городов cdek|
|[**getListCitiesDpd**](#getlistcitiesdpd) | **GET** /lists/providerCities/dpd | Получение списка городов dpd|
|[**getListDeliveryTypes**](#getlistdeliverytypes) | **GET** /lists/deliveryTypes | Получение списка типов доставки|
|[**getListPaymentMethods**](#getlistpaymentmethods) | **GET** /lists/paymentMethods | Получение списка способов оплаты|
|[**getListPickupTypes**](#getlistpickuptypes) | **GET** /lists/pickupTypes | Получение списка типов приема|
|[**getListPoints**](#getlistpoints) | **GET** /lists/points | Получение списка пунктов приема/выдачи|
|[**getListProviderStatuses**](#getlistproviderstatuses) | **GET** /lists/providerStatuses | Список соответствия статусов СД со статусами сервиса|
|[**getListProviders**](#getlistproviders) | **GET** /lists/providers | Получение списка поставщиков услуг|
|[**getListServices**](#getlistservices) | **GET** /lists/services | Получение списка дополнительных услуг|
|[**getListStatuses**](#getliststatuses) | **GET** /lists/statuses | Получение списка статусов|
|[**getListTariffs**](#getlisttariffs) | **GET** /lists/tariffs | Получение списка актуальных тарифов|
|[**getOneParams**](#getoneparams) | **GET** /lists/providers/connections/{id} | Получение параметров подключения по ID|
|[**getPointOperationTypes**](#getpointoperationtypes) | **GET** /lists/operationTypes | Получение списка типов операций для точек приема/выдачи товаров|
|[**getPointTypes**](#getpointtypes) | **GET** /lists/pointTypes | Получение списка типов точек приема/выдачи товаров|
|[**getProvidersParams**](#getprovidersparams) | **GET** /lists/providers/{providerKey}/params | Получение возможных параметров для подключения к службе доставки|

# **getAllParams**
> GetAllParams200Response getAllParams()

Получение всех параметров подключения к службам доставки

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; //Лимит выборки (optional) (default to undefined)
let offset: number; //Смещение выборки (optional) (default to undefined)
let _with: string; //Список связанных данных, которые возвращаются в ответе. Возможные значения - company (optional) (default to undefined)

const { status, data } = await apiInstance.getAllParams(
    limit,
    offset,
    _with
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Лимит выборки | (optional) defaults to undefined|
| **offset** | [**number**] | Смещение выборки | (optional) defaults to undefined|
| **_with** | [**string**] | Список связанных данных, которые возвращаются в ответе. Возможные значения - company | (optional) defaults to undefined|


### Return type

**GetAllParams200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListCitiesB2cpl**
> GetListCitiesB2cpl200Response getListCitiesB2cpl()

Получение списка городов b2cpl

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям id, region, residence, zipFirst, zipLast, transportDays, flagCourier, flagPvz, flagAvia, cityGuid (optional) (default to undefined)
let fields: string; //Перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)

const { status, data } = await apiInstance.getListCitiesB2cpl(
    limit,
    offset,
    filter,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям id, region, residence, zipFirst, zipLast, transportDays, flagCourier, flagPvz, flagAvia, cityGuid | (optional) defaults to undefined|
| **fields** | [**string**] | Перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|


### Return type

**GetListCitiesB2cpl200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListCitiesBoxberry**
> GetListCitiesBoxberry200Response getListCitiesBoxberry()

Получение списка городов boxberry

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям id, cityGuid, region, district, cityGuid, courierZips (optional) (default to undefined)
let fields: string; //Перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)

const { status, data } = await apiInstance.getListCitiesBoxberry(
    limit,
    offset,
    filter,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям id, cityGuid, region, district, cityGuid, courierZips | (optional) defaults to undefined|
| **fields** | [**string**] | Перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|


### Return type

**GetListCitiesBoxberry200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListCitiesCdek**
> GetListCitiesCdek200Response getListCitiesCdek()

Получение списка городов cdek

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям fiasGuid, cityUuid, cdekId, cityName, oblName, countryCode, codCostLimit (optional) (default to undefined)
let fields: string; //Перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)

const { status, data } = await apiInstance.getListCitiesCdek(
    limit,
    offset,
    filter,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям fiasGuid, cityUuid, cdekId, cityName, oblName, countryCode, codCostLimit | (optional) defaults to undefined|
| **fields** | [**string**] | Перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|


### Return type

**GetListCitiesCdek200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListCitiesDpd**
> GetListCitiesDpd200Response getListCitiesDpd()

Получение списка городов dpd

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям id, dpdCityId, cityCode, cityGuid, cityName, countryCode, countryName, regionCode, regionName, abbreviation, isCodCost (optional) (default to undefined)
let fields: string; //Перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)

const { status, data } = await apiInstance.getListCitiesDpd(
    limit,
    offset,
    filter,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям id, dpdCityId, cityCode, cityGuid, cityName, countryCode, countryName, regionCode, regionName, abbreviation, isCodCost | (optional) defaults to undefined|
| **fields** | [**string**] | Перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|


### Return type

**GetListCitiesDpd200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListDeliveryTypes**
> Array<DeliveryType> getListDeliveryTypes()

Получение списка типов доставки

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

const { status, data } = await apiInstance.getListDeliveryTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<DeliveryType>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListPaymentMethods**
> Array<PaymentMethod> getListPaymentMethods()

Получение списка способов оплаты

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

const { status, data } = await apiInstance.getListPaymentMethods();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PaymentMethod>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListPickupTypes**
> Array<PickupType> getListPickupTypes()

Получение списка типов приема

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

const { status, data } = await apiInstance.getListPickupTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PickupType>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListPoints**
> GetListPoints200Response getListPoints()

Получение списка пунктов приема/выдачи

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям: id, providerKey, code, codeOriginal, name, postIndex, lat, lng, countryCode, region, regionType, city, cityGuid, cityType, community, communityGuid, communityType, area, street, streetType, house, block, office, address, url, email, phone, availableOperation, type, cod, paymentCash, paymentCard, multiplaceDeliveryAllowed, fittingRoom. Например: city=Москва;providerKey=cdek;availableOperation=[2,3].  Документация работы фильтра: https://docs.apiship.ru/docs/api/query-filter/  Поиск по полям city/cityGuid или community/communityGuid ищет сразу и по city/cityGuid и по community/communityGuid (optional) (default to undefined)
let fields: string; //перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)
let stateCheckOff: boolean; //Если stateCheckOff=1 отдаются также ПВЗ у которых указан не точный адрес расположения (optional) (default to undefined)
let enabledCheckOff: boolean; //Если enabledCheckOff=1 Если enabledCheckOff=1 и передан code в поле filter - отдаются также отключенные ПВЗ (optional) (default to undefined)

const { status, data } = await apiInstance.getListPoints(
    limit,
    offset,
    filter,
    fields,
    stateCheckOff,
    enabledCheckOff
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям: id, providerKey, code, codeOriginal, name, postIndex, lat, lng, countryCode, region, regionType, city, cityGuid, cityType, community, communityGuid, communityType, area, street, streetType, house, block, office, address, url, email, phone, availableOperation, type, cod, paymentCash, paymentCard, multiplaceDeliveryAllowed, fittingRoom. Например: city&#x3D;Москва;providerKey&#x3D;cdek;availableOperation&#x3D;[2,3].  Документация работы фильтра: https://docs.apiship.ru/docs/api/query-filter/  Поиск по полям city/cityGuid или community/communityGuid ищет сразу и по city/cityGuid и по community/communityGuid | (optional) defaults to undefined|
| **fields** | [**string**] | перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|
| **stateCheckOff** | [**boolean**] | Если stateCheckOff&#x3D;1 отдаются также ПВЗ у которых указан не точный адрес расположения | (optional) defaults to undefined|
| **enabledCheckOff** | [**boolean**] | Если enabledCheckOff&#x3D;1 Если enabledCheckOff&#x3D;1 и передан code в поле filter - отдаются также отключенные ПВЗ | (optional) defaults to undefined|


### Return type

**GetListPoints200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListProviderStatuses**
> GetListProviderStatuses200Response getListProviderStatuses()

Получение списка соответствия статусов

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to 100)
let offset: number; // (optional) (default to 0)
let providerKey: string; // (optional) (default to '')

const { status, data } = await apiInstance.getListProviderStatuses(
    limit,
    offset,
    providerKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to 100|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **providerKey** | [**string**] |  | (optional) defaults to ''|


### Return type

**GetListProviderStatuses200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListProviders**
> GetListProviders200Response getListProviders()

Получение списка поставщиков услуг

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям key, name (optional) (default to undefined)
let fields: string; //перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)

const { status, data } = await apiInstance.getListProviders(
    limit,
    offset,
    filter,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям key, name | (optional) defaults to undefined|
| **fields** | [**string**] | перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|


### Return type

**GetListProviders200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListServices**
> Array<AdditionalServiceObject> getListServices()

Получение списка дополнительных услуг

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let providerKey: string; //Фильтр услуг по провайдеру (optional) (default to undefined)

const { status, data } = await apiInstance.getListServices(
    providerKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerKey** | [**string**] | Фильтр услуг по провайдеру | (optional) defaults to undefined|


### Return type

**Array<AdditionalServiceObject>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListStatuses**
> GetListStatuses200Response getListStatuses()

Получение списка статусов

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям key, name (optional) (default to undefined)
let fields: string; //перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)

const { status, data } = await apiInstance.getListStatuses(
    limit,
    offset,
    filter,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям key, name | (optional) defaults to undefined|
| **fields** | [**string**] | перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|


### Return type

**GetListStatuses200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListTariffs**
> GetListTariffs200Response getListTariffs()

Получение списка актуальных тарифов

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let filter: string; //Возможна фильтрация по полям id, providerKey, name (optional) (default to undefined)
let fields: string; //перечень отдаваемых полей, если не указан, отдаются все поля (optional) (default to undefined)

const { status, data } = await apiInstance.getListTariffs(
    limit,
    offset,
    filter,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по полям id, providerKey, name | (optional) defaults to undefined|
| **fields** | [**string**] | перечень отдаваемых полей, если не указан, отдаются все поля | (optional) defaults to undefined|


### Return type

**GetListTariffs200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOneParams**
> Params getOneParams()

Получение параметров подключения по ID

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let id: number; //ID параметров подключения (default to undefined)
let _with: string; //Список связанных данных, которые возвращаются в ответе. Возможные значения - company (optional) (default to undefined)

const { status, data } = await apiInstance.getOneParams(
    id,
    _with
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | ID параметров подключения | defaults to undefined|
| **_with** | [**string**] | Список связанных данных, которые возвращаются в ответе. Возможные значения - company | (optional) defaults to undefined|


### Return type

**Params**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPointOperationTypes**
> Array<PointOperation> getPointOperationTypes()

Получение списка типов операций для точек приема/выдачи товаров

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

const { status, data } = await apiInstance.getPointOperationTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PointOperation>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPointTypes**
> Array<PointType> getPointTypes()

Получение списка типов точек приема/выдачи товаров

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

const { status, data } = await apiInstance.getPointTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PointType>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProvidersParams**
> object getProvidersParams()

Получение возможных параметров для подключения к службе доставки   [НОВЫЙ МЕТОД](#/connections/readSchemasConnection) 

### Example

```typescript
import {
    ListsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let providerKey: string; //Ключ провайдера (службы доставки) (default to undefined)

const { status, data } = await apiInstance.getProvidersParams(
    providerKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerKey** | [**string**] | Ключ провайдера (службы доставки) | defaults to undefined|


### Return type

**object**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

