# MediaFilesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contentV3MediaFilePost**](#contentv3mediafilepost) | **POST** /content/v3/media/file | Upload media file|
|[**contentV3MediaSavePost**](#contentv3mediasavepost) | **POST** /content/v3/media/save | Upload media files via links|

# **contentV3MediaFilePost**
> ContentV3MediaFilePost200Response contentV3MediaFilePost()

Uploads and adds one media file for the product card.  Requirements for images:    * maximum images for each product card  — 30,   * minimal resolution – 700 × 900 pixels,   * maximum size — 32 МB,   * minimal quality — 65%,   * formats — JPG, PNG, BMP, GIF (static), WebP.  Requirements for video:    * maximum one video for each product card   * maximum size — 50 MB   * formats — MOV, MP4  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    MediaFilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaFilesApi(configuration);

let xNmId: string; //Wildberries article (default to undefined)
let xPhotoNumber: number; //Number of media file, starting from `1`. To add the video set `1`.  To add the image to the uploaded ones, set file the number more then number of uploaded files.  (default to undefined)
let uploadfile: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.contentV3MediaFilePost(
    xNmId,
    xPhotoNumber,
    uploadfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xNmId** | [**string**] | Wildberries article | defaults to undefined|
| **xPhotoNumber** | [**number**] | Number of media file, starting from &#x60;1&#x60;. To add the video set &#x60;1&#x60;.  To add the image to the uploaded ones, set file the number more then number of uploaded files.  | defaults to undefined|
| **uploadfile** | [**File**] |  | (optional) defaults to undefined|


### Return type

**ContentV3MediaFilePost200Response**

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

# **contentV3MediaSavePost**
> ContentV3MediaFilePost200Response contentV3MediaSavePost(contentV3MediaSavePostRequest)

The method uploads a set of media files to a product card by specifying links in the request.  <div class=\"description_important\">   New media files (<code>data</code>) replace old ones (<code>mediaFiles</code>). To add new files, set links both to new and old files. </div>  Requirements for links:   * the link must directly lead to the file. Ensure the link does not lead to a preview or authorization page. If the link leads to TXT or HTML page, it is considered incorrect   * no authorization is required to access the file via the link  Requirements for images:   * maximum images for each product card — 30   * minimal resolution – 700 × 900 pixels   * maximum size — 32 MB   * minimal quality — 65%   * formats — JPG, PNG, BMP, GIF (static), WebP   Requirements for video:   * maximum one video for each product card   * maximum size — 50 MB   * formats — MOV, MP4   If one or several images or a video do not meet the requirements, no images and a video will be uploaded even if you have the success response (`200`)  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    MediaFilesApi,
    Configuration,
    ContentV3MediaSavePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaFilesApi(configuration);

let contentV3MediaSavePostRequest: ContentV3MediaSavePostRequest; //

const { status, data } = await apiInstance.contentV3MediaSavePost(
    contentV3MediaSavePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentV3MediaSavePostRequest** | **ContentV3MediaSavePostRequest**|  | |


### Return type

**ContentV3MediaFilePost200Response**

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
|**409** | Error saving some of the links |  -  |
|**422** | The parameter nmId is missing |  -  |
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

