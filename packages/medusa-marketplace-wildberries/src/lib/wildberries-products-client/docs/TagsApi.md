# TagsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contentV2TagIdDelete**](#contentv2tagiddelete) | **DELETE** /content/v2/tag/{id} | Delete the tag|
|[**contentV2TagIdPatch**](#contentv2tagidpatch) | **PATCH** /content/v2/tag/{id} | Update the tag|
|[**contentV2TagNomenclatureLinkPost**](#contentv2tagnomenclaturelinkpost) | **POST** /content/v2/tag/nomenclature/link | Tag management in the product card|
|[**contentV2TagPost**](#contentv2tagpost) | **POST** /content/v2/tag | Create a tag|
|[**contentV2TagsGet**](#contentv2tagsget) | **GET** /content/v2/tags | Tags list|

# **contentV2TagIdDelete**
> ResponseContentError contentV2TagIdDelete()

Deletes the tag  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let id: number; //Numeric tag ID (default to undefined)

const { status, data } = await apiInstance.contentV2TagIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Numeric tag ID | defaults to undefined|


### Return type

**ResponseContentError**

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

# **contentV2TagIdPatch**
> ResponseContentError contentV2TagIdPatch(contentV2TagIdPatchRequest)

Changes tag data: name and color  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    TagsApi,
    Configuration,
    ContentV2TagIdPatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let id: number; //Numeric tag ID (default to undefined)
let contentV2TagIdPatchRequest: ContentV2TagIdPatchRequest; //

const { status, data } = await apiInstance.contentV2TagIdPatch(
    id,
    contentV2TagIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2TagIdPatchRequest** | **ContentV2TagIdPatchRequest**|  | |
| **id** | [**number**] | Numeric tag ID | defaults to undefined|


### Return type

**ResponseContentError**

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

# **contentV2TagNomenclatureLinkPost**
> ResponseContentError contentV2TagNomenclatureLinkPost(contentV2TagNomenclatureLinkPostRequest)

The method allows to add tags to the product card and remove tags from the product card.<br> When removing a tag from a product card, the tag itself is not removed.<br> It is possible to add 15 tags to a product card.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    TagsApi,
    Configuration,
    ContentV2TagNomenclatureLinkPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let contentV2TagNomenclatureLinkPostRequest: ContentV2TagNomenclatureLinkPostRequest; //

const { status, data } = await apiInstance.contentV2TagNomenclatureLinkPost(
    contentV2TagNomenclatureLinkPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2TagNomenclatureLinkPostRequest** | **ContentV2TagNomenclatureLinkPostRequest**|  | |


### Return type

**ResponseContentError**

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

# **contentV2TagPost**
> ResponseContentError contentV2TagPost(contentV2TagPostRequest)

Creates a tag.  It is possible to create 15 tags.  The maximum length of a tag is 15 characters  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    TagsApi,
    Configuration,
    ContentV2TagPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let contentV2TagPostRequest: ContentV2TagPostRequest; //

const { status, data } = await apiInstance.contentV2TagPost(
    contentV2TagPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV2TagPostRequest** | **ContentV2TagPostRequest**|  | |


### Return type

**ResponseContentError**

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

# **contentV2TagsGet**
> ContentV2TagsGet200Response contentV2TagsGet()

Returns seller\'s tags list  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    TagsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

const { status, data } = await apiInstance.contentV2TagsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ContentV2TagsGet200Response**

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

