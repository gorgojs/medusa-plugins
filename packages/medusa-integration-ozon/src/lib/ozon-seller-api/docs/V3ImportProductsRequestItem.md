# V3ImportProductsRequestItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Array&lt;V3ImportProductsRequestAttribute&gt;**](V3ImportProductsRequestAttribute.md) | Массив с характеристиками товара. Характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://seller-edu.ozon.ru/) или через API. | [optional] [default to undefined]
**barcode** | **string** | Штрихкод товара. | [optional] [default to undefined]
**color_image** | **string** | Маркетинговый цвет.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.  | [optional] [default to undefined]
**complex_attributes** | [**Array&lt;V3ImportProductsRequestComplexAttribute&gt;**](V3ImportProductsRequestComplexAttribute.md) | Массив характеристик, у которых есть вложенные атрибуты. | [optional] [default to undefined]
**currency_code** | **string** | Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся &#x60;RUB&#x60; — российский рубль.  Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение &#x60;CNY&#x60;, иначе вернётся ошибка.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**depth** | **number** | Глубина упаковки. | [optional] [default to undefined]
**description_category_id** | **number** | Идентификатор категории. Можно получить с помощью метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). | [default to undefined]
**new_description_category_id** | **number** | Новый идентификатор категории. Укажите его, если нужно изменить текущую категорию товара. | [optional] [default to undefined]
**dimension_unit** | **string** | Единица измерения габаритов:   - &#x60;mm&#x60; — миллиметры,   - &#x60;cm&#x60; — сантиметры,   - &#x60;in&#x60; — дюймы.  | [optional] [default to undefined]
**geo_names** | **Array&lt;string&gt;** | Геоограничения — при необходимости заполните параметр в личном кабинете при создании или редактировании товара.  Необязательный параметр.  | [optional] [default to undefined]
**height** | **number** | Высота упаковки. | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** | Массив изображений. До 30 штук. Изображения показываются на сайте в таком же порядке, как в массиве.  Если не передать значение &#x60;primary_image&#x60;, первое изображение в массиве будет главным для товара.  Если вы передали значение &#x60;primary_image&#x60;, передайте до 29 изображений. Если параметр &#x60;primary_image&#x60; пустой, передайте до 30 изображений.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG или PNG.  | [optional] [default to undefined]
**images360** | **Array&lt;string&gt;** | Массив изображений 360. До 70 штук.  Формат: адрес ссылки на изображение в общедоступном облачном хранилище. Формат изображения по ссылке — JPG.  | [optional] [default to undefined]
**name** | **string** | Название товара. До 500 символов.  [Правила для названия товара](https://seller-edu.ozon.ru/work-with-goods/trebovaniya-k-kartochkam-tovarov/product-information/nazvanie-tovara)  | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул.  Максимальная длина строки — 50 символов.  | [optional] [default to undefined]
**old_price** | **string** | Цена до скидок (будет зачёркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки.  Если вы раньше передавали &#x60;old_price&#x60;, то при обновлении &#x60;price&#x60; также обновите &#x60;old_price&#x60;.  | [optional] [default to undefined]
**pdf_list** | [**Array&lt;ImportProductsRequestPdfList&gt;**](ImportProductsRequestPdfList.md) | Список PDF-файлов. | [optional] [default to undefined]
**price** | **string** | Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите значение &#x60;old_price&#x60; в этом параметре.  | [default to undefined]
**primary_image** | **string** | Ссылка на главное изображение товара. | [optional] [default to undefined]
**promotions** | [**Array&lt;ImportProductRequestPromotion&gt;**](ImportProductRequestPromotion.md) | Акции. | [optional] [default to undefined]
**service_type** | [**V3ServiceType**](V3ServiceType.md) |  | [optional] [default to undefined]
**type_id** | **number** | Идентификатор типа товара.  Значения можно получить из такого же параметра &#x60;type_id&#x60; в ответе метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). При заполнении этого параметра можно не указывать в &#x60;attibutes &#x60; атрибут с параметром &#x60;id:8229&#x60;, &#x60;type_id&#x60; будет использоваться в приоритете.  | [default to undefined]
**vat** | **string** | Ставка НДС для товара:   - &#x60;0&#x60; — не облагается НДС,   - &#x60;0.05&#x60; — 5%,   - &#x60;0.07&#x60; — 7%,   - &#x60;0.1&#x60; — 10%,   - &#x60;0.2&#x60; — 20%,   - &#x60;0.22&#x60; — 22%.  Передавайте значение ставки, актуальное на данный момент.  | [optional] [default to undefined]
**weight** | **number** | Вес товара в упаковке. Предельное значение — 1000 килограммов или конвертированная величина в других единицах измерения.  | [optional] [default to undefined]
**weight_unit** | **string** | Единица измерения веса:   - &#x60;g&#x60; — граммы,   - &#x60;kg&#x60; — килограммы,   - &#x60;lb&#x60; — фунты.  | [optional] [default to undefined]
**width** | **number** | Ширина упаковки. | [optional] [default to undefined]

## Example

```typescript
import { V3ImportProductsRequestItem } from './api';

const instance: V3ImportProductsRequestItem = {
    attributes,
    barcode,
    color_image,
    complex_attributes,
    currency_code,
    depth,
    description_category_id,
    new_description_category_id,
    dimension_unit,
    geo_names,
    height,
    images,
    images360,
    name,
    offer_id,
    old_price,
    pdf_list,
    price,
    primary_image,
    promotions,
    service_type,
    type_id,
    vat,
    weight,
    weight_unit,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
