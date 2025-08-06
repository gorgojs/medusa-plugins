import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import OneCSettingsService from "../../../../modules/1c/service";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
	const oneCService: OneCSettingsService = req.scope.resolve("oneC");
	const settings = await oneCService.getSettings();
	res.json(settings);
}

export const PUT = async (req: MedusaRequest, res: MedusaResponse) => {
	const oneCService: OneCSettingsService = req.scope.resolve("oneC");
	await oneCService.updateSettings(req.body);
	res.json();
};
