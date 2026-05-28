# DigitalApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**digitalProductAPIStocksImport**](#digitalproductapistocksimport) | **POST** /v1/product/digital/stocks/import | Обновить количество цифровых товаров|
|[**listPostingCodes**](#listpostingcodes) | **POST** /v1/posting/digital/list | Получить список отправлений|
|[**uploadPostingCodes**](#uploadpostingcodes) | **POST** /v1/posting/digital/codes/upload | Загрузить коды цифровых товаров для отправления|

# **digitalProductAPIStocksImport**
> V1StocksImportResponse digitalProductAPIStocksImport(v1StocksImportRequest)

Метод доступен только продавцам, работающим с цифровыми товарами.   Используйте метод, чтобы изменить информацию о количестве товара в наличии. 

### Example

```typescript
import {
    DigitalApi,
    Configuration,
    V1StocksImportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalApi(configuration);

let v1StocksImportRequest: V1StocksImportRequest; //

const { status, data } = await apiInstance.digitalProductAPIStocksImport(
    v1StocksImportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1StocksImportRequest** | **V1StocksImportRequest**|  | |


### Return type

**V1StocksImportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество товаров обновлено |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPostingCodes**
> V1ListPostingCodesResponse listPostingCodes(v1ListPostingCodesRequest)

Возвращает список отправлений, по которым нужно загрузить коды цифровых товаров. Метод доступен только продавцам, работающим с цифровыми товарами.   Чтобы получить список отправлений в любом статусе, воспользуйтесь методом [/v2/posting/fbo/list](#operation/PostingAPI_GetFboPostingList). 

### Example

```typescript
import {
    DigitalApi,
    Configuration,
    V1ListPostingCodesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalApi(configuration);

let v1ListPostingCodesRequest: V1ListPostingCodesRequest; //

const { status, data } = await apiInstance.listPostingCodes(
    v1ListPostingCodesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ListPostingCodesRequest** | **V1ListPostingCodesRequest**|  | |


### Return type

**V1ListPostingCodesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отправлений |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadPostingCodes**
> V1UploadPostingCodesResponse uploadPostingCodes()

Метод доступен только продавцам, работающим с цифровыми товарами. Вы можете загрузить коды цифровых товаров в течение 24 часов с момента получения заказа.  Передайте все коды цифровых товаров к каждому товару в заказе за один запрос. Если передадите не все коды, запрос вернётся с ошибкой. 

### Example

```typescript
import {
    DigitalApi,
    Configuration,
    V1UploadPostingCodesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DigitalApi(configuration);

let v1UploadPostingCodesRequest: V1UploadPostingCodesRequest; // (optional)

const { status, data } = await apiInstance.uploadPostingCodes(
    v1UploadPostingCodesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1UploadPostingCodesRequest** | **V1UploadPostingCodesRequest**|  | |


### Return type

**V1UploadPostingCodesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Коды цифровых товаров загружены |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

