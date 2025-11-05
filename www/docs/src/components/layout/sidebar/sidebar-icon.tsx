import type { FC, SVGProps } from "react";
import { cn } from "@/lib/utils";
import Onec from "@/svg/icons/1c.svg";
import Robokassa from "@/svg/icons/robokassa.svg";
import Tkassa from "@/svg/icons/tbank.svg";
import Yandex from "@/svg/icons/yandex.svg";
import Yookassa from "@/svg/icons/yookassa.svg";

const ICONS: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  tkassa: Tkassa,
  robokassa: Robokassa,
  yookassa: Yookassa,
  yandex: Yandex,
  "1c": Onec,
};

type SidebarIconProps = {
  name?: string;
  className?: string;
};

const SidebarIcon = ({ name, className }: SidebarIconProps) => {
  const IconComponent = ICONS[name ?? ""];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={cn(
        "size-4 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all",
        className
      )}
    />
  );
};

export default SidebarIcon;
