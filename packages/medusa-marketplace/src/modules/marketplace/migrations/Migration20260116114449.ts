import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260116114449 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "marketplace" add column if not exists "title" text not null default 'Untitled';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "marketplace" drop column if exists "title";`);
  }

}
