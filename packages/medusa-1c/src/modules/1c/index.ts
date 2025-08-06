import OneCSettingsService from "./service";
import { Module } from "@medusajs/framework/utils";

export const ONE_C_MODULE = "oneC";

export default Module(ONE_C_MODULE, {
	service: OneCSettingsService,
});
