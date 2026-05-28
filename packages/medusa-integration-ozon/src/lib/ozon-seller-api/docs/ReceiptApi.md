# ReceiptApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getReceipt**](#getreceipt) | **POST** /v1/receipts/get | Получить чек в формате PDF|
|[**receiptsSellerList**](#receiptssellerlist) | **POST** /v1/receipts/seller/list | Получить список чеков продавца|
|[**uploadReceipt**](#uploadreceipt) | **POST** /v1/receipts/upload | Загрузить чек|

# **getReceipt**
> V1GetReceiptResponse getReceipt()

<aside class=\"warning\">  Метод доступен продавцам, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан». </aside> 

### Example

```typescript
import {
    ReceiptApi,
    Configuration,
    V1GetReceiptRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReceiptApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetReceiptRequest: V1GetReceiptRequest; // (optional)

const { status, data } = await apiInstance.getReceipt(
    clientId,
    apiKey,
    v1GetReceiptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetReceiptRequest** | **V1GetReceiptRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetReceiptResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Чек |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiptsSellerList**
> V1ReceiptsSellerListResponse receiptsSellerList()

<aside class=\"warning\">  Метод доступен продавцам, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан». </aside> 

### Example

```typescript
import {
    ReceiptApi,
    Configuration,
    V1ReceiptsSellerListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReceiptApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ReceiptsSellerListRequest: V1ReceiptsSellerListRequest; // (optional)

const { status, data } = await apiInstance.receiptsSellerList(
    clientId,
    apiKey,
    v1ReceiptsSellerListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ReceiptsSellerListRequest** | **V1ReceiptsSellerListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ReceiptsSellerListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список чеков продавца |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadReceipt**
> V1UploadReceiptResponse uploadReceipt()

<aside class=\"warning\">  Метод доступен продавцам, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан». </aside> 

### Example

```typescript
import {
    ReceiptApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReceiptApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let content: string; //Содержание файла в бинарном виде. (default to undefined)
let operationType: string; //Тип операции. Получите значение параметра методом [/v1/receipts/seller/list](#operation/ReceiptsSellerList). (default to undefined)
let postingNumbers: Array<string>; //Номера отправлений. (default to undefined)
let receiptNumber: string; //Номер чека. (default to undefined)
let type: V1UploadReceiptRequestTypeEnum; // (default to undefined)
let parentReceiptId: string; //Идентификатор родительского чека. Передайте параметр с идентификатором чека, который нужно изменить. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadReceipt(
    clientId,
    apiKey,
    content,
    operationType,
    postingNumbers,
    receiptNumber,
    type,
    parentReceiptId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|
| **content** | [**string**] | Содержание файла в бинарном виде. | defaults to undefined|
| **operationType** | [**string**] | Тип операции. Получите значение параметра методом [/v1/receipts/seller/list](#operation/ReceiptsSellerList). | defaults to undefined|
| **postingNumbers** | **Array&lt;string&gt;** | Номера отправлений. | defaults to undefined|
| **receiptNumber** | [**string**] | Номер чека. | defaults to undefined|
| **type** | **V1UploadReceiptRequestTypeEnum** |  | defaults to undefined|
| **parentReceiptId** | [**string**] | Идентификатор родительского чека. Передайте параметр с идентификатором чека, который нужно изменить. | (optional) defaults to undefined|


### Return type

**V1UploadReceiptResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Чек загружен |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

