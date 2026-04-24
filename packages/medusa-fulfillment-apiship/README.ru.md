<p align="center">
  <a href="https://docs.gorgojs.ru/medusa-plugins/apiship">
    <img alt="Medusa-ApiShip logo" src="https://raw.githubusercontent.com/gorgojs/medusa-plugins/refs/heads/main/assets/apiship-medusa-logo.png" width="270">
  </a>
</p>

<h1 align="center">
Фулфилмент ApiShip для Medusa
</h1>

<p align="center">
  <a href="https://docs.gorgojs.com/medusa-plugins/apiship">Документация</a>
  <br/>
  Плагин Medusa для фулфилмента через агрегатор служб доставки ApiShip, предоставляющий вашему магазину доступ к множеству перевозчиков с минимальной настройкой. Готов к использованию в продакшене.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-fulfillment-apiship/README.md">Read README in English ↗</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.13.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Протестировано_с_Medusa-v2.14.0-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_apiship">
    <img src="https://img.shields.io/badge/Telegram-Чат_поддержки_Medusa.js⊷ApiShip-0088cc?logo=telegram&style=social" alt="Чат Medusa.js⊷ApiShip в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Чат_dev--сообщества_Medusa.js-0088cc?logo=telegram&style=social" alt="Чат сообщества разработчиков Medusa.js в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://static.gorgojs.com/videos/apiship/apiship-1776095804.mp4">
    <img src="https://static.gorgojs.com/videos/apiship/apiship-play-button-1776166893.webp" alt="Смотреть демо-видео плагина ApiShip" width="100%" style="border-radius: 8px; max-width: 720px;">
  </a>
</p>

## Возможности плагина

- **Расчёт стоимости доставки**  
  Тарифы от множества перевозчиков в реальном времени при оформлении заказа.
- **Доставка в пункты выдачи**  
  Выбор ПВЗ из списка или на интерактивной карте.
- **Создание заказа в один клик**  
  Создание отправки в ApiShip прямо из Medusa Admin без ручного ввода данных.
- **Отгрузочные документы**  
  Этикетки, накладные и другие документы напрямую из ApiShip.
- **Тестовый режим**  
  Симуляция калькуляций и заказов без влияния на реальные данные.
- **Подробное логирование**  
  Логи запросов и ответов для отладки и поддержки в режиме разработки.
- **Пример витрины магазина**  
  Готовый [пример витрины на Next.js](https://github.com/gorgojs/medusa-plugins/tree/main/examples/fulfillment-apiship/medusa-storefront) для использования как референс.

## Что такое ApiShip?

<a href="https://apiship.ru/" target="_blank">ApiShip</a> — российская платформа-агрегатор служб доставки, которая подключает интернет-магазины к 40+ курьерским службам через единый API. Вместо отдельной интеграции с каждым перевозчиком, ApiShip предоставляет унифицированный интерфейс для расчёта тарифов, создания заказов, отслеживания и формирования документов по всем подключённым провайдерам.

Среди популярных служб доставки, доступных через ApiShip: СДЭК, Яндекс Доставка, Почта России, Деловые Линии, ПЭК, Boxberry, СберЛогистика, DPD, и многие другие. Полный список можно посмотреть на <a href="https://apiship.ru/couriers" target="_blank">странице служб доставки</a> на сайте ApiShip.

## 💬  Поддержка и сообщество

Есть вопросы по плагину или идеи? Пишите в чат поддержки в Telegram — [@medusajs_apiship](https://t.me/medusajs_apiship)

Общайтесь с другими разработчиками Medusa в Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

## Требования

- Medusa v2.13.0 или новее
- Node.js v20 или новее
- Аккаунт ApiShip — [зарегистрируйтесь или войдите](https://a.apiship.ru)

## Установка

```bash
yarn add @gorgo/medusa-fulfillment-apiship
# или
npm install @gorgo/medusa-fulfillment-apiship
```

## Документация

Полное руководство по установке, настройке и использованию плагина доступно на [сайте документации Gorgo](https://docs.gorgojs.ru/medusa-plugins/apiship).

## Лицензия

Распространяется на условиях [лицензии MIT](LICENSE).
