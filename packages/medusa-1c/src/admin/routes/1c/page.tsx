import { defineRouteConfig } from "@medusajs/admin-sdk";
import { Container } from "../../components/container";
import OnecIcon from "../../components/icons/onec";
import { Header } from "../../components/header";
import { PencilSquare } from "@medusajs/icons";
import { SectionRow } from "../../components/section-row";
import SyncSettingsForm from "../../components/forms/sync-settings-form";
import AttributesSettingsForm from "../../components/forms/attributes-settings-form";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "../../lib/config";
import { OneCSettings } from "../../types/one-c-settings";

const formatValue = (value: unknown) => {
	return typeof value === "string"
		? value.trim() || "-"
		: value != null
			? String(value)
			: "-";
};

const OnecAdminPage = () => {
	const [openSyncSettings, setOpenSyncSettings] = useState(false);
	const [openAttributesSettings, setOpenAttributesSettings] = useState(false);

	const { data: settings, isLoading } = useQuery<OneCSettings | undefined>({
		queryKey: ["1c-settings"],
		queryFn: () => sdk.client.fetch("/admin/1c/settings"),
	});

	return (
		<div className="flex flex-col gap-y-3">
			<SyncSettingsForm
				settings={settings}
				open={openSyncSettings}
				setOpen={setOpenSyncSettings}
			/>
			<AttributesSettingsForm
				settings={settings}
				open={openAttributesSettings}
				setOpen={setOpenAttributesSettings}
			/>
			<Container>
				<Header
					title={"1C Sync settings"}
					actions={[
						{
							type: "action-menu",
							props: {
								groups: [
									{
										actions: [
											{
												label: "Edit",
												onClick: () =>
													setOpenSyncSettings(true),
												icon: <PencilSquare />,
											},
										],
									},
								],
							},
						},
					]}
				/>
				<SectionRow
					title="Login"
					value={formatValue(settings?.login)}
				/>
				<SectionRow
					title="Password"
					value={settings?.password ? "***" : "-"}
				/>
				<SectionRow
					title="Step interval in seconds (0 - load in a single step)"
					value={formatValue(settings?.interval)}
				/>
				<SectionRow
					title="Size of each file chunk to load at once (in bytes)"
					value={formatValue(settings?.chunkSize)}
				/>
				<SectionRow
					title="Use zip compression if available"
					value={settings?.useZip ? "Yes" : "No"}
				/>
			</Container>
			<Container>
				<Header
					title={"Attributes ID's"}
					subtitle={
						"Set ID's for respective attributes from your 1C system for proper import"
					}
					actions={[
						{
							type: "action-menu",
							props: {
								groups: [
									{
										actions: [
											{
												label: "Edit",
												onClick: () => {
													setOpenAttributesSettings(
														true,
													);
												},
												icon: <PencilSquare />,
											},
										],
									},
								],
							},
						},
					]}
				/>
				<SectionRow
					title="Height"
					value={formatValue(settings?.attributes?.height)}
				/>
				<SectionRow
					title="Width"
					value={formatValue(settings?.attributes?.width)}
				/>
				<SectionRow
					title="Length"
					value={formatValue(settings?.attributes?.length)}
				/>
				<SectionRow
					title="Weight"
					value={formatValue(settings?.attributes?.weight)}
				/>
				<SectionRow
					title="MID code"
					value={formatValue(settings?.attributes?.mid_code)}
				/>
				<SectionRow
					title="HS code"
					value={formatValue(settings?.attributes?.hs_code)}
				/>
				<SectionRow
					title="Country of origin"
					value={formatValue(settings?.attributes?.origin_country)}
				/>
			</Container>
		</div>
	);
};

export const config = defineRouteConfig({
	label: "1C",
	icon: OnecIcon,
});

export default OnecAdminPage;
