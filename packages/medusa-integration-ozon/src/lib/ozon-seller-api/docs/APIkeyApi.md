# APIkeyApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accessAPIRolesByToken**](#accessapirolesbytoken) | **POST** /v1/roles | Получить список ролей и методов по API-ключу|

# **accessAPIRolesByToken**
> V1RolesByTokenResponse accessAPIRolesByToken(body)

Метод для получения информации и ролях и методах, привязанных к API-ключу. 

### Example

```typescript
import {
    APIkeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new APIkeyApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; //

const { status, data } = await apiInstance.accessAPIRolesByToken(
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

**V1RolesByTokenResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список ролей и методов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

