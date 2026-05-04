import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260319133530 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_event" drop constraint if exists "marketplace_event_marketplace_id_foreign";`);

    this.addSql(`alter table if exists "marketplace_exchange_profile" drop constraint if exists "marketplace_exchange_profile_marketplace_id_foreign";`);

    this.addSql(`alter table if exists "marketplace_event" add constraint "marketplace_event_marketplace_id_foreign" foreign key ("marketplace_id") references "marketplace" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table if exists "marketplace_exchange_profile" add constraint "marketplace_exchange_profile_marketplace_id_foreign" foreign key ("marketplace_id") references "marketplace" ("id") on update cascade on delete cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "marketplace_event" drop constraint if exists "marketplace_event_marketplace_id_foreign";`);

    this.addSql(`alter table if exists "marketplace_exchange_profile" drop constraint if exists "marketplace_exchange_profile_marketplace_id_foreign";`);

    this.addSql(`alter table if exists "marketplace_event" add constraint "marketplace_event_marketplace_id_foreign" foreign key ("marketplace_id") references "marketplace" ("id") on update cascade;`);

    this.addSql(`alter table if exists "marketplace_exchange_profile" add constraint "marketplace_exchange_profile_marketplace_id_foreign" foreign key ("marketplace_id") references "marketplace" ("id") on update cascade;`);
  }

}
