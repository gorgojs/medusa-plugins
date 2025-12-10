# ContentApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCategoryContentParameters**](#getcategorycontentparameters) | **POST** /v2/category/{categoryId}/parameters | Списки характеристик товаров по категориям|
|[**getOfferCardsContentStatus**](#getoffercardscontentstatus) | **POST** /v2/businesses/{businessId}/offer-cards | Получение информации о заполненности карточек магазина|
|[**updateOfferContent**](#updateoffercontent) | **POST** /v2/businesses/{businessId}/offer-cards/update | Редактирование категорийных характеристик товара|

# **getCategoryContentParameters**
> GetCategoryContentParametersResponse getCategoryContentParameters()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCategoryContentParameters.md) %}  Возвращает список характеристик с допустимыми значениями для заданной [листовой категории](*list-category).  |**⚙️ Лимит:** 100 категорий в минуту | |-| 

### Example

```typescript
import {
    ContentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentApi(configuration);

let categoryId: number; //Идентификатор категории на Маркете.  Чтобы узнать идентификатор категории, к которой относится интересующий вас товар, воспользуйтесь запросом [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  (default to undefined)
let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  Передайте параметр, чтобы получить характеристики, которые являются особенностями варианта товара в данном кабинете.  (optional) (default to undefined)

const { status, data } = await apiInstance.getCategoryContentParameters(
    categoryId,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**number**] | Идентификатор категории на Маркете.  Чтобы узнать идентификатор категории, к которой относится интересующий вас товар, воспользуйтесь запросом [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  | defaults to undefined|
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  Передайте параметр, чтобы получить характеристики, которые являются особенностями варианта товара в данном кабинете.  | (optional) defaults to undefined|


### Return type

**GetCategoryContentParametersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список характеристик товаров из заданной категории. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOfferCardsContentStatus**
> GetOfferCardsContentStatusResponse getOfferCardsContentStatus()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOfferCardsContentStatus.md) %}  Возвращает сведения о состоянии контента для заданных товаров:  * создана ли карточка товара и в каком она статусе; * рейтинг карточки — на сколько процентов она заполнена; * переданные характеристики товаров; * есть ли ошибки или предупреждения, связанные с контентом; * рекомендации по заполнению карточки.  |**⚙️ Лимит:** 600 запросов в минуту| |-| 

### Example

```typescript
import {
    ContentApi,
    Configuration,
    GetOfferCardsContentStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let getOfferCardsContentStatusRequest: GetOfferCardsContentStatusRequest; // (optional)

const { status, data } = await apiInstance.getOfferCardsContentStatus(
    businessId,
    pageToken,
    limit,
    getOfferCardsContentStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getOfferCardsContentStatusRequest** | **GetOfferCardsContentStatusRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetOfferCardsContentStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о карточках указанных товаров. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOfferContent**
> UpdateOfferContentResponse updateOfferContent(updateOfferContentRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOfferContent.md) %}  Редактирует характеристики товара, которые специфичны для категории, к которой он относится.  {% note warning \"Здесь только то, что относится к конкретной категории\" %}  Если вам нужно изменить основные параметры товара (название, описание, изображения, видео, производитель, штрихкод), воспользуйтесь запросом [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-assortment/updateOfferMappings.md).  {% endnote %}  Чтобы удалить характеристики, которые заданы в параметрах с типом `string`, передайте пустое значение.  {% note info \"Данные в каталоге обновляются не мгновенно\" %}  Это занимает до нескольких минут.  {% endnote %}  |**⚙️ Лимит:** 10 000 товаров в минуту| |-| 

### Example

```typescript
import {
    ContentApi,
    Configuration,
    UpdateOfferContentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ContentApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let updateOfferContentRequest: UpdateOfferContentRequest; //

const { status, data } = await apiInstance.updateOfferContent(
    businessId,
    updateOfferContentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOfferContentRequest** | **UpdateOfferContentRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**UpdateOfferContentResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос выполнен корректно, данные обработаны.  {% note warning \&quot;Ответ &#x60;200&#x60; сам по себе не значит, что переданные значения корректны\&quot; %}  Обязательно посмотрите детали ответа: &#x60;status&#x60;, а также перечень ошибок (&#x60;results.errors&#x60;) и замечаний (&#x60;results.warnings&#x60;), если они есть.  - Если хотя бы по одному товару вернулась ошибка (&#x60;results.errors&#x60;), поле &#x60;status&#x60; &#x3D; &#x60;ERROR&#x60;. Изменения по всем переданным товарам не будут применены. - Если ошибок нет, но хотя бы по одному товару вернулось замечание (&#x60;results.warnings&#x60;), поле &#x60;status&#x60; &#x3D; &#x60;OK&#x60;, и изменения будут применены.  {% endnote %}  Если в &#x60;status&#x60; вернулось &#x60;ERROR&#x60;, убедитесь, что:  * все обязательные характеристики заполнены; * характеристики действительно существуют в указанных категориях; * значения соответствуют характеристикам; * ваши собственные значения имеют нужный тип данных.  Найти проблемы помогут поля &#x60;errors&#x60; и &#x60;warnings&#x60;.  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

