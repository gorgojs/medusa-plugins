export type OneCSettings = {
	id: string;
	login?: string;
	password?: string;
	interval?: number;
	chunkSize?: number;
	useZip?: boolean;
	attributes?: Record<string, string>;
};

export type OneCSettingsUpdate = Partial<OneCSettings>;
