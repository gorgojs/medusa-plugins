# PricingStrategyAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pricingCompetitors**](#pricingcompetitors) | **POST** /v1/pricing-strategy/competitors/list | Список конкурентов|
|[**pricingCreate**](#pricingcreate) | **POST** /v1/pricing-strategy/create | Создать стратегию|
|[**pricingDelete**](#pricingdelete) | **POST** /v1/pricing-strategy/delete | Удалить стратегию|
|[**pricingIds**](#pricingids) | **POST** /v1/pricing-strategy/strategy-ids-by-product-ids | Список идентификаторов стратегий|
|[**pricingInfo**](#pricinginfo) | **POST** /v1/pricing-strategy/info | Информация о стратегии|
|[**pricingItemsAdd**](#pricingitemsadd) | **POST** /v1/pricing-strategy/products/add | Добавить товары в стратегию|
|[**pricingItemsDelete**](#pricingitemsdelete) | **POST** /v1/pricing-strategy/products/delete | Удалить товары из стратегии|
|[**pricingItemsInfo**](#pricingitemsinfo) | **POST** /v1/pricing-strategy/product/info | Цена товара у конкурента|
|[**pricingItemsList**](#pricingitemslist) | **POST** /v1/pricing-strategy/products/list | Список товаров в стратегии|
|[**pricingList**](#pricinglist) | **POST** /v1/pricing-strategy/list | Список стратегий|
|[**pricingStatus**](#pricingstatus) | **POST** /v1/pricing-strategy/status | Изменить статус стратегии|
|[**pricingUpdate**](#pricingupdate) | **POST** /v1/pricing-strategy/update | Обновить стратегию|

# **pricingCompetitors**
> V1GetCompetitorsResponse pricingCompetitors(v1GetCompetitorsRequest)

Метод для получения списка конкурентов — продавцов с похожими товарами в других интернет-магазинах и маркетплейсах.

### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1GetCompetitorsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1GetCompetitorsRequest: V1GetCompetitorsRequest; //

const { status, data } = await apiInstance.pricingCompetitors(
    v1GetCompetitorsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetCompetitorsRequest** | **V1GetCompetitorsRequest**|  | |


### Return type

**V1GetCompetitorsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список конкурентов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingCreate**
> V1CreatePricingStrategyResponse pricingCreate(v1CreatePricingStrategyRequest)



### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1CreatePricingStrategyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1CreatePricingStrategyRequest: V1CreatePricingStrategyRequest; //

const { status, data } = await apiInstance.pricingCreate(
    v1CreatePricingStrategyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreatePricingStrategyRequest** | **V1CreatePricingStrategyRequest**|  | |


### Return type

**V1CreatePricingStrategyResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Стратегия создана |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingDelete**
> object pricingDelete(v1StrategyRequest)

Можно удалить любую стратегию кроме системной.

### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1StrategyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1StrategyRequest: V1StrategyRequest; //

const { status, data } = await apiInstance.pricingDelete(
    v1StrategyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1StrategyRequest** | **V1StrategyRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Стратегия удалена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingIds**
> V1GetStrategyIDsByItemIDsResponse pricingIds(v1ItemIDsRequest)



### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1ItemIDsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1ItemIDsRequest: V1ItemIDsRequest; //

const { status, data } = await apiInstance.pricingIds(
    v1ItemIDsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ItemIDsRequest** | **V1ItemIDsRequest**|  | |


### Return type

**V1GetStrategyIDsByItemIDsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список идентификаторов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingInfo**
> V1GetStrategyResponse pricingInfo(v1StrategyRequest)



### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1StrategyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1StrategyRequest: V1StrategyRequest; //

const { status, data } = await apiInstance.pricingInfo(
    v1StrategyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1StrategyRequest** | **V1StrategyRequest**|  | |


### Return type

**V1GetStrategyResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о стратегии |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingItemsAdd**
> V1AddStrategyItemsResponse pricingItemsAdd(v1AddStrategyItemsRequest)



### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1AddStrategyItemsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1AddStrategyItemsRequest: V1AddStrategyItemsRequest; //

const { status, data } = await apiInstance.pricingItemsAdd(
    v1AddStrategyItemsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AddStrategyItemsRequest** | **V1AddStrategyItemsRequest**|  | |


### Return type

**V1AddStrategyItemsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ошибки при добавлении товаров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingItemsDelete**
> V1DeleteStrategyItemsResponse pricingItemsDelete(v1ItemIDsRequest)



### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1ItemIDsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1ItemIDsRequest: V1ItemIDsRequest; //

const { status, data } = await apiInstance.pricingItemsDelete(
    v1ItemIDsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ItemIDsRequest** | **V1ItemIDsRequest**|  | |


### Return type

**V1DeleteStrategyItemsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ошибки при удалении товаров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingItemsInfo**
> V1GetStrategyItemInfoResponse pricingItemsInfo(v1GetStrategyItemInfoRequest)

Если вы добавили товар в стратегию ценообразования, метод вернёт цену и ссылку на товар у конкурента.

### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1GetStrategyItemInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1GetStrategyItemInfoRequest: V1GetStrategyItemInfoRequest; //

const { status, data } = await apiInstance.pricingItemsInfo(
    v1GetStrategyItemInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetStrategyItemInfoRequest** | **V1GetStrategyItemInfoRequest**|  | |


### Return type

**V1GetStrategyItemInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Цена товара у конкурента |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingItemsList**
> V1GetStrategyItemsResponse pricingItemsList(v1StrategyRequest)



### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1StrategyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1StrategyRequest: V1StrategyRequest; //

const { status, data } = await apiInstance.pricingItemsList(
    v1StrategyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1StrategyRequest** | **V1StrategyRequest**|  | |


### Return type

**V1GetStrategyItemsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingList**
> V1GetStrategyListResponse pricingList(v1GetStrategyListRequest)



### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1GetStrategyListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1GetStrategyListRequest: V1GetStrategyListRequest; //

const { status, data } = await apiInstance.pricingList(
    v1GetStrategyListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetStrategyListRequest** | **V1GetStrategyListRequest**|  | |


### Return type

**V1GetStrategyListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список стратегий |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingStatus**
> object pricingStatus(v1UpdateStatusStrategyRequest)

Можно изменить статус любой стратегии кроме системной.

### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1UpdateStatusStrategyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1UpdateStatusStrategyRequest: V1UpdateStatusStrategyRequest; //

const { status, data } = await apiInstance.pricingStatus(
    v1UpdateStatusStrategyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1UpdateStatusStrategyRequest** | **V1UpdateStatusStrategyRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус стратегии изменён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pricingUpdate**
> object pricingUpdate(v1UpdatePricingStrategyRequest)

Можно обновить все стратегии кроме системной.

### Example

```typescript
import {
    PricingStrategyAPIApi,
    Configuration,
    V1UpdatePricingStrategyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricingStrategyAPIApi(configuration);

let v1UpdatePricingStrategyRequest: V1UpdatePricingStrategyRequest; //

const { status, data } = await apiInstance.pricingUpdate(
    v1UpdatePricingStrategyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1UpdatePricingStrategyRequest** | **V1UpdatePricingStrategyRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Стратегия обновлена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

