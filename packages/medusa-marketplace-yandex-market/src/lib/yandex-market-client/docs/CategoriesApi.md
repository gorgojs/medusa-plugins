# CategoriesApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCategoriesMaxSaleQuantum**](#getcategoriesmaxsalequantum) | **POST** /v2/categories/max-sale-quantum | Лимит на установку кванта продажи и минимального количества товаров в заказе|
|[**getCategoriesTree**](#getcategoriestree) | **POST** /v2/categories/tree | Дерево категорий|

# **getCategoriesMaxSaleQuantum**
> GetCategoriesMaxSaleQuantumResponse getCategoriesMaxSaleQuantum(getCategoriesMaxSaleQuantumRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCategoriesMaxSaleQuantum.md) %}  Возвращает лимит на установку [кванта](*quantum) и минимального количества товаров в заказе, которые вы можете задать для товаров указанных категорий.  Если вы передадите значение кванта или минимального количества товаров выше установленного Маркетом ограничения, товар будет скрыт с витрины.  Подробнее о том, как продавать товары по несколько штук, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/fields/quantum).  |**⚙️ Лимит:** 5 000 запросов в час| |-| 

### Example

```typescript
import {
    CategoriesApi,
    Configuration,
    GetCategoriesMaxSaleQuantumRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let getCategoriesMaxSaleQuantumRequest: GetCategoriesMaxSaleQuantumRequest; //

const { status, data } = await apiInstance.getCategoriesMaxSaleQuantum(
    getCategoriesMaxSaleQuantumRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getCategoriesMaxSaleQuantumRequest** | **GetCategoriesMaxSaleQuantumRequest**|  | |


### Return type

**GetCategoriesMaxSaleQuantumResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Лимит на установку кванта и минимального количества товаров. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCategoriesTree**
> GetCategoriesResponse getCategoriesTree()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCategoriesTree.md) %}  Возвращает дерево категорий Маркета.  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    CategoriesApi,
    Configuration,
    GetCategoriesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoriesApi(configuration);

let getCategoriesRequest: GetCategoriesRequest; // (optional)

const { status, data } = await apiInstance.getCategoriesTree(
    getCategoriesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getCategoriesRequest** | **GetCategoriesRequest**|  | |


### Return type

**GetCategoriesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Категории Маркета. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

