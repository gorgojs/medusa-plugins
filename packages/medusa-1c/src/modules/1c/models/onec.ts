import { model } from "@medusajs/utils"

export const Onec = model.define("onec", {
	id: model.id().primaryKey(),
	interval: model.number().nullable(),
	chunkSize: model.number().nullable(),
	useZip: model.boolean().default(false),
	attributes: model.json().nullable(),
})
