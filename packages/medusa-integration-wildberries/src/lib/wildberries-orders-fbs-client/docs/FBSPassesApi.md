# FBSPassesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV3PassesGet**](#apiv3passesget) | **GET** /api/v3/passes | Get Passes|
|[**apiV3PassesOfficesGet**](#apiv3passesofficesget) | **GET** /api/v3/passes/offices | Get Offices for Pass|
|[**apiV3PassesPassIdDelete**](#apiv3passespassiddelete) | **DELETE** /api/v3/passes/{passId} | Delete the Pass|
|[**apiV3PassesPassIdPut**](#apiv3passespassidput) | **PUT** /api/v3/passes/{passId} | Update Pass|
|[**apiV3PassesPost**](#apiv3passespost) | **POST** /api/v3/passes | Create Pass|

# **apiV3PassesGet**
> Array<Pass> apiV3PassesGet()

Returns a list of all seller\'s passes.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSPassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSPassesApi(configuration);

const { status, data } = await apiInstance.apiV3PassesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Pass>**

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

# **apiV3PassesOfficesGet**
> Array<PassOffice> apiV3PassesOfficesGet()

Returns a list of offices that require a pass.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSPassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSPassesApi(configuration);

const { status, data } = await apiInstance.apiV3PassesOfficesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PassOffice>**

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

# **apiV3PassesPassIdDelete**
> apiV3PassesPassIdDelete()

Deletes the seller\'s pass  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSPassesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSPassesApi(configuration);

let passId: number; //Pass ID (default to undefined)

const { status, data } = await apiInstance.apiV3PassesPassIdDelete(
    passId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passId** | [**number**] | Pass ID | defaults to undefined|


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

# **apiV3PassesPassIdPut**
> apiV3PassesPassIdPut(apiV3PassesPostRequest)

Updates the seller\'s pass detail  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSPassesApi,
    Configuration,
    ApiV3PassesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSPassesApi(configuration);

let passId: number; //Pass ID (default to undefined)
let apiV3PassesPostRequest: ApiV3PassesPostRequest; //The total length of the full name is limited from 6 to 100 characters. The car number can contain only letters and numbers. 

const { status, data } = await apiInstance.apiV3PassesPassIdPut(
    passId,
    apiV3PassesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3PassesPostRequest** | **ApiV3PassesPostRequest**| The total length of the full name is limited from 6 to 100 characters. The car number can contain only letters and numbers.  | |
| **passId** | [**number**] | Pass ID | defaults to undefined|


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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3PassesPost**
> ApiV3PassesPost201Response apiV3PassesPost(apiV3PassesPostRequest)

Creates a supplier pass. <br> The pass is valid for 48 hours from the time of creation. <div class=\"description_limit\">   Maximum of 1 request per 10 <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">minutes</a> per one seller\'s account </div> 

### Example

```typescript
import {
    FBSPassesApi,
    Configuration,
    ApiV3PassesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSPassesApi(configuration);

let apiV3PassesPostRequest: ApiV3PassesPostRequest; //The total length of the full name is limited from 6 to 100 characters. The car number can contain only letters and numbers.

const { status, data } = await apiInstance.apiV3PassesPost(
    apiV3PassesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3PassesPostRequest** | **ApiV3PassesPostRequest**| The total length of the full name is limited from 6 to 100 characters. The car number can contain only letters and numbers. | |


### Return type

**ApiV3PassesPost201Response**

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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

