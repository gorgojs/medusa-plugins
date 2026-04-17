import { MedusaService } from "@medusajs/framework/utils"
import { Onec } from "./models/onec"

class OnecService extends MedusaService({
	Onec,
}) {
	async updateSettings(data) {
		try {
			const settings = await super.retrieveOnec("1");
			await super.updateOnecs({ ...settings, ...data });
		} catch (error) {
			await super.createOnecs({ id: "1", ...data });
		}
	}

	async getSettings() {
		const settings = await super.retrieveOnec("1");
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

export default OnecService;
