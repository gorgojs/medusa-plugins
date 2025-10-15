import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260320094856 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_exchange_profile" drop constraint if exists "marketplace_exchange_profile_order_type_check";`);

    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "order_type" type text using ("order_type"::text);`);
    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "order_type" set default '';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "order_type" type text using ("order_type"::text);`);
    this.addSql(`alter table if exists "marketplace_exchange_profile" alter column "order_type" set default 'FBS';`);
    this.addSql(`alter table if exists "marketplace_exchange_profile" add constraint "marketplace_exchange_profile_order_type_check" check("order_type" in ('FBS', 'FBO', 'DBS'));`);
  }

}
