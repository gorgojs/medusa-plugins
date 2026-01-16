# UsersApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoSignupUser**](#autosignupuser) | **POST** /users/autosignup | Авторегистрация пользователя|
|[**loginUser**](#loginuser) | **POST** /users/login | Авторизация пользователя. Получение токена к API|
|[**signupUser**](#signupuser) | **POST** /users/signup | Регистрация пользователя|

# **autoSignupUser**
> UserResponse autoSignupUser()

Автоматически регистрирует пользователя в системе без подтверждения регистрации через email. Для работы метода необходимо получить специальные права доступа в службе поддержки.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    SignupUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let signupUserRequest: SignupUserRequest; // (optional)

const { status, data } = await apiInstance.autoSignupUser(
    signupUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signupUserRequest** | **SignupUserRequest**|  | |


### Return type

**UserResponse**

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

# **loginUser**
> LoginResponse loginUser(loginRequest)

Авторизует пользователя и выдает ему токен для доступа к API

### Example

```typescript
import {
    UsersApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let loginRequest: LoginRequest; //Объект типа LoginRequest

const { status, data } = await apiInstance.loginUser(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**| Объект типа LoginRequest | |


### Return type

**LoginResponse**

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

# **signupUser**
> UserResponse signupUser()

Регистрирует пользователя в системе. Для завершения регистрации на email придет письмо с подтверждением.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    SignupUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let signupUserRequest: SignupUserRequest; // (optional)

const { status, data } = await apiInstance.signupUser(
    signupUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signupUserRequest** | **SignupUserRequest**|  | |


### Return type

**UserResponse**

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

