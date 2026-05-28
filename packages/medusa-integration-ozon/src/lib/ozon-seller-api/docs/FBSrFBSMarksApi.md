# FBSrFBSMarksApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postingAPIFbsPostingProductExemplarCreateOrGetV6**](#postingapifbspostingproductexemplarcreateorgetv6) | **POST** /v6/fbs/posting/product/exemplar/create-or-get | Получить данные созданных экземпляров|
|[**postingAPIFbsPostingProductExemplarSetV6**](#postingapifbspostingproductexemplarsetv6) | **POST** /v6/fbs/posting/product/exemplar/set | Проверить и сохранить данные экземпляров|
|[**postingAPIFbsPostingProductExemplarStatusV5**](#postingapifbspostingproductexemplarstatusv5) | **POST** /v5/fbs/posting/product/exemplar/status | Получить статус добавления экземпляров|
|[**postingAPIFbsPostingProductExemplarUpdate**](#postingapifbspostingproductexemplarupdate) | **POST** /v1/fbs/posting/product/exemplar/update | Обновить данные экземпляров|
|[**postingAPIFbsPostingProductExemplarValidateV5**](#postingapifbspostingproductexemplarvalidatev5) | **POST** /v5/fbs/posting/product/exemplar/validate | Валидация кодов маркировки|
|[**postingAPIShipFbsPostingPackage**](#postingapishipfbspostingpackage) | **POST** /v4/posting/fbs/ship/package | Частичная сборка отправления (версия 4)|
|[**postingAPIShipFbsPostingV4**](#postingapishipfbspostingv4) | **POST** /v4/posting/fbs/ship | Собрать заказ (версия 4)|

# **postingAPIFbsPostingProductExemplarCreateOrGetV6**
> V6FbsPostingProductExemplarCreateOrGetV6Response postingAPIFbsPostingProductExemplarCreateOrGetV6(v6FbsPostingProductExemplarCreateOrGetV6Request)

Метод для получения информации по экземплярам товаров из отправления, переданных в методе [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).  Используйте метод для получения `exemplar_id`. 

### Example

```typescript
import {
    FBSrFBSMarksApi,
    Configuration,
    V6FbsPostingProductExemplarCreateOrGetV6Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSrFBSMarksApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v6FbsPostingProductExemplarCreateOrGetV6Request: V6FbsPostingProductExemplarCreateOrGetV6Request; //

const { status, data } = await apiInstance.postingAPIFbsPostingProductExemplarCreateOrGetV6(
    clientId,
    apiKey,
    v6FbsPostingProductExemplarCreateOrGetV6Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v6FbsPostingProductExemplarCreateOrGetV6Request** | **V6FbsPostingProductExemplarCreateOrGetV6Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V6FbsPostingProductExemplarCreateOrGetV6Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Данные экземпляров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingProductExemplarSetV6**
> postingAPIFbsPostingProductExemplarSetV6(v6FbsPostingProductExemplarSetV6Request)

Асинхронный метод: - для проверки наличия экземпляров в обороте в системе «Честный ЗНАК»; - для сохранения данных экземпляров.   Чтобы получить результаты проверок, используйте метод [/v5/fbs/posting/product/exemplar/status](#operation/PostingAPI_FbsPostingProductExemplarStatusV5).  Для получения данных о созданных экземплярах, используйте метод [/v6/fbs/posting/product/exemplar/create-or-get](#operation/PostingAPI_FbsPostingProductExemplarCreateOrGetV6).  Если у вас несколько одинаковых товаров в отправлении, укажите один `product_id` и массив `exemplars` для каждого товара из отправления.  Всегда передавайте полный набор данных по экземплярам и продуктам.   Например, в вашей системе 10 экземпляров.  Вы передали их для проверки и сохранения.  Потом добавили в своей системе ещё 60 экземпляров. При повторной передаче экземпляров для проверки и сохранения укажите все экземпляры: и старые, и только что добавленные.  Код ответа 200 не гарантирует, что данные об экземплярах приняты.  Он указывает, что создана задача для добавления информации.  Чтобы проверить статус задачи, используйте метод [/v5/fbs/posting/product/exemplar/status](#operation/PostingAPI_FbsPostingProductExemplarStatusV5). 

### Example

```typescript
import {
    FBSrFBSMarksApi,
    Configuration,
    V6FbsPostingProductExemplarSetV6Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSrFBSMarksApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v6FbsPostingProductExemplarSetV6Request: V6FbsPostingProductExemplarSetV6Request; //

const { status, data } = await apiInstance.postingAPIFbsPostingProductExemplarSetV6(
    clientId,
    apiKey,
    v6FbsPostingProductExemplarSetV6Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v6FbsPostingProductExemplarSetV6Request** | **V6FbsPostingProductExemplarSetV6Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


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
|**200** | Запрос обработан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingProductExemplarStatusV5**
> V5FbsPostingProductExemplarStatusV5Response postingAPIFbsPostingProductExemplarStatusV5(v5FbsPostingProductExemplarStatusV5Request)

Метод для получения статусов добавления экземпляров, переданных в методе [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6). Также возвращает данные по этим экземплярам. 

### Example

```typescript
import {
    FBSrFBSMarksApi,
    Configuration,
    V5FbsPostingProductExemplarStatusV5Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSrFBSMarksApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v5FbsPostingProductExemplarStatusV5Request: V5FbsPostingProductExemplarStatusV5Request; //

const { status, data } = await apiInstance.postingAPIFbsPostingProductExemplarStatusV5(
    clientId,
    apiKey,
    v5FbsPostingProductExemplarStatusV5Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v5FbsPostingProductExemplarStatusV5Request** | **V5FbsPostingProductExemplarStatusV5Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V5FbsPostingProductExemplarStatusV5Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статусы проверки экземпляров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingProductExemplarUpdate**
> postingAPIFbsPostingProductExemplarUpdate(v1FbsPostingProductExemplarUpdateRequest)

Используйте метод после передачи информации по экземплярам методом [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6), чтобы сохранить обновлённые данные по экземплярам для отправлений в статусе «Ожидает отгрузки». 

### Example

```typescript
import {
    FBSrFBSMarksApi,
    Configuration,
    V1FbsPostingProductExemplarUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSrFBSMarksApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbsPostingProductExemplarUpdateRequest: V1FbsPostingProductExemplarUpdateRequest; //

const { status, data } = await apiInstance.postingAPIFbsPostingProductExemplarUpdate(
    clientId,
    apiKey,
    v1FbsPostingProductExemplarUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbsPostingProductExemplarUpdateRequest** | **V1FbsPostingProductExemplarUpdateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


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
|**200** | Данные обновлены |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingProductExemplarValidateV5**
> V5FbsPostingProductExemplarValidateV5Response postingAPIFbsPostingProductExemplarValidateV5(v5FbsPostingProductExemplarValidateV5Request)

Метод для проверки кодов на соответствие требованиям системы «Честный ЗНАК» по количеству и составу символов, а также других маркировок.  Если у вас нет номера грузовой таможенной декларации (ГТД), вы можете его не указывать. 

### Example

```typescript
import {
    FBSrFBSMarksApi,
    Configuration,
    V5FbsPostingProductExemplarValidateV5Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSrFBSMarksApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v5FbsPostingProductExemplarValidateV5Request: V5FbsPostingProductExemplarValidateV5Request; //

const { status, data } = await apiInstance.postingAPIFbsPostingProductExemplarValidateV5(
    clientId,
    apiKey,
    v5FbsPostingProductExemplarValidateV5Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v5FbsPostingProductExemplarValidateV5Request** | **V5FbsPostingProductExemplarValidateV5Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V5FbsPostingProductExemplarValidateV5Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат валидации |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIShipFbsPostingPackage**
> V4FbsPostingShipPackageV4Response postingAPIShipFbsPostingPackage(v4FbsPostingShipPackageV4Request)

<aside class=\"warning\"> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку отправления. Используйте метод <a href=\"#operation/PostingAPI_GetFbsPostingV3\">/v3/posting/fbs/get</a>, чтобы проверить, что отправление собрано. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку отправления. </aside>  Если в запросе передать часть товаров из отправления, метод разделит первичное отправление на две части.  В первичном несобранном отправлении останется часть товаров, которую не передали в запросе.  По умолчанию статус созданных отправлений `awaiting_packaging` — ожидает сборки.  Статус изначального отправления изменится только после изменения статуса отправлений, на которые он разделился. 

### Example

```typescript
import {
    FBSrFBSMarksApi,
    Configuration,
    V4FbsPostingShipPackageV4Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSrFBSMarksApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v4FbsPostingShipPackageV4Request: V4FbsPostingShipPackageV4Request; //

const { status, data } = await apiInstance.postingAPIShipFbsPostingPackage(
    clientId,
    apiKey,
    v4FbsPostingShipPackageV4Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v4FbsPostingShipPackageV4Request** | **V4FbsPostingShipPackageV4Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V4FbsPostingShipPackageV4Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат сборки отправления |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIShipFbsPostingV4**
> Fbsv4FbsPostingShipV4Response postingAPIShipFbsPostingV4(fbsv4FbsPostingShipV4Request)

<aside class=\"warning\"> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку заказа. Используйте метод <a href=\"#operation/PostingAPI_GetFbsPostingV3\">/v3/posting/fbs/get</a>, чтобы проверить, что заказ собран. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку заказа. </aside>  Делит заказ на отправления и переводит его в статус `awaiting_deliver`.  Каждый элемент в `packages` может содержать несколько элементов `products` или отправлений.  Каждый элемент в `products` — это товар, включённый в данное отправление.  Разделить заказ нужно, если:   - товары не помещаются в одну упаковку,   - товары нельзя сложить в одну упаковку.    Чтобы разделить заказ, передайте в массиве `packages` несколько объектов.  Пример запроса, когда заказ разделять не нужно: 2 товара будут в одном отправлении. ``` {   \"packages\": [     {       \"products\": [         {           \"product_id\": 185479045,           \"quantity\": 2         }       ]     }   ],   \"posting_number\": \"89491381-0072-1\" } ```  Пример запроса, когда заказ нужно разделить: каждый товар будет в отдельном отправлении.  ``` {   \"packages\": [     {       \"products\": [         {           \"product_id\": 185479045,           \"quantity\": 1         }       ]     },     {       \"products\": [         {           \"product_id\": 185479045,           \"quantity\": 1         }       ]     }   ],   \"posting_number\": \"89491381-0072-1\" }     ```    Чтобы внести информацию по экземплярам, используйте метод [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6). 

### Example

```typescript
import {
    FBSrFBSMarksApi,
    Configuration,
    Fbsv4FbsPostingShipV4Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FBSrFBSMarksApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let fbsv4FbsPostingShipV4Request: Fbsv4FbsPostingShipV4Request; //

const { status, data } = await apiInstance.postingAPIShipFbsPostingV4(
    clientId,
    apiKey,
    fbsv4FbsPostingShipV4Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fbsv4FbsPostingShipV4Request** | **Fbsv4FbsPostingShipV4Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Fbsv4FbsPostingShipV4Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат сборки заказа |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

