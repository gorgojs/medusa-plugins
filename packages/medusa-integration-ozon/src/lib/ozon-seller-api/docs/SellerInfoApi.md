# SellerInfoApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sellerAPISellerInfo**](#sellerapisellerinfo) | **POST** /v1/seller/info | Информация о кабинете продавца|
|[**sellerAPISellerOzonLogisticsInfo**](#sellerapisellerozonlogisticsinfo) | **POST** /v1/seller/ozon-logistics/info | Информация о подключении Ozon Логистики|

# **sellerAPISellerInfo**
> V1SellerInfoResponse sellerAPISellerInfo()


### Example

```typescript
import {
    SellerInfoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerInfoApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.sellerAPISellerInfo(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SellerInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о кабинете продавца |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sellerAPISellerOzonLogisticsInfo**
> V1SellerOzonLogisticsInfoResponse sellerAPISellerOzonLogisticsInfo()


### Example

```typescript
import {
    SellerInfoApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SellerInfoApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.sellerAPISellerOzonLogisticsInfo(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SellerOzonLogisticsInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о подключении Ozon Логистики |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

