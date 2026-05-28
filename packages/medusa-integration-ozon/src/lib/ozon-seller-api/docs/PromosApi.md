# PromosApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**promos**](#promos) | **GET** /v1/actions | Список акций|
|[**promosCandidates**](#promoscandidates) | **POST** /v1/actions/candidates | Список доступных для акции товаров|
|[**promosProducts**](#promosproducts) | **POST** /v1/actions/products | Список участвующих в акции товаров|
|[**promosProductsActivate**](#promosproductsactivate) | **POST** /v1/actions/products/activate | Добавить товар в акцию|
|[**promosProductsDeactivate**](#promosproductsdeactivate) | **POST** /v1/actions/products/deactivate | Удалить товары из акции|
|[**promosTaskApprove**](#promostaskapprove) | **POST** /v1/actions/discounts-task/approve | Согласовать заявку на скидку|
|[**promosTaskDecline**](#promostaskdecline) | **POST** /v1/actions/discounts-task/decline | Отклонить заявку на скидку|
|[**promosTaskList**](#promostasklist) | **POST** /v1/actions/discounts-task/list | Список заявок на скидку|

# **promos**
> SellerApiGetSellerActionsV1Response promos()

Метод для получения списка акций Ozon, в которых можно участвовать.  [Подробнее об акциях Ozon](https://seller-edu.ozon.ru/ceny-i-akcii/akcii-skidki-i-kupony/promo) 

### Example

```typescript
import {
    PromosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

const { status, data } = await apiInstance.promos();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SellerApiGetSellerActionsV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список акций |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promosCandidates**
> SellerApiGetSellerProductV1Response promosCandidates()

Метод для получения списка товаров, которые могут участвовать в акции, по её идентификатору. <br>  <aside class=\"warning\"> С 5 мая 2025 параметр пагинации <tt>offset<tt> будет отключён. Переключитесь на параметр <tt>last_id<tt>. </aside> 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    SellerApiGetSellerProductV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let sellerApiGetSellerProductV1Request: SellerApiGetSellerProductV1Request; // (optional)

const { status, data } = await apiInstance.promosCandidates(
    sellerApiGetSellerProductV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellerApiGetSellerProductV1Request** | **SellerApiGetSellerProductV1Request**|  | |


### Return type

**SellerApiGetSellerProductV1Response**

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

# **promosProducts**
> SellerApiGetSellerProductV1Response promosProducts()

Метод для получения списка товаров, участвующих в акции, по её идентификатору. <br>  <aside class=\"warning\"> С 5 мая 2025 параметр пагинации <tt>offset<tt> будет отключён. Переключитесь на параметр <tt>last_id<tt>. </aside> 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    SellerApiGetSellerProductV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let sellerApiGetSellerProductV1Request: SellerApiGetSellerProductV1Request; // (optional)

const { status, data } = await apiInstance.promosProducts(
    sellerApiGetSellerProductV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellerApiGetSellerProductV1Request** | **SellerApiGetSellerProductV1Request**|  | |


### Return type

**SellerApiGetSellerProductV1Response**

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

# **promosProductsActivate**
> SellerApiProductV1Response promosProductsActivate(sellerApiActivateProductV1Request)

Метод для добавления товаров в доступную акцию.

### Example

```typescript
import {
    PromosApi,
    Configuration,
    SellerApiActivateProductV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let sellerApiActivateProductV1Request: SellerApiActivateProductV1Request; //

const { status, data } = await apiInstance.promosProductsActivate(
    sellerApiActivateProductV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellerApiActivateProductV1Request** | **SellerApiActivateProductV1Request**|  | |


### Return type

**SellerApiProductV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Товар добавлен в акцию |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promosProductsDeactivate**
> SellerApiProductV1ResponseDeactivate promosProductsDeactivate(sellerApiProductIDsV1Request)

Метод для удаления товаров из акции.

### Example

```typescript
import {
    PromosApi,
    Configuration,
    SellerApiProductIDsV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let sellerApiProductIDsV1Request: SellerApiProductIDsV1Request; //

const { status, data } = await apiInstance.promosProductsDeactivate(
    sellerApiProductIDsV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellerApiProductIDsV1Request** | **SellerApiProductIDsV1Request**|  | |


### Return type

**SellerApiProductV1ResponseDeactivate**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Товары удалены из акции |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promosTaskApprove**
> V1ApproveDeclineDiscountTasksResponse promosTaskApprove(v1ApproveDiscountTasksRequest)

Вы можете согласовывать заявки в статусах: `NEW` — новые, `SEEN` — просмотренные. 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    V1ApproveDiscountTasksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let v1ApproveDiscountTasksRequest: V1ApproveDiscountTasksRequest; //

const { status, data } = await apiInstance.promosTaskApprove(
    v1ApproveDiscountTasksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ApproveDiscountTasksRequest** | **V1ApproveDiscountTasksRequest**|  | |


### Return type

**V1ApproveDeclineDiscountTasksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заявки согласованы |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promosTaskDecline**
> V1ApproveDeclineDiscountTasksResponse promosTaskDecline(v1DeclineDiscountTasksRequest)

Вы можете отклонить заявки в статусах: `NEW` — новые, `SEEN` — просмотренные. 

### Example

```typescript
import {
    PromosApi,
    Configuration,
    V1DeclineDiscountTasksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let v1DeclineDiscountTasksRequest: V1DeclineDiscountTasksRequest; //

const { status, data } = await apiInstance.promosTaskDecline(
    v1DeclineDiscountTasksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1DeclineDiscountTasksRequest** | **V1DeclineDiscountTasksRequest**|  | |


### Return type

**V1ApproveDeclineDiscountTasksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заявки отклонены |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **promosTaskList**
> V1GetDiscountTaskListResponse promosTaskList(v1GetDiscountTaskListRequest)

Метод для получения списка товаров, которые покупатели хотят купить со скидкой.

### Example

```typescript
import {
    PromosApi,
    Configuration,
    V1GetDiscountTaskListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PromosApi(configuration);

let v1GetDiscountTaskListRequest: V1GetDiscountTaskListRequest; //

const { status, data } = await apiInstance.promosTaskList(
    v1GetDiscountTaskListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetDiscountTaskListRequest** | **V1GetDiscountTaskListRequest**|  | |


### Return type

**V1GetDiscountTaskListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список заявок |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

