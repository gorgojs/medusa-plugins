# `@gorgo/medusa-payment-tkassa` example

Examples for the [@gorgo/medusa-payment-tkassa](https://www.npmjs.com/package/@gorgo/medusa-payment-tkassa) plugin.

## Prerequisites

- All the [common prerequisites](../README.md#prerequisites).
- A T-Kassa account - [sign in or create one](https://www.tbank.ru/kassa/?utm_source=partners_sme&utm_medium=prt.utl&utm_campaign=business.int_acquiring.7-3S975SBSY&partnerId=7-3S975SBSY&agentId=5-B6HGU9OD&agentSsoId=1316b7dd-3a90-4167-9d35-37910431a19c), a shop identifier `TerminalKey` and a secret `Password`.

## Configuration

Set up environment variables for [`medusa`](./medusa):

```
cd medusa
cp .env.template .env
# and configure your own `TKASSA_TERMINAL_KEY` and `TKASSA_PASSWORD` inside .env
```

## Installation & Development

Follow the [common instructions](../README.md#installation-development).
