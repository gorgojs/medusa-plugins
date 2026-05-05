import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260505092248 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "integration" ("id" text not null, "title" text not null default 'Untitled', "provider_id" text not null, "credentials" jsonb not null default '{}', "settings" jsonb not null default '{}', "is_enabled" boolean not null default true, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "integration_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_integration_deleted_at" ON "integration" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "integration_event" ("id" text not null, "integration_id" text not null, "correlation_id" text null, "direction" text check ("direction" in ('MEDUSA_TO_INTEGRATION', 'INTEGRATION_TO_MEDUSA')) not null, "entity_type" text check ("entity_type" in ('PRODUCT', 'PRODUCT_MEDIA', 'PRODUCT_PRICE', 'PRODUCT_STOCK', 'ORDER')) not null, "action" text check ("action" in ('CREATE', 'UPDATE', 'DELETE')) not null, "started_at" timestamptz null, "finished_at" timestamptz null, "request_data" jsonb not null default '{}', "response_data" jsonb not null default '{}', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "integration_event_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_integration_event_integration_id" ON "integration_event" ("integration_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_integration_event_deleted_at" ON "integration_event" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "integration_exchange_profile" ("id" text not null, "integration_id" text not null, "warehouse_id" text not null default '', "order_type" text not null default '', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "integration_exchange_profile_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_integration_exchange_profile_integration_id" ON "integration_exchange_profile" ("integration_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_integration_exchange_profile_deleted_at" ON "integration_exchange_profile" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "integration_order" ("id" text not null, "order_id" text not null, "integration_id" text not null, "status" text not null, "type" text not null, "data" jsonb not null default '{}', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "integration_order_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_integration_order_integration_id" ON "integration_order" ("integration_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_integration_order_deleted_at" ON "integration_order" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`alter table if exists "integration_event" add constraint "integration_event_integration_id_foreign" foreign key ("integration_id") references "integration" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table if exists "integration_exchange_profile" add constraint "integration_exchange_profile_integration_id_foreign" foreign key ("integration_id") references "integration" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table if exists "integration_order" add constraint "integration_order_integration_id_foreign" foreign key ("integration_id") references "integration" ("id") on update cascade on delete cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "integration_event" drop constraint if exists "integration_event_integration_id_foreign";`);

    this.addSql(`alter table if exists "integration_exchange_profile" drop constraint if exists "integration_exchange_profile_integration_id_foreign";`);

    this.addSql(`alter table if exists "integration_order" drop constraint if exists "integration_order_integration_id_foreign";`);

    this.addSql(`drop table if exists "integration" cascade;`);

    this.addSql(`drop table if exists "integration_event" cascade;`);

    this.addSql(`drop table if exists "integration_exchange_profile" cascade;`);

    this.addSql(`drop table if exists "integration_order" cascade;`);
  }

}
