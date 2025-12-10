# CreatingProductCardsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contentV2BarcodesPost**](#contentv2barcodespost) | **POST** /content/v2/barcodes | Generation of barcodes|
|[**contentV2CardsLimitsGet**](#contentv2cardslimitsget) | **GET** /content/v2/cards/limits | Limits for the product cards|
|[**contentV2CardsUploadAddPost**](#contentv2cardsuploadaddpost) | **POST** /content/v2/cards/upload/add | Create product cards with merge|
|[**contentV2CardsUploadPost**](#contentv2cardsuploadpost) | **POST** /content/v2/cards/upload | Create product cards|

# **contentV2BarcodesPost**
> ContentV2BarcodesPost200Response contentV2BarcodesPost(contentV2BarcodesPostRequest)

Generates array of unique barcodes to create size of the product card  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CreatingProductCardsApi,
    Configuration,
    ContentV2BarcodesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CreatingProductCardsApi(configuration);

let contentV2BarcodesPostRequest: ContentV2BarcodesPostRequest; //

const { status, data } = await apiInstance.contentV2BarcodesPost(
    contentV2BarcodesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2BarcodesPostRequest** | **ContentV2BarcodesPostRequest**|  | |


### Return type

**ContentV2BarcodesPost200Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contentV2CardsLimitsGet**
> ContentV2CardsLimitsGet200Response contentV2CardsLimitsGet()

The method allows to get separately free and paid vendor limits for creating product cards.<br> To calculate the number of cards that can be created, use the formula: (freeLimits + paidLimits) - Number of cards created.<br> All cards that can be obtained using the [product cards list](/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1get~1cards~1list/post) and [list of product cards that are in the trash](/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1get~1cards~1trash/post) methods are considered created.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CreatingProductCardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreatingProductCardsApi(configuration);

const { status, data } = await apiInstance.contentV2CardsLimitsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ContentV2CardsLimitsGet200Response**

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

# **contentV2CardsUploadAddPost**
> ResponseCardCreate contentV2CardsUploadAddPost()

The method creates new product cards by merging them with existing ones. <br><br> The dimensions of the products can only be specified in `centimeters`, and the weight of packed products must be specified in `kilograms`. Creating a card is asynchronous, after sending the request is put in a queue for processing. Maximum request size is 10 Mb.<br> If this method response is Success (`200`) but product card was not updated, check errors using [list of failed nomenclature with errors](/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post).  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 10 requests | 6 seconds | 5 requests | </div> 

### Example

```typescript
import {
    CreatingProductCardsApi,
    Configuration,
    ContentV2CardsUploadAddPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CreatingProductCardsApi(configuration);

let contentV2CardsUploadAddPostRequest: ContentV2CardsUploadAddPostRequest; // (optional)

const { status, data } = await apiInstance.contentV2CardsUploadAddPost(
    contentV2CardsUploadAddPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2CardsUploadAddPostRequest** | **ContentV2CardsUploadAddPostRequest**|  | |


### Return type

**ResponseCardCreate**

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
|**413** | The request body size exceeds the given limit |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contentV2CardsUploadPost**
> ResponseCardCreate contentV2CardsUploadPost()

Creates products cards. You can specify product description and characteristics.<br>  How to create a card:    1. Get [parent categories list](/openapi/work-with-products#tag/Categories-Subjects-and-Characteristics/paths/~1content~1v2~1object~1parent~1all/get)   2. Get [the category and get all subjects](/openapi/work-with-products#tag/Categories-Subjects-and-Characteristics/paths/~1content~1v2~1object~1all/get)   3. Choose [the subject and get all available characteristics](/openapi/work-with-products#tag/Categories-Subjects-and-Characteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get). For `Color`, `Gender`, `Country of origin`, `Season`, `VAT rate`, `HS-code` characteristics use values from [category](/openapi/work-with-products#tag/Categories-Subjects-and-Characteristics).   4. Send the request. If the response is Success (`200`) but the card was not created, check errors using [list of failed product card with errors](/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post).  The dimensions of the products can only be specified in `centimeters`, and the weight of packed products must be specified in `kilograms`.<br>  With one request you can create maximum 100 merged product cards (`imtID`), 30 product cards (`nmID`) in each. Maximum request size is 10 Mb.<br>  Creating a card is asynchronous, after sending the request is put in a queue for processing.  <div class=\"description_important\">   If there were errors during queue processing, the product card is considered invalid. </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 10 requests | 6 seconds | 5 requests | </div> 

### Example

```typescript
import {
    CreatingProductCardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CreatingProductCardsApi(configuration);

let contentV2CardsUploadPostRequestInner: Array<ContentV2CardsUploadPostRequestInner>; // (optional)

const { status, data } = await apiInstance.contentV2CardsUploadPost(
    contentV2CardsUploadPostRequestInner
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2CardsUploadPostRequestInner** | **Array<ContentV2CardsUploadPostRequestInner>**|  | |


### Return type

**ResponseCardCreate**

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
|**413** | The request body size exceeds the given limit |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

