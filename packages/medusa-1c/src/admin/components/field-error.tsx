export const FieldError = ({ error }: { error?: string }) =>
	error ? <span className="text-red-500 text-xs">{error}</span> : null;
