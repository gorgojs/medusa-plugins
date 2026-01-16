# ApiPayApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPayReceiptStatus**](#getpayreceiptstatus) | **GET** /pay/receipt/{receiptId} | Получение статуса по чеку|
|[**sendPayReceipt**](#sendpayreceipt) | **POST** /pay/receipt | Отправка чека|

# **getPayReceiptStatus**
> PayReceiptFullResponse getPayReceiptStatus()

Получает статуса по чеку

### Example

```typescript
import {
    ApiPayApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApiPayApi(configuration);

let receiptId: number; //ID чека (default to undefined)

const { status, data } = await apiInstance.getPayReceiptStatus(
    receiptId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receiptId** | [**number**] | ID чека | defaults to undefined|


### Return type

**PayReceiptFullResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendPayReceipt**
> PayReceiptResponse sendPayReceipt()

Отправка чека в ОФД

### Example

```typescript
import {
    ApiPayApi,
    Configuration,
    PayReceiptRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ApiPayApi(configuration);

let payReceiptRequest: PayReceiptRequest; //Объект типа PayReceiptRequest (optional)

const { status, data } = await apiInstance.sendPayReceipt(
    payReceiptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payReceiptRequest** | **PayReceiptRequest**| Объект типа PayReceiptRequest | |


### Return type

**PayReceiptResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

