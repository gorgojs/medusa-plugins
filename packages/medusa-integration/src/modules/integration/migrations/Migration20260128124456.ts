import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260128124456 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "marketplace" rename column "is_active" to "is_enabled";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "marketplace" rename column "is_enabled" to "is_active";`);
  }

}
