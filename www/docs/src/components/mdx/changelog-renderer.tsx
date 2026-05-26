import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  url: string;
}

async function fetchChangelog(githubUrl: string): Promise<string | null> {
  const rawUrl = githubUrl
    .replace("https://github.com/", "https://raw.githubusercontent.com/")
    .replace("/blob/", "/");

  try {
    const res = await fetch(rawUrl, { next: { revalidate: 3600 } });
    return res.ok ? res.text() : null;
  } catch {
    return null;
  }
}

export async function ChangelogRenderer({ url }: Props) {
  const content = await fetchChangelog(url);

  if (!content) {
    return (
      <p className="text-ui-fg-subtle italic">
        Failed to load changelog.{" "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-ui-fg-interactive">
          View on GitHub ↗
        </a>
      </p>
    );
  }

  const markdown = content.replace(/^#[^\n]+\n\n?/, "");

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
}
