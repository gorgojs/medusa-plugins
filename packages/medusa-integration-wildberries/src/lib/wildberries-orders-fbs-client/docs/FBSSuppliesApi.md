# FBSSuppliesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiMarketplaceV3SuppliesSupplyIdOrderIdsGet**](#apimarketplacev3suppliessupplyidorderidsget) | **GET** /api/marketplace/v3/supplies/{supplyId}/order-ids | Get Supply Assembly Order IDs|
|[**apiMarketplaceV3SuppliesSupplyIdOrdersPatch**](#apimarketplacev3suppliessupplyidorderspatch) | **PATCH** /api/marketplace/v3/supplies/{supplyId}/orders | Add Assembly Orders to the Supply|
|[**apiV3SuppliesGet**](#apiv3suppliesget) | **GET** /api/v3/supplies | Get a Supplies List|
|[**apiV3SuppliesPost**](#apiv3suppliespost) | **POST** /api/v3/supplies | Create a New Supply|
|[**apiV3SuppliesSupplyIdBarcodeGet**](#apiv3suppliessupplyidbarcodeget) | **GET** /api/v3/supplies/{supplyId}/barcode | Get the Supply QR Code|
|[**apiV3SuppliesSupplyIdDelete**](#apiv3suppliessupplyiddelete) | **DELETE** /api/v3/supplies/{supplyId} | Delete the Supply|
|[**apiV3SuppliesSupplyIdDeliverPatch**](#apiv3suppliessupplyiddeliverpatch) | **PATCH** /api/v3/supplies/{supplyId}/deliver | Move the Supply to the Delivery|
|[**apiV3SuppliesSupplyIdGet**](#apiv3suppliessupplyidget) | **GET** /api/v3/supplies/{supplyId} | Get Supply Details|
|[**apiV3SuppliesSupplyIdTrbxDelete**](#apiv3suppliessupplyidtrbxdelete) | **DELETE** /api/v3/supplies/{supplyId}/trbx | Delete Boxes from the Supply|
|[**apiV3SuppliesSupplyIdTrbxGet**](#apiv3suppliessupplyidtrbxget) | **GET** /api/v3/supplies/{supplyId}/trbx | Get Supply Boxes List|
|[**apiV3SuppliesSupplyIdTrbxPost**](#apiv3suppliessupplyidtrbxpost) | **POST** /api/v3/supplies/{supplyId}/trbx | Add Boxes to the Supply|
|[**apiV3SuppliesSupplyIdTrbxStickersPost**](#apiv3suppliessupplyidtrbxstickerspost) | **POST** /api/v3/supplies/{supplyId}/trbx/stickers | Get the Supply Box QR Code Stickers|

# **apiMarketplaceV3SuppliesSupplyIdOrderIdsGet**
> V3SupplyOrderIDsAPI apiMarketplaceV3SuppliesSupplyIdOrderIdsGet()

The method returns assembly orders IDs assigned to the supply.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)

const { status, data } = await apiInstance.apiMarketplaceV3SuppliesSupplyIdOrderIdsGet(
    supplyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


### Return type

**V3SupplyOrderIDsAPI**

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
|**404** | Not found |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMarketplaceV3SuppliesSupplyIdOrdersPatch**
> apiMarketplaceV3SuppliesSupplyIdOrdersPatch(apiMarketplaceV3SuppliesSupplyIdOrdersPatchRequest)

The method adds up to 100 [assembly orders](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders/get) to the supply and moves it to the `confirm` [status](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders~1status/post).  It can also move the assembly orders:   - between active supplies   - from a closed to an active supply, if the assembly order requires [reshipment](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1supplies~1orders~1reshipment/get).  <div class=\"description_important\">   You can add assembly orders of any dimensional type to an empty supply. After adding the first assembly order, the supply acquires the dimensional type of this assembly order from the <code>cargoType</code> <a href=\"/openapi/orders-fbs#tag/FBS-Supplies/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get\">field</a>.   <br>   After that, you can only add assembly orders of the same dimensional type as the supply. </div>  <div class=\"description_important\"> Assembly orders received at different warehouses cannot be added to the delivery. </div>  <div class=\"description_important\">   You can add assembly orders of any type to an empty supply: crossborder or non-crossborder. After adding the first assembly order, the supply acquires the type of this assembly order from the <code>crossBorderType</code> field</a>.   <br>   After that, you can add to the supply only the assembly orders of the same type as the supply. </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration,
    ApiMarketplaceV3SuppliesSupplyIdOrdersPatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)
let apiMarketplaceV3SuppliesSupplyIdOrdersPatchRequest: ApiMarketplaceV3SuppliesSupplyIdOrdersPatchRequest; //

const { status, data } = await apiInstance.apiMarketplaceV3SuppliesSupplyIdOrdersPatch(
    supplyId,
    apiMarketplaceV3SuppliesSupplyIdOrdersPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiMarketplaceV3SuppliesSupplyIdOrdersPatchRequest** | **ApiMarketplaceV3SuppliesSupplyIdOrdersPatchRequest**|  | |
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


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
|**204** | The assembly orders assigned to the supply |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error adding the assembly order to the supply |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesGet**
> ApiV3SuppliesGet200Response apiV3SuppliesGet()

Returns the supply list.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let limit: number; //Pagination parameter. Sets the limit for the amount of data returned. (default to undefined)
let next: number; //Pagination parameter. Sets the value from which to retrieve the next batch. It should start at 0 to get the full list of data. For the subsequent requests, you must take the value from the `next` field in the response. (default to undefined)

const { status, data } = await apiInstance.apiV3SuppliesGet(
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Pagination parameter. Sets the limit for the amount of data returned. | defaults to undefined|
| **next** | [**number**] | Pagination parameter. Sets the value from which to retrieve the next batch. It should start at 0 to get the full list of data. For the subsequent requests, you must take the value from the &#x60;next&#x60; field in the response. | defaults to undefined|


### Return type

**ApiV3SuppliesGet200Response**

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

# **apiV3SuppliesPost**
> ApiV3SuppliesPost201Response apiV3SuppliesPost(apiV3SuppliesPostRequest)

**Supplies limitations**:  - Supplies applicable only for assembly orders in the FBS (Fulfillment by Seller) delivery. - All assembly orders added to supply automatically transferred from the `new` status to the `confirm` status. - Please note that if you will `cancel` (`Canceled by the seller`) the order, we will automatically remove it from the supply. - A supply can only be assembled from assembly jobs (orders) with the same dimensional type (cargoType). A new supply does not have a dimensional attribute. When the first assembly order is added to a supply, the supply acquires the dimensional attribute of that assembly order.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration,
    ApiV3SuppliesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let apiV3SuppliesPostRequest: ApiV3SuppliesPostRequest; //

const { status, data } = await apiInstance.apiV3SuppliesPost(
    apiV3SuppliesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3SuppliesPostRequest** | **ApiV3SuppliesPostRequest**|  | |


### Return type

**ApiV3SuppliesPost201Response**

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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesSupplyIdBarcodeGet**
> ApiV3SuppliesSupplyIdBarcodeGet200Response apiV3SuppliesSupplyIdBarcodeGet()

Returns the QR code in svg, zplv (vertical), zplh (horizontal), png. <br> Available only after the supply has been transferred to the delivery. Available dimensions: <dd>580x400 px  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)
let type: 'svg' | 'zplv' | 'zplh' | 'png'; //Sticker format (default to undefined)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdBarcodeGet(
    supplyId,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplyId** | [**string**] | Supply ID | defaults to undefined|
| **type** | [**&#39;svg&#39; | &#39;zplv&#39; | &#39;zplh&#39; | &#39;png&#39;**]**Array<&#39;svg&#39; &#124; &#39;zplv&#39; &#124; &#39;zplh&#39; &#124; &#39;png&#39;>** | Sticker format | defaults to undefined|


### Return type

**ApiV3SuppliesSupplyIdBarcodeGet200Response**

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
|**404** | Not found |  -  |
|**409** | Error requesting data |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesSupplyIdDelete**
> apiV3SuppliesSupplyIdDelete()

Deleted the supply if it is active and does not contain any assembly orders.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdDelete(
    supplyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


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
|**404** | Not found |  -  |
|**409** | The supply contains orders |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesSupplyIdDeliverPatch**
> apiV3SuppliesSupplyIdDeliverPatch()

Closes the supply and moves all assembly orders to `complete` (`In Delivery`) status. You cannot add any assembly orders to the supply after it is closed.  If the supply wasn\'t handed over for delivery, than scanning its QR code or accepting the first product will automatically close the supply.  You can transfer the supply to delivery only if it contains at least one assembly order.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdDeliverPatch(
    supplyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


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
|**204** | The supply moved to the delivery |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error closing supply |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesSupplyIdGet**
> Supply apiV3SuppliesSupplyIdGet()

Returns supply details.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdGet(
    supplyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


### Return type

**Supply**

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
|**404** | Not found |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesSupplyIdTrbxDelete**
> apiV3SuppliesSupplyIdTrbxDelete()

The method deletes boxes from the supply. Available only while the supply is being assembled.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration,
    ApiV3SuppliesSupplyIdTrbxDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)
let apiV3SuppliesSupplyIdTrbxDeleteRequest: ApiV3SuppliesSupplyIdTrbxDeleteRequest; // (optional)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdTrbxDelete(
    supplyId,
    apiV3SuppliesSupplyIdTrbxDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3SuppliesSupplyIdTrbxDeleteRequest** | **ApiV3SuppliesSupplyIdTrbxDeleteRequest**|  | |
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesSupplyIdTrbxGet**
> ApiV3SuppliesSupplyIdTrbxGet200Response apiV3SuppliesSupplyIdTrbxGet()

Returns supply boxes list.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdTrbxGet(
    supplyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


### Return type

**ApiV3SuppliesSupplyIdTrbxGet200Response**

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
|**404** | Not found |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesSupplyIdTrbxPost**
> ApiV3SuppliesSupplyIdTrbxPost201Response apiV3SuppliesSupplyIdTrbxPost()

Adds the required number of boxes to the supply. <br> <br> Boxes should only be added to deliveries shipped to the pickup points. Can only be added to an open supply.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration,
    ApiV3SuppliesSupplyIdTrbxPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)
let apiV3SuppliesSupplyIdTrbxPostRequest: ApiV3SuppliesSupplyIdTrbxPostRequest; // (optional)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdTrbxPost(
    supplyId,
    apiV3SuppliesSupplyIdTrbxPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3SuppliesSupplyIdTrbxPostRequest** | **ApiV3SuppliesSupplyIdTrbxPostRequest**|  | |
| **supplyId** | [**string**] | Supply ID | defaults to undefined|


### Return type

**ApiV3SuppliesSupplyIdTrbxPost201Response**

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

# **apiV3SuppliesSupplyIdTrbxStickersPost**
> ApiV3SuppliesSupplyIdTrbxStickersPost200Response apiV3SuppliesSupplyIdTrbxStickersPost()

Returns QR-code stickers in svg, zplv (vertical), zplh (horizontal), png.<br> Available only if there are assembly orders in the box.<br> Stickers dimensions: 580x400 px.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSSuppliesApi,
    Configuration,
    ApiV3SuppliesSupplyIdTrbxStickersPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSSuppliesApi(configuration);

let supplyId: string; //Supply ID (default to undefined)
let type: 'svg' | 'zplv' | 'zplh' | 'png'; //Sticker format (default to undefined)
let apiV3SuppliesSupplyIdTrbxStickersPostRequest: ApiV3SuppliesSupplyIdTrbxStickersPostRequest; // (optional)

const { status, data } = await apiInstance.apiV3SuppliesSupplyIdTrbxStickersPost(
    supplyId,
    type,
    apiV3SuppliesSupplyIdTrbxStickersPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3SuppliesSupplyIdTrbxStickersPostRequest** | **ApiV3SuppliesSupplyIdTrbxStickersPostRequest**|  | |
| **supplyId** | [**string**] | Supply ID | defaults to undefined|
| **type** | [**&#39;svg&#39; | &#39;zplv&#39; | &#39;zplh&#39; | &#39;png&#39;**]**Array<&#39;svg&#39; &#124; &#39;zplv&#39; &#124; &#39;zplh&#39; &#124; &#39;png&#39;>** | Sticker format | defaults to undefined|


### Return type

**ApiV3SuppliesSupplyIdTrbxStickersPost200Response**

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

