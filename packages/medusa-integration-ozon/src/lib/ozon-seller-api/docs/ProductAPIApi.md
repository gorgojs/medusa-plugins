# ProductAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**productAPIDeleteProducts**](#productapideleteproducts) | **POST** /v2/products/delete | Удалить товар без SKU из архива|
|[**productAPIGetImportProductsInfo**](#productapigetimportproductsinfo) | **POST** /v1/product/import/info | Узнать статус добавления или обновления товара|
|[**productAPIGetProductAttributesV4**](#productapigetproductattributesv4) | **POST** /v4/product/info/attributes | Получить описание характеристик товара|
|[**productAPIGetProductInfoDescription**](#productapigetproductinfodescription) | **POST** /v1/product/info/description | Получить описание товара|
|[**productAPIGetProductInfoList**](#productapigetproductinfolist) | **POST** /v3/product/info/list | Получить информацию о товарах по идентификаторам|
|[**productAPIGetProductInfoSubscription**](#productapigetproductinfosubscription) | **POST** /v1/product/info/subscription | Количество подписавшихся на товар пользователей|
|[**productAPIGetProductList**](#productapigetproductlist) | **POST** /v3/product/list | Список товаров|
|[**productAPIGetProductRatingBySku**](#productapigetproductratingbysku) | **POST** /v1/product/rating-by-sku | Получить контент-рейтинг товаров по SKU|
|[**productAPIGetUploadQuota**](#productapigetuploadquota) | **POST** /v4/product/info/limit | Лимиты на ассортимент, создание и обновление товаров|
|[**productAPIImportProductsBySKU**](#productapiimportproductsbysku) | **POST** /v1/product/import-by-sku | Создать товар по SKU|
|[**productAPIImportProductsV3**](#productapiimportproductsv3) | **POST** /v3/product/import | Создать или обновить товар|
|[**productAPIProductArchive**](#productapiproductarchive) | **POST** /v1/product/archive | Перенести товар в архив|
|[**productAPIProductGetRelatedSKU**](#productapiproductgetrelatedsku) | **POST** /v1/product/related-sku/get | Получить связанные SKU|
|[**productAPIProductImportPictures**](#productapiproductimportpictures) | **POST** /v1/product/pictures/import | Загрузить или обновить изображения товара|
|[**productAPIProductInfoPicturesV2**](#productapiproductinfopicturesv2) | **POST** /v2/product/pictures/info | Получить изображения товаров|
|[**productAPIProductUnarchive**](#productapiproductunarchive) | **POST** /v1/product/unarchive | Вернуть товар из архива|
|[**productAPIProductUpdateAttributes**](#productapiproductupdateattributes) | **POST** /v1/product/attributes/update | Обновить характеристики товара|
|[**productAPIProductUpdateOfferID**](#productapiproductupdateofferid) | **POST** /v1/product/update/offer-id | Изменить артикулы товаров из системы продавца|

# **productAPIDeleteProducts**
> Productv2DeleteProductsResponse productAPIDeleteProducts(productv2DeleteProductsRequest)

В одном запросе можно передать до 500 идентификаторов.

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    Productv2DeleteProductsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productv2DeleteProductsRequest: Productv2DeleteProductsRequest; //

const { status, data } = await apiInstance.productAPIDeleteProducts(
    clientId,
    apiKey,
    productv2DeleteProductsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productv2DeleteProductsRequest** | **Productv2DeleteProductsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Productv2DeleteProductsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Товар удалён |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetImportProductsInfo**
> ProductGetImportProductsInfoResponse productAPIGetImportProductsInfo(productGetImportProductsInfoRequest)

Позволяет получить статус создания или обновления карточки товара.

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    ProductGetImportProductsInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productGetImportProductsInfoRequest: ProductGetImportProductsInfoRequest; //

const { status, data } = await apiInstance.productAPIGetImportProductsInfo(
    clientId,
    apiKey,
    productGetImportProductsInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productGetImportProductsInfoRequest** | **ProductGetImportProductsInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductGetImportProductsInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус добавления или обновления товара |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductAttributesV4**
> Productv4GetProductAttributesV4Response productAPIGetProductAttributesV4(productv4GetProductAttributesV4Request)

Возвращает описание характеристик товаров по идентификатору и видимости. Товар можно искать по `offer_id`, `product_id` или `sku`.

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    Productv4GetProductAttributesV4Request
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productv4GetProductAttributesV4Request: Productv4GetProductAttributesV4Request; //

const { status, data } = await apiInstance.productAPIGetProductAttributesV4(
    clientId,
    apiKey,
    productv4GetProductAttributesV4Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productv4GetProductAttributesV4Request** | **Productv4GetProductAttributesV4Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Productv4GetProductAttributesV4Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Описание характеристик товара |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductInfoDescription**
> ProductGetProductInfoDescriptionResponse productAPIGetProductInfoDescription(productGetProductInfoDescriptionRequest)


### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    ProductGetProductInfoDescriptionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productGetProductInfoDescriptionRequest: ProductGetProductInfoDescriptionRequest; //

const { status, data } = await apiInstance.productAPIGetProductInfoDescription(
    clientId,
    apiKey,
    productGetProductInfoDescriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productGetProductInfoDescriptionRequest** | **ProductGetProductInfoDescriptionRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductGetProductInfoDescriptionResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Описание товара |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductInfoList**
> V3GetProductInfoListResponse productAPIGetProductInfoList(v3GetProductInfoListRequest)

 Метод для получения информации о товарах по их идентификаторам.  В теле запроса должен быть массив однотипных идентификаторов, в ответе будет массив `items`.  В одном запросе вы можете передать не больше 1000 товаров по параметрам `offer_id`, `product_id` и `sku` в сумме. 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V3GetProductInfoListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v3GetProductInfoListRequest: V3GetProductInfoListRequest; //

const { status, data } = await apiInstance.productAPIGetProductInfoList(
    clientId,
    apiKey,
    v3GetProductInfoListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3GetProductInfoListRequest** | **V3GetProductInfoListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V3GetProductInfoListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductInfoSubscription**
> V1GetProductInfoSubscriptionResponse productAPIGetProductInfoSubscription(v1GetProductInfoSubscriptionRequest)

Метод для получения количества пользователей, которые нажали **Узнать о поступлении** на странице товара.  Вы можете передать несколько товаров в запросе. 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V1GetProductInfoSubscriptionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let v1GetProductInfoSubscriptionRequest: V1GetProductInfoSubscriptionRequest; //

const { status, data } = await apiInstance.productAPIGetProductInfoSubscription(
    v1GetProductInfoSubscriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetProductInfoSubscriptionRequest** | **V1GetProductInfoSubscriptionRequest**|  | |


### Return type

**V1GetProductInfoSubscriptionResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество подписавшихся пользователей |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductList**
> Productv3GetProductListResponse productAPIGetProductList(productv3GetProductListRequest)

Метод для получения списка всех товаров.  Если вы используете фильтр по идентификатору `offer_id` или `product_id`, остальные параметры заполнять не обязательно. За один раз вы можете использовать только одну группу идентификаторов, не больше 1000 товаров.  Если вы не используете для отображения идентификаторы, укажите `limit` и `last_id` в следующих запросах. 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    Productv3GetProductListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productv3GetProductListRequest: Productv3GetProductListRequest; //

const { status, data } = await apiInstance.productAPIGetProductList(
    clientId,
    apiKey,
    productv3GetProductListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productv3GetProductListRequest** | **Productv3GetProductListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Productv3GetProductListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductRatingBySku**
> V1GetProductRatingBySkuResponse productAPIGetProductRatingBySku(v1GetProductRatingBySkuRequest)

Метод для получения контент-рейтинга товаров, а также рекомендаций по его увеличению.  [Подробнее о контент-рейтинге](https://seller-edu.ozon.ru/docs/work-with-goods/content-rating.html) 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V1GetProductRatingBySkuRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetProductRatingBySkuRequest: V1GetProductRatingBySkuRequest; //

const { status, data } = await apiInstance.productAPIGetProductRatingBySku(
    clientId,
    apiKey,
    v1GetProductRatingBySkuRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetProductRatingBySkuRequest** | **V1GetProductRatingBySkuRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetProductRatingBySkuResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Контент-рейтинг товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetUploadQuota**
> V4GetUploadQuotaResponse productAPIGetUploadQuota(body)

Метод для получения информации о лимитах: - На ассортимент — сколько всего товаров можно создать в вашем личном кабинете. - На создание товаров — сколько товаров можно создать в сутки. - На обновление товаров — сколько товаров можно отредактировать в сутки.  Если у вас есть лимит на ассортимент и вы израсходуете его, вы не сможете создавать новые товары.  [Подробнее о лимитах в Базе знаний продавца](https://seller-edu.ozon.ru/work-with-goods/zagruzka-tovarov/creating-goods/limit/) 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; //

const { status, data } = await apiInstance.productAPIGetUploadQuota(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V4GetUploadQuotaResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Лимиты на ассортмент, создание и обновление товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIImportProductsBySKU**
> ProductImportProductsBySKUResponse productAPIImportProductsBySKU(productImportProductsBySKURequest)

Метод создаёт [копию карточки товара](https://seller-edu.ozon.ru/work-with-goods/zagruzka-tovarov/creating-goods/cherez-kopirovanie) с указанным SKU.  Создать копию не получится, если продавец запретил копирование своих карточек.  Обновить товар по SKU нельзя. 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    ProductImportProductsBySKURequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productImportProductsBySKURequest: ProductImportProductsBySKURequest; //

const { status, data } = await apiInstance.productAPIImportProductsBySKU(
    clientId,
    apiKey,
    productImportProductsBySKURequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productImportProductsBySKURequest** | **ProductImportProductsBySKURequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductImportProductsBySKUResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Товар создан |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIImportProductsV3**
> V3ImportProductsResponse productAPIImportProductsV3()

 Метод для создания товаров и обновления информации о них.  В сутки можно создать или обновить определённое количество товаров. Чтобы узнать лимит, используйте [/v4/product/info/limit](#operation/ProductAPI_GetUploadQuota). Если количество загрузок и обновлений товаров превысит лимит, появится ошибка `item_limit_exceeded`.  В одном запросе можно передать до 100 товаров. Каждый товар — это отдельный элемент в массиве `items`. Укажите всю информацию о товаре: его характеристики, штрихкод, изображения, габариты, цену и валюту цены.  При обновлении товара передайте в запросе всю информацию о нём.  Указанная валюта должна совпадать с той, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль. Например, если у вас установлена валюта юань, передавайте значение `CNY`, иначе вернётся ошибка.  Товар не будет создан или обновлён, если вы заполните неправильно или не укажете:    - **Обязательные характеристики**: характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://docs.ozon.ru/global/products/requirements/product-info/product-characteristics/#обязательные-характеристики) или получить методом [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes).    - **Реальные объёмно-весовые характеристики**: `depth`, `width`, `height`, `dimension_unit`, `weight`, `weight_unit`. Не пропускайте эти параметры в запросе и не указывайте 0.  Для некоторых характеристик можно использовать HTML-теги.  После модерации товар появится в вашем личном кабинете, но не будет виден пользователям, пока вы не выставите его на продажу.  Каждый товар в запросе — отдельный элемент массива `items`.  Чтобы объединить две карточки, для каждой передайте `9048` в массиве `attributes`. Все атрибуты в этих карточках, кроме размера или цвета, должны совпадать.  ## Загрузка изображений  Для загрузки передайте в запросе ссылки на изображения в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.  Изображения в массиве `images` располагайте в соответствии с желаемым порядком на сайте. Для загрузки главного изображения товара используйте параметр `primary_image`. Если не передать значение `primary_image`, главным будет первое изображение в массиве `images`.  Для каждого товара вы можете загрузить до 30 изображений, включая главное. Если передать значение `primary_image`, максимальное количество изображений в `images` — 29. Если параметр `primary_image` пустой, то в `images` можно передать до 30 изображений.  Для загрузки изображений 360 используйте поле `images360`, для загрузки маркетингового цвета — `color_image`.  Если вы хотите изменить состав или порядок изображений, получите информацию с помощью метода [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList) — в нём отображается текущий порядок и состав изображений. Скопируйте данные полей `images`, `images360`, `color_image`, измените и дополните состав или порядок в соответствии с необходимостью.  ## Загрузка видео  Для загрузки передайте в запросе ссылки на видео.  Для этого в параметре `complex_attributes` передайте объект. В нём в массиве `attributes` передайте 2 объекта с `complex_id = 100001`:  - В первом передайте укажите `id = 21841` и в массиве `values` передайте объект с ссылкой на видео.    __Пример__:    ```   {     \"complex_id\": 100001,     \"id\": 21841,     \"values\": [       {         \"value\": \"https://www.youtube.com/watch?v=ZwM0iBn03dY\"       }     ]   }   ```  - Во втором укажите значение `id = 21837` и в массиве `values` передайте объект с названием видео.    __Пример__:    ```   {     \"complex_id\": 100001,     \"id\": 21837,     \"values\": [       {         \"value\": \"videoName_1\"       }     ]   }   ```  Если вы хотите загрузить несколько видео, передавайте значения для каждого видео в разных объектах массива `values`.    __Пример__:    ```   {     \"complex_id\": 100001,     \"id\": 21837,     \"values\": [       {         \"value\": \"videoName_1\"       },       {         \"value\": \"videoName_2\"       }     ]   },   {     \"complex_id\": 100001,     \"id\": 21841,     \"values\": [       {         \"value\": \"https://www.youtube.com/watch?v=ZwM0iBn03dY\"       },       {         \"value\": \"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"       }     ]   } ```  ## Загрузка таблицы размеров Вы можете добавить в карточку товара таблицу размеров, созданную с помощью [конструктора](https://table-constructor.ozon.ru/visual-editor). Передайте её в массиве `attributes` в формате JSON как Rich-контент `id = 13164`. <br><br> [Конструктор в формате JSON](https://table-constructor.ozon.ru/schema.json)<br> [Подробнее о конструкторе в Базе знаний продавца](https://docs.ozon.ru/global/products/requirements/size-table-constructor/)  ## Загрузка видеообложки  Вы можете загрузить видеообложку через `complex_attributes`.  __Пример__:  ``` \"complex_attributes\": [   {     \"attributes\": [       {         \"id\": 21845,         \"complex_id\": 100002,         \"values\": [           {           \"dictionary_value_id\": 0,           \"value\": \"https://v.ozone.ru/vod/video-10/01GFATWQVCDE7G5B721421P1231Q7/asset_1.mp4\"           }         ]       }     ]   } ] ``` 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V3ImportProductsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v3ImportProductsRequest: V3ImportProductsRequest; // (optional)

const { status, data } = await apiInstance.productAPIImportProductsV3(
    clientId,
    apiKey,
    v3ImportProductsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3ImportProductsRequest** | **V3ImportProductsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V3ImportProductsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Создан новый товар / Информация о товаре обновлена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductArchive**
> ProductBooleanResponse productAPIProductArchive(productProductArchiveRequest)


### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    ProductProductArchiveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productProductArchiveRequest: ProductProductArchiveRequest; //

const { status, data } = await apiInstance.productAPIProductArchive(
    clientId,
    apiKey,
    productProductArchiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productProductArchiveRequest** | **ProductProductArchiveRequest**|  | |
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
|**200** | Товар перенесён в архив |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductGetRelatedSKU**
> V1ProductGetRelatedSKUResponse productAPIProductGetRelatedSKU(v1ProductGetRelatedSKURequest)

Метод для получения единого SKU по старым идентификаторам SKU FBS и SKU FBO.  В ответе будут все SKU, связанные с переданными.  Метод может обработать любые SKU, даже скрытые или удалённые.  Передавайте до 200 SKU в одном запросе. 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V1ProductGetRelatedSKURequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductGetRelatedSKURequest: V1ProductGetRelatedSKURequest; //

const { status, data } = await apiInstance.productAPIProductGetRelatedSKU(
    clientId,
    apiKey,
    v1ProductGetRelatedSKURequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductGetRelatedSKURequest** | **V1ProductGetRelatedSKURequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ProductGetRelatedSKUResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об SKU |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductImportPictures**
> Productv1ProductInfoPicturesResponse productAPIProductImportPictures(productv1ProductImportPicturesRequest)

Метод для загрузки или обновления изображений товара.  При каждом вызове метода передавайте все изображения, которые должны быть на карточке товара. Например, если вы вызвали метод и загрузили 10 изображений, а затем вызвали метод второй раз и загрузили ещё одно, то все 10 предыдущих сотрутся.  Для загрузки передайте адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.  Изображения в массиве `images` располагайте в соответствии с желаемым порядком на сайте. Главным будет первое изображение в массиве.  Для каждого товара вы можете загрузить до 30 изображений.  Для загрузки изображений 360 используйте поле `images360`, для загрузки маркетингового цвета — `color_image`.  Если вы хотите изменить состав или порядок изображений, получите информацию с помощью метода [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList) — в нём отображается текущий порядок и состав изображений. Скопируйте данные полей `images`, `images360`, `color_image`, измените и дополните состав или порядок в соответствии с необходимостью. 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    Productv1ProductImportPicturesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productv1ProductImportPicturesRequest: Productv1ProductImportPicturesRequest; //

const { status, data } = await apiInstance.productAPIProductImportPictures(
    clientId,
    apiKey,
    productv1ProductImportPicturesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productv1ProductImportPicturesRequest** | **Productv1ProductImportPicturesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Productv1ProductInfoPicturesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Предварительный результат работы метода |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductInfoPicturesV2**
> V2ProductInfoPicturesResponse productAPIProductInfoPicturesV2(v2ProductInfoPicturesRequest)


### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V2ProductInfoPicturesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ProductInfoPicturesRequest: V2ProductInfoPicturesRequest; //

const { status, data } = await apiInstance.productAPIProductInfoPicturesV2(
    clientId,
    apiKey,
    v2ProductInfoPicturesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ProductInfoPicturesRequest** | **V2ProductInfoPicturesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ProductInfoPicturesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Изображения товаров |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductUnarchive**
> ProductBooleanResponse productAPIProductUnarchive(productProductUnarchiveRequest)


### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    ProductProductUnarchiveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productProductUnarchiveRequest: ProductProductUnarchiveRequest; //

const { status, data } = await apiInstance.productAPIProductUnarchive(
    clientId,
    apiKey,
    productProductUnarchiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productProductUnarchiveRequest** | **ProductProductUnarchiveRequest**|  | |
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
|**200** | Товар из архива возвращён |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductUpdateAttributes**
> V1ProductUpdateAttributesResponse productAPIProductUpdateAttributes(v1ProductUpdateAttributesRequest)

Метод позволяет добавлять характеристики и изменять их значения. Удалить уже заполненные характеристики не получится. Для полного обновления характеристик используйте <a href=\"#operation/ProductAPI_ImportProductsV3\">/v3/product/import</a>.

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V1ProductUpdateAttributesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductUpdateAttributesRequest: V1ProductUpdateAttributesRequest; //

const { status, data } = await apiInstance.productAPIProductUpdateAttributes(
    clientId,
    apiKey,
    v1ProductUpdateAttributesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductUpdateAttributesRequest** | **V1ProductUpdateAttributesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ProductUpdateAttributesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Создано задание на обновление товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductUpdateOfferID**
> V1ProductUpdateOfferIdResponse productAPIProductUpdateOfferID(v1ProductUpdateOfferIdRequest)

Метод для изменения `offer_id`, привязанных к товарам. Вы можете изменить несколько `offer_id`.  Рекомендуем передавать до 250 значений в массиве. 

### Example

```typescript
import {
    ProductAPIApi,
    Configuration,
    V1ProductUpdateOfferIdRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductUpdateOfferIdRequest: V1ProductUpdateOfferIdRequest; //

const { status, data } = await apiInstance.productAPIProductUpdateOfferID(
    clientId,
    apiKey,
    v1ProductUpdateOfferIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductUpdateOfferIdRequest** | **V1ProductUpdateOfferIdRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ProductUpdateOfferIdResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об изменении артикулов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

