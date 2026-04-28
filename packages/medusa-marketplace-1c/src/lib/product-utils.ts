import { ClassifierGroup } from "commerceml-parser-core"

export function flattenClassifierGroups(
  groups: ClassifierGroup[]
): ClassifierGroup[] {
  const flatList: ClassifierGroup[] = []

  function traverse(currentGroups: ClassifierGroup[]) {
    for (const group of currentGroups) {
      flatList.push(group)
      if (group.groups && group.groups.length > 0) {
        traverse(group.groups)
      }
    }
  }

  traverse(groups)
  return flatList
}
