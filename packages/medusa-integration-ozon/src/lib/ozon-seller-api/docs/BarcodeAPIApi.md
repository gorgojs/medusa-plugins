# BarcodeAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addBarcode**](#addbarcode) | **POST** /v1/barcode/add | Привязать штрихкод к товару|
|[**generateBarcode**](#generatebarcode) | **POST** /v1/barcode/generate | Создать штрихкод для товара|

# **addBarcode**
> V1AddBarcodeResponse addBarcode(v1AddBarcodeRequest)

Если у товара есть штрихкод, который не указан в системе Ozon, привяжите его с помощью этого метода. Если штрихкода нет, вы можете создать его через метод [/v1/barcode/generate](#operation/generate-barcode).  На одном товаре может быть до 100 штрихкодов.  С одного аккаунта продавца можно использовать метод не больше 20 раз в минуту. 

### Example

```typescript
import {
    BarcodeAPIApi,
    Configuration,
    V1AddBarcodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BarcodeAPIApi(configuration);

let v1AddBarcodeRequest: V1AddBarcodeRequest; //

const { status, data } = await apiInstance.addBarcode(
    v1AddBarcodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AddBarcodeRequest** | **V1AddBarcodeRequest**|  | |


### Return type

**V1AddBarcodeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Штрихкод привязан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateBarcode**
> V1GenerateBarcodeResponse generateBarcode(v1GenerateBarcodeRequest)

Если у товара нет штрихкода, вы можете создать его с помощью этого метода. Если штрихкод уже есть, но он не указан в системе Ozon, вы можете привязать его через метод [/v1/barcode/add](#operation/add-barcode).  За один запрос вы можете создать штрихкоды не больше чем для 100 товаров. С одного аккаунта продавца можно использовать метод не больше 20 раз в минуту. 

### Example

```typescript
import {
    BarcodeAPIApi,
    Configuration,
    V1GenerateBarcodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BarcodeAPIApi(configuration);

let v1GenerateBarcodeRequest: V1GenerateBarcodeRequest; //

const { status, data } = await apiInstance.generateBarcode(
    v1GenerateBarcodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GenerateBarcodeRequest** | **V1GenerateBarcodeRequest**|  | |


### Return type

**V1GenerateBarcodeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Штрихкод создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

