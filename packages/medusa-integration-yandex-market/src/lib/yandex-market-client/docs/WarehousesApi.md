# WarehousesApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFulfillmentWarehouses**](#getfulfillmentwarehouses) | **GET** /v2/warehouses | Идентификаторы фулфилмент-складов Маркета|
|[**getPagedWarehouses**](#getpagedwarehouses) | **POST** /v2/businesses/{businessId}/warehouses | Список складов|
|[**getWarehouses**](#getwarehouses) | **GET** /v2/businesses/{businessId}/warehouses | Список складов и групп складов|
|[**updateWarehouseStatus**](#updatewarehousestatus) | **POST** /v2/campaigns/{campaignId}/warehouse/status | Изменение статуса склада|

# **getFulfillmentWarehouses**
> GetFulfillmentWarehousesResponse getFulfillmentWarehouses()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getFulfillmentWarehouses.md) %}  Возвращает список фулфилмент-складов Маркета с их идентификаторами.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getFulfillmentWarehouses.md) %} 

### Example

```typescript
import {
    WarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let campaignId: number; //Идентификатор кампании магазина.  Указывается, если нужно вернуть все склады Маркета, которые привязаны к определенной кампании магазина.  (optional) (default to undefined)

const { status, data } = await apiInstance.getFulfillmentWarehouses(
    campaignId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании магазина.  Указывается, если нужно вернуть все склады Маркета, которые привязаны к определенной кампании магазина.  | (optional) defaults to undefined|


### Return type

**GetFulfillmentWarehousesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPagedWarehouses**
> GetPagedWarehousesResponse getPagedWarehouses()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getPagedWarehouses.md) %}  Возвращает список складов и информацию о них.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getPagedWarehouses.md) %} 

### Example

```typescript
import {
    WarehousesApi,
    Configuration,
    GetPagedWarehousesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.  (optional) (default to undefined)
let limit: number; //{{ limit-param-description }}  (optional) (default to 15)
let getPagedWarehousesRequest: GetPagedWarehousesRequest; // (optional)

const { status, data } = await apiInstance.getPagedWarehouses(
    businessId,
    pageToken,
    limit,
    getPagedWarehousesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getPagedWarehousesRequest** | **GetPagedWarehousesRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  | (optional) defaults to undefined|
| **limit** | [**number**] | {{ limit-param-description }}  | (optional) defaults to 15|


### Return type

**GetPagedWarehousesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов и их свойства, которые вы запрашивали. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWarehouses**
> GetWarehousesResponse getWarehouses()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getWarehouses.md) %}  {% note warning \"Какой метод использовать вместо устаревшего\" %}  [POST v2/businesses/{businessId}/warehouses](../../reference/warehouses/getPagedWarehouses.md)  {% endnote %}  Возвращает список складов и, если склады объединены, список групп складов. [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks)  Среди прочего запрос позволяет определить идентификатор, который нужно использовать при передаче остатков для группы складов.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getWarehouses.md) %} 

### Example

```typescript
import {
    WarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)

const { status, data } = await apiInstance.getWarehouses(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**GetWarehousesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов и групп складов. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWarehouseStatus**
> UpdateWarehouseStatusResponse updateWarehouseStatus(updateWarehouseStatusRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateWarehouseStatus.md) %}  Отключает или включает склад.  После отключения склада товары, которые находятся на нем, скрываются через 15 минут. После включения они возвращаются на витрину через 15 минут, а если склад был выключен 30 дней или дольше — через 4 часа.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/updateWarehouseStatus.md) %} 

### Example

```typescript
import {
    WarehousesApi,
    Configuration,
    UpdateWarehouseStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let updateWarehouseStatusRequest: UpdateWarehouseStatusRequest; //

const { status, data } = await apiInstance.updateWarehouseStatus(
    campaignId,
    updateWarehouseStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWarehouseStatusRequest** | **UpdateWarehouseStatusRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|


### Return type

**UpdateWarehouseStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Новый статус склада. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

