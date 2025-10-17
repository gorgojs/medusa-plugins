# ConnectionsApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createConnection**](#createconnection) | **POST** /connections | Создание подключения к службе доставки|
|[**deleteConnection**](#deleteconnection) | **DELETE** /connections/{id} | Удаление подключения службы доставки|
|[**getConnection**](#getconnection) | **GET** /connections/{id} | Получение подключения службы доставки|
|[**getListConnections**](#getlistconnections) | **GET** /connections | Получение списка подключений пользователя|
|[**readConnection**](#readconnection) | **PUT** /connections/{id} | Обновление подключения службы доставки|
|[**readSchemasConnection**](#readschemasconnection) | **GET** /connections/schemas | Получение схемы подключений служб доставки|

# **createConnection**
> Connection createConnection()

Проверяет авторизационные данные к системе службы доставки и создает подключение.

### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    Connection
} from './api';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let connection: Connection; // (optional)

const { status, data } = await apiInstance.createConnection(
    connection
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connection** | **Connection**|  | |


### Return type

**Connection**

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

# **deleteConnection**
> deleteConnection()

Подключение помечается удаленным. Можно будет восстановить через службу поддержки.

### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteConnection(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConnection**
> Connection getConnection()

Возвращает подключение службы доставки.

### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getConnection(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Connection**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getListConnections**
> ListConnectionResponse getListConnections()

Возвращает постраничный список подключений пользователя

### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let offset: number; //Minimum - 0, Maximum - 5000 (optional) (default to 0)
let limit: number; //Minimum - 1, Maximum - 100 (optional) (default to 10)
let filter: string; //JSON-фильтр. Фильтрация по полям объектов. Например, чтобы отфильтровать по пользователю, нужно передать filter={\"userId\":\"123\",\"providerKey\":\"cdek\"} (optional) (default to '{}')

const { status, data } = await apiInstance.getListConnections(
    offset,
    limit,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] | Minimum - 0, Maximum - 5000 | (optional) defaults to 0|
| **limit** | [**number**] | Minimum - 1, Maximum - 100 | (optional) defaults to 10|
| **filter** | [**string**] | JSON-фильтр. Фильтрация по полям объектов. Например, чтобы отфильтровать по пользователю, нужно передать filter&#x3D;{\&quot;userId\&quot;:\&quot;123\&quot;,\&quot;providerKey\&quot;:\&quot;cdek\&quot;} | (optional) defaults to '{}'|


### Return type

**ListConnectionResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readConnection**
> Connection readConnection(connection)

Обновляет подключение к службе доставки. При обновлении проверяет авторизационные данные в API службы доставки.

### Example

```typescript
import {
    ConnectionsApi,
    Configuration,
    Connection
} from './api';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let id: string; // (default to undefined)
let connection: Connection; //

const { status, data } = await apiInstance.readConnection(
    id,
    connection
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connection** | **Connection**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Connection**

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

# **readSchemasConnection**
> SchemasConnectionResponse readSchemasConnection()

Возвращает набор полей каждой службы доставки, которые возможно заполнить для создания\\обновления подключения (connectParams)  Метод возвращает схему подключения к службе доставки. Обычно используется для отрисовки формы создания подключения на стороне маркетплейса / модуля / агрегатора. Т.е. метод необходим если вам нужно дать возможность своим пользователям создавать подключения, иначе лучше это делать через наш личный кабинет.  Массив fields - это список полей connectParams в методе [createConnection](#/connections/createConnection)  * *code* - это название поля в json * *type* - это тип значения * *values* - это массив с возможными значениями для поля. * *multiple* - поле может принимать несколько значений, т.е. значение поля является массивом. * *required* - поле обязательно для передачи  Сценарий: 1. Получаете схемы всех служб. 2. По схеме отрисовываете форму для нужной службы доставки. 3. Формируете connectParams собранный из этой формы. 4. Создаете подключение.  Пример: 1. Получили схему Деливери.Клаб ```json {    \"providerKey\": \"d-club\",    \"fields\": [      {        \"code\": \"login\",        \"name\": \"Логин\",        \"description\": \"Логин\",        \"type\": \"string\",        \"required\": true,        \"multiple\": false,        \"values\": []      },      {        \"code\": \"password\",        \"name\": \"Пароль\",        \"description\": \"Пароль\",        \"type\": \"string\",        \"required\": true,        \"multiple\": false,        \"values\": []      }    ]  } ``` 2. Создаем [подключение](#/connections/createConnection) на основе схемы. Схема это набор полей в параметре connectParams: ```json \"connectParams\": {   \"login\": \"mylogin\",   \"password\": \"mypassword\" } ``` 3. В итоге получаем такую структуру для создания подключения: ```json {   \"name\": \"Основное подключение к службе доставки\",   \"providerKey\": \"d-club\",   \"insuranceRate\": 0,   \"cashServiceRate\": 0,   \"connectParams\": {     \"login\": \"mylogin\",     \"password\": \"mypassword\"   },   \"isUseBaseConnect\": 0 } ``` 

### Example

```typescript
import {
    ConnectionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConnectionsApi(configuration);

let offset: number; //Minimum - 0, Maximum - 5000 (optional) (default to 0)
let limit: number; //Minimum - 1, Maximum - 100 (optional) (default to 10)
let providerKey: string; //Фильтрации схемы по службе доставки (optional) (default to undefined)

const { status, data } = await apiInstance.readSchemasConnection(
    offset,
    limit,
    providerKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] | Minimum - 0, Maximum - 5000 | (optional) defaults to 0|
| **limit** | [**number**] | Minimum - 1, Maximum - 100 | (optional) defaults to 10|
| **providerKey** | [**string**] | Фильтрации схемы по службе доставки | (optional) defaults to undefined|


### Return type

**SchemasConnectionResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

