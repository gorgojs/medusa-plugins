import type { IntegrationDescriptor, IntegrationSection } from "./define"

export type ValidationIssue = { path: string; message: string }

/** Just the bits of a descriptor that drive validation (lets callers pass an unstamped one). */
type ValidatableDescriptor = Pick<IntegrationDescriptor, "sections" | "validate">

/** Validate ONE section's values against its own options (including its `.superRefine`). */
export function validateSection(
  section: IntegrationSection,
  values: Record<string, unknown>
):
  | { success: true; data: Record<string, unknown> }
  | { success: false; issues: ValidationIssue[] } {
  const res = section.options.safeParse(values)
  if (res.success) return { success: true, data: res.data as Record<string, unknown> }
  return {
    success: false,
    issues: res.error.issues.map((i) => ({
      path: i.path.join(".") || section.id,
      message: i.message,
    })),
  }
}

/**
 * Full (activation) validation of an assembled config: every section's own options plus the
 * descriptor's cross-section `validate`. Returns every issue — an empty array means the
 * config is complete (all required fields present, all rules satisfied).
 */
export function collectValidationIssues(
  descriptor: ValidatableDescriptor,
  full: Record<string, unknown>
): ValidationIssue[] {
  const issues: ValidationIssue[] = []
  for (const section of descriptor.sections) {
    const keys = Object.keys(section.options.shape as Record<string, unknown>)
    const subset: Record<string, unknown> = {}
    for (const k of keys) if (k in full) subset[k] = full[k]
    const res = validateSection(section, subset)
    if (!res.success) issues.push(...res.issues)
  }
  descriptor.validate?.(full, {
    addIssue: (issue) => issues.push({ path: (issue.path ?? []).join("."), message: issue.message }),
  })
  return issues
}

export function isDescriptorComplete(
  descriptor: ValidatableDescriptor,
  full: Record<string, unknown>
): boolean {
  return collectValidationIssues(descriptor, full).length === 0
}
