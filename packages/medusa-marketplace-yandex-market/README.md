<h1 align="center">
Yandex Market integration for Medusa
</h1>

## Development

Docker is used for generating of a [Yandex Market OpenAPI client](https://github.com/yandex-market/yandex-market-partner-api/tree/main), so install it first. Then, to generate the client, run:

```bash
yarn
yarn openapi:pull # if you need to update the schema
yarn openapi:gen
```

It is also regenerated on `yarn dev`.
