# ExtendedOrderData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check** | [**ExtendedOrderDataCheck**](ExtendedOrderDataCheck.md) |  | [optional] [default to undefined]
**factOrderWeight** | **number** | Фактический вес отправления (граммы) | [optional] [default to undefined]
**factVolumeCm3** | **number** | Фактический объём отправления (см3) | [optional] [default to undefined]
**factPlacesWeight** | [**Array&lt;ExtendedOrderDataFactPlacesWeightInner&gt;**](ExtendedOrderDataFactPlacesWeightInner.md) | Фактический вес отправления (граммы) | [optional] [default to undefined]
**planDeliveryCost** | **number** | Плановая стоимость доставки (рубли) | [optional] [default to undefined]
**factDeliveryCost** | **number** | Фактическая стоимость доставки (рубли) | [optional] [default to undefined]
**factReturnDeliveryCost** | **number** | Фактическая стоимость возврата (рубли) | [optional] [default to undefined]
**factCodCost** | **number** | Фактический наложенный платеж (рубли) | [optional] [default to undefined]
**factCodDate** | **string** | Дата перечисления наложенного платежа | [optional] [default to undefined]
**usedPaymentMethod** | **string** | Тип оплаты: - \&#39;cash\&#39; - наличными; - \&#39;card\&#39; - картой; - \&#39;common\&#39; - наличными и кредитной карточкой;  | [optional] [default to undefined]
**orderServicesDetails** | [**Array&lt;ExtendedOrderDataOrderServicesDetailsInner&gt;**](ExtendedOrderDataOrderServicesDetailsInner.md) |  | [optional] [default to undefined]
**returnReason** | [**ExtendedOrderDataReturnReason**](ExtendedOrderDataReturnReason.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExtendedOrderData } from './api';

const instance: ExtendedOrderData = {
    check,
    factOrderWeight,
    factVolumeCm3,
    factPlacesWeight,
    planDeliveryCost,
    factDeliveryCost,
    factReturnDeliveryCost,
    factCodCost,
    factCodDate,
    usedPaymentMethod,
    orderServicesDetails,
    returnReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
