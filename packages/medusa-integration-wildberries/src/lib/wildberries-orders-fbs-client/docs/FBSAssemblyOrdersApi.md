# FBSAssemblyOrdersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV3OrdersClientPost**](#apiv3ordersclientpost) | **POST** /api/v3/orders/client | Orders with Client Information|
|[**apiV3OrdersGet**](#apiv3ordersget) | **GET** /api/v3/orders | Get Assembly Orders|
|[**apiV3OrdersNewGet**](#apiv3ordersnewget) | **GET** /api/v3/orders/new | Get New Assembly Orders|
|[**apiV3OrdersOrderIdCancelPatch**](#apiv3ordersorderidcancelpatch) | **PATCH** /api/v3/orders/{orderId}/cancel | Cancel the Assembly Order|
|[**apiV3OrdersStatusHistoryPost**](#apiv3ordersstatushistorypost) | **POST** /api/v3/orders/status/history | Status History for Cross-Border Orders|
|[**apiV3OrdersStatusPost**](#apiv3ordersstatuspost) | **POST** /api/v3/orders/status | Get Assembly Orders Statuses|
|[**apiV3OrdersStickersCrossBorderPost**](#apiv3ordersstickerscrossborderpost) | **POST** /api/v3/orders/stickers/cross-border | Get Stickers for Cross-Border Assembly Orders|
|[**apiV3OrdersStickersPost**](#apiv3ordersstickerspost) | **POST** /api/v3/orders/stickers | Get Assembly Orders Stickers|
|[**apiV3SuppliesOrdersReshipmentGet**](#apiv3suppliesordersreshipmentget) | **GET** /api/v3/supplies/orders/reshipment | Get All Assembly Orders for Re-shipment|

# **apiV3OrdersClientPost**
> CrossborderTurkeyClientInfoResp apiV3OrdersClientPost(ordersRequestAPI)

The method allows getting information about the client by assembly order ID. <br>Only for cross-border orders from **Turkey**  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration,
    OrdersRequestAPI
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

let ordersRequestAPI: OrdersRequestAPI; //

const { status, data } = await apiInstance.apiV3OrdersClientPost(
    ordersRequestAPI
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordersRequestAPI** | **OrdersRequestAPI**|  | |


### Return type

**CrossborderTurkeyClientInfoResp**

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

# **apiV3OrdersGet**
> ApiV3OrdersGet200Response apiV3OrdersGet()

Returns assembly orders information without current status. <br>You can get data for a specified period, maximum of 30 calendar days per request.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

let limit: number; //Pagination parameter. Sets the limit for the amount of data returned. (default to undefined)
let next: number; //Pagination parameter. Sets the value from which to retrieve the next batch. It should start at 0 to get the full list of data. For the subsequent requests, you must take the value from the `next` field in the response. (default to undefined)
let dateFrom: number; //Period start date in Unix timestamp format. By default date is 30 days before the request  (optional) (default to undefined)
let dateTo: number; //Period end date in Unix timestamp format (optional) (default to undefined)

const { status, data } = await apiInstance.apiV3OrdersGet(
    limit,
    next,
    dateFrom,
    dateTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Pagination parameter. Sets the limit for the amount of data returned. | defaults to undefined|
| **next** | [**number**] | Pagination parameter. Sets the value from which to retrieve the next batch. It should start at 0 to get the full list of data. For the subsequent requests, you must take the value from the &#x60;next&#x60; field in the response. | defaults to undefined|
| **dateFrom** | [**number**] | Period start date in Unix timestamp format. By default date is 30 days before the request  | (optional) defaults to undefined|
| **dateTo** | [**number**] | Period end date in Unix timestamp format | (optional) defaults to undefined|


### Return type

**ApiV3OrdersGet200Response**

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

# **apiV3OrdersNewGet**
> ApiV3OrdersNewGet200Response apiV3OrdersNewGet()

Returns a list of all new [assembly orders](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders/get).  <div class=\"description_important\"> Metadata specified in the <code>requiredMeta</code> and <code>optionalMeta</code> fields in assembly orders only affects the ability to transfer a supply to delivery. If your product requires mandatory marking with identification means, you must specify all needed metadata whether it was received in <code>requiredMeta</code> or <code>optionalMeta</code> field (see 4.6 of the <a href =\"https://seller.wildberries.ru/confirm-offer-condition/product/view\">Offer</a>). <br> We recommend adding all metadata received in the <code>requiredMeta</code> and <code>optionalMeta</code> fields to the assembly orders </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

const { status, data } = await apiInstance.apiV3OrdersNewGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiV3OrdersNewGet200Response**

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

# **apiV3OrdersOrderIdCancelPatch**
> apiV3OrdersOrderIdCancelPatch()

Moves the assembly orders to `cancel` (\"Canceled by the supplier\") status.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 100 requests | 600 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

let orderId: number; //Assembly order ID (default to undefined)

const { status, data } = await apiInstance.apiV3OrdersOrderIdCancelPatch(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**number**] | Assembly order ID | defaults to undefined|


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
|**204** | Canceled |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**404** | Not found |  -  |
|**409** | Error updating a status |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersStatusHistoryPost**
> ApiV3OrdersStatusHistoryPost200Response apiV3OrdersStatusHistoryPost()

Returns status history for cross-border orders  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration,
    ApiV3OrdersStatusHistoryPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

let apiV3OrdersStatusHistoryPostRequest: ApiV3OrdersStatusHistoryPostRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersStatusHistoryPost(
    apiV3OrdersStatusHistoryPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersStatusHistoryPostRequest** | **ApiV3OrdersStatusHistoryPostRequest**|  | |


### Return type

**ApiV3OrdersStatusHistoryPost200Response**

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

# **apiV3OrdersStatusPost**
> ApiV3OrdersStatusPost200Response apiV3OrdersStatusPost()

Returns the statuses of assembly orders from the request.  `supplierStatus` is a status of an assembly order. Its change is always triggered only by the supplier.<br>  Possible values of `supplierStatus`:  | Status    | Description              | How to move the assembly orders to this status | |-----------|--------------------------|---------------------------------------------| | `new`       | **New order**        |                                             | | `confirm`   | **In assembly** <br>For delivery by Wildberries `fbs` | [Add assembly orders to the supply](/openapi/orders-fbs#tag/FBS-Supplies/paths/~1api~1marketplace~1v3~1supplies~1%7BsupplyId%7D~1orders/patch) | `complete`  | **In delivery** <br> For delivery by Wildberries `fbs` and by WB courier `wbgo` |  [Transfer the supply to delivery](/openapi/orders-fbs#tag/FBS-Supplies/paths/~1api~1v3~1supplies~1%7BsupplyId%7D~1deliver/patch) | | `cancel`   | **Canceled by seller** | [Cancel the order](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders~1%7BorderId%7D~1cancel/patch) |  `wbStatus` — is a status of an order on the Wildberries side.  Possible values for this field are: - `waiting` — the supplier confirmed the order, and the Wildberries has not received it yet - `sorted` — the Wildberries warehouse sorted the order - `sold` — the order is sold - `canceled` — the supplier canceled the order - `canceled_by_client` — the buyer canceled the order upon receipt - `declined_by_client` — the buyer canceled the order in the first hour <br> Cancellation is available to the buyer in the first hour from the moment of order, if the order is not transferred to confirm status. - `defect` — cancellation of the order due to a defect - `ready_for_pickup` — the assembly orders came at pickup point and waiting for the client - `postponed_delivery` — courier delivery is postponed - `accepted_by_carrier` — accepted by carrier. The order is handed over to delivery service in the seller country - `sent_to_carrier` — dispatched to carrier. The order is on the way to delivery service\'s warehouse in the seller  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration,
    ApiV3OrdersStatusPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

let apiV3OrdersStatusPostRequest: ApiV3OrdersStatusPostRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersStatusPost(
    apiV3OrdersStatusPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersStatusPostRequest** | **ApiV3OrdersStatusPostRequest**|  | |


### Return type

**ApiV3OrdersStatusPost200Response**

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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersStickersCrossBorderPost**
> ApiV3OrdersStickersCrossBorderPost200Response apiV3OrdersStickersCrossBorderPost()

Returns a list of stickers for cross-border assembly orders in PDF.<br><br>  Method limitations: - You cannot request more than 100 stickers at a time (no more than 100 assembly order IDs in a request). - The method returns stickers only for assembly orders that are on assembly or in delivery [status](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders~1status/post): `confirm`, `complete`.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration,
    ApiV3OrdersStickersCrossBorderPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

let apiV3OrdersStickersCrossBorderPostRequest: ApiV3OrdersStickersCrossBorderPostRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersStickersCrossBorderPost(
    apiV3OrdersStickersCrossBorderPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersStickersCrossBorderPostRequest** | **ApiV3OrdersStickersCrossBorderPostRequest**|  | |


### Return type

**ApiV3OrdersStickersCrossBorderPost200Response**

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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3OrdersStickersPost**
> ApiV3OrdersStickersPost200Response apiV3OrdersStickersPost()

Returns a list of stickers according to the requested assembly orders. You can request a sticker in `svg`, `zplv` (vertical), `zplh` (horizontal) and `png` formats.  **Method limitations**: - You cannot request more than 100 stickers at a time (no more than 100 assembly orders IDs in a request). - The method returns stickers only for assembly orders in the `confirm` — in assembly and `complete` — in delivery [statuses](/openapi/orders-fbs#tag/FBS-Assembly-Orders/paths/~1api~1v3~1orders~1status/post). - Available dimensions:   - 580x400 px, with parameters `width` = 58, `height` = 40   - 400x300 px, with parameters `width` = 40, `height` = 30  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration,
    ApiV3OrdersStickersPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

let type: 'svg' | 'zplv' | 'zplh' | 'png'; //Sticker format (default to undefined)
let width: 58 | 40; //Sticker width (default to undefined)
let height: 40 | 30; //Sticker height (default to undefined)
let apiV3OrdersStickersPostRequest: ApiV3OrdersStickersPostRequest; // (optional)

const { status, data } = await apiInstance.apiV3OrdersStickersPost(
    type,
    width,
    height,
    apiV3OrdersStickersPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV3OrdersStickersPostRequest** | **ApiV3OrdersStickersPostRequest**|  | |
| **type** | [**&#39;svg&#39; | &#39;zplv&#39; | &#39;zplh&#39; | &#39;png&#39;**]**Array<&#39;svg&#39; &#124; &#39;zplv&#39; &#124; &#39;zplh&#39; &#124; &#39;png&#39;>** | Sticker format | defaults to undefined|
| **width** | [**58 | 40**]**Array<58 &#124; 40>** | Sticker width | defaults to undefined|
| **height** | [**40 | 30**]**Array<40 &#124; 30>** | Sticker height | defaults to undefined|


### Return type

**ApiV3OrdersStickersPost200Response**

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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV3SuppliesOrdersReshipmentGet**
> ApiV3SuppliesOrdersReshipmentGet200Response apiV3SuppliesOrdersReshipmentGet()

Returns all assembly orders that require re-shipment  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for <strong>FBS assembly orders, supplies and passes</strong> methods:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 min | 300 requests | 200 ms | 20 requests |  One request with a response code of <code>409</code> is counted as 10 requests </div> 

### Example

```typescript
import {
    FBSAssemblyOrdersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSAssemblyOrdersApi(configuration);

const { status, data } = await apiInstance.apiV3SuppliesOrdersReshipmentGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiV3SuppliesOrdersReshipmentGet200Response**

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

