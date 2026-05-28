# OperationsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOperations**](#getoperations) | **POST** /v1/businesses/{businessId}/operations | Получение статусов операций|

# **getOperations**
> GetOperationsResponse getOperations(getOperationsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOperations.md) %}  Возвращает статусы запущенных операций по их идентификаторам.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getOperations.md) %} 

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    GetOperationsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let getOperationsRequest: GetOperationsRequest; //

const { status, data } = await apiInstance.getOperations(
    businessId,
    getOperationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getOperationsRequest** | **GetOperationsRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**GetOperationsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об операциях. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

