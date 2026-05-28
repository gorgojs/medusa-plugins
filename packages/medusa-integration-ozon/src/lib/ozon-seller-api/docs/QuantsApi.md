# QuantsApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**quantGetInfo**](#quantgetinfo) | **POST** /v1/product/quant/info | Информация об эконом-товаре|
|[**quantProductList**](#quantproductlist) | **POST** /v1/product/quant/list | Список эконом-товаров|

# **quantGetInfo**
> ProductV1QuantInfoResponse quantGetInfo(productV1QuantInfoRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1084-Metody-po-tarifu-Ekonom) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    QuantsApi,
    Configuration,
    ProductV1QuantInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuantsApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productV1QuantInfoRequest: ProductV1QuantInfoRequest; //

const { status, data } = await apiInstance.quantGetInfo(
    clientId,
    apiKey,
    productV1QuantInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productV1QuantInfoRequest** | **ProductV1QuantInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductV1QuantInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об эконом-товаре |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quantProductList**
> ProductV1QuantListResponse quantProductList(productV1QuantListRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1084-Metody-po-tarifu-Ekonom) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    QuantsApi,
    Configuration,
    ProductV1QuantListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new QuantsApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productV1QuantListRequest: ProductV1QuantListRequest; //

const { status, data } = await apiInstance.quantProductList(
    clientId,
    apiKey,
    productV1QuantListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productV1QuantListRequest** | **ProductV1QuantListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductV1QuantListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Эконом-товары |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

