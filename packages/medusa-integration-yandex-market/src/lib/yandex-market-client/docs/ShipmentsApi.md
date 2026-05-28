# ShipmentsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**confirmShipment**](#confirmshipment) | **POST** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/confirm | Подтверждение отгрузки|
|[**downloadShipmentAct**](#downloadshipmentact) | **GET** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/act | Получение акта приема-передачи|
|[**downloadShipmentDiscrepancyAct**](#downloadshipmentdiscrepancyact) | **GET** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/discrepancy-act | Получение акта расхождений|
|[**downloadShipmentInboundAct**](#downloadshipmentinboundact) | **GET** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/inbound-act | Получение фактического акта приема-передачи|
|[**downloadShipmentPalletLabels**](#downloadshipmentpalletlabels) | **GET** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallet/labels | Ярлыки для доверительной приемки|
|[**downloadShipmentReceptionTransferAct**](#downloadshipmentreceptiontransferact) | **GET** /v2/campaigns/{campaignId}/shipments/reception-transfer-act | Подтверждение ближайшей отгрузки и получение акта приема-передачи для нее|
|[**downloadShipmentTransportationWaybill**](#downloadshipmenttransportationwaybill) | **GET** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/transportation-waybill | Получение транспортной накладной|
|[**getShipment**](#getshipment) | **GET** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId} | Получение информации об одной отгрузке|
|[**getShipmentOrdersInfo**](#getshipmentordersinfo) | **GET** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/info | Получение информации о возможности печати ярлыков|
|[**searchShipments**](#searchshipments) | **PUT** /v2/campaigns/{campaignId}/first-mile/shipments | Получение информации о нескольких отгрузках|
|[**setShipmentPalletsCount**](#setshipmentpalletscount) | **PUT** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallets | Передача количества упаковок для доверительной приемки|
|[**transferOrdersFromShipment**](#transferordersfromshipment) | **POST** /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/transfer | Перенос заказов в следующую отгрузку|

# **confirmShipment**
> EmptyApiResponse confirmShipment()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/confirmShipment.md) %}  Подтверждает отгрузку товаров в сортировочный центр или пункт приема заказов. Действие доступно только после того, как отгрузка сформирована.  График отгрузок настраивается отдельно для каждого склада в личном кабинете и недоступен через API. Проверить возможность подтверждения отгрузки можно с помощью метода [GET v2/campaigns/{campaignId}/shipments/{shipmentId}](../../reference/shipments/getShipment): среди доступных действий `availableActions` должно быть действие `CONFIRM`. До наступления времени подтверждения метод вернет код `400` и ошибку :no-translate[\"Cutoff time for shipments has not been reached yet\"].  Подробнее о приеме заказов и расписании отгрузок читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/settings/shipment#schedule).  {% include notitle [:no-translate[limit]](../../_auto/method_limits/confirmShipment.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration,
    ConfirmShipmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)
let confirmShipmentRequest: ConfirmShipmentRequest; // (optional)

const { status, data } = await apiInstance.confirmShipment(
    campaignId,
    shipmentId,
    confirmShipmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmShipmentRequest** | **ConfirmShipmentRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пустой ответ. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибках при работе с отгрузками](../../concepts/error-codes#shipments)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadShipmentAct**
> File downloadShipmentAct()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/downloadShipmentAct.md) %}  {% note warning \"Экспресс‑доставка\" %}  Если ваш магазин подключен к экспресс‑доставке и вы отгружаете заказы курьерам [Яндекс Go](https://go.yandex/), подготавливать акт приема‑передачи не нужно.  {% endnote %}  Запрос формирует акт приема-передачи заказов, входящих в отгрузку, и возвращает акт в формате PDF. В акте содержатся собранные и готовые к отправке заказы.  Метод доступен только для подтвержденной отгрузки. Сначала подтвердите отгрузку запросом [POST v2/campaigns/{campaignId}/shipments/{shipmentId}/confirm](../../reference/shipments/confirmShipment.md), затем вызовите этот метод.  При формировании акта Маркет автоматически находит и подставляет в шаблон следующие данные:  {% cut \"Данные, из которых Маркет формирует акт\" %}  #| || **Данные в акте**                                         | **Описание**                                                                                                                                                                                                                                                         || || Дата                                                      | Дата запроса.                                                                                                                                                                                                                                                        || || Отправитель                                               | Название вашего юридического лица, указанное в кабинете продавца на Маркете.                                                                                                                                                                                         || || Исполнитель                                               | Название юридического лица сортировочного центра или службы доставки.                                                                                                                                                                                                || || № отправления в системе заказчика                         | Внешний идентификатор заказа продавца, который можно передать запросом [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).                                                                            || || № отправления в системе исполнителя (субподрядчика)       |   Идентификатор заказа на Маркете, как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||  || Объявленная ценность                                      |   Общая сумма заказа без учета стоимости доставки, как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||  || Вес                                                       |   Масса брутто грузового места (суммарная масса упаковки и содержимого), как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||  || Количество мест                                           |   Количество грузовых мест в заказе, как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md). || |#  {% endcut %}  В распечатанном акте укажите отправителя и исполнителя. Они должны подписать акт и указать фамилию и инициалы рядом с подписью. При необходимости также заполните реквизиты доверенности.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/downloadShipmentAct.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)

const { status, data } = await apiInstance.downloadShipmentAct(
    campaignId,
    shipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Акт приема-передачи для отгрузки в формате :no-translate[PDF]. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибках при работе с отгрузками](../../concepts/error-codes#shipments)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadShipmentDiscrepancyAct**
> File downloadShipmentDiscrepancyAct()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/downloadShipmentDiscrepancyAct.md) %}  Возвращает акт расхождений для заданной отгрузки.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/downloadShipmentDiscrepancyAct.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)

const { status, data } = await apiInstance.downloadShipmentDiscrepancyAct(
    campaignId,
    shipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Акт расхождений в формате :no-translate[XLSX]. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadShipmentInboundAct**
> File downloadShipmentInboundAct()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/downloadShipmentInboundAct.md) %}  Возвращает фактический акт приема-передачи для заданной отгрузки.  Такой акт становится доступен спустя несколько часов после завершения отгрузки. Он может понадобиться, если после отгрузки обнаружатся расхождения.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/downloadShipmentInboundAct.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)

const { status, data } = await apiInstance.downloadShipmentInboundAct(
    campaignId,
    shipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Акт в формате PDF. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadShipmentPalletLabels**
> File downloadShipmentPalletLabels()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/downloadShipmentPalletLabels.md) %}  PDF-файл с ярлыками на каждую упаковку в отгрузке для доверительной приемки. Подробнее о таком виде приемки читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/process.html#acceptance).  Распечатайте по несколько копий каждого ярлыка: на одну упаковку нужно наклеить минимум 2 ярлыка с разных сторон.  Количество упаковок в отгрузке передается в методе [PUT v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallets](../../reference/shipments/setShipmentPalletsCount.md).  {% include notitle [:no-translate[limit]](../../_auto/method_limits/downloadShipmentPalletLabels.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)
let format: ShipmentPalletLabelPageFormatType; //Формат страниц PDF-файла с ярлыками:  * `A4` — по 16 ярлыков на странице. * `A8` — по одному ярлыку на странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.downloadShipmentPalletLabels(
    campaignId,
    shipmentId,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|
| **format** | **ShipmentPalletLabelPageFormatType** | Формат страниц PDF-файла с ярлыками:  * &#x60;A4&#x60; — по 16 ярлыков на странице. * &#x60;A8&#x60; — по одному ярлыку на странице.  | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | PDF‑файл с ярлыками на все упаковки в отгрузке. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadShipmentReceptionTransferAct**
> File downloadShipmentReceptionTransferAct()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/downloadShipmentReceptionTransferAct.md) %}  Запрос подтверждает ближайшую отгрузку и возвращает акт приема-передачи в формате PDF.  Подтверждение отгрузки доступно только после того, как она сформирована, иначе метод вернет код `400` и ошибку :no-translate[\"Closest shipment for reception transfer act generation not found.\"].  Подробнее о приеме заказов и расписании отгрузок читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/settings/shipment#schedule).  {% note warning \"Экспресс‑доставка\" %}  Если ваш магазин подключен к экспресс‑доставке и вы отгружаете заказы курьерам [Яндекс Go](https://go.yandex/), подготавливать акт приема‑передачи не нужно.  {% endnote %}  В акт входят собранные и готовые к отправке заказы, которые отгружаются в сортировочный центр или пункт приема либо передаются курьерам Маркета.  При формировании акта Маркет автоматически находит и подставляет в шаблон следующие данные:  {% cut \"Данные, из которых Маркет формирует акт\" %}  #| || **Данные в акте**                                  | **Описание**                                                                                                                                                                                                                                                         || || Отправитель                                      | Название вашего юридического лица, указанное в кабинете продавца на Маркете.                                                                                                                                                                                         || || Исполнитель                                         | Название юридического лица сортировочного центра или службы доставки.                                                                                                                                                                                                || || № отправления в системе заказчика                   | Внешний идентификатор заказа продавца, который можно передать запросом [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).                                                                            || || № отправления в системе исполнителя (субподрядчика) |   Идентификатор заказа на Маркете, как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||  || Объявленная ценность                                |   Общая сумма заказа без учета стоимости доставки, как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||  || Стоимость всех товаров в заказе                     | Стоимость всех заказанных товаров.                                                                                                                                                                                                                                   ||  || Вес                                                 |   Масса брутто грузового места (суммарная масса упаковки и содержимого), как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||  || Количество мест                                     |   Количество грузовых мест в заказе, как в выходных данных запроса:    * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).|| |#  {% endcut %}  {% note info \"Электронная подпись акта\" %}  Если вы указываете параметр `signatory`, акт приема-передачи подписывается электронной подписью и становится электронным документом. В этом случае печатать и подписывать акт вручную не требуется — он уже имеет юридическую силу в электронном виде.  Если параметр `signatory` не указан, акт нужно распечатать. В распечатанном акте укажите отправителя и исполнителя. Они должны подписать акт и указать фамилию и инициалы рядом с подписью. При необходимости также заполните реквизиты доверенности.  Подробнее о работе с актами приема-передачи читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/process#act).  {% endnote %}  {% include notitle [:no-translate[limit]](../../_auto/method_limits/downloadShipmentReceptionTransferAct.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let warehouseId: number; //Идентификатор склада. (optional) (default to undefined)
let signatory: string; //Логин пользователя в Яндекс ID, от имени которого будет подписываться электронный акт приема-передачи.  Указывается без `@yandex.ru`.  {% note info \"Электронная подпись\" %}  Если вы указываете параметр `signatory`, акт приема-передачи подписывается электронной подписью и становится электронным документом. В этом случае печатать и подписывать акт вручную не требуется — он уже имеет юридическую силу в электронном виде.  Подробнее о работе с актами приема-передачи читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/process#act).  {% endnote %}  Где найти логин:  * на странице [Яндекс ID](https://id.yandex.ru); * в [кабинете продавца на Маркете](https://partner.market.yandex.ru/):  * в правом верхнем углу под иконкой пользователя;   * на странице **Настройки** → **Сотрудники и доступы**.  (optional) (default to undefined)

const { status, data } = await apiInstance.downloadShipmentReceptionTransferAct(
    campaignId,
    warehouseId,
    signatory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **warehouseId** | [**number**] | Идентификатор склада. | (optional) defaults to undefined|
| **signatory** | [**string**] | Логин пользователя в Яндекс ID, от имени которого будет подписываться электронный акт приема-передачи.  Указывается без &#x60;@yandex.ru&#x60;.  {% note info \&quot;Электронная подпись\&quot; %}  Если вы указываете параметр &#x60;signatory&#x60;, акт приема-передачи подписывается электронной подписью и становится электронным документом. В этом случае печатать и подписывать акт вручную не требуется — он уже имеет юридическую силу в электронном виде.  Подробнее о работе с актами приема-передачи читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/process#act).  {% endnote %}  Где найти логин:  * на странице [Яндекс ID](https://id.yandex.ru); * в [кабинете продавца на Маркете](https://partner.market.yandex.ru/):  * в правом верхнем углу под иконкой пользователя;   * на странице **Настройки** → **Сотрудники и доступы**.  | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Акт приема-передачи в формате :no-translate[PDF]. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибках при работе с отгрузками](../../concepts/error-codes#shipments)  |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadShipmentTransportationWaybill**
> File downloadShipmentTransportationWaybill()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/downloadShipmentTransportationWaybill.md) %}  Возвращает транспортную накладную для заданной отгрузки, если Маркет забирает товары с вашего склада. Подробнее о таком способе отгрузки читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/settings/shipment#at-your-warehouse).  Накладная не возвращается, если вы привозите товары в ПВЗ или сортировочный центр.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/downloadShipmentTransportationWaybill.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)

const { status, data } = await apiInstance.downloadShipmentTransportationWaybill(
    campaignId,
    shipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Транспортная накладная в формате :no-translate[XLSX]. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShipment**
> GetShipmentResponse getShipment()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getShipment.md) %}  Возвращает информацию об отгрузке по ее идентификатору.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getShipment.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)
let cancelledOrders: boolean; //Возвращать ли отмененные заказы.  Значение по умолчанию: `true`. Если возвращать отмененные заказы не нужно, передайте значение `false`.  (optional) (default to true)

