import { Migration } from '@mikro-orm/migrations';

export class Migration20251110034415 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "yandex_market_export" ("id" text not null, "status" text not null, "items" jsonb null, "raw_request" jsonb null, "raw_response" jsonb null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "yandex_market_export_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_yandex_market_export_status" ON "yandex_market_export" (status) WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_yandex_market_export_deleted_at" ON "yandex_market_export" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "yandex_market_export" cascade;`);
  }

}
