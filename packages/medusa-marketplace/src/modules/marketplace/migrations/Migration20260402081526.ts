import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260402081526 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_order" add column if not exists "data" jsonb not null default '{}';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_order" drop column if exists "data";`);
  }

}
