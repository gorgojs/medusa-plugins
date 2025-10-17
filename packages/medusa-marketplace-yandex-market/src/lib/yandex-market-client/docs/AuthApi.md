# AuthApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuthTokenInfo**](#getauthtokeninfo) | **POST** /v2/auth/token | Получение информации о токене авторизации|

# **getAuthTokenInfo**
> GetTokenInfoResponse getAuthTokenInfo()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getAuthTokenInfo.md) %}  {% note info \"Метод доступен только для Api-Key-токена.\" %}     {% endnote %}  Возвращает информацию о переданном токене авторизации.  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.getAuthTokenInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetTokenInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о токене авторизации. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