const { status, data } = await apiInstance.getShipment(
    campaignId,
    shipmentId,
    cancelledOrders
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|
| **cancelledOrders** | [**boolean**] | Возвращать ли отмененные заказы.  Значение по умолчанию: &#x60;true&#x60;. Если возвращать отмененные заказы не нужно, передайте значение &#x60;false&#x60;.  | (optional) defaults to true|


### Return type

**GetShipmentResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Найденная отгрузка. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getShipmentOrdersInfo**
> GetShipmentOrdersInfoResponse getShipmentOrdersInfo()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getShipmentOrdersInfo.md) %}  Возвращает информацию о возможности печати ярлыков-наклеек для заказов в отгрузке.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/getShipmentOrdersInfo.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)

const { status, data } = await apiInstance.getShipmentOrdersInfo(
    campaignId,
    shipmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**GetShipmentOrdersInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация по годным/негодным для печати ярлыков заказам в отгрузке. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchShipments**
> SearchShipmentsResponse searchShipments(searchShipmentsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchShipments.md) %}  Возвращает информацию об отгрузках по заданным параметрам:  * дате; * статусу; * идентификаторам заказов.  Результаты возвращаются постранично.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/searchShipments.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration,
    SearchShipmentsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let searchShipmentsRequest: SearchShipmentsRequest; //
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.  (optional) (default to undefined)
let limit: number; //{{ limit-param-description }}  (optional) (default to 15)

