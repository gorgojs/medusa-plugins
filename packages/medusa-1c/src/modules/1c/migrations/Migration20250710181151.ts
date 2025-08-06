import { Migration } from '@mikro-orm/migrations';

export class Migration20250710181151 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "one_csettings" ("id" text not null, "login" text null, "password" text null, "interval" integer null, "chunkSize" integer null, "useZip" boolean not null default false, "attributes" jsonb null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "one_csettings_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_one_csettings_deleted_at" ON "one_csettings" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "one_csettings" cascade;`);
  }

}
