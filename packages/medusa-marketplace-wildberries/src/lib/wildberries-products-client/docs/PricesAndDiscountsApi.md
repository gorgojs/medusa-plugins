# PricesAndDiscountsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV2BufferGoodsTaskGet**](#apiv2buffergoodstaskget) | **GET** /api/v2/buffer/goods/task | Unprocessed upload details|
|[**apiV2BufferTasksGet**](#apiv2buffertasksget) | **GET** /api/v2/buffer/tasks | Unprocessed upload state|
|[**apiV2HistoryGoodsTaskGet**](#apiv2historygoodstaskget) | **GET** /api/v2/history/goods/task | Processed upload details|
|[**apiV2HistoryTasksGet**](#apiv2historytasksget) | **GET** /api/v2/history/tasks | Processed upload state|
|[**apiV2ListGoodsFilterGet**](#apiv2listgoodsfilterget) | **GET** /api/v2/list/goods/filter | Get products with prices|
|[**apiV2ListGoodsFilterPost**](#apiv2listgoodsfilterpost) | **POST** /api/v2/list/goods/filter | Get products with prices by articles|
|[**apiV2ListGoodsSizeNmGet**](#apiv2listgoodssizenmget) | **GET** /api/v2/list/goods/size/nm | Get product sizes with prices|
|[**apiV2QuarantineGoodsGet**](#apiv2quarantinegoodsget) | **GET** /api/v2/quarantine/goods | Get products in quarantine|
|[**apiV2UploadTaskClubDiscountPost**](#apiv2uploadtaskclubdiscountpost) | **POST** /api/v2/upload/task/club-discount | Set WB Club discounts|
|[**apiV2UploadTaskPost**](#apiv2uploadtaskpost) | **POST** /api/v2/upload/task | Set prices and discounts|
|[**apiV2UploadTaskSizePost**](#apiv2uploadtasksizepost) | **POST** /api/v2/upload/task/size | Sets size prices|

# **apiV2BufferGoodsTaskGet**
> ApiV2BufferGoodsTaskGet200Response apiV2BufferGoodsTaskGet()

Returns products in processing upload including product errors.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let limit: number; //Number of elements per page (pagination) (default to undefined)
let uploadID: number; //Download ID (default to undefined)
let offset: number; //How many results to skip. For example, with value `10`, the response will start with the 11 element (optional) (default to undefined)

const { status, data } = await apiInstance.apiV2BufferGoodsTaskGet(
    limit,
    uploadID,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of elements per page (pagination) | defaults to undefined|
| **uploadID** | [**number**] | Download ID | defaults to undefined|
| **offset** | [**number**] | How many results to skip. For example, with value &#x60;10&#x60;, the response will start with the 11 element | (optional) defaults to undefined|


### Return type

**ApiV2BufferGoodsTaskGet200Response**

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

# **apiV2BufferTasksGet**
> ApiV2BufferTasksGet200Response apiV2BufferTasksGet()

Returns the processing upload data.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let uploadID: number; //Download ID (default to undefined)

const { status, data } = await apiInstance.apiV2BufferTasksGet(
    uploadID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadID** | [**number**] | Download ID | defaults to undefined|


### Return type

**ApiV2BufferTasksGet200Response**

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

# **apiV2HistoryGoodsTaskGet**
> ApiV2HistoryGoodsTaskGet200Response apiV2HistoryGoodsTaskGet()

Returns products in processed upload including product errors.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let limit: number; //Number of elements per page (pagination) (default to undefined)
let uploadID: number; //Download ID (default to undefined)
let offset: number; //How many results to skip. For example, with value `10`, the response will start with the 11 element (optional) (default to undefined)

const { status, data } = await apiInstance.apiV2HistoryGoodsTaskGet(
    limit,
    uploadID,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of elements per page (pagination) | defaults to undefined|
| **uploadID** | [**number**] | Download ID | defaults to undefined|
| **offset** | [**number**] | How many results to skip. For example, with value &#x60;10&#x60;, the response will start with the 11 element | (optional) defaults to undefined|


### Return type

**ApiV2HistoryGoodsTaskGet200Response**

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

# **apiV2HistoryTasksGet**
> ApiV2HistoryTasksGet200Response apiV2HistoryTasksGet()

Returns the processed upload data.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let uploadID: number; //Download ID (default to undefined)

const { status, data } = await apiInstance.apiV2HistoryTasksGet(
    uploadID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadID** | [**number**] | Download ID | defaults to undefined|


### Return type

**ApiV2HistoryTasksGet200Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Неправильный запрос |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2ListGoodsFilterGet**
> ApiV2ListGoodsFilterGet200Response apiV2ListGoodsFilterGet()

Returns product data. <br><br> You can specify only one article in one request. <br><br> To get data for all products, do not set the article, set `limit=1000`, and use the `offset` field to set the data offset. The offset should be calculated using the formula: `offset` plus `limit` from the previous request. Repeat the request until you receive a response with an empty array.<br><br> Use separate methods to get data:   - for [more than one product by article](/openapi/work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1filter/post)   - for [the size of the product](/openapi/work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1size~1nm/get)  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let limit: number; //Number of elements per page (pagination) (default to undefined)
let offset: number; //How many results to skip. For example, with value `10`, the response will start with the 11 element (optional) (default to undefined)
let filterNmID: number; //WB article for search (optional) (default to undefined)

const { status, data } = await apiInstance.apiV2ListGoodsFilterGet(
    limit,
    offset,
    filterNmID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of elements per page (pagination) | defaults to undefined|
| **offset** | [**number**] | How many results to skip. For example, with value &#x60;10&#x60;, the response will start with the 11 element | (optional) defaults to undefined|
| **filterNmID** | [**number**] | WB article for search | (optional) defaults to undefined|


### Return type

**ApiV2ListGoodsFilterGet200Response**

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

# **apiV2ListGoodsFilterPost**
> ApiV2ListGoodsFilterGet200Response apiV2ListGoodsFilterPost(apiV2ListGoodsFilterPostRequest)

Returns product data by its article. <br><br> You can specify more than one article in one request. <br><br> Use separate methods to get data:   - for [all products without specifying articles](/openapi/work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1filter/get)   - for [the size of the product](/openapi/work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1size~1nm/get).  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration,
    ApiV2ListGoodsFilterPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let apiV2ListGoodsFilterPostRequest: ApiV2ListGoodsFilterPostRequest; //

const { status, data } = await apiInstance.apiV2ListGoodsFilterPost(
    apiV2ListGoodsFilterPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV2ListGoodsFilterPostRequest** | **ApiV2ListGoodsFilterPostRequest**|  | |


### Return type

**ApiV2ListGoodsFilterGet200Response**

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

# **apiV2ListGoodsSizeNmGet**
> ApiV2ListGoodsSizeNmGet200Response apiV2ListGoodsSizeNmGet()

Returns sizes data for the product. Only for products from categories where size price setting is available. For these products `\"editableSizePrice\":true`.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let limit: number; //Number of elements per page (pagination) (default to undefined)
let nmID: number; //WB article (default to undefined)
let offset: number; //How many results to skip. For example, with value `10`, the response will start with the 11 element (optional) (default to undefined)

const { status, data } = await apiInstance.apiV2ListGoodsSizeNmGet(
    limit,
    nmID,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of elements per page (pagination) | defaults to undefined|
| **nmID** | [**number**] | WB article | defaults to undefined|
| **offset** | [**number**] | How many results to skip. For example, with value &#x60;10&#x60;, the response will start with the 11 element | (optional) defaults to undefined|


### Return type

**ApiV2ListGoodsSizeNmGet200Response**

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

# **apiV2QuarantineGoodsGet**
> ApiV2QuarantineGoodsGet200Response apiV2QuarantineGoodsGet()

Returns information about products in quarantine. <br><br> If the product new price with discount will be minimum 3 times less than the old price, the product will be placed in [quarantine](https://seller.wildberries.ru/discount-and-prices/quarantine) and will be sold at the old price. An error about this will be in the [upload states](/openapi/work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1history~1tasks/get) method response. <br><br> You can change price or discount via API or release product from quarantine in [personal account](https://seller.wildberries.ru/discount-and-prices/quarantine). <br><br> For products with [size-based pricing](/openapi/work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1upload~1task~1size/post), quarantine does not apply.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let limit: number; //Number of elements per page (pagination) (default to undefined)
let offset: number; //How many results to skip. For example, with value `10`, the response will start with the 11 element (optional) (default to undefined)

const { status, data } = await apiInstance.apiV2QuarantineGoodsGet(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of elements per page (pagination) | defaults to undefined|
| **offset** | [**number**] | How many results to skip. For example, with value &#x60;10&#x60;, the response will start with the 11 element | (optional) defaults to undefined|


### Return type

**ApiV2QuarantineGoodsGet200Response**

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
|**422** | Unexpected result |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2UploadTaskClubDiscountPost**
> TaskCreated apiV2UploadTaskClubDiscountPost(apiV2UploadTaskClubDiscountPostRequest)

Sets WB Club subscription discounts.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration,
    ApiV2UploadTaskClubDiscountPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let apiV2UploadTaskClubDiscountPostRequest: ApiV2UploadTaskClubDiscountPostRequest; //

const { status, data } = await apiInstance.apiV2UploadTaskClubDiscountPost(
    apiV2UploadTaskClubDiscountPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV2UploadTaskClubDiscountPostRequest** | **ApiV2UploadTaskClubDiscountPostRequest**|  | |


### Return type

**TaskCreated**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**208** | Upload already exists |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**422** | Unexpected result |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2UploadTaskPost**
> TaskCreated apiV2UploadTaskPost(apiV2UploadTaskPostRequest)

Sets prices and discounts.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration,
    ApiV2UploadTaskPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let apiV2UploadTaskPostRequest: ApiV2UploadTaskPostRequest; //

const { status, data } = await apiInstance.apiV2UploadTaskPost(
    apiV2UploadTaskPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV2UploadTaskPostRequest** | **ApiV2UploadTaskPostRequest**|  | |


### Return type

**TaskCreated**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**208** | Upload already exists |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**422** | Unexpected result |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV2UploadTaskSizePost**
> TaskCreated apiV2UploadTaskSizePost(apiV2UploadTaskSizePostRequest)

Sets different prices for different sizes.  Only for products from categories where size price setting is available. For these products `\"editableSizePrice\":true` in [Get product sizes with prices](/openapi/work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1size~1nm/get) response.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Prices and Discounts</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 6 seconds | 10 requests | 600 milliseconds | 5 requests |  </div> 

### Example

```typescript
import {
    PricesAndDiscountsApi,
    Configuration,
    ApiV2UploadTaskSizePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesAndDiscountsApi(configuration);

let apiV2UploadTaskSizePostRequest: ApiV2UploadTaskSizePostRequest; //

const { status, data } = await apiInstance.apiV2UploadTaskSizePost(
    apiV2UploadTaskSizePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiV2UploadTaskSizePostRequest** | **ApiV2UploadTaskSizePostRequest**|  | |


### Return type

**TaskCreated**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**208** | Upload already exists |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**422** | Unexpected result |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

