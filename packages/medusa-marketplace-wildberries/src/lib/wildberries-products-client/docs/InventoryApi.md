# InventoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV3StocksWarehouseIdDelete**](#apiv3stockswarehouseiddelete) | **DELETE** /api/v3/stocks/{warehouseId} | Delete inventory|
|[**apiV3StocksWarehouseIdPost**](#apiv3stockswarehouseidpost) | **POST** /api/v3/stocks/{warehouseId} | Get inventory|
|[**apiV3StocksWarehouseIdPut**](#apiv3stockswarehouseidput) | **PUT** /api/v3/stocks/{warehouseId} | Update inventory|

# **apiV3StocksWarehouseIdDelete**
> apiV3StocksWarehouseIdDelete(apiV3StocksWarehouseIdDeleteRequest)

Deletes product inventory.  <div class=\"description_important\">   <strong>This action is irreversible</strong>. Deleted stock will require re-uploading to continue sales </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>inventory</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    InventoryApi,
    Configuration,
    ApiV3StocksWarehouseIdDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let warehouseId: number; //The seller\'s warehouse ID (default to undefined)
let apiV3StocksWarehouseIdDeleteRequest: ApiV3StocksWarehouseIdDeleteRequest; //

const { status, data } = await apiInstance.apiV3StocksWarehouseIdDelete(
    warehouseId,
    apiV3StocksWarehouseIdDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3StocksWarehouseIdDeleteRequest** | **ApiV3StocksWarehouseIdDeleteRequest**|  | |
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
|**204** | Deleted |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error deleting inventory |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3StocksWarehouseIdPost**
> ApiV3StocksWarehouseIdPost200Response apiV3StocksWarehouseIdPost(apiV3StocksWarehouseIdPostRequest)

Returns product inventory.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>inventory</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    InventoryApi,
    Configuration,
    ApiV3StocksWarehouseIdPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let warehouseId: number; //The seller\'s warehouse ID (default to undefined)
let apiV3StocksWarehouseIdPostRequest: ApiV3StocksWarehouseIdPostRequest; //

const { status, data } = await apiInstance.apiV3StocksWarehouseIdPost(
    warehouseId,
    apiV3StocksWarehouseIdPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3StocksWarehouseIdPostRequest** | **ApiV3StocksWarehouseIdPostRequest**|  | |
| **warehouseId** | [**number**] | The seller\&#39;s warehouse ID | defaults to undefined|


### Return type

**ApiV3StocksWarehouseIdPost200Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3StocksWarehouseIdPut**
> apiV3StocksWarehouseIdPut()

Updates product inventory.  <div class=\"description_important\">   The names of the query parameters are not validated. If invalid names are sent, the response will be successful(204), but the remaining amounts will not be updated. </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all <strong>inventory</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 300 requests | 200 milliseconds | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    InventoryApi,
    Configuration,
    ApiV3StocksWarehouseIdPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let warehouseId: number; //The seller\'s warehouse ID (default to undefined)
let apiV3StocksWarehouseIdPutRequest: ApiV3StocksWarehouseIdPutRequest; // (optional)

const { status, data } = await apiInstance.apiV3StocksWarehouseIdPut(
    warehouseId,
    apiV3StocksWarehouseIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3StocksWarehouseIdPutRequest** | **ApiV3StocksWarehouseIdPutRequest**|  | |
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
|**406** | Update of the inventory is blocked |  -  |
|**409** | Error updating inventory |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

