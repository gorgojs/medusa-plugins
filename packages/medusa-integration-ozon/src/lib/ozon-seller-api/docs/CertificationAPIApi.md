# CertificationAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**certificateAccordanceTypes**](#certificateaccordancetypes) | **GET** /v2/product/certificate/accordance-types/list | Список типов соответствия требованиям (версия 2)|
|[**certificateDelete**](#certificatedelete) | **POST** /v1/product/certificate/delete | Удалить сертификат|
|[**certificateInfo**](#certificateinfo) | **POST** /v1/product/certificate/info | Информация о сертификате|
|[**certificateList**](#certificatelist) | **POST** /v1/product/certificate/list | Список сертификатов|
|[**certificateProductsList**](#certificateproductslist) | **POST** /v1/product/certificate/products/list | Список товаров, привязанных к сертификату|
|[**certificateStatusList**](#certificatestatuslist) | **POST** /v1/product/certificate/status/list | Возможные статусы сертификатов|
|[**certificateUnbind**](#certificateunbind) | **POST** /v1/product/certificate/unbind | Отвязать товар от сертификата|
|[**productAPIProductCertificateAccordanceTypes**](#productapiproductcertificateaccordancetypes) | **GET** /v1/product/certificate/accordance-types | Список типов соответствия требованиям (версия 1)|
|[**productAPIProductCertificateBind**](#productapiproductcertificatebind) | **POST** /v1/product/certificate/bind | Привязать сертификат к товару|
|[**productAPIProductCertificateCreate**](#productapiproductcertificatecreate) | **POST** /v1/product/certificate/create | Добавить сертификаты для товаров|
|[**productAPIProductCertificateTypes**](#productapiproductcertificatetypes) | **GET** /v1/product/certificate/types | Справочник типов документов|
|[**productAPIProductCertificationList**](#productapiproductcertificationlist) | **POST** /v2/product/certification/list | Список сертифицируемых категорий|
|[**productAPIV1ProductCertificationList**](#productapiv1productcertificationlist) | **POST** /v1/product/certification/list | Список сертифицируемых категорий|
|[**productStatusList**](#productstatuslist) | **POST** /v1/product/certificate/product_status/list | Список возможных статусов товаров|
|[**rejectionReasonsList**](#rejectionreasonslist) | **POST** /v1/product/certificate/rejection_reasons/list | Возможные причины отклонения сертификата|

# **certificateAccordanceTypes**
> V2ProductCertificateAccordanceTypesResponse certificateAccordanceTypes()



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

const { status, data } = await apiInstance.certificateAccordanceTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**V2ProductCertificateAccordanceTypesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список типов соответствия требованиям |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificateDelete**
> V1ProductCertificateDeleteResponse certificateDelete(v1ProductCertificateDeleteRequest)



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    V1ProductCertificateDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let v1ProductCertificateDeleteRequest: V1ProductCertificateDeleteRequest; //

const { status, data } = await apiInstance.certificateDelete(
    v1ProductCertificateDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductCertificateDeleteRequest** | **V1ProductCertificateDeleteRequest**|  | |


### Return type

**V1ProductCertificateDeleteResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат удаления сертификата |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificateInfo**
> V1ProductCertificateInfoResponse certificateInfo(v1ProductCertificateInfoRequest)



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    V1ProductCertificateInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let v1ProductCertificateInfoRequest: V1ProductCertificateInfoRequest; //

const { status, data } = await apiInstance.certificateInfo(
    v1ProductCertificateInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductCertificateInfoRequest** | **V1ProductCertificateInfoRequest**|  | |


### Return type

**V1ProductCertificateInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о сертификате |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificateList**
> V1ProductCertificateListResponse certificateList(v1ProductCertificateListRequest)



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    V1ProductCertificateListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let v1ProductCertificateListRequest: V1ProductCertificateListRequest; //

const { status, data } = await apiInstance.certificateList(
    v1ProductCertificateListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductCertificateListRequest** | **V1ProductCertificateListRequest**|  | |


### Return type

**V1ProductCertificateListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список сертификатов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificateProductsList**
> V1ProductCertificateProductsListResponse certificateProductsList(v1ProductCertificateProductsListRequest)



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    V1ProductCertificateProductsListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let v1ProductCertificateProductsListRequest: V1ProductCertificateProductsListRequest; //

const { status, data } = await apiInstance.certificateProductsList(
    v1ProductCertificateProductsListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductCertificateProductsListRequest** | **V1ProductCertificateProductsListRequest**|  | |


### Return type

**V1ProductCertificateProductsListResponse**

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

# **certificateStatusList**
> V1ProductCertificateStatusListResponse certificateStatusList(body)



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let body: object; //

const { status, data } = await apiInstance.certificateStatusList(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1ProductCertificateStatusListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Возможные статусы сертификатов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificateUnbind**
> V1ProductCertificateUnbindResponse certificateUnbind(v1ProductCertificateUnbindRequest)



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    V1ProductCertificateUnbindRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let v1ProductCertificateUnbindRequest: V1ProductCertificateUnbindRequest; //

const { status, data } = await apiInstance.certificateUnbind(
    v1ProductCertificateUnbindRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductCertificateUnbindRequest** | **V1ProductCertificateUnbindRequest**|  | |


### Return type

**V1ProductCertificateUnbindResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Товар отвязан от сертификата |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductCertificateAccordanceTypes**
> ProductProductCertificateAccordanceTypesResponse productAPIProductCertificateAccordanceTypes()


### Example

```typescript
import {
    CertificationAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.productAPIProductCertificateAccordanceTypes(
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

**ProductProductCertificateAccordanceTypesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cправочник типов соответствия требованиям |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductCertificateBind**
> ProductBooleanResponse productAPIProductCertificateBind(productProductCertificateBindRequest)


### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    ProductProductCertificateBindRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productProductCertificateBindRequest: ProductProductCertificateBindRequest; //

const { status, data } = await apiInstance.productAPIProductCertificateBind(
    clientId,
    apiKey,
    productProductCertificateBindRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productProductCertificateBindRequest** | **ProductProductCertificateBindRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductBooleanResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Сертификат привязан к товару |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductCertificateCreate**
> number productAPIProductCertificateCreate()


### Example

```typescript
import {
    CertificationAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let files: Array<string>; //Массив сертификатов для товара. Допустимые расширения jpg, jpeg, png, pdf. (default to undefined)
let name: string; //Название сертификата. Максимум 100 символов. (default to undefined)
let number: string; //Номер сертификата. Максимум 100 символов. (default to undefined)
let typeCode: string; //Тип сертификата. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/types](#operation/ProductAPI_ProductCertificateTypes). (default to undefined)
let issueDate: string; //Дата начала действия сертификата. (default to 2021-04-30T11:31:26Z)
let accordanceTypeCode: string; //Тип соответствия требованиям. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/accordance-types](#operation/ProductAPI_ProductCertificateAccordanceTypes). Параметр обязательный, если `type_code = declaration`, `certificate_of_conformity` или `safety_data_sheet`. (optional) (default to undefined)
let expireDate: string; //Дата окончания действия сертификата. Может быть пустым для бессрочных сертификатов.  Формат: `2021-04-30T11:31:26Z`.  (optional) (default to undefined)

const { status, data } = await apiInstance.productAPIProductCertificateCreate(
    clientId,
    apiKey,
    files,
    name,
    number,
    typeCode,
    issueDate,
    accordanceTypeCode,
    expireDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|
| **files** | **Array&lt;string&gt;** | Массив сертификатов для товара. Допустимые расширения jpg, jpeg, png, pdf. | defaults to undefined|
| **name** | [**string**] | Название сертификата. Максимум 100 символов. | defaults to undefined|
| **number** | [**string**] | Номер сертификата. Максимум 100 символов. | defaults to undefined|
| **typeCode** | [**string**]**Array<&#39;certificate_of_conformity&#39; &#124; &#39;declaration&#39; &#124; &#39;certificate_of_registration&#39; &#124; &#39;registration_certificate&#39; &#124; &#39;refused_letter&#39; &#124; &#39;veterinary_cover_document&#39; &#124; &#39;safety_data_sheet&#39;>** | Тип сертификата. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/types](#operation/ProductAPI_ProductCertificateTypes). | defaults to undefined|
| **issueDate** | [**string**] | Дата начала действия сертификата. | defaults to 2021-04-30T11:31:26Z|
| **accordanceTypeCode** | [**string**]**Array<&#39;technical_regulations_rf&#39; &#124; &#39;technical_regulations_cu&#39; &#124; &#39;gost&#39;>** | Тип соответствия требованиям. Чтобы получить доступные типы, используйте метод [GET /v1/product/certificate/accordance-types](#operation/ProductAPI_ProductCertificateAccordanceTypes). Параметр обязательный, если &#x60;type_code &#x3D; declaration&#x60;, &#x60;certificate_of_conformity&#x60; или &#x60;safety_data_sheet&#x60;. | (optional) defaults to undefined|
| **expireDate** | [**string**] | Дата окончания действия сертификата. Может быть пустым для бессрочных сертификатов.  Формат: &#x60;2021-04-30T11:31:26Z&#x60;.  | (optional) defaults to undefined|


### Return type

**number**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Идентификатор загруженного сертификата |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductCertificateTypes**
> ProductProductCertificateTypesResponse productAPIProductCertificateTypes()


### Example

```typescript
import {
    CertificationAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.productAPIProductCertificateTypes(
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

**ProductProductCertificateTypesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Справочник типов документов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductCertificationList**
> V2ProductCertificationListResponse productAPIProductCertificationList(v2ProductCertificationListRequest)


### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    V2ProductCertificationListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ProductCertificationListRequest: V2ProductCertificationListRequest; //

const { status, data } = await apiInstance.productAPIProductCertificationList(
    clientId,
    apiKey,
    v2ProductCertificationListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ProductCertificationListRequest** | **V2ProductCertificationListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ProductCertificationListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список сертифицируемых категорий |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIV1ProductCertificationList**
> ProductProductCertificationListResponse productAPIV1ProductCertificationList(productProductCertificationListRequest)

<aside class=\"warning\"> 14 апреля 2025 года метод будет отключён. Переключитесь на <a href=\"#operation/ProductAPI_ProductCertificationList\">/v2/product/certification/list</a>. </aside> 

### Example

```typescript
import {
    CertificationAPIApi,
    Configuration,
    ProductProductCertificationListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productProductCertificationListRequest: ProductProductCertificationListRequest; //

const { status, data } = await apiInstance.productAPIV1ProductCertificationList(
    clientId,
    apiKey,
    productProductCertificationListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productProductCertificationListRequest** | **ProductProductCertificationListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductProductCertificationListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список сертифицируемых категорий |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productStatusList**
> V1ProductCertificateProductStatusListResponse productStatusList(body)

Метод для получения списка возможных статусов товаров при их привязке к сертификату.

### Example

```typescript
import {
    CertificationAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let body: object; //

const { status, data } = await apiInstance.productStatusList(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1ProductCertificateProductStatusListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список статусов товаров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rejectionReasonsList**
> V1ProductCertificateRejectionReasonsListResponse rejectionReasonsList(body)



### Example

```typescript
import {
    CertificationAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CertificationAPIApi(configuration);

let body: object; //

const { status, data } = await apiInstance.rejectionReasonsList(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**V1ProductCertificateRejectionReasonsListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Причины отклонения сертификата |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

