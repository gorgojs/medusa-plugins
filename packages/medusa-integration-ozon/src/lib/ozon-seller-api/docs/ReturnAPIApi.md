# ReturnAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**returnAPIGiveoutBarcodeReset**](#returnapigiveoutbarcodereset) | **POST** /v1/return/giveout/barcode-reset | Сгенерировать новый штрихкод|
|[**returnAPIGiveoutGetBarcode**](#returnapigiveoutgetbarcode) | **POST** /v1/return/giveout/barcode | Значение штрихкода для возвратных отгрузок|
|[**returnAPIGiveoutGetPDF**](#returnapigiveoutgetpdf) | **POST** /v1/return/giveout/get-pdf | Штрихкод для получения возвратной отгрузки в формате PDF|
|[**returnAPIGiveoutGetPNG**](#returnapigiveoutgetpng) | **POST** /v1/return/giveout/get-png | Штрихкод для получения возвратной отгрузки в формате PNG|
|[**returnAPIGiveoutInfo**](#returnapigiveoutinfo) | **POST** /v1/return/giveout/info | Информация о возвратной отгрузке|
|[**returnAPIGiveoutIsEnabled**](#returnapigiveoutisenabled) | **POST** /v1/return/giveout/is-enabled | Проверить возможность получения возвратных отгрузок по штрихкоду|
|[**returnAPIGiveoutList**](#returnapigiveoutlist) | **POST** /v1/return/giveout/list | Список возвратных отгрузок|
|[**returnsCompanyFBSInfo**](#returnscompanyfbsinfo) | **POST** /v1/returns/company/fbs/info | Количество возвратов FBS|

# **returnAPIGiveoutBarcodeReset**
> V1GiveoutBarcodeResetResponse returnAPIGiveoutBarcodeReset()

Используйте метод, если ваш штрихкод попал в посторонние руки.  Метод возвращает PNG-файл с новым штрихкодом. После использования метода вы не сможете получить возвратную отгрузку по старым штрихкодам. Чтобы получить новый штрихкод в PDF-формате, запросите его методом [/v1/return/giveout/get-pdf](#operation/ReturnAPI_GiveoutGetPDF). 

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.returnAPIGiveoutBarcodeReset(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GiveoutBarcodeResetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Новый штрихкод |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnAPIGiveoutGetBarcode**
> V1GiveoutGetBarcodeResponse returnAPIGiveoutGetBarcode()

Используйте этот метод, чтобы получить штрихкод из ответа методов [/v1/return/giveout/get-png](#operation/ReturnAPI_GiveoutGetPNG) и [/v1/return/giveout/get-pdf](#operation/ReturnAPI_GiveoutGetPDF) в текстовом виде.

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.returnAPIGiveoutGetBarcode(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GiveoutGetBarcodeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Значение штрихкода |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnAPIGiveoutGetPDF**
> V1GiveoutGetPDFResponse returnAPIGiveoutGetPDF()

Возвращает PDF-файл со штрихкодом. Метод работает только для схемы FBS.

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.returnAPIGiveoutGetPDF(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GiveoutGetPDFResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Штрихкод для возвратной отгрузки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnAPIGiveoutGetPNG**
> V1GiveoutGetPNGResponse returnAPIGiveoutGetPNG()

Возвращает PNG-файл со штрихкодом.

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.returnAPIGiveoutGetPNG(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GiveoutGetPNGResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Штрихкод для возвратной отгрузки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnAPIGiveoutInfo**
> V1GiveoutInfoResponse returnAPIGiveoutInfo(v1GiveoutInfoRequest)

Метод для получения информации о возвратной отгрузке.  В параметр `giveout_id` передаётся значение, полученное в методе [/v1/return/giveout/list](#operation/ReturnAPI_GiveoutList). 

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration,
    V1GiveoutInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GiveoutInfoRequest: V1GiveoutInfoRequest; //

const { status, data } = await apiInstance.returnAPIGiveoutInfo(
    clientId,
    apiKey,
    v1GiveoutInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GiveoutInfoRequest** | **V1GiveoutInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GiveoutInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о возвратной отгрузке |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnAPIGiveoutIsEnabled**
> V1GiveoutIsEnabledResponse returnAPIGiveoutIsEnabled()

Если у вас есть доступ, в параметре `enabled` будет указано значение `true`.

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.returnAPIGiveoutIsEnabled(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GiveoutIsEnabledResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат проверки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnAPIGiveoutList**
> V1GiveoutListResponse returnAPIGiveoutList(v1GiveoutListRequest)

Метод для получения списка активных возвратов. Возвратная отгрузка становится активной после сканирования штрихкода.  После сканирования штрихкода второй раз активная выдача переходит в статус неактивной. 

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration,
    V1GiveoutListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GiveoutListRequest: V1GiveoutListRequest; //

const { status, data } = await apiInstance.returnAPIGiveoutList(
    clientId,
    apiKey,
    v1GiveoutListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GiveoutListRequest** | **V1GiveoutListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GiveoutListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список возвратных отгрузок |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnsCompanyFBSInfo**
> V1ReturnsCompanyFbsInfoResponse returnsCompanyFBSInfo()

Метод для получения информации о возвратах FBS и их количестве.

### Example

```typescript
import {
    ReturnAPIApi,
    Configuration,
    V1ReturnsCompanyFbsInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ReturnsCompanyFbsInfoRequest: V1ReturnsCompanyFbsInfoRequest; // (optional)

const { status, data } = await apiInstance.returnsCompanyFBSInfo(
    clientId,
    apiKey,
    v1ReturnsCompanyFbsInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ReturnsCompanyFbsInfoRequest** | **V1ReturnsCompanyFbsInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ReturnsCompanyFbsInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество возвратов FBS |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

