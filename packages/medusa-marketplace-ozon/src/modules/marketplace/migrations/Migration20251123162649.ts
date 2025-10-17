import { Migration } from '@mikro-orm/migrations';

export class Migration20251123162649 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "marketplace" ("id" text not null, "provider_id" text not null, "credentials" jsonb not null default '{}', "settings" jsonb not null default '{}', "is_active" boolean not null default true, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "marketplace_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_marketplace_deleted_at" ON "marketplace" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "marketplace_event" ("id" text not null, "marketplace_id" text not null, "correlation_id" text null, "direction" text check ("direction" in ('MEDUSA_TO_MARKETPLACE', 'MARKETPLACE_TO_MEDUSA')) not null, "entity_type" text check ("entity_type" in ('PRODUCT', 'PRODUCT_MEDIA', 'PRODUCT_PRICE', 'PRODUCT_STOCK', 'ORDER')) not null, "action" text check ("action" in ('CREATE', 'UPDATE', 'DELETE')) not null, "started_at" timestamptz null, "finished_at" timestamptz null, "request_data" jsonb not null default '{}', "response_data" jsonb not null default '{}', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "marketplace_event_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_marketplace_event_marketplace_id" ON "marketplace_event" ("marketplace_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_marketplace_event_deleted_at" ON "marketplace_event" ("deleted_at") WHERE deleted_at IS NULL;`);

    this.addSql(`alter table if exists "marketplace_event" add constraint "marketplace_event_marketplace_id_foreign" foreign key ("marketplace_id") references "marketplace" ("id") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_event" drop constraint if exists "marketplace_event_marketplace_id_foreign";`);

    this.addSql(`drop table if exists "marketplace" cascade;`);

    this.addSql(`drop table if exists "marketplace_event" cascade;`);
  }

}
