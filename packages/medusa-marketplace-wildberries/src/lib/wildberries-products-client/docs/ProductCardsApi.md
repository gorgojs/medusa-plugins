# ProductCardsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contentV2CardsDeleteTrashPost**](#contentv2cardsdeletetrashpost) | **POST** /content/v2/cards/delete/trash | Transfer product card to trash|
|[**contentV2CardsErrorListPost**](#contentv2cardserrorlistpost) | **POST** /content/v2/cards/error/list | List of failed product cards with errors|
|[**contentV2CardsMoveNmPost**](#contentv2cardsmovenmpost) | **POST** /content/v2/cards/moveNm | Merging or separating of product cards|
|[**contentV2CardsRecoverPost**](#contentv2cardsrecoverpost) | **POST** /content/v2/cards/recover | Recover product card from trash|
|[**contentV2CardsUpdatePost**](#contentv2cardsupdatepost) | **POST** /content/v2/cards/update | Update product cards|
|[**contentV2GetCardsListPost**](#contentv2getcardslistpost) | **POST** /content/v2/get/cards/list | Product cards list|
|[**contentV2GetCardsTrashPost**](#contentv2getcardstrashpost) | **POST** /content/v2/get/cards/trash | Product cards in trash list|

# **contentV2CardsDeleteTrashPost**
> ContentV2CardsDeleteTrashPost200Response contentV2CardsDeleteTrashPost(contentV2CardsDeleteTrashPostRequest)

Transfers the product card to trash. In doing so, the product card would not be deleted.  <div class=\"description_important\">   When transferring product cards to the trash, this product card is removed from the product card, meaning it is assigned a new <code>imtID</code>. </div>  After 30 days in the trash the product card would be deleted automatically. The trash is cleared every night according to Moscow time.<br> The product card can be deleted at any time in [personal account](https://seller.wildberries.ru/new-goods/basket-cards).  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    ProductCardsApi,
    Configuration,
    ContentV2CardsDeleteTrashPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCardsApi(configuration);

let contentV2CardsDeleteTrashPostRequest: ContentV2CardsDeleteTrashPostRequest; //

const { status, data } = await apiInstance.contentV2CardsDeleteTrashPost(
    contentV2CardsDeleteTrashPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2CardsDeleteTrashPostRequest** | **ContentV2CardsDeleteTrashPostRequest**|  | |


### Return type

**ContentV2CardsDeleteTrashPost200Response**

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

# **contentV2CardsErrorListPost**
> ResponsePublicViewerPublicErrorsTableListV2 contentV2CardsErrorListPost(requestPublicViewerPublicErrorsTableListV2)

Returns the list of product cards ([drafts](https://seller.wildberries.ru/new-goods/error-cards)) and the list of errors encountered during product card creation or editing. <br><br> The data is returned in batches. One batch contains:   - all errors for one merged product card `imtID` in one request during product cards [creation](/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post)   - all errors in one request during product cards [creation with merge](/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post) or [editing](/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post). <br><br> To get more than 100 batches, use pagination:    1. Make first request: <br>       <pre style=\"background-color: rgb(38 50 56 / 5%); color: #e53935\">         {           \"cursor\": {             \"limit\": 100           },           \"order\": {             \"ascending\": true           }         }</pre>   2. Copy `\"updatedAt\": \"***\",\"batchUUID\": \"***\"` from the response `cursor` and paste into the request `cursor`.   3. Repeat the request.   4. Repeat 2 and 3, until you receive in the response `\"next\": false`. This will mean that you have received all the batches.  <div class=\"description_important\">   To delete product card from the errors list, repeat the request for creating or creating with merge and updating request with fixed errors </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 10 requests | 6 seconds | 5 requests | </div> 

### Example

```typescript
import {
    ProductCardsApi,
    Configuration,
    RequestPublicViewerPublicErrorsTableListV2
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCardsApi(configuration);

let requestPublicViewerPublicErrorsTableListV2: RequestPublicViewerPublicErrorsTableListV2; //
let locale: string; //Language of subject names:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2CardsErrorListPost(
    requestPublicViewerPublicErrorsTableListV2,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestPublicViewerPublicErrorsTableListV2** | **RequestPublicViewerPublicErrorsTableListV2**|  | |
| **locale** | [**string**] | Language of subject names:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  | (optional) defaults to undefined|


### Return type

**ResponsePublicViewerPublicErrorsTableListV2**

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

# **contentV2CardsMoveNmPost**
> ResponseCardCreate contentV2CardsMoveNmPost()

The method merges and separates product cards. Product cards are considered merged if they have the same `imtID`.<br><br>  To merge product cards, make a request **specifying** the `imtID`. You can merge up to 30 product cards at a time.<br>  To separate product cards, make a request **without specifying** the `imtID`. New `imtID`s will be generated for the separated cards.<br><br>  If you separate multiple product cards simultaneously, these cards will merge into one and receive a new `imtID`.<br>  To assign a unique `imtID` to each product card, you need to send one product card per request.<br><br>  The maximum request size is 10 MB.  <div class=\"description_important\">   It is possible to merge product cards containing only the same subjects. </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    ProductCardsApi,
    Configuration,
    ContentV2CardsMoveNmPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCardsApi(configuration);

let contentV2CardsMoveNmPostRequest: ContentV2CardsMoveNmPostRequest; // (optional)

const { status, data } = await apiInstance.contentV2CardsMoveNmPost(
    contentV2CardsMoveNmPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2CardsMoveNmPostRequest** | **ContentV2CardsMoveNmPostRequest**|  | |


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
|**403** | Access denied |  -  |
|**413** | The request body size exceeds the given limit |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contentV2CardsRecoverPost**
> ContentV2CardsRecoverPost200Response contentV2CardsRecoverPost(contentV2CardsDeleteTrashPostRequest)

Returns the product card from trash  <div class=\"description_important\">   When restoring the product card from the trash, its <code>imtID</code> doesn\'t remain the same as it was for the product card in the trash. </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    ProductCardsApi,
    Configuration,
    ContentV2CardsDeleteTrashPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCardsApi(configuration);

let contentV2CardsDeleteTrashPostRequest: ContentV2CardsDeleteTrashPostRequest; //

const { status, data } = await apiInstance.contentV2CardsRecoverPost(
    contentV2CardsDeleteTrashPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2CardsDeleteTrashPostRequest** | **ContentV2CardsDeleteTrashPostRequest**|  | |


### Return type

**ContentV2CardsRecoverPost200Response**

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

# **contentV2CardsUpdatePost**
> ResponseCardCreate contentV2CardsUpdatePost()

Edits product cards. If you need some product data, get it using [product cards list](/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1get~1cards~1list/post).  <div class=\"description_important\">   The product card is overwritten during an update. Therefore, you need to include <strong>all</strong> parameters of the product card in the request, including those you do not intend to update. </div>  The dimensions of the products can only be specified in `centimeters`, and the weight of packed products must be specified in `kilograms`.  You can not edit or delete barcodes but you can add new ones. You have not to send `photos`, `video` and `tags` and can not edit them.  If this method response is Success (`200`) but product card was not updated, check errors using [list of failed product cards with errors](/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post).  With one request you can edit maximum 3000 product cards (`nmID`). Maximum request size is 10 Mb.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 10 requests | 6 seconds | 5 requests | </div> 

### Example

```typescript
import {
    ProductCardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCardsApi(configuration);

let contentV2CardsUpdatePostRequestInner: Array<ContentV2CardsUpdatePostRequestInner>; // (optional)

const { status, data } = await apiInstance.contentV2CardsUpdatePost(
    contentV2CardsUpdatePostRequestInner
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2CardsUpdatePostRequestInner** | **Array<ContentV2CardsUpdatePostRequestInner>**|  | |


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
|**403** | Access denied |  -  |
|**413** | The request body size exceeds the given limit |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contentV2GetCardsListPost**
> ContentV2GetCardsListPost200Response contentV2GetCardsListPost(contentV2GetCardsListPostRequest)

<div class=\"description_auth\">   The method is available with the <a href=\"/openapi/api-information#tag/Authorization/How-to-create-a-token\">token</a> of the <strong>Promotion</strong> category </div>  Returns the list of created product cards.<br>  To get **more than 100** product cards, use pagination:    1. Make the first request (all listed params are required):       <pre>         {           \"settings\": {             \"cursor\": {               \"limit\": 100             },             \"filter\": {               \"withPhoto\": -1             }           }         }</pre>   2. Copy \"updatedAt\": \"***\" and \"nmID\": *** from the `cursor` in the response and insert into the `cursor` of your next request.   3. Make the next request.   4. Repeat 2 and 3 until `total` value in the response is less than the `limit` value in the request. This will mean you got all cards.    <div class=\"description_important\">   Product cards from the trash are not provided in the method response. You can get these product cards via <a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1get~1cards~1trash/post\">different method</a>. </div>  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    ProductCardsApi,
    Configuration,
    ContentV2GetCardsListPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCardsApi(configuration);

let contentV2GetCardsListPostRequest: ContentV2GetCardsListPostRequest; //
let locale: string; //Language for response of the `name`, `value` and `object` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2GetCardsListPost(
    contentV2GetCardsListPostRequest,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2GetCardsListPostRequest** | **ContentV2GetCardsListPostRequest**|  | |
| **locale** | [**string**] | Language for response of the &#x60;name&#x60;, &#x60;value&#x60; and &#x60;object&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2GetCardsListPost200Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, plain/text


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contentV2GetCardsTrashPost**
> ContentV2GetCardsTrashPost200Response contentV2GetCardsTrashPost(contentV2GetCardsTrashPostRequest)

<div class=\"description_auth\">   The method is available with the <a href=\"/openapi/api-information#tag/Authorization/How-to-create-a-token\">token</a> of the <strong>Promotion</strong> category </div>  Returns list of product cards in trash.  To get **more than 100** product cards, use pagination.   1. Make the first request: <br>       <pre>         {           \"settings\": {             \"cursor\": {               \"limit\": 100             }           }         }</pre>   2. Copy `\"trashedAt\": \"***\"` and `\"nmID\": ***` from the `cursor` in the response and insert into the `cursor` of your next request.   3. Make the next request.   4. Repeat 2 and 3 until `total` value in the response is less than the `limit` value in the request. This will mean you got all cards.   <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    ProductCardsApi,
    Configuration,
    ContentV2GetCardsTrashPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCardsApi(configuration);

let contentV2GetCardsTrashPostRequest: ContentV2GetCardsTrashPostRequest; //
let locale: 'ru' | 'en' | 'zh'; //Language for response of the `name`, `value` and `object` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2GetCardsTrashPost(
    contentV2GetCardsTrashPostRequest,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2GetCardsTrashPostRequest** | **ContentV2GetCardsTrashPostRequest**|  | |
| **locale** | [**&#39;ru&#39; | &#39;en&#39; | &#39;zh&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;zh&#39;>** | Language for response of the &#x60;name&#x60;, &#x60;value&#x60; and &#x60;object&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2GetCardsTrashPost200Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, plain/text


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Access denied |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

