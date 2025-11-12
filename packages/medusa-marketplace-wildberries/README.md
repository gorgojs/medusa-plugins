<h1 align="center">
  Wildberries integration for Medusa
</h1>

## Development

Docker is used for generating of a [Wildberries OpenAPI client](https://openapi-generator.tech/docs/installation/), so install it first. Then, to generate the client, run:

```bash
yarn
yarn openapi:pull # if you need to update the schema
yarn openapi:gen
```

It is also regenerated on `yarn dev`.
