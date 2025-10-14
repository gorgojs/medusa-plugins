import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  containerClassName,
  ...rest
}: React.ComponentProps<"section"> & { containerClassName?: string }) {
  return (
    <section className={cn("border-t", containerClassName)} {...rest}>
      <div className={cn("container sm:border-x mx-auto w-full", className)}>
        {children}
      </div>
    </section>
  );
}
