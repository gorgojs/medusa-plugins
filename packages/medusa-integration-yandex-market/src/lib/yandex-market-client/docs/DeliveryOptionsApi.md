# DeliveryOptionsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDeliveryOptions**](#getdeliveryoptions) | **POST** /v1/campaigns/{campaignId}/delivery-options | Получение доступных вариантов доставки заказов|
|[**getReturnDeliveryOptions**](#getreturndeliveryoptions) | **POST** /v1/campaigns/{campaignId}/return-delivery-options | Получение подходящих для возврата пунктов выдачи|

# **getDeliveryOptions**
> GetDeliveryOptionsResponse getDeliveryOptions(getDeliveryOptionsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getDeliveryOptions.md) %}  Возвращает список вариантов для доставки заказов. Выберите подходящий вариант доставки из ответа и передайте его при создании заказа.  Укажите `courierDelivery` для курьерской доставки или `pickupDelivery` для доставки в пункт выдачи. Не передавайте оба параметра одновременно.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getDeliveryOptions.md) %} 

### Example

```typescript
import {
    DeliveryOptionsApi,
    Configuration,
    GetDeliveryOptionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryOptionsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let getDeliveryOptionsRequest: GetDeliveryOptionsRequest; //

const { status, data } = await apiInstance.getDeliveryOptions(
    campaignId,
    getDeliveryOptionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getDeliveryOptionsRequest** | **GetDeliveryOptionsRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|


### Return type

**GetDeliveryOptionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список доступных вариантов доставки с разных складов. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибках при работе с заказами](../../concepts/error-codes#orders)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReturnDeliveryOptions**
> GetReturnDeliveryOptionsResponse getReturnDeliveryOptions(getReturnDeliveryOptionsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturnDeliveryOptions.md) %}  Возвращает список идентификаторов пунктов выдачи, которые могут принять возврат указанных товаров.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getReturnDeliveryOptions.md) %} 

### Example

```typescript
import {
    DeliveryOptionsApi,
    Configuration,
    GetReturnDeliveryOptionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryOptionsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let getReturnDeliveryOptionsRequest: GetReturnDeliveryOptionsRequest; //

const { status, data } = await apiInstance.getReturnDeliveryOptions(
    campaignId,
    getReturnDeliveryOptionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getReturnDeliveryOptionsRequest** | **GetReturnDeliveryOptionsRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|


### Return type

**GetReturnDeliveryOptionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о пунктах выдачи, которые могут принять возврат указанных товаров. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибках при работе с заказами](../../concepts/error-codes#orders)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

