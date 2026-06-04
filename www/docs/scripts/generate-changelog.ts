import { exec } from "node:child_process"
import { existsSync } from "node:fs"
import { readFile, writeFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { promisify } from "node:util"

const execAsync = promisify(exec)

const repoRoot = path.resolve(process.cwd(), "..", "..")
const outputPath = path.join(process.cwd(), "src", "generated", "activity.json")
const manualPath = path.join(process.cwd(), "content", "announcements.json")

type I18nString = { en: string; ru: string }

type ActivityItem = {
  id: string
  title: I18nString
  subtitle: I18nString
  date: string
  packageSlug?: string
  url?: string
  path?: string
  isActive?: boolean
}

const packageMeta: Record<string, { slug: string; urlSlug: string; name: I18nString }> = {
  "@gorgo/medusa-payment-yookassa": { slug: "yookassa", urlSlug: "yookassa", name: { en: "YooKassa", ru: "ЮKassa" } },
  "@gorgo/medusa-payment-tkassa": { slug: "tkassa", urlSlug: "t-kassa", name: { en: "T-Kassa", ru: "Т-Касса" } },
  "@gorgo/medusa-payment-robokassa": { slug: "robokassa", urlSlug: "robokassa", name: { en: "Robokassa", ru: "Robokassa" } },
  "@gorgo/medusa-fulfillment-apiship": { slug: "apiship", urlSlug: "apiship", name: { en: "Apiship", ru: "Apiship" } },
  "@gorgo/medusa-feed-yandex": { slug: "yandex", urlSlug: "yandex-yml-feed", name: { en: "Yandex YML Feed", ru: "Яндекс YML-фид" } },
  "@gorgo/medusa-1c": { slug: "1c", urlSlug: "1c-enterprise", name: { en: "1C", ru: "1С" } },
};

async function getTagDates(packageName: string): Promise<Record<string, string>> {
  try {
    const { stdout } = await execAsync(
      `git tag -l "${packageName}@*" --sort=-version:refname --format="%(refname:short) %(creatordate:iso-strict)"`,
      { cwd: repoRoot },
    )
    const dates: Record<string, string> = {}
    for (const line of stdout.trim().split("\n")) {
      if (!line.trim()) continue
      const spaceIdx = line.indexOf(" ")
      const version = line.slice(0, spaceIdx).split("@").pop()
      const date = line.slice(spaceIdx + 1).trim().slice(0, 10)
      if (version && date) dates[version] = date
    }
    return dates
  } catch {
    return {}
  }
}

async function parsePackageChangelog(packageName: string): Promise<ActivityItem[]> {
  const changelogPath = path.join(repoRoot, "packages", packageName.replace("@gorgo/", ""), "CHANGELOG.md")
  if (!existsSync(changelogPath)) return []

  const [content, tagDates] = await Promise.all([
    readFile(changelogPath, "utf-8"),
    getTagDates(packageName),
  ])

  const meta = packageMeta[packageName]

  return content
    .split(/(?=^## \d+\.\d+\.\d+)/m)
    .slice(1)
    .flatMap((block) => {
      const version = block.match(/^## (\d+\.\d+\.\d+)/m)?.[1]
      const date = version ? tagDates[version] : undefined
      if (!version || !date) return []
      const anchor = version.replace(/\./g, "-")
      return [{
        id: `${packageName}@${version}`,
        title: meta.name,
        subtitle: { en: `New release · v${version}`, ru: `Новый релиз · v${version}` },
        date,
        packageSlug: meta.slug,
        path: `/medusa-plugins/${meta.urlSlug}/changelog#${anchor}`,
      }]
    })
}

async function main() {
  console.log("Generating activity...")

  if (!existsSync(path.join(repoRoot, "packages"))) {
    if (existsSync(outputPath)) {
      console.log("Skipping: no packages/ available, keeping existing activity.json")
      return
    }
    console.log("Skipping: no packages/ available, writing empty activity.json")
    const dir = path.dirname(outputPath)
    if (!existsSync(dir)) await mkdir(dir, { recursive: true })
    await writeFile(outputPath, "[]")
    return
  }

  const results = await Promise.all(Object.keys(packageMeta).map(parsePackageChangelog))
  const changelogItems = results.flat()

  let manualItems: ActivityItem[] = []
  if (existsSync(manualPath)) {
    manualItems = JSON.parse(await readFile(manualPath, "utf-8"))
  }

  const seen = new Set<string>()
  const merged = [ ...manualItems, ...changelogItems]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter(({ id }) => !seen.has(id) && seen.add(id))

  const dir = path.dirname(outputPath);
  if (!existsSync(dir)) {
    await mkdir(path.dirname(outputPath), { recursive: true })
  }

  await writeFile(outputPath, JSON.stringify(merged, null, 2))
  console.log(`Done. ${merged.length} entries (${changelogItems.length} changelog + ${manualItems.length} manual)`)
}

main().catch((err) => {
  console.error("Failed:", err)
  process.exit(1)
})
