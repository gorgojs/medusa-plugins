import OnecService from "./service"
import { Module } from "@medusajs/framework/utils"

export const ONE_C_MODULE = "onec";

export default Module(ONE_C_MODULE, {
	service: OnecService,
});
