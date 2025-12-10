# SuggestedOfferDTO

Информация о товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]
**name** | **string** | Составляйте название по схеме: тип + бренд или производитель + модель + особенности, если есть (например, цвет, размер или вес) и количество в упаковке.  Не включайте в название условия продажи (например, «скидка», «бесплатная доставка» и т. д.), эмоциональные характеристики («хит», «супер» и т. д.). Не пишите слова большими буквами — кроме устоявшихся названий брендов и моделей.  Оптимальная длина — 50–60 символов.  [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/title.html)  | [optional] [default to undefined]
**category** | **string** | {% note warning \&quot;Вместо него используйте &#x60;marketCategoryId&#x60;.\&quot; %}     {% endnote %}  Категория товара в вашем магазине.  | [optional] [default to undefined]
**vendor** | **string** | Название бренда или производителя. Должно быть записано так, как его пишет сам бренд. | [optional] [default to undefined]
**barcodes** | **Set&lt;string&gt;** | Штрихкод.  Указывайте в виде последовательности цифр. Подойдут коды :no-translate[EAN-13, EAN-8, UPC-A, UPC-E] или :no-translate[Code 128]. Для книг — :no-translate[ISBN].  Для товаров [определенных категорий и торговых марок](https://yastatic.net/s3/doc-binary/src/support/market/ru/yandex-market-list-for-gtin.xlsx) штрихкод должен быть действительным кодом :no-translate[GTIN]. Обратите внимание: внутренние штрихкоды, начинающиеся на 2 или 02, и коды формата :no-translate[Code 128] не являются :no-translate[GTIN].  [Что такое :no-translate[GTIN]](*gtin)  | [optional] [default to undefined]
**description** | **string** | Подробное описание товара: например, его преимущества и особенности.  Не давайте в описании инструкций по установке и сборке. Не используйте слова «скидка», «распродажа», «дешевый», «подарок» (кроме подарочных категорий), «бесплатно», «акция», «специальная цена», «новинка», «new», «аналог», «заказ», «хит». Не указывайте никакой контактной информации и не давайте ссылок.  Для форматирования текста можно использовать теги HTML:  * \\&lt;h&gt;, \\&lt;h1&gt;, \\&lt;h2&gt; и так далее — для заголовков; * \\&lt;br&gt; и \\&lt;p&gt; — для переноса строки; * \\&lt;ol&gt; — для нумерованного списка; * \\&lt;ul&gt; — для маркированного списка; * \\&lt;li&gt; — для создания элементов списка (должен находиться внутри \\&lt;ol&gt; или \\&lt;ul&gt;); * \\&lt;div&gt; — поддерживается, но не влияет на отображение текста.  Оптимальная длина — 400–600 символов.  [Рекомендации и правила](https://yandex.ru/support/marketplace/assortment/fields/description.html)  | [optional] [default to undefined]
**vendorCode** | **string** | Артикул товара от производителя. | [optional] [default to undefined]
**basicPrice** | [**BasePriceDTO**](BasePriceDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SuggestedOfferDTO } from './api';

const instance: SuggestedOfferDTO = {
    offerId,
    name,
    category,
    vendor,
    barcodes,
    description,
    vendorCode,
    basicPrice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
