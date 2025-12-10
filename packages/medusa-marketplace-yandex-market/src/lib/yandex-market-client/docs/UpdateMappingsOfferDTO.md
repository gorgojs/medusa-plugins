# UpdateMappingsOfferDTO

Информация о товарах в каталоге.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Составляйте название по схеме: тип + бренд или производитель + модель + особенности, если есть (например, цвет, размер или вес) и количество в упаковке.  Не включайте в название условия продажи (например, «скидка», «бесплатная доставка» и т. д.), эмоциональные характеристики («хит», «супер» и т. д.). Не пишите слова большими буквами — кроме устоявшихся названий брендов и моделей.  Оптимальная длина — 50–60 символов.  [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/title.html)  | [optional] [default to undefined]
**shopSku** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]
**category** | **string** | {% note warning \&quot;Вместо него используйте &#x60;marketCategoryId&#x60;.\&quot; %}     {% endnote %}  Категория товара в вашем магазине.  | [optional] [default to undefined]
**vendor** | **string** | Название бренда или производителя. Должно быть записано так, как его пишет сам бренд. | [optional] [default to undefined]
**vendorCode** | **string** | Артикул товара от производителя. | [optional] [default to undefined]
**description** | **string** | Подробное описание товара: например, его преимущества и особенности.  Не давайте в описании инструкций по установке и сборке. Не используйте слова «скидка», «распродажа», «дешевый», «подарок» (кроме подарочных категорий), «бесплатно», «акция», «специальная цена», «новинка», «new», «аналог», «заказ», «хит». Не указывайте никакой контактной информации и не давайте ссылок.  Для форматирования текста можно использовать теги HTML:  * \\&lt;h&gt;, \\&lt;h1&gt;, \\&lt;h2&gt; и так далее — для заголовков; * \\&lt;br&gt; и \\&lt;p&gt; — для переноса строки; * \\&lt;ol&gt; — для нумерованного списка; * \\&lt;ul&gt; — для маркированного списка; * \\&lt;li&gt; — для создания элементов списка (должен находиться внутри \\&lt;ol&gt; или \\&lt;ul&gt;); * \\&lt;div&gt; — поддерживается, но не влияет на отображение текста.  Оптимальная длина — 400–600 символов.  [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/description.html)  | [optional] [default to undefined]
**id** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]
**feedId** | **number** | Идентификатор фида. | [optional] [default to undefined]
**barcodes** | **Set&lt;string&gt;** | Штрихкод.  Указывайте в виде последовательности цифр. Подойдут коды :no-translate[EAN-13, EAN-8, UPC-A, UPC-E] или :no-translate[Code 128]. Для книг — :no-translate[ISBN].  Для товаров [определенных категорий и торговых марок](https://yastatic.net/s3/doc-binary/src/support/market/ru/yandex-market-list-for-gtin.xlsx) штрихкод должен быть действительным кодом :no-translate[GTIN]. Обратите внимание: внутренние штрихкоды, начинающиеся на 2 или 02, и коды формата :no-translate[Code 128] не являются :no-translate[GTIN].  [Что такое :no-translate[GTIN]](*gtin)  | [optional] [default to undefined]
**urls** | **Set&lt;string&gt;** | URL фотографии товара или страницы с описанием на вашем сайте.  Переданные данные не будут отображаться на витрине, но они помогут специалистам Маркета найти карточку для вашего товара.  Должен содержать один вложенный параметр &#x60;url&#x60;.  | [optional] [default to undefined]
**pictures** | **Array&lt;string&gt;** | Ссылки (URL) изображений товара в хорошем качестве.  Можно указать до 30 ссылок. При этом изображение по первой ссылке будет основным. Оно используется в качестве изображения товара в поиске Маркета и на карточке товара. Другие изображения товара доступны в режиме просмотра увеличенных изображений.  | [optional] [default to undefined]
**manufacturer** | **string** | Изготовитель товара: компания, которая произвела товар, ее адрес и регистрационный номер (если есть).  Необязательный параметр.  | [optional] [default to undefined]
**manufacturerCountries** | **Set&lt;string&gt;** | Список стран, в которых произведен товар.  Обязательный параметр.  Должен содержать хотя бы одну, но не больше 5 стран.  | [optional] [default to undefined]
**minShipment** | **number** | Минимальное количество единиц товара, которое вы поставляете на склад.  Например, если вы поставляете детское питание партиями минимум по 10 коробок, а в каждой коробке по 6 баночек, укажите значение 60.  | [optional] [default to undefined]
**transportUnitSize** | **number** | Количество единиц товара в одной упаковке, которую вы поставляете на склад.  Например, если вы поставляете детское питание коробками по 6 баночек, укажите значение 6.  | [optional] [default to undefined]
**quantumOfSupply** | **number** | Добавочная партия: по сколько единиц товара можно добавлять к минимальному количеству &#x60;minShipment&#x60;.  Например, если вы поставляете детское питание партиями минимум по 10 коробок и хотите добавлять к минимальной партии по 2 коробки, а в каждой коробке по 6 баночек, укажите значение 12.  | [optional] [default to undefined]
**deliveryDurationDays** | **number** | Срок, за который продавец поставляет товары на склад, в днях. | [optional] [default to undefined]
**boxCount** | **number** | Сколько мест (если больше одного) занимает товар.  Параметр указывается, только если товар занимает больше одного места (например, кондиционер занимает два места: внешний и внутренний блоки в двух коробках). Если товар занимает одно место, не указывайте этот параметр.  | [optional] [default to undefined]
**customsCommodityCodes** | **Set&lt;string&gt;** | Список кодов товара в единой Товарной номенклатуре внешнеэкономической деятельности (ТН ВЭД).  Обязательный параметр, если товар подлежит особому учету (например, в системе «Меркурий» как продукция животного происхождения или в системе «Честный ЗНАК»).  Может содержать только один вложенный код ТН ВЭД.  | [optional] [default to undefined]
**weightDimensions** | [**OfferWeightDimensionsDTO**](OfferWeightDimensionsDTO.md) |  | [optional] [default to undefined]
**supplyScheduleDays** | [**Set&lt;DayOfWeekType&gt;**](DayOfWeekType.md) | Дни недели, в которые продавец поставляет товары на склад. | [optional] [default to undefined]
**shelfLifeDays** | **number** | {% note warning \&quot;Вместо него используйте &#x60;shelfLife&#x60;. Совместное использование обоих параметров приведет к ошибке.\&quot; %}     {% endnote %}  Срок годности: через сколько дней товар станет непригоден для использования.  | [optional] [default to undefined]
**lifeTimeDays** | **number** | {% note warning \&quot;Вместо него используйте &#x60;lifeTime&#x60;. Совместное использование обоих параметров приведет к ошибке.\&quot; %}     {% endnote %}  Срок службы: сколько дней товар будет исправно выполнять свою функцию, а изготовитель — нести ответственность за его существенные недостатки.  | [optional] [default to undefined]
**guaranteePeriodDays** | **number** | Гарантийный срок товара: сколько дней возможно обслуживание и ремонт товара или возврат денег, а изготовитель или продавец будет нести ответственность за недостатки товара.  | [optional] [default to undefined]
**processingState** | [**OfferProcessingStateDTO**](OfferProcessingStateDTO.md) |  | [optional] [default to undefined]
**availability** | [**OfferAvailabilityStatusType**](OfferAvailabilityStatusType.md) |  | [optional] [default to undefined]
**shelfLife** | [**TimePeriodDTO**](TimePeriodDTO.md) |  | [optional] [default to undefined]
**lifeTime** | [**TimePeriodDTO**](TimePeriodDTO.md) |  | [optional] [default to undefined]
**guaranteePeriod** | [**TimePeriodDTO**](TimePeriodDTO.md) |  | [optional] [default to undefined]
**certificate** | **string** | Номер документа на товар.  Перед указанием номера документ нужно загрузить в кабинете продавца на Маркете. [Инструкция](https://yandex.ru/support/marketplace/assortment/restrictions/certificates.html)  | [optional] [default to undefined]

## Example

```typescript
import { UpdateMappingsOfferDTO } from './api';

const instance: UpdateMappingsOfferDTO = {
    name,
    shopSku,
    category,
    vendor,
    vendorCode,
    description,
    id,
    feedId,
    barcodes,
    urls,
    pictures,
    manufacturer,
    manufacturerCountries,
    minShipment,
    transportUnitSize,
    quantumOfSupply,
    deliveryDurationDays,
    boxCount,
    customsCommodityCodes,
    weightDimensions,
    supplyScheduleDays,
    shelfLifeDays,
    lifeTimeDays,
    guaranteePeriodDays,
    processingState,
    availability,
    shelfLife,
    lifeTime,
    guaranteePeriod,
    certificate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
