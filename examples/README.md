
# Examples for `@medurajs/medusa-feed-yandex`

Handy examples for setting up a development environment for the [@medurajs/medusa-feed-yandex](https://www.npmjs.com/package/@medurajs/medusa-feed-yandex) plugin.

## Prerequisites

- Node.js v20+
- Yarn
- Docker & Docker Compose (optional, for spinning up PosgreSQL)

## Bootstrap development

1. Clone the repository:
   ```bash
   git clone https://github.com/medurajs/medusa-feed.git
   ```

2. Install the `@medurajs/medusa-feed-yandex` plugin in local:
   ```bash
   # Open a separate terminal window and run
   cd plugin
   
   # Install
   yarn

   # Publish locally and develop by watching changes
   yarn dev

   # Keep the terminal window opened
   ```

3. Install PostgreSQL using Docker Compose:
   ```bash
   # Open a separate terminal window and run
   cd examples
   docker compose up -d
   ```
   It creates a database `medusa-feed-yandex` with the credentials `medusa:supersecret`.

4. Install and run the Medusa Admin:
   ```bash
   # Open a separate terminal window and run
   cd examples/feed-yandex/medusa
   
   # Install dependencies
   yarn

   # Install the local plugin dependency
   npx medusa plugin:add medusa-payment-yookassa
   yarn

   # Migrate the database
   npx medusa db:create # optional, must be already created in with Docker Compose
   npx medusa db:migrate

   # Create an admin user (optional)
   npx medusa user -e admin@medusajs.com -p supersecret

   # TODO: proper seeding Medusa

   # Run the Medusa Admin
   yarn dev

   # Keep the terminal window opened
   ```