<p align="center">
  <a href="https://docs.gorgojs.ru/medusa-plugins/1c-enterprise">
    <img alt="Medusa-1C logo" src="https://raw.githubusercontent.com/gorgojs/medusa-plugins/refs/heads/main/assets/1c-medusa-logo.png" width="270">
  </a>
</p>

<h1 align="center">
  Интеграция 1С:Предприятие с Medusa
</h1>

<p align="center">
  Синхронизация товаров и заказов между Medusa и 1С:Предприятие.
  <br/>
  <a href="https://docs.gorgojs.com/medusa-plugins/1c-enterprise">Документация ↗</a>
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-1c/README.md">Read README in English ↗</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.8.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Протестировано_с_Medusa-v2.13.6-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_1c">
    <img src="https://img.shields.io/badge/Telegram-Чат_поддержки_Medusa.js⊷1C-0088cc?logo=telegram&style=social" alt="Чат Medusa.js⊷1C в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Чат_dev--сообщества_Medusa.js-0088cc?logo=telegram&style=social" alt="Чат сообщества разработчиков Medusa.js в Telegram" />
  </a>
</p>

## Статус

> 🚧 Интеграция в настоящее время находится в разработке, см. [Roadmap](#roadmap).

## 💬  Поддержка и сообщество

Есть вопросы по плагину или идеи? Пишите в чат поддержки в Telegram — [@medusajs_1c](https://t.me/medusajs_1c)

Общайтесь с другими разработчиками Medusa в Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

## Roadmap

- [x] Импорт товаров из 1C в Medusa (`import.xml`)
- [x] Импорт предложений из 1C в Medusa (`offers.xml`)
- [ ] Синхронизация остатков и цен между 1C и Medusa
- [ ] Импорт заказов из 1C в Medusa (`orders.xml`)
- [ ] Экспорт заказов из Medusa в 1C
- [ ] Расширение админки для статуса синхронизации и управления
- [ ] Расширение админки для журналирования и аудита
- [ ] Подробная документация

## Требования

- Medusa v2.8.0 или новее
- Node.js v20 или новее

## Установка

```bash
yarn add @gorgo/medusa-1c
# или
npm install @gorgo/medusa-1c
```

## Документация

Полное руководство по установке, настройке и использованию плагина доступно на [сайте документации Gorgo](https://docs.gorgojs.com/medusa-plugins/1c-enterprise).

## Лицензия

Распространяется на условиях [лицензии MIT](LICENSE).
