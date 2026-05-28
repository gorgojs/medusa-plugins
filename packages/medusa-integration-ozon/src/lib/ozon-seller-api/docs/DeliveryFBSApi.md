# DeliveryFBSApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assemblyCarriagePostingList**](#assemblycarriagepostinglist) | **POST** /v1/assembly/carriage/posting/list | Получить список отправлений в отгрузке|
|[**assemblyCarriageProductList**](#assemblycarriageproductlist) | **POST** /v1/assembly/carriage/product/list | Получить список товаров в отгрузке|
|[**assemblyFbsPostingList**](#assemblyfbspostinglist) | **POST** /v1/assembly/fbs/posting/list | Получить список отправлений|
|[**assemblyFbsProductList**](#assemblyfbsproductlist) | **POST** /v1/assembly/fbs/product/list | Получить список товаров в отправлениях|
|[**carriageAPICarriageApprove**](#carriageapicarriageapprove) | **POST** /v1/carriage/approve | Подтверждение отгрузки|
|[**carriageAPICarriageCancel**](#carriageapicarriagecancel) | **POST** /v1/carriage/cancel | Удаление отгрузки|
|[**carriageAPICarriageCreate**](#carriageapicarriagecreate) | **POST** /v1/carriage/create | Создание отгрузки|
|[**carriageAPICarriageDeliveryList**](#carriageapicarriagedeliverylist) | **POST** /v1/carriage/delivery/list | Список методов доставки и отгрузок|
|[**carriageAPISetPostings**](#carriageapisetpostings) | **POST** /v1/carriage/set-postings | Изменение состава отгрузки|
|[**carriageEttnStatus**](#carriageettnstatus) | **POST** /v1/carriage/ettn/status | Получить статус проверки электронной ТТН на прослеживаемой перевозке FBS|
|[**carriageGet**](#carriageget) | **POST** /v1/carriage/get | Информация о перевозке|
|[**fbsSplit**](#fbssplit) | **POST** /v1/posting/fbs/split | Разделить заказ на отправления без сборки|
|[**postingAPIActPostingList**](#postingapiactpostinglist) | **POST** /v2/posting/fbs/act/get-postings | Список отправлений в акте|
|[**postingAPIFbsActList**](#postingapifbsactlist) | **POST** /v2/posting/fbs/act/list | Список актов по отгрузкам|
|[**postingAPIGetCarriageAvailableList**](#postingapigetcarriageavailablelist) | **POST** /v1/posting/carriage-available/list | Список доступных перевозок|
|[**postingAPIPostingFBSActCheckStatus**](#postingapipostingfbsactcheckstatus) | **POST** /v2/posting/fbs/act/check-status | Статус отгрузки и документов|
|[**postingAPIPostingFBSActCreate**](#postingapipostingfbsactcreate) | **POST** /v2/posting/fbs/act/create | Подтвердить отгрузку и создать документы|
|[**postingAPIPostingFBSActGetContainerLabels**](#postingapipostingfbsactgetcontainerlabels) | **POST** /v2/posting/fbs/act/get-container-labels | Этикетки для грузового места|
|[**postingAPIPostingFBSDigitalActCheckStatus**](#postingapipostingfbsdigitalactcheckstatus) | **POST** /v2/posting/fbs/digital/act/check-status | Статус формирования накладной|
|[**postingAPIPostingFBSGetAct**](#postingapipostingfbsgetact) | **POST** /v2/posting/fbs/act/get-pdf | Получить PDF c документами|
|[**postingAPIPostingFBSGetBarcode**](#postingapipostingfbsgetbarcode) | **POST** /v2/posting/fbs/act/get-barcode | Штрихкод для отгрузки отправления|
|[**postingAPIPostingFBSGetBarcodeText**](#postingapipostingfbsgetbarcodetext) | **POST** /v2/posting/fbs/act/get-barcode/text | Значение штрихкода для отгрузки отправления|
|[**postingAPIPostingFBSGetDigitalAct**](#postingapipostingfbsgetdigitalact) | **POST** /v2/posting/fbs/digital/act/get-pdf | Получить лист отгрузки по перевозке|
|[**postingFbsProductTraceableAttribute**](#postingfbsproducttraceableattribute) | **POST** /v1/posting/fbs/product/traceable/attribute | Получить список незаполненных атрибутов для прослеживаемых товаров|
|[**postingFbsTraceableSplit**](#postingfbstraceablesplit) | **POST** /v1/posting/fbs/traceable/split | Разделить отправление с прослеживаемыми товарами|

# **assemblyCarriagePostingList**
> V1AssemblyCarriagePostingListResponse assemblyCarriagePostingList()


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1AssemblyCarriagePostingListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AssemblyCarriagePostingListRequest: V1AssemblyCarriagePostingListRequest; // (optional)

const { status, data } = await apiInstance.assemblyCarriagePostingList(
    clientId,
    apiKey,
    v1AssemblyCarriagePostingListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AssemblyCarriagePostingListRequest** | **V1AssemblyCarriagePostingListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AssemblyCarriagePostingListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отправлений |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assemblyCarriageProductList**
> V1AssemblyCarriageProductListResponse assemblyCarriageProductList()


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1AssemblyCarriageProductListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AssemblyCarriageProductListRequest: V1AssemblyCarriageProductListRequest; // (optional)

const { status, data } = await apiInstance.assemblyCarriageProductList(
    clientId,
    apiKey,
    v1AssemblyCarriageProductListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AssemblyCarriageProductListRequest** | **V1AssemblyCarriageProductListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AssemblyCarriageProductListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assemblyFbsPostingList**
> V1AssemblyFbsPostingListResponse assemblyFbsPostingList()


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1AssemblyFbsPostingListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AssemblyFbsPostingListRequest: V1AssemblyFbsPostingListRequest; // (optional)

const { status, data } = await apiInstance.assemblyFbsPostingList(
    clientId,
    apiKey,
    v1AssemblyFbsPostingListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AssemblyFbsPostingListRequest** | **V1AssemblyFbsPostingListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AssemblyFbsPostingListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отправлений |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assemblyFbsProductList**
> V1AssemblyFbsProductListResponse assemblyFbsProductList()


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1AssemblyFbsProductListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AssemblyFbsProductListRequest: V1AssemblyFbsProductListRequest; // (optional)

const { status, data } = await apiInstance.assemblyFbsProductList(
    clientId,
    apiKey,
    v1AssemblyFbsProductListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AssemblyFbsProductListRequest** | **V1AssemblyFbsProductListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AssemblyFbsProductListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров в отправлениях |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageAPICarriageApprove**
> object carriageAPICarriageApprove(v1CarriageApproveRequest)

 Используйте метод, чтобы подтвердить отгрузку после её создания. После подтверждения отгрузка перейдёт в статус «Сформирована».  После подтверждения отгрузки вы можете получить лист отгрузки методом [/v2/posting/fbs/digital/act/get-pdf](#operation/PostingAPI_PostingFBSGetDigitalAct) и штрихкод отгрузки методом [/v2/posting/fbs/act/get-barcode](#operation/PostingAPI_PostingFBSGetBarcode).  

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1CarriageApproveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CarriageApproveRequest: V1CarriageApproveRequest; //

const { status, data } = await apiInstance.carriageAPICarriageApprove(
    clientId,
    apiKey,
    v1CarriageApproveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CarriageApproveRequest** | **V1CarriageApproveRequest**|  | |
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
|**200** | Отгрузка подтверждена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageAPICarriageCancel**
> V1CarriageCancelResponse carriageAPICarriageCancel(v1CarriageCancelRequest)


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1CarriageCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CarriageCancelRequest: V1CarriageCancelRequest; //

const { status, data } = await apiInstance.carriageAPICarriageCancel(
    clientId,
    apiKey,
    v1CarriageCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CarriageCancelRequest** | **V1CarriageCancelRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CarriageCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об отправлении |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageAPICarriageCreate**
> V1CarriageCreateResponse carriageAPICarriageCreate(v1CarriageCreateRequest)

 <aside class=\"warning\"> Если вы продавец не из России, обратите внимание на доступность <a href=\"https://seller-edu.ozon.ru/fbs/ozon-logistika/sobrat-zakazy#шаг-2-сформируите-отгрузку\">рекомендованного времени</a> в личном кабинете. Если вам не доступен этот функционал, создайте отгрузку через метод <a href=\"#operation/PostingAPI_PostingFBSActCreate\">/v2/posting/fbs/act/create</a>.  Подтверждать отгрузку, которую создали через этот метод, не нужно. Вы не сможете отредактировать состав отгрузки.  </aside>  Используйте метод для создания первой FBS отгрузки. В неё попадут все отправления со статусом «Готов к отгрузке». Созданная отгрузка получит статус `new`.  Для отгрузки в статусе `new` можно перезаписать состав отправлений методом [/v1/carriage/set-postings](#operation/CarriageAPI_SetPostings). Если из отгрузки исключить часть отправлений, они могут попасть в следующую отгрузку.   Чтобы получить список отправлений в отгрузке, используйте метод [/v2/posting/fbs/act/get-postings](#operation/PostingAPI_ActPostingList). 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1CarriageCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CarriageCreateRequest: V1CarriageCreateRequest; //

const { status, data } = await apiInstance.carriageAPICarriageCreate(
    clientId,
    apiKey,
    v1CarriageCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CarriageCreateRequest** | **V1CarriageCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CarriageCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об отгрузке |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageAPICarriageDeliveryList**
> V1CarriageDeliveryListResponse carriageAPICarriageDeliveryList(v1CarriageDeliveryListRequest)

<aside class=\"warning\">   Метод не возвращает информацию по методам доставки, у которых нет отправлений. </aside>  Используйте метод, чтобы получить список созданных отгрузок для метода доставки и их статусы.    <aside class=\"warning\">   Метод устаревает и будет отключён с 2 февраля 2026 года. Переключитесь на <a href=\"#operation/CarriageAPI_CarriageDeliveryListV2\">/v2/carriage/delivery/list</a>. </aside> 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1CarriageDeliveryListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CarriageDeliveryListRequest: V1CarriageDeliveryListRequest; //

const { status, data } = await apiInstance.carriageAPICarriageDeliveryList(
    clientId,
    apiKey,
    v1CarriageDeliveryListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CarriageDeliveryListRequest** | **V1CarriageDeliveryListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CarriageDeliveryListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список методов и отгрузок |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageAPISetPostings**
> V1SetPostingsResponse carriageAPISetPostings(v1SetPostingsRequest)

 <aside class=\"warning\"> Метод недоступен для продавцов из СНГ. <br>  Полностью перезаписывает список заказов в отгрузке. Передавайте только те заказы, которые находятся в статусе <code>Ожидает отгрузки</code>, и вы готовы их отгрузить.     </aside>  <br>  <aside class=\"notice\"> Чтобы вернуться к списку заказов, удалите отгрузку с помощью метода <a href=\"#operation/CarriageAPI_CarriageCancel\">/v1/carriage/cancel</a>, и создайте новую. </aside> 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1SetPostingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SetPostingsRequest: V1SetPostingsRequest; //

const { status, data } = await apiInstance.carriageAPISetPostings(
    clientId,
    apiKey,
    v1SetPostingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SetPostingsRequest** | **V1SetPostingsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SetPostingsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об отправлении |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageEttnStatus**
> V1CarriageEttnStatusResponse carriageEttnStatus()


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1CarriageEttnStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CarriageEttnStatusRequest: V1CarriageEttnStatusRequest; // (optional)

const { status, data } = await apiInstance.carriageEttnStatus(
    clientId,
    apiKey,
    v1CarriageEttnStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CarriageEttnStatusRequest** | **V1CarriageEttnStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CarriageEttnStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус проверки электронной ТТН |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageGet**
> CarriageCarriageGetResponse carriageGet(carriageCarriageGetRequest)


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    CarriageCarriageGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let carriageCarriageGetRequest: CarriageCarriageGetRequest; //

const { status, data } = await apiInstance.carriageGet(
    carriageCarriageGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carriageCarriageGetRequest** | **CarriageCarriageGetRequest**|  | |


### Return type

**CarriageCarriageGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о перевозке |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbsSplit**
> V1PostingFbsSplitResponse fbsSplit(v1PostingFbsSplitRequest)


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1PostingFbsSplitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let v1PostingFbsSplitRequest: V1PostingFbsSplitRequest; //

const { status, data } = await apiInstance.fbsSplit(
    v1PostingFbsSplitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingFbsSplitRequest** | **V1PostingFbsSplitRequest**|  | |


### Return type

**V1PostingFbsSplitResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заказ разделён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIActPostingList**
> V2PostingFBSActGetPostingsResponse postingAPIActPostingList(v2PostingFBSActGetPostingsRequest)

Возвращает список отправлений в акте по его идентификатору.

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V2PostingFBSActGetPostingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2PostingFBSActGetPostingsRequest: V2PostingFBSActGetPostingsRequest; //

const { status, data } = await apiInstance.postingAPIActPostingList(
    clientId,
    apiKey,
    v2PostingFBSActGetPostingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2PostingFBSActGetPostingsRequest** | **V2PostingFBSActGetPostingsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2PostingFBSActGetPostingsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отправлений |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsActList**
> V2PostingFBSActListResponse postingAPIFbsActList(v2PostingFBSActListRequest)

Возвращает список актов по отгрузкам с возможностью отфильтровать отгрузки по периоду, статусу и типу интеграции.

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V2PostingFBSActListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2PostingFBSActListRequest: V2PostingFBSActListRequest; //

const { status, data } = await apiInstance.postingAPIFbsActList(
    clientId,
    apiKey,
    v2PostingFBSActListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2PostingFBSActListRequest** | **V2PostingFBSActListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2PostingFBSActListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список актов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetCarriageAvailableList**
> Postingv1GetCarriageAvailableListResponse postingAPIGetCarriageAvailableList(postingv1GetCarriageAvailableListRequest)

<aside class=\"warning\">   Метод устаревает и будет отключён с 2 февраля 2026 года. Переключитесь на <a href=\"#operation/CarriageAPI_CarriageDeliveryListV2\">/v2/carriage/delivery/list</a>. </aside>  Метод для получения перевозок, по которым нужно распечатать штрихкод для отгрузки и документы: - для продацов из России — лист отгрузки и транспортную накладную; - для продавцов из СНГ — акт и транспортную накладную. 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    Postingv1GetCarriageAvailableListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingv1GetCarriageAvailableListRequest: Postingv1GetCarriageAvailableListRequest; //

const { status, data } = await apiInstance.postingAPIGetCarriageAvailableList(
    clientId,
    apiKey,
    postingv1GetCarriageAvailableListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingv1GetCarriageAvailableListRequest** | **Postingv1GetCarriageAvailableListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Postingv1GetCarriageAvailableListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список перевозок |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSActCheckStatus**
> PostingPostingFBSActCheckStatusResponse postingAPIPostingFBSActCheckStatus(postingPostingFBSActCheckStatusRequest)

Возвращает статус формирования штрихкода для отгрузки и документов: - для продавцов из России — транспортной накладной и листа отгрузки; - для продавцов из СНГ — транспортной накладной и акта приёма-передачи. 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    PostingPostingFBSActCheckStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingPostingFBSActCheckStatusRequest: PostingPostingFBSActCheckStatusRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSActCheckStatus(
    clientId,
    apiKey,
    postingPostingFBSActCheckStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingPostingFBSActCheckStatusRequest** | **PostingPostingFBSActCheckStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingPostingFBSActCheckStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус отгрузки и документов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSActCreate**
> PostingPostingFBSActCreateResponse postingAPIPostingFBSActCreate(postingPostingFBSActCreateRequest)

Подтверждает отгрузку и запускает формирование транспортной накладной и штрихкода для отгрузки. Для продавцов из России также запускается формирование листа отгрузки, а для продавцов из СНГ — акта приёма-передачи.  Чтобы сформировать и получить документы, переведите отправление в статус `awaiting_deliver`. 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    PostingPostingFBSActCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingPostingFBSActCreateRequest: PostingPostingFBSActCreateRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSActCreate(
    clientId,
    apiKey,
    postingPostingFBSActCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingPostingFBSActCreateRequest** | **PostingPostingFBSActCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingPostingFBSActCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отгрузка подтверждена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSActGetContainerLabels**
> PostingPostingFBSActGetContainerLabelsResponse postingAPIPostingFBSActGetContainerLabels(postingPostingFBSActGetContainerLabelsRequest)

Метод создает этикетки для грузового места.

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    PostingPostingFBSActGetContainerLabelsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingPostingFBSActGetContainerLabelsRequest: PostingPostingFBSActGetContainerLabelsRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSActGetContainerLabels(
    clientId,
    apiKey,
    postingPostingFBSActGetContainerLabelsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingPostingFBSActGetContainerLabelsRequest** | **PostingPostingFBSActGetContainerLabelsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingPostingFBSActGetContainerLabelsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Этикетки для грузового места |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSDigitalActCheckStatus**
> V2PostingFBSDigitalActCheckStatusResponse postingAPIPostingFBSDigitalActCheckStatus(v2PostingFBSDigitalActCheckStatusRequest)


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V2PostingFBSDigitalActCheckStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2PostingFBSDigitalActCheckStatusRequest: V2PostingFBSDigitalActCheckStatusRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSDigitalActCheckStatus(
    clientId,
    apiKey,
    v2PostingFBSDigitalActCheckStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2PostingFBSDigitalActCheckStatusRequest** | **V2PostingFBSDigitalActCheckStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2PostingFBSDigitalActCheckStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус формирования накладной |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSGetAct**
> PostingPostingFBSGetActResponse postingAPIPostingFBSGetAct(postingPostingFBSGetActRequest)

С помощью метода можно получить: - продацам из России — лист отгрузки и транспортную накладную; - продавцам из СНГ — акт и транспортную накладную. 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    PostingPostingFBSGetActRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingPostingFBSGetActRequest: PostingPostingFBSGetActRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSGetAct(
    clientId,
    apiKey,
    postingPostingFBSGetActRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingPostingFBSGetActRequest** | **PostingPostingFBSGetActRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingPostingFBSGetActResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Документы |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSGetBarcode**
> V2PostingFBSGetBarcodeResponse postingAPIPostingFBSGetBarcode(v2PostingFBSGetBarcodeRequest)

Метод для получения штрихкода, который нужно показать в пункте выдачи или сортировочном центре при отгрузке отправления.

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V2PostingFBSGetBarcodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2PostingFBSGetBarcodeRequest: V2PostingFBSGetBarcodeRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSGetBarcode(
    clientId,
    apiKey,
    v2PostingFBSGetBarcodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2PostingFBSGetBarcodeRequest** | **V2PostingFBSGetBarcodeRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2PostingFBSGetBarcodeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Штрихкод для отправления |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSGetBarcodeText**
> V2PostingFBSGetBarcodeTextResponse postingAPIPostingFBSGetBarcodeText()

Используйте этот метод, чтобы получить штрихкод из ответа [/v2/posting/fbs/act/get-barcode](#operation/PostingAPI_PostingFBSGetBarcode) в текстовом виде. 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V2PostingFBSGetBarcodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2PostingFBSGetBarcodeRequest: V2PostingFBSGetBarcodeRequest; // (optional)

const { status, data } = await apiInstance.postingAPIPostingFBSGetBarcodeText(
    clientId,
    apiKey,
    v2PostingFBSGetBarcodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2PostingFBSGetBarcodeRequest** | **V2PostingFBSGetBarcodeRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2PostingFBSGetBarcodeTextResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Значение штрихкода |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSGetDigitalAct**
> V2PostingFBSGetDigitalActResponse postingAPIPostingFBSGetDigitalAct(v2PostingFBSGetDigitalActRequest)

Вы можете получить документы, если в ответе метода [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus) был один из статусов: - `FORMED` — перевозка сформирована успешно, - `CONFIRMED` — перевозка подтверждена Ozon, - `CONFIRMED_WITH_MISMATCH` — перевозка принята Ozon с расхождениями. 

### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V2PostingFBSGetDigitalActRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2PostingFBSGetDigitalActRequest: V2PostingFBSGetDigitalActRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSGetDigitalAct(
    clientId,
    apiKey,
    v2PostingFBSGetDigitalActRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2PostingFBSGetDigitalActRequest** | **V2PostingFBSGetDigitalActRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2PostingFBSGetDigitalActResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Файл с документом |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingFbsProductTraceableAttribute**
> V1PostingFbsProductTraceableAttributeResponse postingFbsProductTraceableAttribute()


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1PostingFbsProductTraceableAttributeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PostingFbsProductTraceableAttributeRequest: V1PostingFbsProductTraceableAttributeRequest; // (optional)

const { status, data } = await apiInstance.postingFbsProductTraceableAttribute(
    clientId,
    apiKey,
    v1PostingFbsProductTraceableAttributeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingFbsProductTraceableAttributeRequest** | **V1PostingFbsProductTraceableAttributeRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1PostingFbsProductTraceableAttributeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список незаполненных атрибутов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingFbsTraceableSplit**
> V1PostingFbsTraceableSplitResponse postingFbsTraceableSplit()


### Example

```typescript
import {
    DeliveryFBSApi,
    Configuration,
    V1PostingFbsTraceableSplitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PostingFbsTraceableSplitRequest: V1PostingFbsTraceableSplitRequest; // (optional)

const { status, data } = await apiInstance.postingFbsTraceableSplit(
    clientId,
    apiKey,
    v1PostingFbsTraceableSplitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingFbsTraceableSplitRequest** | **V1PostingFbsTraceableSplitRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1PostingFbsTraceableSplitResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Заказ разделён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

