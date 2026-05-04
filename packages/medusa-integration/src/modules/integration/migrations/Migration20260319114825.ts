import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260319114825 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "warehouse_id" type text using ("warehouse_id"::text);`);
    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "warehouse_id" set default '';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "warehouse_id" drop default;`);
    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "warehouse_id" type text using ("warehouse_id"::text);`);
  }

}
