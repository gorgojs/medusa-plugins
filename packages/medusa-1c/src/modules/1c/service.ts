import { MedusaService } from "@medusajs/utils";
import { OneCSettings } from "./models/one-c-settings";

class OneCSettingsService extends MedusaService({
	OneCSettings,
}) {
	async updateSettings(data) {
		try {
			const settings = await super.retrieveOneCSettings("1");
			await super.updateOneCSettings({ ...settings, ...data });
		} catch (error) {
			await super.createOneCSettings({ id: "1", ...data });
		}
	}

	async getSettings() {
		const settings = await super.retrieveOneCSettings("1");
		if (!settings) {
			return {
				id: "1",
				login: null,
				password: null,
				interval: null,
				chunkSize: null,
				useZip: false,
				attributes: null,
			};
		}
		return settings;
	}
}

export default OneCSettingsService;
