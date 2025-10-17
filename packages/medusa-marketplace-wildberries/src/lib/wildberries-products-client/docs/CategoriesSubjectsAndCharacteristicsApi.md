# CategoriesSubjectsAndCharacteristicsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contentV2DirectoryColorsGet**](#contentv2directorycolorsget) | **GET** /content/v2/directory/colors | Color|
|[**contentV2DirectoryCountriesGet**](#contentv2directorycountriesget) | **GET** /content/v2/directory/countries | Country of origin|
|[**contentV2DirectoryKindsGet**](#contentv2directorykindsget) | **GET** /content/v2/directory/kinds | Gender|
|[**contentV2DirectorySeasonsGet**](#contentv2directoryseasonsget) | **GET** /content/v2/directory/seasons | Season|
|[**contentV2DirectoryTnvedGet**](#contentv2directorytnvedget) | **GET** /content/v2/directory/tnved | HS-codes|
|[**contentV2DirectoryVatGet**](#contentv2directoryvatget) | **GET** /content/v2/directory/vat | VAT rate|
|[**contentV2ObjectAllGet**](#contentv2objectallget) | **GET** /content/v2/object/all | Subjects list|
|[**contentV2ObjectCharcsSubjectIdGet**](#contentv2objectcharcssubjectidget) | **GET** /content/v2/object/charcs/{subjectId} | Subject characteristics|
|[**contentV2ObjectParentAllGet**](#contentv2objectparentallget) | **GET** /content/v2/object/parent/all | Products parent categories|

# **contentV2DirectoryColorsGet**
> ContentV2DirectoryColorsGet200Response contentV2DirectoryColorsGet()

Provides values of color characteristic.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let locale: string; //Language for response of the `subjectName` and `name` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2DirectoryColorsGet(
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locale** | [**string**] | Language for response of the &#x60;subjectName&#x60; and &#x60;name&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2DirectoryColorsGet200Response**

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

# **contentV2DirectoryCountriesGet**
> ContentV2DirectoryCountriesGet200Response contentV2DirectoryCountriesGet()

Provides value of characteristic country of origin.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let locale: string; //Language for response of the `subjectName` and `name` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2DirectoryCountriesGet(
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locale** | [**string**] | Language for response of the &#x60;subjectName&#x60; and &#x60;name&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2DirectoryCountriesGet200Response**

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

# **contentV2DirectoryKindsGet**
> ContentV2DirectoryKindsGet200Response contentV2DirectoryKindsGet()

Provides values of gender characteristic.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let locale: string; //Language for response of the `subjectName` and `name` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2DirectoryKindsGet(
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locale** | [**string**] | Language for response of the &#x60;subjectName&#x60; and &#x60;name&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2DirectoryKindsGet200Response**

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

# **contentV2DirectorySeasonsGet**
> ContentV2DirectorySeasonsGet200Response contentV2DirectorySeasonsGet()

Provide values of season characteristic  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let locale: string; //Language for response of the `subjectName` and `name` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2DirectorySeasonsGet(
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locale** | [**string**] | Language for response of the &#x60;subjectName&#x60; and &#x60;name&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2DirectorySeasonsGet200Response**

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

# **contentV2DirectoryTnvedGet**
> ContentV2DirectoryTnvedGet200Response contentV2DirectoryTnvedGet()

The method provides list of HS-codes by category name and filter by HS-code.  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let subjectID: number; //Subject ID (default to undefined)
let search: number; //Search by HS-code. Works only with the subjectID parameter (optional) (default to undefined)
let locale: string; //Language for response of the `subjectName` and `name` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2DirectoryTnvedGet(
    subjectID,
    search,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subjectID** | [**number**] | Subject ID | defaults to undefined|
| **search** | [**number**] | Search by HS-code. Works only with the subjectID parameter | (optional) defaults to undefined|
| **locale** | [**string**] | Language for response of the &#x60;subjectName&#x60; and &#x60;name&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2DirectoryTnvedGet200Response**

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

# **contentV2DirectoryVatGet**
> ContentV2DirectoryVatGet200Response contentV2DirectoryVatGet()

Returns a list of values for the **VAT rate** characteristic  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let locale: string; //Language for response of the `subjectName` and `name` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2DirectoryVatGet(
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locale** | [**string**] | Language for response of the &#x60;subjectName&#x60; and &#x60;name&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2DirectoryVatGet200Response**

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

# **contentV2ObjectAllGet**
> ContentV2ObjectAllGet200Response contentV2ObjectAllGet()

Returns the list of all available subjects, subjects parent categories and their IDs  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let locale: string; //Language for response of the `name` field:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)
let name: string; //Search by item name (Socks), the search works by substring and can be conducted in any of the supported languages (optional) (default to undefined)
let limit: number; // (optional) (default to 30)
let offset: number; // (optional) (default to 0)
let parentID: number; //Subject parent category ID (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2ObjectAllGet(
    locale,
    name,
    limit,
    offset,
    parentID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locale** | [**string**] | Language for response of the &#x60;name&#x60; field:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|
| **name** | [**string**] | Search by item name (Socks), the search works by substring and can be conducted in any of the supported languages | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 30|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **parentID** | [**number**] | Subject parent category ID | (optional) defaults to undefined|


### Return type

**ContentV2ObjectAllGet200Response**

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
|**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contentV2ObjectCharcsSubjectIdGet**
> ContentV2ObjectCharcsSubjectIdGet200Response contentV2ObjectCharcsSubjectIdGet()

Returns list of the subject characteristics by its ID  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let subjectId: number; //Subject ID (default to undefined)
let locale: string; //Language for response of the `subjectName` and `name` fields:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2ObjectCharcsSubjectIdGet(
    subjectId,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subjectId** | [**number**] | Subject ID | defaults to undefined|
| **locale** | [**string**] | Language for response of the &#x60;subjectName&#x60; and &#x60;name&#x60; fields:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2ObjectCharcsSubjectIdGet200Response**

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

# **contentV2ObjectParentAllGet**
> ContentV2ObjectParentAllGet200Response contentV2ObjectParentAllGet()

Returns the list of all products parent categories  <div class=\"description_limit\"> <a href=\"/openapi/api-information#tag/Introduction/Rate-Limits\">Request limit</a> per one seller\'s account for all methods in the <strong>Content</strong> category:  | Period | Limit | Interval | Burst | | --- | --- | --- | --- | | 1 minute | 100 requests | 600 milliseconds | 5 requests |  Exceptions are the methods: <ul>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload/post\">creating product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Creating-Product-Cards/paths/~1content~1v2~1cards~1upload~1add/post\">creating product cards with merge</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1update/post\">editing product cards</a></li>     <li><a href=\"/openapi/work-with-products#tag/Product-Cards/paths/~1content~1v2~1cards~1error~1list/post\">getting failed product cards with errors</a></li> </ul> </div> 

### Example

```typescript
import {
    CategoriesSubjectsAndCharacteristicsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesSubjectsAndCharacteristicsApi(configuration);

let locale: string; //Language for response of the `name` field:   - `ru` — Russian   - `en` — English   - `zh` — Chinese  Not used in the sandbox  (optional) (default to undefined)

const { status, data } = await apiInstance.contentV2ObjectParentAllGet(
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locale** | [**string**] | Language for response of the &#x60;name&#x60; field:   - &#x60;ru&#x60; — Russian   - &#x60;en&#x60; — English   - &#x60;zh&#x60; — Chinese  Not used in the sandbox  | (optional) defaults to undefined|


### Return type

**ContentV2ObjectParentAllGet200Response**

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

