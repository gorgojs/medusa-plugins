import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260331142659 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "marketplace_order" ("id" text not null, "order_id" text not null, "marketplace_id" text not null, "status" text not null, "type" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "marketplace_order_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_marketplace_order_marketplace_id" ON "marketplace_order" ("marketplace_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_marketplace_order_deleted_at" ON "marketplace_order" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`alter table if exists "marketplace_order" add constraint "marketplace_order_marketplace_id_foreign" foreign key ("marketplace_id") references "marketplace" ("id") on update cascade on delete cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "marketplace_order" cascade;`);
  }

}
