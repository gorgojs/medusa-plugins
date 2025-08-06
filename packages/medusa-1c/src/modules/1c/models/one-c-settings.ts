import { model } from "@medusajs/utils";

export const OneCSettings = model.define("oneCSettings", {
	id: model.id().primaryKey(),
	login: model.text().nullable(),
	password: model.text().nullable(),
	interval: model.number().nullable(),
	chunkSize: model.number().nullable(),
	useZip: model.boolean().default(false),
	attributes: model.json().nullable(),
});
