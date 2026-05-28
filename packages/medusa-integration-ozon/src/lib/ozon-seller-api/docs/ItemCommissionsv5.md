# ItemCommissionsv5

Информация о комиссиях.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fbo_deliv_to_customer_amount** | **number** | Последняя миля (FBO). | [optional] [default to undefined]
**fbo_direct_flow_trans_max_amount** | **number** | Магистраль до (FBO). | [optional] [default to undefined]
**fbo_direct_flow_trans_min_amount** | **number** | Магистраль от (FBO). | [optional] [default to undefined]
**fbo_return_flow_amount** | **number** | Комиссия за возврат и отмену (FBO). | [optional] [default to undefined]
**fbs_deliv_to_customer_amount** | **number** | Последняя миля (FBS). | [optional] [default to undefined]
**fbs_direct_flow_trans_max_amount** | **number** | Магистраль до (FBS). | [optional] [default to undefined]
**fbs_direct_flow_trans_min_amount** | **number** | Магистраль от (FBS). | [optional] [default to undefined]
**fbs_first_mile_max_amount** | **number** | Максимальная комиссия за обработку отправления (FBS).  [Подробнее о тарифах в Базе знаний продавца](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/rashody-na-dop-uslugi#выезд-транспортного-средства-по-адресу-продавца-для-забора-отправлении-(pick-up))  | [optional] [default to undefined]
**fbs_first_mile_min_amount** | **number** | Минимальная комиссия за обработку отправления (FBS).  [Подробнее о тарифах в Базе знаний продавца](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/rashody-na-dop-uslugi#выезд-транспортного-средства-по-адресу-продавца-для-забора-отправлении-(pick-up))  | [optional] [default to undefined]
**fbs_return_flow_amount** | **number** | Комиссия за возврат и отмену, обработка отправления (FBS). | [optional] [default to undefined]
**sales_percent_fbo** | **number** | Процент комиссии за продажу (FBO). | [optional] [default to undefined]
**sales_percent_fbp** | **number** | Процент комиссии за продажу (FBP). | [optional] [default to undefined]
**sales_percent_fbs** | **number** | Процент комиссии за продажу (FBS). | [optional] [default to undefined]
**sales_percent_rfbs** | **number** | Процент комиссии за продажу (rFBS). | [optional] [default to undefined]

## Example

```typescript
import { ItemCommissionsv5 } from './api';

const instance: ItemCommissionsv5 = {
    fbo_deliv_to_customer_amount,
    fbo_direct_flow_trans_max_amount,
    fbo_direct_flow_trans_min_amount,
    fbo_return_flow_amount,
    fbs_deliv_to_customer_amount,
    fbs_direct_flow_trans_max_amount,
    fbs_direct_flow_trans_min_amount,
    fbs_first_mile_max_amount,
    fbs_first_mile_min_amount,
    fbs_return_flow_amount,
    sales_percent_fbo,
    sales_percent_fbp,
    sales_percent_fbs,
    sales_percent_rfbs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
