# FullOutletDTO

Информация о точке продаж.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название точки продаж.  | [default to undefined]
**type** | [**OutletType**](OutletType.md) |  | [default to undefined]
**coords** | **string** | Координаты точки продаж.  Формат: долгота, широта. Разделители: запятая и / или пробел. Например, &#x60;20.4522144, 54.7104264&#x60;.  Если параметр не передан, координаты будут определены по значениям параметров, вложенных в &#x60;address&#x60;.  | [optional] [default to undefined]
**isMain** | **boolean** | Признак основной точки продаж.  Возможные значения:  * &#x60;false&#x60; — неосновная точка продаж. * &#x60;true&#x60; — основная точка продаж.  | [optional] [default to undefined]
**shopOutletCode** | **string** | Идентификатор точки продаж, присвоенный магазином. | [optional] [default to undefined]
**visibility** | [**OutletVisibilityType**](OutletVisibilityType.md) |  | [optional] [default to undefined]
**address** | [**OutletAddressDTO**](OutletAddressDTO.md) |  | [default to undefined]
**phones** | **Set&lt;string&gt;** | Номера телефонов точки продаж. Передавайте в формате: &#x60;+7 (999) 999-99-99&#x60;.  | [default to undefined]
**workingSchedule** | [**OutletWorkingScheduleDTO**](OutletWorkingScheduleDTO.md) |  | [default to undefined]
**deliveryRules** | [**Array&lt;OutletDeliveryRuleDTO&gt;**](OutletDeliveryRuleDTO.md) | Информация об условиях доставки для данной точки продаж.  Обязательный параметр, если параметр &#x60;type&#x3D;DEPOT&#x60; или &#x60;type&#x3D;MIXED&#x60;.  | [optional] [default to undefined]
**storagePeriod** | **number** | Срок хранения заказа в собственном пункте выдачи заказов. Считается в днях. | [optional] [default to undefined]
**id** | **number** | Идентификатор точки продаж, присвоенный Маркетом. | [default to undefined]
**status** | [**OutletStatusType**](OutletStatusType.md) |  | [optional] [default to undefined]
**region** | [**RegionDTO**](RegionDTO.md) |  | [optional] [default to undefined]
**shopOutletId** | **string** | {% note warning \&quot;Вместо него используйте &#x60;shopOutletCode&#x60;.\&quot; %}     {% endnote %}  Идентификатор точки продаж, заданный магазином.  | [optional] [default to undefined]
**workingTime** | **string** | {% note warning \&quot;Вместо него используйте &#x60;workingSchedule&#x60;.\&quot; %}     {% endnote %}  Рабочее время.  | [optional] [default to undefined]
**moderationReason** | **string** | Статус модерации. | [optional] [default to undefined]

## Example

```typescript
import { FullOutletDTO } from './api';

const instance: FullOutletDTO = {
    name,
    type,
    coords,
    isMain,
    shopOutletCode,
    visibility,
    address,
    phones,
    workingSchedule,
    deliveryRules,
    storagePeriod,
    id,
    status,
    region,
    shopOutletId,
    workingTime,
    moderationReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
