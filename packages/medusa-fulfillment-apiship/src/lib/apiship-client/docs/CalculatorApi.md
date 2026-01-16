# CalculatorApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculatorIntervalsPost**](#calculatorintervalspost) | **POST** /calculator/intervals | Интервалы доставки|
|[**getCalculator**](#getcalculator) | **POST** /calculator | Расчёт стоимости доставки|

# **calculatorIntervalsPost**
> CalculatorIntervalsResponse calculatorIntervalsPost()

Запрашивает у СД доступные интервалы

### Example

```typescript
import {
    CalculatorApi,
    Configuration,
    CalculatorIntervalsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CalculatorApi(configuration);

let calculatorIntervalsRequest: CalculatorIntervalsRequest; //Объект типа CalculatorRequest (optional)

const { status, data } = await apiInstance.calculatorIntervalsPost(
    calculatorIntervalsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculatorIntervalsRequest** | **CalculatorIntervalsRequest**| Объект типа CalculatorRequest | |


### Return type

**CalculatorIntervalsResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCalculator**
> GetCalculator200Response getCalculator()

Рассчитывает стоимость доставки

### Example

```typescript
import {
    CalculatorApi,
    Configuration,
    CalculatorRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CalculatorApi(configuration);

let calculatorRequest: CalculatorRequest; //Объект типа CalculatorRequest (optional)

const { status, data } = await apiInstance.getCalculator(
    calculatorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculatorRequest** | **CalculatorRequest**| Объект типа CalculatorRequest | |


### Return type

**GetCalculator200Response**

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

