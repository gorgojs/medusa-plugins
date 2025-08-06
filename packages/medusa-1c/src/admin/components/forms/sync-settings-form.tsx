import {
	Heading,
	Label,
	Input,
	Button,
	Drawer,
	Switch,
	Text,
} from "@medusajs/ui";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useState } from "react";
import { sdk } from "../../lib/config";
import { OneCSettings } from "../../types/one-c-settings";
import { FieldError } from "../field-error";
import { useQueryClient } from "@tanstack/react-query";

const schema = zod.object({
	login: zod.string().min(1).max(255),
	password: zod.string().min(1).max(255),
	interval: zod.coerce.number().optional(),
	chunkSize: zod.coerce.number().optional(),
	useZip: zod.coerce.boolean().optional(),
});

const SyncSettingsForm = ({
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
			login: settings?.login ?? "",
			password: settings?.password ?? "",
			interval: settings?.interval ?? 0,
			chunkSize: settings?.chunkSize ?? 10 * 1024 * 1024,
			useZip: settings?.useZip ?? false,
		},
		resolver: zodResolver(schema),
	});

	const handleSubmit = form.handleSubmit(async (data) => {
		try {
			sdk.client.fetch("/admin/1c/settings", {
				method: "PUT",
				body: { ...settings, ...data },
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
											name="login"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Login
															</Label>
														</div>
														<FieldError
															error={
																form.formState
																	.errors
																	.interval
																	?.message
															}
														/>
														<Input {...field} />
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="password"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Password
															</Label>
														</div>
														<FieldError
															error={
																form.formState
																	.errors
																	.interval
																	?.message
															}
														/>
														<Input {...field} />
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="interval"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Interval
															</Label>
														</div>
														<FieldError
															error={
																form.formState
																	.errors
																	.interval
																	?.message
															}
														/>
														<Input
															type="number"
															{...field}
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="chunkSize"
											render={({ field }) => {
												return (
													<div className="flex flex-col space-y-2">
														<div className="flex items-center gap-x-1">
															<Label
																size="small"
																weight="plus"
															>
																Chunk Size
															</Label>
														</div>
														<FieldError
															error={
																form.formState
																	.errors
																	.chunkSize
																	?.message
															}
														/>
														<Input
															type="number"
															{...field}
														/>
													</div>
												);
											}}
										/>
										<Controller
											control={form.control}
											name="useZip"
											render={({ field }) => {
												return (
													<div className="flex flex-col gap-y-1">
														<div className="flex justify-between">
															<Label
																size="small"
																weight="plus"
															>
																Use zip
															</Label>
															<FieldError
																error={
																	form
																		.formState
																		.errors
																		.useZip
																		?.message
																}
															/>
															<Switch
																checked={
																	field.value
																}
																onCheckedChange={
																	field.onChange
																}
															/>
														</div>
														<Text
															size="small"
															className="text-ui-fg-subtle"
														>
															Zip files are more
															efficient for large
															files.
														</Text>
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

export default SyncSettingsForm;
