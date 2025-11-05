import { Spinner } from "@medusajs/icons";
import { cva, type VariantProps } from "cva";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "@/lib/utils";

// TODO: Fix after appearance
const buttonVariants = cva({
  base: cn(
    // "relative",
    "transition-fg inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none",
    "disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral [&_svg]:size-4"
    // "disabled:after:hidden after:transition-fg after: after:inset-0 after:content-[''] after:-z-1"
  ),
  variants: {
    variant: {
      accent: cn(
        "shadow-buttons-accent text-white",
        "bg-linear-[163deg,#DEBA92_19.34%,#9F724E_47.13%,#7A482E_81.21%]",
        // "after:button-inverted-gradient",
        "hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient",
        "active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient",
        "focus-visible:!shadow-buttons-inverted-focus"
      ),
      primary: cn(
        "shadow-buttons-inverted text-ui-contrast-fg-primary bg-ui-button-inverted after:button-inverted-gradient",
        "hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient",
        "active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient",
        "focus-visible:!shadow-buttons-inverted-focus"
      ),
      secondary: cn(
        "shadow-buttons-neutral text-ui-fg-base bg-ui-bg-base after:button-neutral-gradient",
        "hover:bg-ui-bg-base-hover hover:after:button-neutral-hover-gradient",
        "active:bg-ui-bg-base-pressed active:after:button-neutral-pressed-gradient",
        "focus-visible:shadow-buttons-neutral-focus"
      ),
      transparent: cn(
        // "after:hidden",
        "text-ui-fg-base bg-ui-button-transparent",
        "hover:bg-ui-button-transparent-hover",
        "active:bg-ui-button-transparent-pressed",
        "focus-visible:shadow-buttons-neutral-focus focus-visible:bg-ui-bg-base",
        "disabled:!bg-transparent disabled:!shadow-none"
      ),
      danger: cn(
        "shadow-buttons-colored shadow-buttons-danger text-ui-fg-on-color bg-ui-button-danger after:button-danger-gradient",
        "hover:bg-ui-button-danger-hover hover:after:button-danger-hover-gradient",
        "active:bg-ui-button-danger-pressed active:after:button-danger-pressed-gradient",
        "focus-visible:shadow-buttons-danger-focus"
      ),
    },
    size: {
      icon: "size-8",
      small: "txt-compact-small-plus gap-x-1.5 px-2 py-1",
      base: "txt-compact-small-plus gap-x-1.5 px-3 py-1.5",
      large: "txt-compact-medium-plus gap-x-1.5 px-4 py-2.5",
      xlarge: "txt-compact-large-plus gap-x-1.5 px-5 py-3.5",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "primary",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  asChild?: boolean;
}

/**
 * This component is based on the `button` element and supports all of its props
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      /**
       * The button's style.
       */
      variant = "primary",
      /**
       * The button's size.
       */
      size = "base",
      className,
      /**
       * Whether to remove the wrapper `button` element and use the
       * passed child element instead.
       */
      asChild = false,
      children,
      /**
       * Whether to show a loading spinner.
       */
      isLoading = false,
      disabled,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const Component = asChild ? Slot.Root : "button";

    /**
     * In the case of a button where asChild is true, and isLoading is true, we ensure that
     * only on element is passed as a child to the Slot component. This is because the Slot
     * component only accepts a single child.
     */
    const renderInner = () => {
      if (isLoading) {
        return (
          <span className="pointer-events-none">
            <div
              className={cn(
                "bg-ui-bg-disabled absolute inset-0 flex items-center justify-center rounded-md"
              )}
            >
              <Spinner className="animate-spin" />
            </div>
            {children}
          </span>
        );
      }

      return children;
    };

    return (
      <Component
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
      >
        {renderInner()}
      </Component>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
