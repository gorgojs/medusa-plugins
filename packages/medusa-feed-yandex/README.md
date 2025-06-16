<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
  
</p>

<h1 align="center">
Yandex Market YML Feed Generator for Medusa
</h1>

<p align="center">
A Medusa plugin that generates a product feed in <a href="https://yandex.com/support/direct/feeds/requirements-yml.html">YML (Yandex Market Language)</a> format.
</p>

<p align="center">
  <a href="https://t.me/medusajs_com">
    <img src="https://img.shields.io/badge/Telegram-Join_Medusa_Community_Chat-0088cc?logo=telegram&style=social" alt="Join on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.8.3-blue?logo=medusa" alt="Medusa" />
  </a>
</p>

## 💬 Support & Community on Telegram

Join the [Medusa Telegram community chat](https://t.me/medusajs_com) to discuss features, get support, and connect with developers building on Medusa.

## Prerequisites

- Medusa server v2.8.3 or later
- Node.js v20 or later

## Installation

```bash
yarn add @gorgo/medusa-feed-yandex
# or
npm install @gorgo/medusa-feed-yandex
```

## Configuration

Add the provider configuration in your `medusa-config.js` file of the Medusa admin application:

```ts
# ...
module.exports = defineConfig({
  # ...
  modules: [
    {
      resolve: "@gorgo/medusa-feed-yandex/modules/feed",
    },
    {
      resolve: "@medusajs/medusa/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/file-local",
            id: "local",
            options: {
              upload_dir: "static",
              backend_url: "http://localhost:9000/static"
            },
          },
        ],
      },
    },
  ],
  plugins: [
    {
      resolve: "@gorgo/medusa-feed-yandex",
      options: {}
    }
  ],
})
```

> The plugin is currently tested with Medusa’s local file module (`file-local`) and saves the generated XML feeds to the local static directory.

## Usage

Open the Medusa Admin dashboard and navigate to **Settings** -> **Feeds** section in the Extensions — this is where the plugin interface is available.

![Feeds list page](https://github.com/user-attachments/assets/7998358a-a0ed-4f46-8927-0db3189aea31)

The page displays all existing feeds with their key information.

Feed URLs follow this format, allowing direct access to the generated XML files (in YML format):

```
http://{YOUR_MEDUSA_DOMAIN}/feeds/{ID}/{FILE_NAME}.xml
```

Selecting a feed opens a detailed view where you can edit metadata, adjust export schedules, choose product categories, and access the feed URL. A **Launch now** button lets you manually trigger feed generation.

![Feed's page](https://github.com/user-attachments/assets/551f896a-8e42-44a7-9a37-0de2f436c994)

The feed shown in the screenshot above exports all product from all categories every 30 minutes to a file named `example1.xml`. It sets `Example shop name`, `Example company name`, `https://www.example.com/`, and `Medusa` as values for the corresponding XML properties. It is accessible via the link `http://localhost:9000/feeds/01JWTC5VDW8EAGHWRDQG2GKAQJ/example1.xml`, while the actual file is stored in gzip-compressed format at `http://localhost:9000/static/1748937061705-example1.xml.gz`.

Below is an example of a generated YML-file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="2025-06-03 16:31">
  <shop>
    <name>Example shop name</name>
    <company>Example company name</company>
    <url>https://www.example.com/</url>
    <platform>Medusa</platform>
    <categories>
      <category id="pcat_01JWBFYPTZNKZT0BRWECQF84J9" value="Shirts"/>
      <category id="pcat_01JWBFYPV0KQV6VY4HKW4W6JTN" value="Sweatshirts"/>
      <category id="pcat_01JWBFYPV16CG0MN8TF1EM4T4N" value="Pants"/>
      <category id="pcat_01JWBFYPV1CTZAK4JBKV0R2JZW" value="Merch"/>
    </categories>
    <offers>
      <offer id="prod_01JWBFYPVZ21W4XQRSPAVW3QBN">
        <name>Medusa T-Shirt</name>
        <categoryId>pcat_01JWBFYPTZNKZT0BRWECQF84J9</categoryId>
        <picture>https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png</picture>
        <description>
          <![CDATA[Reimagine the feeling of a classic T-shirt. With our cotton T-shirts, everyday essentials no longer have to be ordinary.]]>
        </description>
        <weight>400</weight>
      </offer>
      <offer id="prod_01JWBFYPVZFHDPM6RF1DFAX4RZ">
        <name>Medusa Sweatshirt</name>
        <categoryId>pcat_01JWBFYPV0KQV6VY4HKW4W6JTN</categoryId>
        <picture>https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png</picture>
        <description>
          <![CDATA[Reimagine the feeling of a classic sweatshirt. With our cotton sweatshirt, everyday essentials no longer have to be ordinary.]]>
        </description>
        <weight>400</weight>
      </offer>
      <offer id="prod_01JWBFYPVZJQH2KABER77PSEMG">
        <name>Medusa Sweatpants</name>
        <categoryId>pcat_01JWBFYPV16CG0MN8TF1EM4T4N</categoryId>
        <picture>https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png</picture>
        <description>
          <![CDATA[Reimagine the feeling of classic sweatpants. With our cotton sweatpants, everyday essentials no longer have to be ordinary.]]>
        </description>
        <weight>400</weight>
      </offer>
      <offer id="prod_01JWBFYPVZ2E5D5CSB0F53XX3W">
        <name>Medusa Shorts</name>
        <categoryId>pcat_01JWBFYPV1CTZAK4JBKV0R2JZW</categoryId>
        <picture>https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png</picture>
        <description>
          <![CDATA[Reimagine the feeling of classic shorts. With our cotton shorts, everyday essentials no longer have to be ordinary.]]>
        </description>
        <weight>400</weight>
      </offer>
    </offers>
  </shop>
</yml_catalog>
```

## Testing

You can run two types of tests for this plugin:

### Module Tests

These verify the internal logic, such as services and models.

```bash
yarn test:integration:modules
```

### Integration Tests

Integration tests include tests for API Routes and Workflows

```bash
yarn test:integration:http
```

Before running the tests, make sure your `.env.test` file includes the following variables: `DB_USERNAME`, `DB_PASSWORD`, `DB_HOST`, `DB_TEMP_NAME`.

## License

Licensed under the [MIT License](LICENSE).