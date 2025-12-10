# SellerWarehousesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV3DbwWarehousesWarehouseIdContactsGet**](#apiv3dbwwarehouseswarehouseidcontactsget) | **GET** /api/v3/dbw/warehouses/{warehouseId}/contacts | Contacts list|
|[**apiV3DbwWarehousesWarehouseIdContactsPut**](#apiv3dbwwarehouseswarehouseidcontactsput) | **PUT** /api/v3/dbw/warehouses/{warehouseId}/contacts | Update contacts list|
|[**apiV3OfficesGet**](#apiv3officesget) | **GET** /api/v3/offices | Get offices|
|[**apiV3WarehousesGet**](#apiv3warehousesget) | **GET** /api/v3/warehouses | Get warehouses|
|[**apiV3WarehousesPost**](#apiv3warehousespost) | **POST** /api/v3/warehouses | Create warehouse|
|[**apiV3WarehousesWarehouseIdDelete**](#apiv3warehouseswarehouseiddelete) | **DELETE** /api/v3/warehouses/{warehouseId} | Delete warehouse|
|[**apiV3WarehousesWarehouseIdPut**](#apiv3warehouseswarehouseidput) | **PUT** /api/v3/warehouses/{warehouseId} | Update warehouse|

# **apiV3DbwWarehousesWarehouseIdContactsGet**
> ApiV3DbwWarehousesWarehouseIdContactsGet200Response apiV3DbwWarehousesWarehouseIdContactsGet()

Returns a list of contacts linked to the seller\'s warehouse. <br> Only for warehouses with delivery type `3` — Delivery by WB courier (DBW).  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a>  per one seller\'s account for DBW methods: <ul>     <li>for getting and updating contact lists</li>     <li>for getting and deleting metadata</li>     <li>assembly orders</li> </ul>   | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  </div> 

### Example

```typescript
import {
    SellerWarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerWarehousesApi(configuration);

let warehouseId: number; //The seller\'s warehouse ID (default to undefined)

const { status, data } = await apiInstance.apiV3DbwWarehousesWarehouseIdContactsGet(
    warehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**number**] | The seller\&#39;s warehouse ID | defaults to undefined|


### Return type

**ApiV3DbwWarehousesWarehouseIdContactsGet200Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3DbwWarehousesWarehouseIdContactsPut**
> apiV3DbwWarehousesWarehouseIdContactsPut(storeContactRequestBody)

Updates the seller\'s warehouse contact list. <br>  <div class=\"description_important\">   The contact list is overwritten upon update. Therefore, you need to include <strong>all</strong> contact list parameters in the request, including those you do not intend to update. </div>  Only for warehouses with delivery type `3` — WB courier (DBW).<br>  A maximum of 5 contacts can be added to the warehouse. To delete contacts, send an empty `contacts` array.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a>  per one seller\'s account for DBW methods: <ul>     <li>for getting and updating contact lists</li>     <li>for getting and deleting metadata</li>     <li>assembly orders</li> </ul>   | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  </div> 

### Example

```typescript
import {
    SellerWarehousesApi,
    Configuration,
    StoreContactRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerWarehousesApi(configuration);

let warehouseId: number; //The seller\'s warehouse ID (default to undefined)
let storeContactRequestBody: StoreContactRequestBody; //

const { status, data } = await apiInstance.apiV3DbwWarehousesWarehouseIdContactsPut(
    warehouseId,
    storeContactRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storeContactRequestBody** | **StoreContactRequestBody**|  | |
| **warehouseId** | [**number**] | The seller\&#39;s warehouse ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OfficesGet**
> Array<Office> apiV3OfficesGet()

Returns a list of all offices to link to seller warehouse.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>seller warehouses</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    SellerWarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerWarehousesApi(configuration);

const { status, data } = await apiInstance.apiV3OfficesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Office>**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3WarehousesGet**
> Array<Warehouse> apiV3WarehousesGet()

Returns a list of all seller\'s warehouses.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>seller warehouses</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    SellerWarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerWarehousesApi(configuration);

const { status, data } = await apiInstance.apiV3WarehousesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Warehouse>**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3WarehousesPost**
> ApiV3WarehousesPost201Response apiV3WarehousesPost(apiV3WarehousesPostRequest)

Creates a seller\'s warehouse. You cannot link an office that is already in use.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>seller warehouses</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    SellerWarehousesApi,
    Configuration,
    ApiV3WarehousesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerWarehousesApi(configuration);

let apiV3WarehousesPostRequest: ApiV3WarehousesPostRequest; //

const { status, data } = await apiInstance.apiV3WarehousesPost(
    apiV3WarehousesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3WarehousesPostRequest** | **ApiV3WarehousesPostRequest**|  | |


### Return type

**ApiV3WarehousesPost201Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error creating a new warehouse |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3WarehousesWarehouseIdDelete**
> apiV3WarehousesWarehouseIdDelete()

Deletes the seller\'s warehouse.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>seller warehouses</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    SellerWarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerWarehousesApi(configuration);

let warehouseId: number; //The seller\'s warehouse ID (default to undefined)

const { status, data } = await apiInstance.apiV3WarehousesWarehouseIdDelete(
    warehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**number**] | The seller\&#39;s warehouse ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3WarehousesWarehouseIdPut**
> apiV3WarehousesWarehouseIdPut(apiV3WarehousesWarehouseIdPutRequest)

Updates the seller\'s warehouse details. Changing the linked office is allowed once per day. You cannot link an office that is already in use.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>seller warehouses</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    SellerWarehousesApi,
    Configuration,
    ApiV3WarehousesWarehouseIdPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerWarehousesApi(configuration);

let warehouseId: number; //The seller\'s warehouse ID (default to undefined)
let apiV3WarehousesWarehouseIdPutRequest: ApiV3WarehousesWarehouseIdPutRequest; //

const { status, data } = await apiInstance.apiV3WarehousesWarehouseIdPut(
    warehouseId,
    apiV3WarehousesWarehouseIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3WarehousesWarehouseIdPutRequest** | **ApiV3WarehousesWarehouseIdPutRequest**|  | |
| **warehouseId** | [**number**] | The seller\&#39;s warehouse ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error updating a warehouse |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

