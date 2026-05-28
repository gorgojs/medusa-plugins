# FinanceTransactionListV3ResponseOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accruals_for_sale** | **number** | Стоимость товаров с учётом скидок продавца. | [optional] [default to undefined]
**amount** | **number** | Итоговая сумма операции. | [optional] [default to undefined]
**delivery_charge** | **number** | Стоимость доставки для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров. | [optional] [default to undefined]
**items** | [**Array&lt;OperationItem&gt;**](OperationItem.md) | Информация о товаре. | [optional] [default to undefined]
**operation_date** | **string** | Дата операции. | [optional] [default to undefined]
**operation_id** | **number** | Идентификатор операции. | [optional] [default to undefined]
**operation_type** | **string** | Тип операции. | [optional] [default to undefined]
**operation_type_name** | **string** | Название типа операции. | [optional] [default to undefined]
**posting** | [**OperationPosting**](OperationPosting.md) |  | [optional] [default to undefined]
**return_delivery_charge** | **number** | Плата за возвраты и отмены для начислений по тарифам, которые действовали до 1 февраля 2021 года, а также начислений для крупногабаритных товаров. | [optional] [default to undefined]
**sale_commission** | **number** | Комиссия за продажу или возврат комиссии за продажу. | [optional] [default to undefined]
**services** | [**Array&lt;OperationService&gt;**](OperationService.md) | Название услуги. | [optional] [default to undefined]
**type** | **string** | Тип начисления: - &#x60;all&#x60; — все, - &#x60;orders&#x60; — заказы, - &#x60;returns&#x60; — возвраты и отмены, - &#x60;services&#x60; — сервисные сборы, - &#x60;compensation&#x60; — компенсация, - &#x60;transferDelivery&#x60; — стоимость доставки, - &#x60;other&#x60; — прочее.  | [optional] [default to undefined]

## Example

```typescript
import { FinanceTransactionListV3ResponseOperation } from './api';

const instance: FinanceTransactionListV3ResponseOperation = {
    accruals_for_sale,
    amount,
    delivery_charge,
    items,
    operation_date,
    operation_id,
    operation_type,
    operation_type_name,
    posting,
    return_delivery_charge,
    sale_commission,
    services,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
