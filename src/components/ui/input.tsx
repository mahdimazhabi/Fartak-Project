import { Label } from "@radix-ui/react-label";
import * as React from "react";
import { FieldError } from "react-hook-form";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import ErrorMessage from "@/shared/common/ErrorMessage";

export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

const inputVariants = cva(
  "flex items-center gap-2 w-full border border-gray-500 dark:border-gray-700 py-1 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-complement-primary px-4 placeholder:text-gray-500 dark:placeholder:text-gray-600 hover:bg-complement-primary hover:border-link disabled:hover:border-gray-700 disabled:bg-gray-800 focus:bg-complement-primary focus:border-link size-caption text-gray-600 dark:text-black transition duration-300 rounded-sm dark:hover:border-link",
  {
    variants: {
      variant: {
        default: "h-14",
        secondary: "h-10 bg-gray-50 border-border dark:bg-dominant-primary",
      },
      hasIcon: {
        true: "pr-10",
        false: "",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        sm: "rounded-sm",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "sm",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: FieldError;
  icon?: IconType;
  iconPosition?: "left" | "right";
  cursorpointer?: boolean; // Prop برای کنترل رفتار cursor
  children?: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLInputElement>; // Allow custom onBlur
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    type,
    label,
    icon: Icon,
    iconPosition = "right", // پیش‌فرض: راست
    cursorpointer = false, // پیش‌فرض: غیرفعال
    error,
    hasIcon,
    variant,
    rounded,
    children,
    onBlur,
    ...restProps
  } = props;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (type === "mobile") {
      const value = e.target.value.replace(/\s+/g, ""); // Remove all spaces
      if (/^\d{11}$/.test(value)) {
        // Format as "0901 812 0905" (assuming it's a valid 11-digit mobile number)
        const formattedValue = `${value.slice(0, 4)} ${value.slice(
          4,
          7
        )} ${value.slice(7)}`;
        e.target.value = formattedValue;
      }
    }

    // Call the passed onBlur function from react-hook-form or custom one
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className="group">
      {label && (
        <Label
          htmlFor={props.id}
          className="mb-2 block text-black font-bold dark:text-white"
        >
          {label}
        </Label>
      )}

      <div className="flex items-center relative">
        {iconPosition === "left" && Icon && (
          <div
            className={cn(
              "absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600",
              cursorpointer && "cursor-pointer" // در صورت فعال بودن cursorpointer
            )}
          >
            <Icon className={variant === "secondary" ? "w-6 h-6" : "w-5 h-5"} />
          </div>
        )}

        <input
          dir={type === "mobile" ? "ltr" : "rtl"}
          type={type}
          className={cn(
            inputVariants({ variant, rounded, hasIcon }),
            Icon && iconPosition === "right" && "pr-12", // فاصله برای آیکون سمت راست
            Icon && iconPosition === "left" && "pl-12", // فاصله برای آیکون سمت چپ
            error && "border-satisfaction-50 dark:border-satisfaction-50",
            className,
            type === "mobile" && "ltr:text-left" // Force LTR for mobile input
          )}
          ref={ref}
          onBlur={handleBlur}
          {...restProps}
        />

        {iconPosition === "right" && Icon && (
          <div
            className={cn(
              "absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600",
              cursorpointer && "cursor-pointer" // در صورت فعال بودن cursorpointer
            )}
          >
            <Icon className={variant === "secondary" ? "w-6 h-6" : "w-5 h-5"} />
          </div>
        )}

        {children}
      </div>

      {error && <ErrorMessage message={error.message} />}
    </div>
  );
});
Input.displayName = "Input";

export { Input, inputVariants };
