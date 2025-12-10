# UpdateOfferDTO

Параметры товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**name** | **string** | Составляйте название по схеме: тип + бренд или производитель + модель + особенности, если есть (например, цвет, размер или вес) и количество в упаковке.  Не включайте в название условия продажи (например, «скидка», «бесплатная доставка» и т. д.), эмоциональные характеристики («хит», «супер» и т. д.). Не пишите слова большими буквами — кроме устоявшихся названий брендов и моделей.  Оптимальная длина — 50–60 символов.  [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/title.html)  | [optional] [default to undefined]
**marketCategoryId** | **number** | Идентификатор категории на Маркете, к которой вы относите свой товар.  {% note warning \&quot;Всегда указывайте, когда передаете &#x60;parameterValues&#x60;\&quot; %}  Если при изменении характеристик передать &#x60;parameterValues&#x60; и не указать &#x60;marketCategoryId&#x60;, характеристики обновятся, но в ответе придет предупреждение (параметр &#x60;warnings&#x60;).  Если не передать их оба, будет использована информация из устаревших параметров &#x60;params&#x60; и &#x60;category&#x60;, а &#x60;marketCategoryId&#x60; будет определен автоматически.  {% endnote %}  При изменении категории убедитесь, что характеристики товара и их значения в параметре &#x60;parameterValues&#x60; вы передаете для новой категории.  Список категорий Маркета можно получить с помощью запроса  [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  | [optional] [default to undefined]
**category** | **string** | {% note warning \&quot;Вместо него используйте &#x60;marketCategoryId&#x60;.\&quot; %}     {% endnote %}  Категория товара в вашем магазине.  | [optional] [default to undefined]
**pictures** | **Array&lt;string&gt;** | Ссылки на изображения товара. Изображение по первой ссылке считается основным, остальные дополнительными.  **Требования к ссылкам**  * Указывайте ссылку целиком, включая протокол http или https. * Русские буквы в URL можно. * Можно использовать прямые ссылки на изображения и на Яндекс Диск. Ссылки на Яндекс Диске нужно копировать с помощью функции **Поделиться**. Относительные ссылки и ссылки на другие облачные хранилища — не работают.  ✅ &#x60;https://example-shop.ru/images/sku12345.jpg&#x60;  ✅ &#x60;https://yadi.sk/i/NaBoRsimVOLov&#x60;  ❌ &#x60;/images/sku12345.jpg&#x60;  ❌ &#x60;https://www.dropbox.com/s/818f/tovar.jpg&#x60;  Ссылки на изображение должны быть постоянными. Нельзя использовать динамические ссылки, меняющиеся от выгрузки к выгрузке.  Если нужно заменить изображение, выложите новое изображение по новой ссылке, а ссылку на старое удалите. Если просто заменить изображение по старой ссылке, оно не обновится.  [Требования к изображениям](https://yandex.ru/support/marketplace/assortment/fields/images.html)  | [optional] [default to undefined]
**videos** | **Array&lt;string&gt;** | Ссылки (URL) на видео товара.  **Требования к ссылке**  * Указывайте ссылку целиком, включая протокол http или https. * Русские буквы в URL можно. * Можно использовать прямые ссылки на видео и на Яндекс Диск. Ссылки на Яндекс Диске нужно копировать с помощью функции **Поделиться**. Относительные ссылки и ссылки на другие облачные хранилища — не работают.  ✅ &#x60;https://example-shop.ru/video/sku12345.avi&#x60;  ✅ &#x60;https://yadi.sk/i/NaBoRsimVOLov&#x60;  ❌ &#x60;/video/sku12345.avi&#x60;  ❌ &#x60;https://www.dropbox.com/s/818f/super-tovar.avi&#x60;  Ссылки на видео должны быть постоянными. Нельзя использовать динамические ссылки, меняющиеся от выгрузки к выгрузке.  Если нужно заменить видео, выложите новое видео по новой ссылке, а ссылку на старое удалите. Если просто заменить видео по старой ссылке, оно не обновится.  [Требования к видео](https://yandex.ru/support/marketplace/assortment/fields/video.html)  | [optional] [default to undefined]
**manuals** | [**Array&lt;OfferManualDTO&gt;**](OfferManualDTO.md) | Список инструкций по использованию товара.  | [optional] [default to undefined]
**vendor** | **string** | Название бренда или производителя. Должно быть записано так, как его пишет сам бренд. | [optional] [default to undefined]
**barcodes** | **Set&lt;string&gt;** | Штрихкод.  Указывайте в виде последовательности цифр. Подойдут коды :no-translate[EAN-13, EAN-8, UPC-A, UPC-E] или :no-translate[Code 128]. Для книг — :no-translate[ISBN].  Для товаров [определенных категорий и торговых марок](https://yastatic.net/s3/doc-binary/src/support/market/ru/yandex-market-list-for-gtin.xlsx) штрихкод должен быть действительным кодом :no-translate[GTIN]. Обратите внимание: внутренние штрихкоды, начинающиеся на 2 или 02, и коды формата :no-translate[Code 128] не являются :no-translate[GTIN].  [Что такое :no-translate[GTIN]](*gtin)  | [optional] [default to undefined]
**description** | **string** | Подробное описание товара: например, его преимущества и особенности.  Не давайте в описании инструкций по установке и сборке. Не используйте слова «скидка», «распродажа», «дешевый», «подарок» (кроме подарочных категорий), «бесплатно», «акция», «специальная цена», «новинка», «new», «аналог», «заказ», «хит». Не указывайте никакой контактной информации и не давайте ссылок.  Для форматирования текста можно использовать теги HTML:  * \\&lt;h&gt;, \\&lt;h1&gt;, \\&lt;h2&gt; и так далее — для заголовков; * \\&lt;br&gt; и \\&lt;p&gt; — для переноса строки; * \\&lt;ol&gt; — для нумерованного списка; * \\&lt;ul&gt; — для маркированного списка; * \\&lt;li&gt; — для создания элементов списка (должен находиться внутри \\&lt;ol&gt; или \\&lt;ul&gt;); * \\&lt;div&gt; — поддерживается, но не влияет на отображение текста.  Оптимальная длина — 400–600 символов.  [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/description.html)  | [optional] [default to undefined]
**manufacturerCountries** | **Set&lt;string&gt;** | Страна, где был произведен товар.  Записывайте названия стран так, как они записаны в [списке](https://yastatic.net/s3/doc-binary/src/support/market/ru/countries.xlsx).  | [optional] [default to undefined]
**weightDimensions** | [**OfferWeightDimensionsDTO**](OfferWeightDimensionsDTO.md) |  | [optional] [default to undefined]
**vendorCode** | **string** | Артикул товара от производителя. | [optional] [default to undefined]
**tags** | **Set&lt;string&gt;** | Метки товара, которые использует магазин. Покупателям теги не видны. По тегам можно группировать и фильтровать разные товары в каталоге — например, товары одной серии, коллекции или линейки.  Максимальная длина тега — 20 символов. У одного товара может быть максимум 10 тегов.  | [optional] [default to undefined]
**shelfLife** | [**TimePeriodDTO**](TimePeriodDTO.md) |  | [optional] [default to undefined]
**lifeTime** | [**TimePeriodDTO**](TimePeriodDTO.md) |  | [optional] [default to undefined]
**guaranteePeriod** | [**TimePeriodDTO**](TimePeriodDTO.md) |  | [optional] [default to undefined]
**customsCommodityCode** | **string** | {% note warning \&quot;Вместо него используйте &#x60;commodityCodes&#x60; с типом &#x60;CUSTOMS_COMMODITY_CODE&#x60;.\&quot; %}     {% endnote %}  Код товара в единой Товарной номенклатуре внешнеэкономической деятельности (ТН ВЭД) — 10 или 14 цифр без пробелов.  Обязательно укажите, если он есть.  | [optional] [default to undefined]
**commodityCodes** | [**Array&lt;CommodityCodeDTO&gt;**](CommodityCodeDTO.md) | Товарные коды.  | [optional] [default to undefined]
**certificates** | **Set&lt;string&gt;** | Номера документов на товар: сертификата, декларации соответствия и т. п.  Передавать можно только номера документов, сканы которого загружены в кабинете продавца по [инструкции](https://yandex.ru/support/marketplace/assortment/restrictions/certificates.html).  | [optional] [default to undefined]
**boxCount** | **number** | Количество грузовых мест.  Параметр используется, если товар представляет собой несколько коробок, упаковок и так далее. Например, кондиционер занимает два места — внешний и внутренний блоки в двух коробках.  Для товаров, занимающих одно место, не передавайте этот параметр.  | [optional] [default to undefined]
**condition** | [**OfferConditionDTO**](OfferConditionDTO.md) |  | [optional] [default to undefined]
**type** | [**OfferType**](OfferType.md) |  | [optional] [default to undefined]
**downloadable** | **boolean** | Признак цифрового товара. Укажите &#x60;true&#x60;, если товар доставляется по электронной почте.  [Как работать с цифровыми товарами](../../step-by-step/digital.md)  | [optional] [default to undefined]
**adult** | **boolean** | Параметр включает для товара пометку 18+. Устанавливайте ее только для товаров, которые относятся к удовлетворению сексуальных потребностей.  | [optional] [default to undefined]
**age** | [**AgeDTO**](AgeDTO.md) |  | [optional] [default to undefined]
**params** | [**Array&lt;OfferParamDTO&gt;**](OfferParamDTO.md) | {% note warning \&quot;При передаче характеристик используйте &#x60;parameterValues&#x60;.\&quot; %}     {% endnote %}  Характеристики, которые есть только у товаров конкретной категории — например, диаметр колес велосипеда или материал подошвы обуви.  | [optional] [default to undefined]
**parameterValues** | [**Array&lt;ParameterValueDTO&gt;**](ParameterValueDTO.md) | Список характеристик с их значениями.  {% note warning \&quot;Всегда передавайте вместе с &#x60;marketCategoryId&#x60;\&quot; %}  Если не передать &#x60;marketCategoryId&#x60; при изменении характеристик, они обновятся, но в ответе придет предупреждение (параметр &#x60;warnings&#x60;).  Если не передать их оба, будет использована информация из устаревших параметров &#x60;params&#x60; и &#x60;category&#x60;, а &#x60;marketCategoryId&#x60; будет определен автоматически.  {% endnote %}  При **изменении** характеристик передавайте только те, значение которых нужно обновить. Если в &#x60;marketCategoryId&#x60; вы меняете категорию, значения общих характеристик для старой и новой категории сохранятся, передавать их не нужно.  Чтобы **удалить** значение заданной характеристики, передайте ее &#x60;parameterId&#x60; с пустым &#x60;value&#x60;.  | [optional] [default to undefined]
**basicPrice** | [**PriceWithDiscountDTO**](PriceWithDiscountDTO.md) |  | [optional] [default to undefined]
**purchasePrice** | [**BasePriceDTO**](BasePriceDTO.md) |  | [optional] [default to undefined]
**additionalExpenses** | [**BasePriceDTO**](BasePriceDTO.md) |  | [optional] [default to undefined]
**firstVideoAsCover** | **boolean** | Использовать первое видео в карточке как видеообложку.  Передайте &#x60;true&#x60;, чтобы первое видео использовалось как видеообложка, или &#x60;false&#x60;, чтобы видеообложка не отображалась в карточке товара.  | [optional] [default to undefined]
**deleteParameters** | [**Set&lt;DeleteOfferParameterType&gt;**](DeleteOfferParameterType.md) | Параметры, которые вы ранее передали в &#x60;UpdateOfferDTO&#x60;, а теперь хотите удалить.  Если передать &#x60;adult&#x60;, &#x60;downloadable&#x60; и &#x60;firstVideoAsCover&#x60;, они не удалятся — их значение изменится на &#x60;false&#x60;.  Можно передать сразу несколько значений.  Не используйте вместе с соответствующим параметром в &#x60;UpdateOfferDTO&#x60;. Это приведет к ошибке &#x60;400&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOfferDTO } from './api';

const instance: UpdateOfferDTO = {
    offerId,
    name,
    marketCategoryId,
    category,
    pictures,
    videos,
    manuals,
    vendor,
    barcodes,
    description,
    manufacturerCountries,
    weightDimensions,
    vendorCode,
    tags,
    shelfLife,
    lifeTime,
    guaranteePeriod,
    customsCommodityCode,
    commodityCodes,
    certificates,
    boxCount,
    condition,
    type,
    downloadable,
    adult,
    age,
    params,
    parameterValues,
    basicPrice,
    purchasePrice,
    additionalExpenses,
    firstVideoAsCover,
    deleteParameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
