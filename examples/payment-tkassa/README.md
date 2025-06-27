# `@gorgo/medusa-payment-tkassa` example

Examples for the [@gorgo/medusa-payment-tkassa](https://www.npmjs.com/package/@gorgo/medusa-payment-tkassa) plugin.

## Prerequisites

- All the [common prerequisites](../README.md#prerequisites).
- A [T-Kassa](https://www.tbank.ru/kassa/) account, a shop identifier `TerminalKey` and a secret `Password`.

## Configuration

Set up environment variables for [`medusa`](./medusa):

```
cd medusa
cp .env.template .env
# and configure your own `TKASSA_TERMINAL_KEY` and `TKASSA_PASSWORD` inside .env
```

## Installation & Development

Follow the [common instractions](../README.md#installation-development).
