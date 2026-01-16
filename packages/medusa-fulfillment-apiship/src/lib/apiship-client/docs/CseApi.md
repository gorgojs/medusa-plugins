# CseApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cseSaveOwnerOfTheGoodsPost**](#csesaveownerofthegoodspost) | **POST** /cse/saveOwnerOfTheGoods | Передача данных контрагента - владельца товара|

# **cseSaveOwnerOfTheGoodsPost**
> SuccessResponse cseSaveOwnerOfTheGoodsPost()

Функция сохраняет нового контрагента в справочнике «Контрагенты» и создаёт «Расчетный счет» для этого контрагента в системе «Карго».

### Example

```typescript
import {
    CseApi,
    Configuration,
    CseSaveOwnerOfTheGoodsPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CseApi(configuration);

let cseSaveOwnerOfTheGoodsPostRequest: CseSaveOwnerOfTheGoodsPostRequest; //Объект типа SaveOwnerOfTheGoods (optional)

const { status, data } = await apiInstance.cseSaveOwnerOfTheGoodsPost(
    cseSaveOwnerOfTheGoodsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cseSaveOwnerOfTheGoodsPostRequest** | **CseSaveOwnerOfTheGoodsPostRequest**| Объект типа SaveOwnerOfTheGoods | |


### Return type

**SuccessResponse**

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

