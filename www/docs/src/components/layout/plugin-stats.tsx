import { CloudArrowDown } from "@medusajs/icons";
import { cn } from "@/lib/utils";

type Props = {
  packageName: string;
  revalidate?: number;
  className?: string;
};

type FetchResult = {
  version: string | null;
  downloads: number | null;
  error: string | null;
};

async function fetchNpmStats(
  pkg: string,
  revalidate = 3600
): Promise<FetchResult> {
  const encoded = encodeURIComponent(pkg);
  const registryUrl = `https://registry.npmjs.org/${encoded}`;
  const downloadsUrl = `https://api.npmjs.org/downloads/point/last-month/${encoded}`;

  const fetchOpts = revalidate === undefined ? {} : { next: { revalidate } };

  const [r1, r2] = await Promise.allSettled([
    fetch(registryUrl, fetchOpts),
    fetch(downloadsUrl, fetchOpts),
  ]);

  let version: string | null = null;
  let downloads: number | null = null;
  let error: string | null = null;

  // registry response
  if (r1.status === "fulfilled") {
    const resp = r1.value;
    if (resp.ok) {
      try {
        const json = await resp.json();
        version = json?.["dist-tags"]?.latest ?? json?.version ?? null;
      } catch (e) {
        error = `Failed to parse registry response for "${pkg}"`;
      }
    } else {
      if (resp.status === 404) {
        error = `Package not found: ${pkg}`;
      } else {
        error = `Registry error: ${resp.status}`;
      }
    }
  } else {
    error = String(r1.reason ?? "Registry fetch error");
  }

  // downloads response
  if (r2.status === "fulfilled") {
    const resp = r2.value;
    if (resp.ok) {
      try {
        const j = await resp.json();
        const d = Number(j?.downloads ?? 0);
        downloads = Number.isFinite(d) ? d : 0;
      } catch (e) {
        if (!error) error = `Failed to parse downloads response for "${pkg}"`;
      }
    } else {
      if (resp.status === 404) {
        downloads = 0;
      } else {
        if (!error) error = `Downloads API error: ${resp.status}`;
      }
    }
  } else {
    if (!error) error = String(r2.reason ?? "Downloads fetch error");
  }

  return { version, downloads, error };
}

export default async function PluginStats({
  packageName,
  revalidate = 3600,
  className,
}: Props) {
  const pkg = packageName?.trim();
  if (!pkg) return null;

  const { version, downloads, error } = await fetchNpmStats(pkg, revalidate);

  const formattedDownloads =
    downloads == null ? "—" : new Intl.NumberFormat().format(downloads);

  return (
    <div className={cn(`flex w-full`, className)}>
      <div className="flex flex-col items-start flex-1 gap-y-1.5">
        <div className="text-sm text-ui-fg-subtle ">Latest</div>
        <div className="text-sm font-medium">
          v{version ?? (error ? "—" : "Loading…")}
        </div>
      </div>

      <div className="flex flex-col items-start flex-1 gap-y-1.5">
        <div className="text-sm text-ui-fg-subtle">Downloads</div>
        <div className="text-sm font-medium flex items-center gap-x-1.5">
          <CloudArrowDown />
          {downloads == null ? (error ? "—" : "Loading…") : formattedDownloads}
        </div>
      </div>
    </div>
  );
}
