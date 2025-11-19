"use client";
import { Copy } from "@medusajs/ui";
import type { ComponentProps, ElementType } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const HeadingLink = ({
  id,
  children,
  Heading,
  className,
  ...props
}: ComponentProps<"h1"> & {
  Heading: ElementType;
}) => {
  const pathname = usePathname();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className="group relative">
      <Heading
        id={id}
        className={cn("group scroll-m-28 lg:scroll-m-24", className)}
        {...props}
      >
        {children}
        {Heading !== "h1" && (
          <Copy
            className="opacity-0 group-hover:opacity-100 ml-2 transition-opacity cursor-pointer bg-clip-text gorgo-text-gradient"
            content={`${origin}${pathname}#${id}`}
          >
            #
          </Copy>
        )}
      </Heading>
    </div>
  );
};

export default HeadingLink;
