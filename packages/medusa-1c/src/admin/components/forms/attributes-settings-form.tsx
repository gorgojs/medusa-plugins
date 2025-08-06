import { Button, Drawer, Heading, Input, Label, Select } from "@medusajs/ui";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useState } from "react";
import { OneCSettings } from "../../types/one-c-settings";
import { sdk } from "../../lib/config";
import { useQueryClient } from "@tanstack/react-query";

const schema = zod.object({
	height: zod.string().optional(),
	width: zod.string().optional(),
	length: zod.string().optional(),
	weight: zod.string().optional(),
	mid_code: zod.string().optional(),
	hs_code: zod.string().optional(),
	origin_country: zod.string().optional(),
});

const AttributesSettingsForm = ({
	settings,
	open: openPassed,
	setOpen: setOpenPassed,
}: {
	settings?: OneCSettings;
	open?: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [openDefault, setOpenDefault] = useState(false);
	const open = openPassed ?? openDefault;
	const setOpen = setOpenPassed ?? setOpenDefault;
	const queryClient = useQueryClient();

	const form = useForm<zod.infer<typeof schema>>({
		defaultValues: {
			height: "",
			width: "",
			length: "",
			weight: "",
			mid_code: "",
			hs_code: "",
			origin_country: "",
		},
		resolver: zodResolver(schema),
	});

	const handleSubmit = form.handleSubmit(async (data) => {
		try {
			sdk.client.fetch("/admin/1c/settings", {
				method: "PUT",
				body: {
					...settings,
					attributes: { ...settings?.attributes, ...data },
				},
			});
			setOpen(false);
			queryClient.invalidateQueries({ queryKey: [] });
		} catch {}
	});

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<Drawer.Content>
				<FormProvider {...form}>
					<form
						onSubmit={handleSubmit}
						className="flex h-full flex-col overflow-hidden"
					>
						<Drawer.Header>
							<div className="flex items-center justify-end gap-x-2">
								<Heading className="capitalize">
									Update settings
								</Heading>
							</div>
						</Drawer.Header>
						<Drawer.Body>
							<div className="flex flex-1 flex-col items-center overflow-y-auto">
								<div className="mx-auto flex w-full flex-col">
									<div className="flex flex-col gap-4">
										<Controller
											control={form.control}
											name="height"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Height
															</Label>
														</div>
														<Input
															{...field}
															placeholder="Attribute id"
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="width"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Width
															</Label>
														</div>
														<Input
															{...field}
															placeholder="Attribute id"
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="length"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Length
															</Label>
														</div>
														<Input
															{...field}
															placeholder="Attribute id"
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="weight"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Weight
															</Label>
														</div>
														<Input
															{...field}
															placeholder="Attribute id"
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="mid_code"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																MID code
															</Label>
														</div>
														<Input
															{...field}
															placeholder="Attribute id"
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="hs_code"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																HS code
															</Label>
														</div>
														<Input
															{...field}
															placeholder="Attribute id"
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="origin_country"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Country of
																origin
															</Label>
														</div>
														<Input
															{...field}
															placeholder="Attribute id"
														/>
													</div>
												);
											}}
										/>
									</div>
								</div>
							</div>
						</Drawer.Body>
						<Drawer.Footer>
							<Drawer.Close asChild>
								<Button size="small" variant="secondary">
									Cancel
								</Button>
							</Drawer.Close>
							<Button type="submit" size="small">
								Save
							</Button>
						</Drawer.Footer>
					</form>
				</FormProvider>
			</Drawer.Content>
		</Drawer>
	);
};

export default AttributesSettingsForm;
