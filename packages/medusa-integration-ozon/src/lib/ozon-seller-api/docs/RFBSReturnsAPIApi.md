# RFBSReturnsAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rFBSReturnsAPIReturnsRfbsCompensateV2**](#rfbsreturnsapireturnsrfbscompensatev2) | **POST** /v2/returns/rfbs/compensate | Вернуть часть стоимости товара|
|[**rFBSReturnsAPIReturnsRfbsGetV2**](#rfbsreturnsapireturnsrfbsgetv2) | **POST** /v2/returns/rfbs/get | Информация о заявке на возврат|
|[**rFBSReturnsAPIReturnsRfbsListV2**](#rfbsreturnsapireturnsrfbslistv2) | **POST** /v2/returns/rfbs/list | Список заявок на возврат|
|[**rFBSReturnsAPIReturnsRfbsReceiveReturnV2**](#rfbsreturnsapireturnsrfbsreceivereturnv2) | **POST** /v2/returns/rfbs/receive-return | Подтвердить получение товара на проверку|
|[**rFBSReturnsAPIReturnsRfbsRejectV2**](#rfbsreturnsapireturnsrfbsrejectv2) | **POST** /v2/returns/rfbs/reject | Отклонить заявку на возврат|
|[**rFBSReturnsAPIReturnsRfbsReturnMoneyV2**](#rfbsreturnsapireturnsrfbsreturnmoneyv2) | **POST** /v2/returns/rfbs/return-money | Вернуть деньги покупателю|
|[**rFBSReturnsAPIReturnsRfbsVerifyV2**](#rfbsreturnsapireturnsrfbsverifyv2) | **POST** /v2/returns/rfbs/verify | Одобрить заявку на возврат|
|[**returnsAPIReturnsRfbsActionSet**](#returnsapireturnsrfbsactionset) | **POST** /v1/returns/rfbs/action/set | Передать доступные действия для rFBS возвратов|

# **rFBSReturnsAPIReturnsRfbsCompensateV2**
> object rFBSReturnsAPIReturnsRfbsCompensateV2(v2ReturnsRfbsCompensateRequest)

<aside class=\"warning\"> В будущем метод будет отключён. Переключитесь на <a href=\"#operation/ReturnsAPI_ReturnsRfbsActionSet\">/v1/returns/rfbs/action/set</a>. </aside>  Метод для частичной компенсации стоимости товара: вы возвращаете часть денег покупателю, товар остаётся у него. 

### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V2ReturnsRfbsCompensateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReturnsRfbsCompensateRequest: V2ReturnsRfbsCompensateRequest; //

const { status, data } = await apiInstance.rFBSReturnsAPIReturnsRfbsCompensateV2(
    clientId,
    apiKey,
    v2ReturnsRfbsCompensateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReturnsRfbsCompensateRequest** | **V2ReturnsRfbsCompensateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Частичная компенсация подтверждена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rFBSReturnsAPIReturnsRfbsGetV2**
> V2ReturnsRfbsGetResponse rFBSReturnsAPIReturnsRfbsGetV2(v2ReturnsRfbsGetRequest)


### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V2ReturnsRfbsGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReturnsRfbsGetRequest: V2ReturnsRfbsGetRequest; //

const { status, data } = await apiInstance.rFBSReturnsAPIReturnsRfbsGetV2(
    clientId,
    apiKey,
    v2ReturnsRfbsGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReturnsRfbsGetRequest** | **V2ReturnsRfbsGetRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ReturnsRfbsGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о заявке |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rFBSReturnsAPIReturnsRfbsListV2**
> V2ReturnsRfbsListResponse rFBSReturnsAPIReturnsRfbsListV2(v2ReturnsRfbsListRequest)


### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V2ReturnsRfbsListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReturnsRfbsListRequest: V2ReturnsRfbsListRequest; //

const { status, data } = await apiInstance.rFBSReturnsAPIReturnsRfbsListV2(
    clientId,
    apiKey,
    v2ReturnsRfbsListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReturnsRfbsListRequest** | **V2ReturnsRfbsListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ReturnsRfbsListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список заявок на возврат |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rFBSReturnsAPIReturnsRfbsReceiveReturnV2**
> object rFBSReturnsAPIReturnsRfbsReceiveReturnV2(v2ReturnsRfbsReceiveReturnRequest)

<aside class=\"warning\">   В будущем метод будет отключён. Переключитесь на <a href=\"#operation/ReturnsAPI_ReturnsRfbsActionSet\">/v1/returns/rfbs/action/set</a>. </aside> 

### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V2ReturnsRfbsReceiveReturnRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReturnsRfbsReceiveReturnRequest: V2ReturnsRfbsReceiveReturnRequest; //

const { status, data } = await apiInstance.rFBSReturnsAPIReturnsRfbsReceiveReturnV2(
    clientId,
    apiKey,
    v2ReturnsRfbsReceiveReturnRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReturnsRfbsReceiveReturnRequest** | **V2ReturnsRfbsReceiveReturnRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Получение подтверждено |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rFBSReturnsAPIReturnsRfbsRejectV2**
> object rFBSReturnsAPIReturnsRfbsRejectV2(v2ReturnsRfbsRejectRequest)

<aside class=\"warning\"> В будущем метод будет отключён. Переключитесь на <a href=\"#operation/ReturnsAPI_ReturnsRfbsActionSet\">/v1/returns/rfbs/action/set</a>. </aside>  Метод позволяет отклонить заявку на возврат rFBS-заказа. Вы можете объяснить своё решение в параметре `comment`. 

### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V2ReturnsRfbsRejectRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReturnsRfbsRejectRequest: V2ReturnsRfbsRejectRequest; //

const { status, data } = await apiInstance.rFBSReturnsAPIReturnsRfbsRejectV2(
    clientId,
    apiKey,
    v2ReturnsRfbsRejectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReturnsRfbsRejectRequest** | **V2ReturnsRfbsRejectRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заявка отклонена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rFBSReturnsAPIReturnsRfbsReturnMoneyV2**
> object rFBSReturnsAPIReturnsRfbsReturnMoneyV2(v2ReturnsRfbsReturnMoneyRequest)

<aside class=\"warning\"> В будущем метод будет отключён. Переключитесь на <a href=\"#operation/ReturnsAPI_ReturnsRfbsActionSet\">/v1/returns/rfbs/action/set</a>. </aside>  Метод подтверждает возврат полной стоимости товара. Используйте метод, если согласны: - сразу вернуть стоимость товара и оставить его покупателю; - вернуть стоимость после получения и проверки товара.  Если товар оказался ненадлежащего качества или с браком, вы возмещаете покупателю стоимость пересылки товара. 

### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V2ReturnsRfbsReturnMoneyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReturnsRfbsReturnMoneyRequest: V2ReturnsRfbsReturnMoneyRequest; //

const { status, data } = await apiInstance.rFBSReturnsAPIReturnsRfbsReturnMoneyV2(
    clientId,
    apiKey,
    v2ReturnsRfbsReturnMoneyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReturnsRfbsReturnMoneyRequest** | **V2ReturnsRfbsReturnMoneyRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Возврат денег подтверждён |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rFBSReturnsAPIReturnsRfbsVerifyV2**
> object rFBSReturnsAPIReturnsRfbsVerifyV2(v2ReturnsRfbsVerifyRequest)

<aside class=\"warning\"> В будущем метод будет отключён. Переключитесь на <a href=\"#operation/ReturnsAPI_ReturnsRfbsActionSet\">/v1/returns/rfbs/action/set</a>. </aside>  Метод позволяет одобрить заявку и согласиться на получение товара для проверки.  Подтвердите получение товара с помощью метода [/v2/returns/rfbs/receive-return](#operation/RFBSReturnsAPI_ReturnsRfbsReceiveReturnV2). 

### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V2ReturnsRfbsVerifyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReturnsRfbsVerifyRequest: V2ReturnsRfbsVerifyRequest; //

const { status, data } = await apiInstance.rFBSReturnsAPIReturnsRfbsVerifyV2(
    clientId,
    apiKey,
    v2ReturnsRfbsVerifyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReturnsRfbsVerifyRequest** | **V2ReturnsRfbsVerifyRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заявка одобрена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnsAPIReturnsRfbsActionSet**
> returnsAPIReturnsRfbsActionSet(v1ReturnsRfbsActionSetRequest)

Метод для передачи действий для возврата rFBS.

### Example

```typescript
import {
    RFBSReturnsAPIApi,
    Configuration,
    V1ReturnsRfbsActionSetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RFBSReturnsAPIApi(configuration);

let v1ReturnsRfbsActionSetRequest: V1ReturnsRfbsActionSetRequest; //

const { status, data } = await apiInstance.returnsAPIReturnsRfbsActionSet(
    v1ReturnsRfbsActionSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ReturnsRfbsActionSetRequest** | **V1ReturnsRfbsActionSetRequest**|  | |


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Действие передано |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

