import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import * as React from "react";

import { cn } from "@/shared/lib/utils";
import useRipple from "@/shared/hook/useRipple";

// Define Icon Type for compatibility
export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

// Button styles with variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden group duration-300",
  {
    variants: {
      variant: {
        default:
          "text-white bg-[#1d40d7] border-2 border-[#5171fc] hover:bg-[#1a38b8] hover:border-[#3c55d0] [&_span.ripple]:bg-accent-400 shadow-custom", // تغییر رنگ پس‌زمینه و حاشیه
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-custom",
        success: "bg-calendar-done text-white shadow-custom",
        outline:
          "border-2 border-accent-primary text-accent-primary hover:bg-[hsla(var(--accent-600),0.2)] [&_span.ripple]:bg-[hsla(var(--accent-400),0.4)] shadow-custom",
        link: "text-link hover:text-link [&_span.ripple]:bg-link/50 shadow-custom",
        ghost:
          "bg-transparent text-gray-800 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 [&_span.ripple]:bg-gray-700 dark:[&_span.ripple]:bg-gray-700 shadow-custom",
      },
      size: {
        default: "h-15 w-[155px] px-4 py-2",
        sm: "h-9 px-3",
        md: "h-11 px-3",
        lg: "h-10 px-8",
        icon: "h-9 w-9 text-current dark:text-current hover:text-accent-primary dark:hover:text-accent-primary rounded-md",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        sm: "rounded-sm",
        full: "rounded-full",
      },
      shadow: {
        sm: "shadow-sm",
        default: "shadow-md", // Default shadow style
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        custom: "shadow-[0px_5.96px_35.56px_-2.55px_#5171FC8F]", // Custom shadow
        none: "shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "sm",
      shadow: "default", // Default shadow is set to 'default'
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: IconType;
  full?: boolean;
  bare?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      icon: Icon,
      variant,
      size = "sm",
      rounded,
      shadow = "default", // Default shadow is passed here
      asChild = false,
      loading = false,
      full,
      bare = false,
      children,
      ...props
    },
    ref
  ) => {
    const rippleRef = useRipple(ref);

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          bare
            ? "relative overflow-hidden"
            : cn(
                buttonVariants({ variant, size, rounded, shadow }), // Use shadow here
                className,
                full && "w-full",
                "relative"
              )
        )}
        ref={rippleRef}
        disabled={loading || props.disabled}
        {...props}
      >
        <div
          className={cn(
            "transition-opacity duration-150 z-20 relative flex items-center justify-center gap-1",
            loading && "opacity-0"
          )}
        >
          {Icon && <Icon />}
          {children}
        </div>
        <Loader
          className={cn(
            "absolute animate-spin transition-opacity opacity-0",
            loading && "opacity-100"
          )}
          size={size === "lg" ? 24 : size === "md" ? 20 : 18} // Adjust loader size dynamically
        />
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