const { status, data } = await apiInstance.searchShipments(
    campaignId,
    searchShipmentsRequest,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchShipmentsRequest** | **SearchShipmentsRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Передавайте значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  | (optional) defaults to undefined|
| **limit** | [**number**] | {{ limit-param-description }}  | (optional) defaults to 15|


### Return type

**SearchShipmentsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Найденные отгрузки. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setShipmentPalletsCount**
> EmptyApiResponse setShipmentPalletsCount(setShipmentPalletsCountRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/setShipmentPalletsCount.md) %}  Передает Маркету количество упаковок в отгрузке для доверительной приемки. Подробнее о таком виде приемки читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/process.html#acceptance).  {% note info \"Как передавать упаковки\" %}  Передавайте количество упаковок, которые вы везете в отгрузке, а не сумму грузомест по заказам.  **Пример:** в отгрузке 2 заказа, в каждом по 5 грузомест. Если вы везете их в 2 палетах — передайте в запросе `2`, а не `10`.  {% endnote %}  Получить PDF-файл с ярлыками для упаковок можно с помощью метода [GET v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallet/labels](../../reference/shipments/downloadShipmentPalletLabels.md).  {% include notitle [:no-translate[limit]](../../_auto/method_limits/setShipmentPalletsCount.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration,
    SetShipmentPalletsCountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)
