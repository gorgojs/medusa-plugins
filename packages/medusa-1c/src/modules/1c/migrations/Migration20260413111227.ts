import { Migration } from '@mikro-orm/migrations';

export class Migration20260413111227 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "onec" ("id" text not null, "interval" integer null, "chunkSize" integer null, "useZip" boolean not null default false, "attributes" jsonb null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "onec_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_onec_deleted_at" ON "onec" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "onec" cascade;`);
  }

}
