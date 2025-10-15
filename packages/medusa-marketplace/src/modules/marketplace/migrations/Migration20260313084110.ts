import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260313084110 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "marketplace_exchange_profile" ("id" text not null, "marketplace_id" text not null, "warehouse_id" text not null, "order_type" text check ("order_type" in ('FBS', 'FBO', 'DBS')) not null default 'FBS', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "marketplace_exchange_profile_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_marketplace_exchange_profile_marketplace_id" ON "marketplace_exchange_profile" ("marketplace_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_marketplace_exchange_profile_deleted_at" ON "marketplace_exchange_profile" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`alter table if exists "marketplace_exchange_profile" add constraint "marketplace_exchange_profile_marketplace_id_foreign" foreign key ("marketplace_id") references "marketplace" ("id") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "marketplace_exchange_profile" cascade;`);
  }

}
