<p align="center">
  <a href="https://docs.gorgojs.ru/medusa-plugins/robokassa">
    <img alt="Medusa-Robokassa logo" src="https://raw.githubusercontent.com/gorgojs/medusa-plugins/refs/heads/main/assets/robokassa-medusa-logo.png" width="270">
  </a>
</p>

<h1 align="center">
Платежи Robokassa для Medusa
</h1>

<p align="center">
  <a href="https://docs.gorgojs.ru/medusa-plugins/robokassa">Документация</a>
  <br/>
  Плагин Medusa для приёма платежей через Robokassa. Готов к использованию в продакшене.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-robokassa/README.md">Read README in English →</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Протестировано_с_Medusa-v2.14.1-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_robokassa">
    <img src="https://img.shields.io/badge/Telegram-Чат_поддержки_Medusa.js⊷Robokassa-0088cc?logo=telegram&style=social" alt="Чат Medusa.js⊷Robokassa в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Чат_dev--сообщества_Medusa.js-0088cc?logo=telegram&style=social" alt="Чат сообщества разработчиков Medusa.js в Telegram" />
  </a>
</p>

## Возможности плагина

- **Полная интеграция с Robokassa**  
  Подключение к платёжной системе Robokassa для надёжной обработки платежей.
- **Формирование чеков**  
  Онлайн-чеки в соответствии с 54-ФЗ.
- **Одно- и двухстадийная оплата**  
  Автосписание или авторизация с холдированием.
- **Возвраты и отмены**  
  Возврат средств и отмена заказов.
- **Вебхук-уведомления**  
  Статусы платежей в реальном времени с проверкой подписи.
- **Тестовый режим**  
  Имитация оплаты без реальных списаний.
- **Подробное логирование**  
  Логи запросов и ответов для отладки и поддержки в режиме разработки.
- **Пример витрины магазина**  
  Готовый [пример витрины на Next.js](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-robokassa/medusa-storefront) для использования как референс.

## Что такое Robokassa?

<a href="https://robokassa.com" target="_blank">Robokassa</a> — российский платёжный агрегатор, поддерживающий банковские карты, электронные кошельки, мобильные платежи, СБП и другие способы оплаты. Широко используется малым и средним бизнесом в России благодаря простой интеграции и широкому охвату платёжных методов.

## 💬  Поддержка и сообщество

Есть вопросы по плагину или идеи? Пишите в чат поддержки в Telegram — [@medusajs_robokassa](https://t.me/medusajs_robokassa)

Общайтесь с другими разработчиками Medusa в Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

## Требования

- Medusa v2.7.0 или новее  
- Node.js v20 или новее  
- Аккаунт Robokassa — [зарегистрируйтесь или войдите](https://login.robokassa.ru/reg?promoCode=gorgo)

## Установка

```bash
yarn add @gorgo/medusa-payment-robokassa
# или
npm install @gorgo/medusa-payment-robokassa
```

## Документация

Полное руководство по установке, настройке и использованию плагина доступно на [сайте документации Gorgo](https://docs.gorgojs.ru/medusa-plugins/robokassa).

## Лицензия

Распространяется на условиях [лицензии MIT](LICENSE).
