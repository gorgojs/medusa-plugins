# DpdApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bindPreorderPickup**](#bindpreorderpickup) | **POST** /dpd/bindPreorderPickup | Соединить заказ с заявкой на приезд курьера|
|[**createAddressCode**](#createaddresscode) | **POST** /dpd/createAddressCode | Создание кода адреса|
|[**updateAddressCode**](#updateaddresscode) | **PUT** /dpd/updateAddressCode | Обновление кода адреса|

# **bindPreorderPickup**
> DpdBindPreorderPickupResponse bindPreorderPickup()

Соединить заказ с заявкой на приезд курьера

### Example

```typescript
import {
    DpdApi,
    Configuration,
    DpdBindPreorderPickupRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DpdApi(configuration);

let dpdBindPreorderPickupRequest: DpdBindPreorderPickupRequest; //Объект типа DpdBindPreorderPickupRequest (optional)

const { status, data } = await apiInstance.bindPreorderPickup(
    dpdBindPreorderPickupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dpdBindPreorderPickupRequest** | **DpdBindPreorderPickupRequest**| Объект типа DpdBindPreorderPickupRequest | |


### Return type

**DpdBindPreorderPickupResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAddressCode**
> CreateAddressCodeResponse createAddressCode()

Создание кода адреса

### Example

```typescript
import {
    DpdApi,
    Configuration,
    CreateAddressCodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DpdApi(configuration);

let createAddressCodeRequest: CreateAddressCodeRequest; //Объект типа CreateAddressCodeRequest (optional)

const { status, data } = await apiInstance.createAddressCode(
    createAddressCodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAddressCodeRequest** | **CreateAddressCodeRequest**| Объект типа CreateAddressCodeRequest | |


### Return type

**CreateAddressCodeResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAddressCode**
> CreateAddressCodeResponse updateAddressCode()

Обновление кода адреса

### Example

```typescript
import {
    DpdApi,
    Configuration,
    CreateAddressCodeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DpdApi(configuration);

let createAddressCodeRequest: CreateAddressCodeRequest; //Объект типа CreateAddressCodeRequest (optional)

const { status, data } = await apiInstance.updateAddressCode(
    createAddressCodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAddressCodeRequest** | **CreateAddressCodeRequest**| Объект типа CreateAddressCodeRequest | |


### Return type

**CreateAddressCodeResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