let setShipmentPalletsCountRequest: SetShipmentPalletsCountRequest; //

const { status, data } = await apiInstance.setShipmentPalletsCount(
    campaignId,
    shipmentId,
    setShipmentPalletsCountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setShipmentPalletsCountRequest** | **SetShipmentPalletsCountRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Имеет значение только тип ответа. Если ответ &#x60;ОК&#x60;, количество упаковок записано. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferOrdersFromShipment**
> EmptyApiResponse transferOrdersFromShipment(transferOrdersFromShipmentRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/transferOrdersFromShipment.md) %}  Переносит указанные заказы из указанной отгрузки в следующую отгрузку. [Что такое отгрузка?](https://yandex.ru/support/marketplace/orders/fbs/process.html#ship)  Используйте этот запрос, если не успеваете собрать и упаковать заказы вовремя.  {% note warning \"Такие переносы снижают индекс качества магазина\" %}  Этот запрос предназначен для исключительных случаев. Если вы будете переносить заказы слишком часто, магазин столкнется с ограничениями. [Что за ограничения?](https://yandex.ru/support/marketplace/quality/score/fbs.html)  {% endnote %}  Переносить заказы можно, если до формирования отгрузки осталось больше получаса.  Перенос происходит не мгновенно, а занимает несколько минут.  {% include notitle [:no-translate[limit]](../../_auto/method_limits/transferOrdersFromShipment.md) %} 

### Example

```typescript
import {
    ShipmentsApi,
    Configuration,
    TransferOrdersFromShipmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ShipmentsApi(configuration);

let campaignId: number; //Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  (default to undefined)
let shipmentId: number; //Идентификатор отгрузки. (default to undefined)
let transferOrdersFromShipmentRequest: TransferOrdersFromShipmentRequest; //

const { status, data } = await apiInstance.transferOrdersFromShipment(
    campaignId,
    shipmentId,
    transferOrdersFromShipmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferOrdersFromShipmentRequest** | **TransferOrdersFromShipmentRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | defaults to undefined|
| **shipmentId** | [**number**] | Идентификатор отгрузки. | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос на перенос заказов проверен и принят, и они будут перенесены спустя несколько минут. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

