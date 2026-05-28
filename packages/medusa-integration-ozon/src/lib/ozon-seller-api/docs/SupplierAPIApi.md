# SupplierAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**invoiceAPIInvoiceCreateOrUpdateV2**](#invoiceapiinvoicecreateorupdatev2) | **POST** /v2/invoice/create-or-update | Создать или изменить счёт-фактуру|
|[**invoiceDelete**](#invoicedelete) | **POST** /v1/invoice/delete | Удалить ссылку на счёт-фактуру|
|[**invoiceGetV2**](#invoicegetv2) | **POST** /v2/invoice/get | Получить информацию о счёте-фактуре|
|[**invoiceUpload**](#invoiceupload) | **POST** /v1/invoice/file/upload | Загрузка счёта-фактуры|

# **invoiceAPIInvoiceCreateOrUpdateV2**
> V2InvoiceCreateOrUpdateV2Response invoiceAPIInvoiceCreateOrUpdateV2(v2InvoiceCreateOrUpdateV2Request)

Создание или изменение таможенного счёта-фактуры для возврата НДС продавцам из Турции.

### Example

```typescript
import {
    SupplierAPIApi,
    Configuration,
    V2InvoiceCreateOrUpdateV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierAPIApi(configuration);

let v2InvoiceCreateOrUpdateV2Request: V2InvoiceCreateOrUpdateV2Request; //

const { status, data } = await apiInstance.invoiceAPIInvoiceCreateOrUpdateV2(
    v2InvoiceCreateOrUpdateV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2InvoiceCreateOrUpdateV2Request** | **V2InvoiceCreateOrUpdateV2Request**|  | |


### Return type

**V2InvoiceCreateOrUpdateV2Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Счёт-фактура создана или изменена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoiceDelete**
> V1InvoiceDeleteResponse invoiceDelete(v1InvoiceDeleteRequest)



### Example

```typescript
import {
    SupplierAPIApi,
    Configuration,
    V1InvoiceDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierAPIApi(configuration);

let v1InvoiceDeleteRequest: V1InvoiceDeleteRequest; //

const { status, data } = await apiInstance.invoiceDelete(
    v1InvoiceDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1InvoiceDeleteRequest** | **V1InvoiceDeleteRequest**|  | |


### Return type

**V1InvoiceDeleteResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ссылка удалена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoiceGetV2**
> V2InvoiceGetV2Response invoiceGetV2(v1InvoiceGetRequest)



### Example

```typescript
import {
    SupplierAPIApi,
    Configuration,
    V1InvoiceGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierAPIApi(configuration);

let v1InvoiceGetRequest: V1InvoiceGetRequest; //

const { status, data } = await apiInstance.invoiceGetV2(
    v1InvoiceGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1InvoiceGetRequest** | **V1InvoiceGetRequest**|  | |


### Return type

**V2InvoiceGetV2Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о счёте-фактуре |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoiceUpload**
> V1InvoiceFileUploadResponse invoiceUpload(v1InvoiceFileUploadRequest)

Доступные форматы: JPEG и PDF. Максимальный размер файла: 10 МБ. 

### Example

```typescript
import {
    SupplierAPIApi,
    Configuration,
    V1InvoiceFileUploadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierAPIApi(configuration);

let v1InvoiceFileUploadRequest: V1InvoiceFileUploadRequest; //

const { status, data } = await apiInstance.invoiceUpload(
    v1InvoiceFileUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1InvoiceFileUploadRequest** | **V1InvoiceFileUploadRequest**|  | |


### Return type

**V1InvoiceFileUploadResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ссылка на счёт-фактуру |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

