# BrandAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**brandAPIBrandCompanyCertificationList**](#brandapibrandcompanycertificationlist) | **POST** /v1/brand/company-certification/list | Список сертифицируемых брендов|

# **brandAPIBrandCompanyCertificationList**
> BrandBrandCompanyCertificationListResponse brandAPIBrandCompanyCertificationList(brandBrandCompanyCertificationListRequest)

Метод для получения списка брендов, для которых требуется предоставить сертификат. Ответ содержит список брендов, товары которых есть в вашем личном кабинете.  Список брендов может изменяться, если Ozon получит требование от бренда предоставлять сертификат. 

### Example

```typescript
import {
    BrandAPIApi,
    Configuration,
    BrandBrandCompanyCertificationListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BrandAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let brandBrandCompanyCertificationListRequest: BrandBrandCompanyCertificationListRequest; //

const { status, data } = await apiInstance.brandAPIBrandCompanyCertificationList(
    clientId,
    apiKey,
    brandBrandCompanyCertificationListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **brandBrandCompanyCertificationListRequest** | **BrandBrandCompanyCertificationListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**BrandBrandCompanyCertificationListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список брендов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

