<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c">
      <img alt="Medusa-T-Kassa logo" src="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c" height="120">
    </picture>
  </a>
</p>

<h1 align="center">
Платежи T-Kassa для Medusa
</h1>

<p align="center">
  Плагин Medusa для приёма платежей через T-Kassa.
  <br/>
  <a href="https://docs.gorgojs.ru/medusa-plugins/t-kassa">Документация ↗</a>
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-tkassa/README.md">Read README in English ↗</a>
</p>

<br>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Протестировано_с_Medusa-v2.12.5-green?logo=checkmarx" alt="Medusa" />
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

## Возможности

- 🔗  **Бесшовная интеграция** с платёжной системой YooKassa
- 🧾  **Формирование онлайн-чеков** в соответствии с 54-ФЗ
- 1️⃣  **Одностадийные** (автосписание) и  **2️⃣  двухстадийные** (авторизация/холдирование) сценарии оплаты
- 🔄  **Возвраты и отмена заказов**
- 🔔  **Вебхук-уведомления** о статусах платежей в реальном времени
- 🛡  **Проверка вебхуков** для обеспечения безопасности
- 🔍  **Подробное логирование** для отладки

## 💬  Чат поддержки плагина T-Kassa

Есть вопросы или идеи по новым функциям плагина?   
Присоединяйтесь к чату в Telegram – [@medusajs_tkassa](https://t.me/medusajs_tkassa)

## 👥  Чат сообщества Medusa.js

Общайтесь в Telegram с другими разработчиками Medusa – [@medusajs_chat](https://t.me/medusajs_chat)

## Требования

- Medusa v2.7.0 или выше  
- Node.js v20 или выше  
- Аккаунт T-Business с подключённым интернет-эквайрингом T-Kassa – [зарегистрируйтесь или войдите](https://www.tbank.ru/kassa/?utm_source=partners_sme&utm_medium=prt.utl&utm_campaign=business.int_acquiring.7-3S975SBSY&partnerId=7-3S975SBSY&agentId=5-B6HGU9OD&agentSsoId=1316b7dd-3a90-4167-9d35-37910431a19c)

## Установка

```bash
yarn add @gorgo/medusa-payment-tkassa
# или
npm install @gorgo/medusa-payment-tkassa
```

## 📘  Документация

Полное руководство по установке, настройке и использованию плагина доступно на [сайте документации Gorgo](https://docs.gorgojs.ru/medusa-plugins/t-kassa).

## Лицензия

Распространяется на условиях [лицензии MIT](LICENSE).
