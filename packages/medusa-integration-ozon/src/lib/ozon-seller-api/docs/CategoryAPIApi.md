# CategoryAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**descriptionCategoryAPIGetAttributeValues**](#descriptioncategoryapigetattributevalues) | **POST** /v1/description-category/attribute/values | Справочник значений характеристики|
|[**descriptionCategoryAPIGetAttributes**](#descriptioncategoryapigetattributes) | **POST** /v1/description-category/attribute | Список характеристик категории|
|[**descriptionCategoryAPIGetTree**](#descriptioncategoryapigettree) | **POST** /v1/description-category/tree | Дерево категорий и типов товаров|
|[**descriptionCategoryAPISearchAttributeValues**](#descriptioncategoryapisearchattributevalues) | **POST** /v1/description-category/attribute/values/search | Поиск по справочным значениям характеристики|

# **descriptionCategoryAPIGetAttributeValues**
> V1GetAttributeValuesResponse descriptionCategoryAPIGetAttributeValues(v1GetAttributeValuesRequest)

Возвращает справочник значений характеристики.  Узнать, есть ли вложенный справочник, можно через метод [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes).  

### Example

```typescript
import {
    CategoryAPIApi,
    Configuration,
    V1GetAttributeValuesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetAttributeValuesRequest: V1GetAttributeValuesRequest; //

const { status, data } = await apiInstance.descriptionCategoryAPIGetAttributeValues(
    clientId,
    apiKey,
    v1GetAttributeValuesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetAttributeValuesRequest** | **V1GetAttributeValuesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetAttributeValuesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Справочник характеристик |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **descriptionCategoryAPIGetAttributes**
> V1GetAttributesResponse descriptionCategoryAPIGetAttributes(v1GetAttributesRequest)

Получение характеристик для указанных категории и типа товара.  Если у `dictionary_id` значение `0`, у атрибута нет вложенных справочников. Если значение другое, то справочники есть. Запросите их методом [/v1/description-category/attribute/values](#operation/DescriptionCategoryAPI_GetAttributeValues). 

### Example

```typescript
import {
    CategoryAPIApi,
    Configuration,
    V1GetAttributesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetAttributesRequest: V1GetAttributesRequest; //

const { status, data } = await apiInstance.descriptionCategoryAPIGetAttributes(
    clientId,
    apiKey,
    v1GetAttributesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetAttributesRequest** | **V1GetAttributesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetAttributesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Характеристики категории |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **descriptionCategoryAPIGetTree**
> V1GetTreeResponse descriptionCategoryAPIGetTree(v1GetTreeRequest)

Возвращает категории и типы для товаров в виде дерева.  Создание товаров доступно только в категориях последнего уровня, сравните именно их с категориями на своей площадке. Категории не создаются по запросу пользователя.  <aside class=\"warning\">   Внимательно выбирайте категорию для товара: для разных категорий применяется разный размер комиссии. </aside> 

### Example

```typescript
import {
    CategoryAPIApi,
    Configuration,
    V1GetTreeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetTreeRequest: V1GetTreeRequest; //

const { status, data } = await apiInstance.descriptionCategoryAPIGetTree(
    clientId,
    apiKey,
    v1GetTreeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetTreeRequest** | **V1GetTreeRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetTreeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Дерево категорий |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **descriptionCategoryAPISearchAttributeValues**
> V1SearchAttributeValuesResponse descriptionCategoryAPISearchAttributeValues(v1SearchAttributeValuesRequest)

Возвращает справочные значения характеристики по заданному значению `value` в запросе.  Узнать, есть ли вложенный справочник, можно через метод [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes). 

### Example

```typescript
import {
    CategoryAPIApi,
    Configuration,
    V1SearchAttributeValuesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SearchAttributeValuesRequest: V1SearchAttributeValuesRequest; //

const { status, data } = await apiInstance.descriptionCategoryAPISearchAttributeValues(
    clientId,
    apiKey,
    v1SearchAttributeValuesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SearchAttributeValuesRequest** | **V1SearchAttributeValuesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SearchAttributeValuesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Справочные значения характеристики. |  -  |
|**0** | Ошибка. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

