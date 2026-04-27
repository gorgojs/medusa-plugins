<p align="center">
  <a href="https://docs.gorgojs.ru/medusa-plugins/t-kassa">
    <img alt="Medusa-T-Kassa logo" src="https://raw.githubusercontent.com/gorgojs/medusa-plugins/refs/heads/main/assets/tkassa-medusa-logo.png" width="270">
  </a>
</p>

<h1 align="center">
Платежи Т-Касса от Т-Банка для Medusa
</h1>

<p align="center">
  <a href="https://docs.gorgojs.ru/medusa-plugins/t-kassa">Документация</a>
  <br/>
  Плагин Medusa для приёма платежей через Т-Касса от Т-Банка. Готов к использованию в продакшене.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-tkassa/README.md">Read README in English ↗</a>
</p>

<br>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Протестировано_с_Medusa-v2.14.1-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_tkassa">
    <img src="https://img.shields.io/badge/Telegram-Чат_поддержки_Medusa.js⊷T--Kassa-0088cc?logo=telegram&style=social" alt="Чат Medusa.js⊷T-Kassa в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Чат_dev--сообщества_Medusa.js-0088cc?logo=telegram&style=social" alt="Чат сообщества разработчиков Medusa.js в Telegram" />
  </a>
</p>

## Plugin Features

- **Полная интеграция с Т-Касса**  
  Подключение к платёжной системе Т-Касса для надёжной обработки платежей.
- **Формирование чеков**  
  Онлайн-чеки в соответствии с 54-ФЗ (ФФД 1.05 и 1.2).
- **Одно- и двухстадийная оплата**  
  Автосписание или авторизация с холдированием.
- **Возвраты и отмены**  
  Полный возврат и отмена заказов.
- **Вебхук-уведомления**  
  Статусы платежей в реальном времени с проверкой подписи.
- **Подробное логирование**  
  Логи запросов и ответов для отладки и поддержки в режиме разработки.
- **Пример витрины магазина**  
  Готовый [пример витрины на Next.js](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa/medusa-storefront) для использования как референс.

## Что такое Т-Касса?

Т-Касса — сервис интернет-эквайринга от Т-Банка (ранее Тинькофф Банк), одного из крупнейших цифровых банков России. Позволяет интернет-магазинам принимать оплату картами, через CБП, T-Pay, SberPay, Alfa Pay, Mir Pay и другими способами. Подробнее на <a href="https://www.tbank.ru/business/online-payments/internet-acquiring/" target="_blank">сайте Т-Банка</a>.

## 💬  Поддержка и сообщество

Есть вопросы по плагину или идеи? Пишите в чат поддержки в Telegram — [@medusajs_tkassa](https://t.me/medusajs_tkassa)

Общайтесь с другими разработчиками Medusa в Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

## Требования

- Medusa v2.7.0 или выше  
- Node.js v20 или выше  
- Аккаунт Т-Бизнес с подключённым интернет-эквайрингом Т-Касса – [зарегистрируйтесь или войдите](https://www.tbank.ru/kassa/?utm_source=partners_sme&utm_medium=prt.utl&utm_campaign=business.int_acquiring.7-3S975SBSY&partnerId=7-3S975SBSY&agentId=5-B6HGU9OD&agentSsoId=1316b7dd-3a90-4167-9d35-37910431a19c)

## Установка

```bash
yarn add @gorgo/medusa-payment-tkassa
# или
npm install @gorgo/medusa-payment-tkassa
```

## Документация

Полное руководство по установке, настройке и использованию плагина доступно на [сайте документации Gorgo](https://docs.gorgojs.ru/medusa-plugins/t-kassa).

## Лицензия

Распространяется на условиях [лицензии MIT](LICENSE).
