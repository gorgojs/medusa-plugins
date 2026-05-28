# ProductImportProductsPricesRequestPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_action_enabled** | **string** | Атрибут для включения и выключения автоматического применения к товару доступных акций Ozon: - &#x60;ENABLED&#x60; — включить; - &#x60;DISABLED&#x60; — выключить; - &#x60;UNKNOWN&#x60; — ничего не менять, передаётся по умолчанию.  Например, если ранее вы включили автодобавление и не хотите выключать его, передавайте &#x60;UNKNOWN&#x60;.  Если вы передаёте &#x60;ENABLED&#x60; в этом параметре, установите значение минимальной цены в параметре &#x60;min_price&#x60;. Цена не опустится ниже минимальной.  | [optional] [default to AutoActionEnabledEnum_Unknown]
**auto_add_to_ozon_actions_list_enabled** | **string** | Атрибут для включения и выключения автодобавления товара в акции: - &#x60;ENABLED&#x60; — включить; - &#x60;DISABLED&#x60; — выключить; - &#x60;UNKNOWN&#x60; — ничего не менять, передаётся по умолчанию.  Например, если ранее вы включили автодобавление товара в акции и не хотите выключать его, передавайте &#x60;UNKNOWN&#x60;.  | [optional] [default to AutoAddToOzonActionsListEnabledEnum_Unknown]
**currency_code** | **string** | Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся &#x60;RUB&#x60; — российский рубль.  Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение &#x60;CNY&#x60;, иначе вернётся ошибка.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**manage_elastic_boosting_through_price** | **boolean** | Управление участием в акции «Эластичный бустинг»:  - &#x60;true&#x60; — автоматически добавляет товар в акцию или увеличивает в ней скидку и бустинг, если значение из параметра &#x60;price&#x60; соответствует условиям акции; - &#x60;false&#x60; — изменение значения параметра &#x60;price&#x60; не влияет на участие в акции.   Если ничего не передать, изменений в статусе участия не будет.  | [optional] [default to undefined]
**min_price** | **string** | Минимальная цена товара после применения акций. | [optional] [default to undefined]
**min_price_for_auto_actions_enabled** | **boolean** | &#x60;true&#x60;, если Ozon учитывает минимальную цену при добавлении в акции. Если ничего не передать, изменений в статусе учёта цены не будет.  | [optional] [default to undefined]
**net_price** | **string** | Себестоимость товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**old_price** | **string** | Цена до скидок (зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки.  Если на товар нет скидок, укажите значение &#x60;0&#x60; в этом поле, а текущую цену передайте в поле &#x60;price&#x60;.  | [optional] [default to undefined]
**price** | **string** | Цена товара с учётом скидок, отображается на карточке товара.  Если значение параметра &#x60;old_price&#x60; больше 0, между &#x60;price&#x60; и &#x60;old_price&#x60; должна быть определённая разница. Она зависит от значения &#x60;price&#x60;.  | Значение &#x60;price&#x60; | Минимальная разница | |---|---| | &lt; 400 | 20 рублей | | 400–10 000 | 5% | | &gt; 10 000 | 500 рублей |  | [optional] [default to undefined]
**price_strategy_enabled** | **string** | Атрибут для автоприменения стратегий цены: - &#x60;ENABLED&#x60; — включить; - &#x60;DISABLED&#x60; — выключить; - &#x60;UNKNOWN&#x60; — ничего не менять, передаётся по умолчанию.  Если ранее вы включили автоприменение стратегий цены и не хотите выключать его, передавайте &#x60;UNKNOWN&#x60; в следующих запросах.  Если вы передаёте &#x60;ENABLED&#x60; в этом параметре, установите значение минимальной цены в параметре &#x60;min_price&#x60;.  Если вы передаёте &#x60;DISABLED&#x60; в этом параметре, товар удаляется из стратегии.  | [optional] [default to PriceStrategyEnabledEnum_Unknown]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**quant_size** | **number** | Используйте параметр, если у обычного и эконом-товара совпадает артикул — &#x60;offer_id &#x3D; quant_id&#x60;. Чтобы обновить цену: - обычного товара — передайте значение &#x60;1&#x60;; - эконом-товара — передайте размер его кванта.  Если у обычного и эконом-товара разные артикулы, не передавайте параметр.  | [optional] [default to undefined]
**vat** | **string** | Ставка НДС для товара:   - &#x60;0&#x60; — не облагается НДС,   - &#x60;0.05&#x60; — 5%,   - &#x60;0.07&#x60; — 7%,   - &#x60;0.1&#x60; — 10%,   - &#x60;0.2&#x60; — 20%,   - &#x60;0.22&#x60; — 22%.  Передавайте значение ставки, актуальное на данный момент.  | [optional] [default to undefined]

## Example

```typescript
import { ProductImportProductsPricesRequestPrice } from './api';

const instance: ProductImportProductsPricesRequestPrice = {
    auto_action_enabled,
    auto_add_to_ozon_actions_list_enabled,
    currency_code,
    manage_elastic_boosting_through_price,
    min_price,
    min_price_for_auto_actions_enabled,
    net_price,
    offer_id,
    old_price,
    price,
    price_strategy_enabled,
    product_id,
    quant_size,
    vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
