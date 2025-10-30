import {
  SiDiscord,
  SiGithub,
  SiNpm,
  SiTelegram,
} from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import type { PluginLinkService, PluginLink as PluginLinkType } from "@/types";
import { Button } from "../ui/button";

function getIcon(type: PluginLinkService) {
  switch (type) {
    case "github":
      return <SiGithub className="size-4 text-ui-fg-base" />;
    case "npm":
      return <SiNpm color="default" className="size-4" />;
    case "telegram":
      return <SiTelegram color="default" className="size-4" />;
    case "discord":
      return <SiDiscord color="default" className="size-4" />;
    case "other":
      return <Globe className="size-4" />;
  }
}

function getServiceName(type: PluginLinkService) {
  switch (type) {
    case "github":
      return "GitHub";
    case "npm":
      return "NPM";
    case "telegram":
      return "Plugin Support Chat";
    case "discord":
      return "Discord Support";
    case "other":
      return "Other";
  }
}

function PluginLink({
  service,
  url,
}: {
  service: PluginLinkService;
  url: string;
}) {
  return (
    <Button variant="secondary" size="large" className="w-full" asChild>
      <a key={url} href={url} target="_blank" rel="noopener noreferrer">
        {getIcon(service)}
        {getServiceName(service)}
      </a>
    </Button>
  );
}

export default function PluginLinks({ links }: { links: PluginLinkType[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {links.map((link) => (
        <PluginLink key={link.url} service={link.service} url={link.url} />
      ))}
    </div>
  );
}
