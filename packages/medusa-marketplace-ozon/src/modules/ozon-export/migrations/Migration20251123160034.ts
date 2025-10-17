import { Migration } from '@mikro-orm/migrations';

export class Migration20251123160034 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "ozon_export" drop constraint if exists "ozon_export_task_id_unique";`);
    this.addSql(`create table if not exists "ozon_export" ("id" text not null, "task_id" text not null, "ozon_task_status" text null, "total" integer null, "items" jsonb null, "error_message" text null, "raw_result" jsonb null, "last_checked_at" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "ozon_export_pkey" primary key ("id"));`);
    this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_ozon_export_task_id_unique" ON "ozon_export" ("task_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_ozon_export_task_id" ON "ozon_export" ("task_id") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_ozon_export_deleted_at" ON "ozon_export" ("deleted_at") WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "ozon_export" cascade;`);
  }

}
