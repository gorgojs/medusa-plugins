# FBSMetadataApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiMarketplaceV3OrdersMetaPost**](#apimarketplacev3ordersmetapost) | **POST** /api/marketplace/v3/orders/meta | Get Assembly Orders Metadata|
|[**apiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPut**](#apimarketplacev3ordersorderidmetacustomsdeclarationput) | **PUT** /api/marketplace/v3/orders/{orderId}/meta/customs-declaration | Add Custom Declaration number to the Order|
|[**apiV3OrdersOrderIdMetaDelete**](#apiv3ordersorderidmetadelete) | **DELETE** /api/v3/orders/{orderId}/meta | Delete Assembly Order Metadata|
|[**apiV3OrdersOrderIdMetaExpirationPut**](#apiv3ordersorderidmetaexpirationput) | **PUT** /api/v3/orders/{orderId}/meta/expiration | Add Expiration Date to the Assembly Order|
|[**apiV3OrdersOrderIdMetaGtinPut**](#apiv3ordersorderidmetagtinput) | **PUT** /api/v3/orders/{orderId}/meta/gtin | Add GTIN to the Assembly Order|
|[**apiV3OrdersOrderIdMetaImeiPut**](#apiv3ordersorderidmetaimeiput) | **PUT** /api/v3/orders/{orderId}/meta/imei | Add IMEI to the Assembly Order|
|[**apiV3OrdersOrderIdMetaSgtinPut**](#apiv3ordersorderidmetasgtinput) | **PUT** /api/v3/orders/{orderId}/meta/sgtin | Add Data Matrix Code to the Assembly Order|
|[**apiV3OrdersOrderIdMetaUinPut**](#apiv3ordersorderidmetauinput) | **PUT** /api/v3/orders/{orderId}/meta/uin | Add UIN (Unique Identification Number) to the Assembly Order|

# **apiMarketplaceV3OrdersMetaPost**
> V3OrdersMetaAPI apiMarketplaceV3OrdersMetaPost()

The method returns metadata for [assembly orders](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders/get) by the list of their IDs. <br><br> You can get the list of metadata available for an assembly order in the `requiredMeta` and `optionalMeta` fields in the response of the [Get New Assembly Orders](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders~1new/get) method. <br><br> Possible metadata:   - `imei` — [IMEI](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1imei/put)   - `uin` — [UIN](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1uin/put)   - `gtin` — [GTIN](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1gtin/put)   - `sgtin` — [Data matrix code](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1sgtin/put)   - `expiration` — [Expiration date](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1expiration/put)   - `customsDeclaration` — [customs declaration number](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1marketplace~1v3~1orders~1%7BorderId%7D~1meta~1customs-declaration/put)    If any of the metadata objects are not returned in the response, it means that the assembly order cannot have such metadata, and they cannot be added  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>getting and deleting FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration,
    V3GetMetaMultiRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let v3GetMetaMultiRequest: V3GetMetaMultiRequest; // (optional)

const { status, data } = await apiInstance.apiMarketplaceV3OrdersMetaPost(
    v3GetMetaMultiRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3GetMetaMultiRequest** | **V3GetMetaMultiRequest**|  | |


### Return type

**V3OrdersMetaAPI**

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
|**403** | Not found |  -  |
|**404** | Not found |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPut**
> apiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPut()

The method updates the customs declaration number in the [metadata of the assembly order](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1marketplace~1v3~1orders~1meta/post).  An assembly order can have only one customs declaration number.  You can add the customs declaration number only for orders in the `confirm` or `complete` [status](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders~1status/post).  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>adding FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 1000 requests | 60 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration,
    ApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)
let apiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPutRequest: ApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPutRequest; // (optional)

const { status, data } = await apiInstance.apiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPut(
    orderId,
    apiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPutRequest** | **ApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationPutRequest**|  | |
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|


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
|**409** | Error updating custom declaration number |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersOrderIdMetaDelete**
> apiV3OrdersOrderIdMetaDelete()

Removes all assembly order metadata values for the passed key. <br><br> Possible metadata are:   - `imei` — [IMEI](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1imei/put)   - `uin` — [UIN](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1uin/put)   - `gtin` — [GTIN](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1gtin/put)   - `sgtin` — [Data matrix code](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1sgtin/put)   - `customsDeclaration` — [customs declaration number](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1marketplace~1v3~1orders~1%7BorderId%7D~1meta~1customs-declaration/put)  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>getting and deleting FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)
let key: string; //Name of the metadata to remove (`imei`, `uin`, `gtin`, `sgtin`, `customsDeclaration`) (optional) (default to undefined)

const { status, data } = await apiInstance.apiV3OrdersOrderIdMetaDelete(
    orderId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|
| **key** | [**string**] | Name of the metadata to remove (&#x60;imei&#x60;, &#x60;uin&#x60;, &#x60;gtin&#x60;, &#x60;sgtin&#x60;, &#x60;customsDeclaration&#x60;) | (optional) defaults to undefined|


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
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**409** | Error deleting metadata |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersOrderIdMetaExpirationPut**
> apiV3OrdersOrderIdMetaExpirationPut()

Sets the expiration date for the assembly order. <br> The expiration date can only be added for assembly orders that are delivered by WB and are in the `confirm` status. <br> <br> You can get the uploaded data in the [metadata of the assembly order](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1marketplace~1v3~1orders~1meta/post). <br> To change the expiration date, send a request with the new date. It is impossible to remove the expiration date from the metadata of the assembly order.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>adding FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 1000 requests | 60 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration,
    ApiV3OrdersOrderIdMetaExpirationPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)
let apiV3OrdersOrderIdMetaExpirationPutRequest: ApiV3OrdersOrderIdMetaExpirationPutRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersOrderIdMetaExpirationPut(
    orderId,
    apiV3OrdersOrderIdMetaExpirationPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersOrderIdMetaExpirationPutRequest** | **ApiV3OrdersOrderIdMetaExpirationPutRequest**|  | |
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|


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
|**204** | Sent |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error updating metadata |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersOrderIdMetaGtinPut**
> apiV3OrdersOrderIdMetaGtinPut()

Sets the GTIN (Belarus product unique identifier) for the assembly order. The assembly order can only have one GTIN. You can add the code only for assembly orders in the `confirm` status.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>adding FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 1000 requests | 60 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration,
    ApiV3OrdersOrderIdMetaGtinPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)
let apiV3OrdersOrderIdMetaGtinPutRequest: ApiV3OrdersOrderIdMetaGtinPutRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersOrderIdMetaGtinPut(
    orderId,
    apiV3OrdersOrderIdMetaGtinPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersOrderIdMetaGtinPutRequest** | **ApiV3OrdersOrderIdMetaGtinPutRequest**|  | |
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|


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
|**409** | Error updating metadata |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersOrderIdMetaImeiPut**
> apiV3OrdersOrderIdMetaImeiPut()

Sets the IMEI for the assembly order. <br><br> The assembly order can have only one IMEI. If a device has two IMEIs — **IMEI** and **IMEI2** or **IMEI1** and **IMEI2** — you should only specify **IMEI** or **IMEI1**. You don\'t need to specify **IMEI2**.<br><br> You can add the code only for assembly orders in the `confirm` status.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>adding FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 1000 requests | 60 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration,
    ApiV3OrdersOrderIdMetaImeiPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)
let apiV3OrdersOrderIdMetaImeiPutRequest: ApiV3OrdersOrderIdMetaImeiPutRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersOrderIdMetaImeiPut(
    orderId,
    apiV3OrdersOrderIdMetaImeiPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersOrderIdMetaImeiPutRequest** | **ApiV3OrdersOrderIdMetaImeiPutRequest**|  | |
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|


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
|**409** | Error updating metadata |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersOrderIdMetaSgtinPut**
> apiV3OrdersOrderIdMetaSgtinPut()

The method allows attaching a Data Matrix code [Chestny ZNAK](https://chestnyznak.ru/en) to an assembly order.  Attaching a Data Matrix code to an assembly order is only possible if this field is returned in the response of the method [to get the metadata of the order](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1marketplace~1v3~1orders~1meta/post), and the assembly order is in the confirm status.  The loaded Data Matrix code can be retrieved through the method [to get the metadata of the order](/openapi/orders-fbs#tag/FBS-Metadata/paths/~1api~1marketplace~1v3~1orders~1meta/post)  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>adding FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 1000 requests | 60 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration,
    ApiV3OrdersOrderIdMetaSgtinPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)
let apiV3OrdersOrderIdMetaSgtinPutRequest: ApiV3OrdersOrderIdMetaSgtinPutRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersOrderIdMetaSgtinPut(
    orderId,
    apiV3OrdersOrderIdMetaSgtinPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersOrderIdMetaSgtinPutRequest** | **ApiV3OrdersOrderIdMetaSgtinPutRequest**|  | |
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|


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
|**204** | Sent |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error adding a Data Matrix code |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersOrderIdMetaUinPut**
> apiV3OrdersOrderIdMetaUinPut()

Sets the UIN for the assembly order. The assembly order can only have one UIN. You can add the code only for assembly orders in the `confirm` status.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods for <strong>adding FBS metadata</strong>:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 1000 requests | 60 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSMetadataApi,
    Configuration,
    ApiV3OrdersOrderIdMetaUinPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSMetadataApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)
let apiV3OrdersOrderIdMetaUinPutRequest: ApiV3OrdersOrderIdMetaUinPutRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersOrderIdMetaUinPut(
    orderId,
    apiV3OrdersOrderIdMetaUinPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersOrderIdMetaUinPutRequest** | **ApiV3OrdersOrderIdMetaUinPutRequest**|  | |
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|


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
|**409** | Error updating metadata |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

