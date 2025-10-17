# DeliveryServicesApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDeliveryServices**](#getdeliveryservices) | **GET** /v2/delivery/services | Справочник служб доставки|

# **getDeliveryServices**
> GetDeliveryServicesResponse getDeliveryServices()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getDeliveryServices.md) %}  Возвращает справочник служб доставки: идентификаторы и наименования. |**⚙️ Лимит:** 5 000 запросов в час| |-| 

### Example

```typescript
import {
    DeliveryServicesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryServicesApi(configuration);

const { status, data } = await apiInstance.getDeliveryServices();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetDeliveryServicesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о службах доставки. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

