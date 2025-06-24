# `@gorgo/medusa-payment-tkassa` example

Handy examples for setting up a development environment for the [@gorgo/medusa-payment-tkassa](https://www.npmjs.com/package/@gorgo/medusa-payment-tkassa) plugin.

## Prerequisites

- Node.js v20+
- Yarn
- Docker & Docker Compose (optional, for spinning up PosgreSQL)
- A [T-Kassa](https://www.tbank.ru/kassa/) account, a shop identifier `TerminalKey` and a secret `Password`.

## Bootstrap development

1. Clone the repository:
   ```bash
   git clone https://github.com/gorgojs/medusa-gorgo
   ```

2. Install the `medusa-payment-tkassa` plugin in local:
   ```bash
   # Open a separate terminal window and run
   cd packages/medusa-payment-tkassa
   
   # Install
   yarn

   # Publish locally and develop by watching changes
   yarn dev

   # Keep the terminal window opened
   ```

3. Install PostgreSQL using Docker Compose:
   ```bash
   # Open a separate terminal window and run
   cd examples/payment-tkassa
   docker compose up -d
   ```
   It creates a database `medusa-payment-tkassa` with the credentials `medusa:supersecret`.

4. Install and run the Medusa Admin:
   ```bash
   # Open a separate terminal window and run
   cd examples/payment-tkassa/medusa
   
   # Install dependencies
   yarn

   # Install the local plugin dependency
   yarn dev

   # Set up environment variables
   cp .env.template .env
   # and configure your own `TKASSA_TERMINAL_KEY` and `TKASSA_PASSWORD` inside .env

   # Migrate the database
   npx medusa db:create # optional, must be already created in with Docker Compose
   yarn db:migrate

   # Create an admin user (optional)
   npx medusa user -e admin@medusajs.com -p supersecret

   # TODO: proper seeding Medusa

   # Run the Medusa Admin
   yarn dev

   # Keep the terminal window opened
   ```

5. Install and run the Medusa Storefront:
   ```bash
   # Open a separate terminal window and run
   cd examples/payment-tkassa/medusa-storefront

   # Set up environment variables
   cp .env.template .env
   # and configure your own `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` inside .env
   
   # Run the Medusa Storefront
   yarn dev

   # Eliminate terminal errors with settings in Medusa Admin

   # Keep the terminal window opened
   ```