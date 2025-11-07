import type { FC, SVGProps } from "react";
import { cn } from "@/lib/utils";
import Onec from "@/svg/icons/sidebar/1c.svg";
import Robokassa from "@/svg/icons/sidebar/robokassa.svg";
import Tkassa from "@/svg/icons/sidebar/tkassa.svg";
import Yandex from "@/svg/icons/sidebar/yandex.svg";
import Yookassa from "@/svg/icons/sidebar/yookassa.svg";

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
        "size-4 grayscale group-hover:grayscale-0 transition-all",
        className
      )}
    />
  );
};

export default SidebarIcon;
