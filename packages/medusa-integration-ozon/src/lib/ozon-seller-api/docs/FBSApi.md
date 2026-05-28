# FBSApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postingAPICancelFbsPosting**](#postingapicancelfbsposting) | **POST** /v2/posting/fbs/cancel | Отменить отправление|
|[**postingAPICancelFbsPostingProduct**](#postingapicancelfbspostingproduct) | **POST** /v2/posting/fbs/product/cancel | Отменить отправку некоторых товаров в отправлении|
|[**postingAPICreateLabelBatch**](#postingapicreatelabelbatch) | **POST** /v1/posting/fbs/package-label/create | Создать задание на выгрузку этикеток|
|[**postingAPICreateLabelBatchV2**](#postingapicreatelabelbatchv2) | **POST** /v2/posting/fbs/package-label/create | Создать задание на формирование этикеток|
|[**postingAPIGetEtgb**](#postingapigetetgb) | **POST** /v1/posting/global/etgb | Таможенные декларации ETGB|
|[**postingAPIGetFbsPostingByBarcode**](#postingapigetfbspostingbybarcode) | **POST** /v2/posting/fbs/get-by-barcode | Получить информацию об отправлении по штрихкоду|
|[**postingAPIGetFbsPostingListV3**](#postingapigetfbspostinglistv3) | **POST** /v3/posting/fbs/list | Список отправлений|
|[**postingAPIGetFbsPostingUnfulfilledList**](#postingapigetfbspostingunfulfilledlist) | **POST** /v3/posting/fbs/unfulfilled/list | Список необработанных отправлений|
|[**postingAPIGetFbsPostingV3**](#postingapigetfbspostingv3) | **POST** /v3/posting/fbs/get | Получить информацию об отправлении по идентификатору|
|[**postingAPIGetLabelBatch**](#postingapigetlabelbatch) | **POST** /v1/posting/fbs/package-label/get | Получить файл с этикетками|
|[**postingAPIGetPostingFbsCancelReasonList**](#postingapigetpostingfbscancelreasonlist) | **POST** /v2/posting/fbs/cancel-reason/list | Причины отмены отправлений|
|[**postingAPIGetPostingFbsCancelReasonV1**](#postingapigetpostingfbscancelreasonv1) | **POST** /v1/posting/fbs/cancel-reason | Причины отмены отправления|
|[**postingAPIGetRestrictions**](#postingapigetrestrictions) | **POST** /v1/posting/fbs/restrictions | Получить ограничения пункта приёма|
|[**postingAPIListCountryProductFbsPostingV2**](#postingapilistcountryproductfbspostingv2) | **POST** /v2/posting/fbs/product/country/list | Список доступных стран-изготовителей|
|[**postingAPIMoveFbsPostingToArbitration**](#postingapimovefbspostingtoarbitration) | **POST** /v2/posting/fbs/arbitration | Открыть спор по отправлению|
|[**postingAPIMoveFbsPostingToAwaitingDelivery**](#postingapimovefbspostingtoawaitingdelivery) | **POST** /v2/posting/fbs/awaiting-delivery | Передать отправление к отгрузке|
|[**postingAPIPostingFBSPackageLabel**](#postingapipostingfbspackagelabel) | **POST** /v2/posting/fbs/package-label | Напечатать этикетку|
|[**postingAPIPostingFBSPickupCodeVerify**](#postingapipostingfbspickupcodeverify) | **POST** /v1/posting/fbs/pick-up-code/verify | Проверить код курьера|
|[**postingAPIPostingMultiBoxQtySetV3**](#postingapipostingmultiboxqtysetv3) | **POST** /v3/posting/multiboxqty/set | Указать количество коробок для многокоробочных отправлений|
|[**postingAPISetCountryProductFbsPostingV2**](#postingapisetcountryproductfbspostingv2) | **POST** /v2/posting/fbs/product/country/set | Добавить информацию о стране-изготовителе товара|
|[**postingAPIUnpaidLegalProductList**](#postingapiunpaidlegalproductlist) | **POST** /v1/posting/unpaid-legal/product/list | Список неоплаченных товаров, заказанных юридическими лицами|

# **postingAPICancelFbsPosting**
> PostingBooleanResponse postingAPICancelFbsPosting(postingCancelFbsPostingRequest)

Меняет статус отправления на `cancelled`.  Перед началом работы проверьте причины отмены для конкретного отправления методом [/v1/posting/fbs/cancel-reason](#operation/PostingAPI_GetPostingFbsCancelReasonV1).  Условно-доставленные отправления отменить нельзя.  Если значение параметра `cancel_reason_id` — 402, заполните поле `cancel_reason_message`. 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    PostingCancelFbsPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingCancelFbsPostingRequest: PostingCancelFbsPostingRequest; //

const { status, data } = await apiInstance.postingAPICancelFbsPosting(
    clientId,
    apiKey,
    postingCancelFbsPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingCancelFbsPostingRequest** | **PostingCancelFbsPostingRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingBooleanResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отправление отменено |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPICancelFbsPostingProduct**
> PostingPostingProductCancelResponse postingAPICancelFbsPostingProduct()

Используйте метод, если вы не можете отправить часть продуктов из отправления.  Чтобы получить идентификаторы причин отмены `cancel_reason_id` при работе по схемам FBS или rFBS, используйте метод [/v2/posting/fbs/cancel-reason/list](#operation/PostingAPI_GetPostingFbsCancelReasonList).  Условно-доставленные отправления отменить нельзя. 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    PostingPostingProductCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingPostingProductCancelRequest: PostingPostingProductCancelRequest; // (optional)

const { status, data } = await apiInstance.postingAPICancelFbsPostingProduct(
    clientId,
    apiKey,
    postingPostingProductCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingPostingProductCancelRequest** | **PostingPostingProductCancelRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingPostingProductCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отправка отменена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPICreateLabelBatch**
> V1CreateLabelBatchResponse postingAPICreateLabelBatch(v1CreateLabelBatchRequest)

<aside class=\"warning\"> В будущем метод будет отключён. Мы предупредим вас об этом за месяц. Переключитесь на <a href=\"#operation/PostingAPI_CreateLabelBatchV2\">/v2/posting/fbs/package-label/create</a>. </aside>  Метод для создания задания на асинхронное формирование этикеток.  Для получения этикеток, созданных в результате вызова метода, используйте [/v1/posting/fbs/package-label/get](#operation/PostingAPI_GetLabelBatch). 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V1CreateLabelBatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CreateLabelBatchRequest: V1CreateLabelBatchRequest; //

const { status, data } = await apiInstance.postingAPICreateLabelBatch(
    clientId,
    apiKey,
    v1CreateLabelBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreateLabelBatchRequest** | **V1CreateLabelBatchRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CreateLabelBatchResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Идентификатор задания на формирование этикеток |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPICreateLabelBatchV2**
> V2CreateLabelBatchResponse postingAPICreateLabelBatchV2(v1CreateLabelBatchRequest)

Метод для создания задания на асинхронное формирование этикеток для отправлений в статусе «Ожидает отгрузки» — `awaiting_deliver`. Метод может вернуть несколько заданий: на формирование маленькой и большой этикетки.  Чтобы получить созданные этикетки, используйте [/v1/posting/fbs/package-label/get](#operation/PostingAPI_GetLabelBatch). 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V1CreateLabelBatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CreateLabelBatchRequest: V1CreateLabelBatchRequest; //

const { status, data } = await apiInstance.postingAPICreateLabelBatchV2(
    clientId,
    apiKey,
    v1CreateLabelBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreateLabelBatchRequest** | **V1CreateLabelBatchRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2CreateLabelBatchResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Задания на формирование этикеток |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetEtgb**
> V1GetEtgbResponse postingAPIGetEtgb(v1GetEtgbRequest)

Метод для получения таможенных деклараций Elektronik Ticaret Gümrük Beyannamesi (ETGB) для продавцов из Турции. 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V1GetEtgbRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetEtgbRequest: V1GetEtgbRequest; //

const { status, data } = await apiInstance.postingAPIGetEtgb(
    clientId,
    apiKey,
    v1GetEtgbRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetEtgbRequest** | **V1GetEtgbRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetEtgbResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о декларациях |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetFbsPostingByBarcode**
> V2FbsPostingResponse postingAPIGetFbsPostingByBarcode(postingGetFbsPostingByBarcodeRequest)


### Example

```typescript
import {
    FBSApi,
    Configuration,
    PostingGetFbsPostingByBarcodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingGetFbsPostingByBarcodeRequest: PostingGetFbsPostingByBarcodeRequest; //

const { status, data } = await apiInstance.postingAPIGetFbsPostingByBarcode(
    clientId,
    apiKey,
    postingGetFbsPostingByBarcodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingGetFbsPostingByBarcodeRequest** | **PostingGetFbsPostingByBarcodeRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2FbsPostingResponse**

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

# **postingAPIGetFbsPostingListV3**
> V3GetFbsPostingListResponseV3 postingAPIGetFbsPostingListV3(postingv3GetFbsPostingListRequest)

Возвращает список отправлений за указанный период времени — он должен быть не больше одного года.  Дополнительно можно отфильтровать отправления по их статусу — список доступных для выдачи статусов указан в описании параметра `filter.status`.  `has_next = true` в ответе может значить, что вернули не весь массив отправлений. Чтобы получить информацию об остальных отправлениях, сделайте новый запрос с другим значением `offset`.   Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start). 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    Postingv3GetFbsPostingListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingv3GetFbsPostingListRequest: Postingv3GetFbsPostingListRequest; //

const { status, data } = await apiInstance.postingAPIGetFbsPostingListV3(
    clientId,
    apiKey,
    postingv3GetFbsPostingListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingv3GetFbsPostingListRequest** | **Postingv3GetFbsPostingListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V3GetFbsPostingListResponseV3**

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

# **postingAPIGetFbsPostingUnfulfilledList**
> Postingv3GetFbsPostingUnfulfilledListResponse postingAPIGetFbsPostingUnfulfilledList(postingv3GetFbsPostingUnfulfilledListRequest)

Возвращает список необработанных отправлений за указанный период времени — он должен быть не больше одного года.  Возможные статусы отправлений: - `awaiting_registration` — ожидает регистрации, - `acceptance_in_progress` — идёт приёмка, - `awaiting_approve` — ожидает подтверждения, - `awaiting_packaging` — ожидает упаковки, - `awaiting_deliver` — ожидает отгрузки, - `arbitration` — арбитраж, - `client_arbitration` — клиентский арбитраж доставки, - `delivering` — доставляется, - `driver_pickup` — у водителя, - `cancelled` — отменено, - `not_accepted` — не принят на сортировочном центре.  Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start). 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    Postingv3GetFbsPostingUnfulfilledListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingv3GetFbsPostingUnfulfilledListRequest: Postingv3GetFbsPostingUnfulfilledListRequest; //

const { status, data } = await apiInstance.postingAPIGetFbsPostingUnfulfilledList(
    clientId,
    apiKey,
    postingv3GetFbsPostingUnfulfilledListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingv3GetFbsPostingUnfulfilledListRequest** | **Postingv3GetFbsPostingUnfulfilledListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Postingv3GetFbsPostingUnfulfilledListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список необработанных отправлений |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetFbsPostingV3**
> V3GetFbsPostingResponseV3 postingAPIGetFbsPostingV3(postingv3GetFbsPostingRequest)

Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).

### Example

```typescript
import {
    FBSApi,
    Configuration,
    Postingv3GetFbsPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingv3GetFbsPostingRequest: Postingv3GetFbsPostingRequest; //

const { status, data } = await apiInstance.postingAPIGetFbsPostingV3(
    clientId,
    apiKey,
    postingv3GetFbsPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingv3GetFbsPostingRequest** | **Postingv3GetFbsPostingRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V3GetFbsPostingResponseV3**

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

# **postingAPIGetLabelBatch**
> V1GetLabelBatchResponse postingAPIGetLabelBatch(v1GetLabelBatchRequest)

Метод для получения этикеток после вызова [/v1/posting/fbs/package-label/create](#operation/PostingAPI_CreateLabelBatch).

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V1GetLabelBatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetLabelBatchRequest: V1GetLabelBatchRequest; //

const { status, data } = await apiInstance.postingAPIGetLabelBatch(
    clientId,
    apiKey,
    v1GetLabelBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetLabelBatchRequest** | **V1GetLabelBatchRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetLabelBatchResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус формирования этикеток или файл с ними |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetPostingFbsCancelReasonList**
> PostingCancelReasonListResponse postingAPIGetPostingFbsCancelReasonList()

Возвращает список причин отмены для всех отправлений.

### Example

```typescript
import {
    FBSApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.postingAPIGetPostingFbsCancelReasonList(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingCancelReasonListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Причины отмены отправлений |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetPostingFbsCancelReasonV1**
> PostingCancelReasonResponse postingAPIGetPostingFbsCancelReasonV1(postingCancelReasonRequest)

Возвращает список причин отмены для конкретных отправлений.

### Example

```typescript
import {
    FBSApi,
    Configuration,
    PostingCancelReasonRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingCancelReasonRequest: PostingCancelReasonRequest; //

const { status, data } = await apiInstance.postingAPIGetPostingFbsCancelReasonV1(
    clientId,
    apiKey,
    postingCancelReasonRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingCancelReasonRequest** | **PostingCancelReasonRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingCancelReasonResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Причины отмены отправлений |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIGetRestrictions**
> V1GetRestrictionsResponse postingAPIGetRestrictions(v1GetRestrictionsRequest)

Метод для получения габаритных, весовых и прочих ограничений пункта приёма по номеру отправления. Метод применим только для работы по схеме FBS.

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V1GetRestrictionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetRestrictionsRequest: V1GetRestrictionsRequest; //

const { status, data } = await apiInstance.postingAPIGetRestrictions(
    clientId,
    apiKey,
    v1GetRestrictionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetRestrictionsRequest** | **V1GetRestrictionsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetRestrictionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ограничения пункта приёма |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIListCountryProductFbsPostingV2**
> V2FbsPostingProductCountryListResponse postingAPIListCountryProductFbsPostingV2(v2FbsPostingProductCountryListRequest)

Метод для получения списка доступных стран-изготовителей и их ISO кодов.

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V2FbsPostingProductCountryListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let v2FbsPostingProductCountryListRequest: V2FbsPostingProductCountryListRequest; //

const { status, data } = await apiInstance.postingAPIListCountryProductFbsPostingV2(
    v2FbsPostingProductCountryListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2FbsPostingProductCountryListRequest** | **V2FbsPostingProductCountryListRequest**|  | |


### Return type

**V2FbsPostingProductCountryListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список доступных стран-изготовителей |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIMoveFbsPostingToArbitration**
> PostingBooleanResponse postingAPIMoveFbsPostingToArbitration()

Если отправление передано в доставку, но не просканировано в сортировочном центре, можно открыть спор. Открытый спор переведёт отправление в статус `arbitration`.

### Example

```typescript
import {
    FBSApi,
    Configuration,
    PostingMovePostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingMovePostingRequest: PostingMovePostingRequest; // (optional)

const { status, data } = await apiInstance.postingAPIMoveFbsPostingToArbitration(
    clientId,
    apiKey,
    postingMovePostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingMovePostingRequest** | **PostingMovePostingRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingBooleanResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Открыт спор по отправлению |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIMoveFbsPostingToAwaitingDelivery**
> PostingBooleanResponse postingAPIMoveFbsPostingToAwaitingDelivery()

Передает спорные заказы к отгрузке. Статус отправления изменится на `awaiting_deliver`.

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V2MovePostingToAwaitingDeliveryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2MovePostingToAwaitingDeliveryRequest: V2MovePostingToAwaitingDeliveryRequest; // (optional)

const { status, data } = await apiInstance.postingAPIMoveFbsPostingToAwaitingDelivery(
    clientId,
    apiKey,
    v2MovePostingToAwaitingDeliveryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2MovePostingToAwaitingDeliveryRequest** | **V2MovePostingToAwaitingDeliveryRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingBooleanResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отправление передано к отгрузке |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSPackageLabel**
> PostingPostingFBSPackageLabelResponse postingAPIPostingFBSPackageLabel(postingPostingFBSPackageLabelRequest)

<aside class=\"warning\"> Если вы работаете по схеме rFBS или rFBS Express, изучите процесс печати этикетки в <a href=\"https://seller-edu.ozon.ru/rfbs/scheme-of-work\">Базе знаний продавца</a>. </aside>  Генерирует PDF-файл с этикетками для указанных отправлений в статусе «Ожидает отгрузки» — `awaiting_deliver`. В одном запросе можно передать не больше 20 идентификаторов. Если хотя бы для одного отправления возникнет ошибка, этикетки не будут подготовлены для всех отправлений в запросе.  Рекомендуем запрашивать этикетки через 45–60 секунд после сборки заказа.  Ошибка `The next postings aren\'t ready` означает, что этикетки ещё не готовы, повторите запрос позднее. 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    PostingPostingFBSPackageLabelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingPostingFBSPackageLabelRequest: PostingPostingFBSPackageLabelRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSPackageLabel(
    clientId,
    apiKey,
    postingPostingFBSPackageLabelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingPostingFBSPackageLabelRequest** | **PostingPostingFBSPackageLabelRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingPostingFBSPackageLabelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Маркировка напечатана |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingFBSPickupCodeVerify**
> V1PostingFBSPickupCodeVerifyResponse postingAPIPostingFBSPickupCodeVerify(v1PostingFBSPickupCodeVerifyRequest)

Метод позволяет проверить код курьера при передаче отправлений realFBS Express. Подробнее о передаче отправлений в [Базе знаний продавца](https://seller-edu.ozon.ru/contract-for-sellers/regulations-fbs-realfbs/reglament-prodaji-so-svoego-sklada-fbs-express#7-порядок-передачи-отправлении-через-партнёров-ozon-при-экспресс-доставке).

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V1PostingFBSPickupCodeVerifyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let v1PostingFBSPickupCodeVerifyRequest: V1PostingFBSPickupCodeVerifyRequest; //

const { status, data } = await apiInstance.postingAPIPostingFBSPickupCodeVerify(
    v1PostingFBSPickupCodeVerifyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingFBSPickupCodeVerifyRequest** | **V1PostingFBSPickupCodeVerifyRequest**|  | |


### Return type

**V1PostingFBSPickupCodeVerifyResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат проверки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingMultiBoxQtySetV3**
> Postingv3PostingMultiBoxQtySetV3Response postingAPIPostingMultiBoxQtySetV3(postingv3PostingMultiBoxQtySetV3Request)

Метод для передачи количества коробок для отправлений, в которых есть многокоробочные товары.  Используйте метод при работе по схеме rFBS Агрегатор — c доставкой партнёрами Ozon. 

### Example

```typescript
import {
    FBSApi,
    Configuration,
    Postingv3PostingMultiBoxQtySetV3Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingv3PostingMultiBoxQtySetV3Request: Postingv3PostingMultiBoxQtySetV3Request; //

const { status, data } = await apiInstance.postingAPIPostingMultiBoxQtySetV3(
    clientId,
    apiKey,
    postingv3PostingMultiBoxQtySetV3Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingv3PostingMultiBoxQtySetV3Request** | **Postingv3PostingMultiBoxQtySetV3Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Postingv3PostingMultiBoxQtySetV3Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество коробок указано |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPISetCountryProductFbsPostingV2**
> V2FbsPostingProductCountrySetResponse postingAPISetCountryProductFbsPostingV2(v2FbsPostingProductCountrySetRequest)

Метод для добавления на продукт атрибута «Страна-изготовитель», если он не был указан.

### Example

```typescript
import {
    FBSApi,
    Configuration,
    V2FbsPostingProductCountrySetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let v2FbsPostingProductCountrySetRequest: V2FbsPostingProductCountrySetRequest; //

const { status, data } = await apiInstance.postingAPISetCountryProductFbsPostingV2(
    v2FbsPostingProductCountrySetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2FbsPostingProductCountrySetRequest** | **V2FbsPostingProductCountrySetRequest**|  | |


### Return type

**V2FbsPostingProductCountrySetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Страна-изготовитель добавлена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIUnpaidLegalProductList**
> V1PostingUnpaidLegalProductListResponse postingAPIUnpaidLegalProductList(v1PostingUnpaidLegalProductListRequest)


### Example

```typescript
import {
    FBSApi,
    Configuration,
    V1PostingUnpaidLegalProductListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PostingUnpaidLegalProductListRequest: V1PostingUnpaidLegalProductListRequest; //

const { status, data } = await apiInstance.postingAPIUnpaidLegalProductList(
    clientId,
    apiKey,
    v1PostingUnpaidLegalProductListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingUnpaidLegalProductListRequest** | **V1PostingUnpaidLegalProductListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1PostingUnpaidLegalProductListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список неоплаченных товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

