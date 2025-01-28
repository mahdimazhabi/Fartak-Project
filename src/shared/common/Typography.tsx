import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

// Define the variant styles with default tag-based styles applied conditionally
const typographyVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'text-current',

      primary: 'text-gray-800 dark:text-complement-100',
      secondary: 'text-gray-600 dark:text-complement-300',
      tertiary: 'text-gray-700 dark:text-complement-200',
      quaternary: 'text-gray-500 dark:text-complement-400',
    },
    size: {
      'display-2': 'size-display-2',
      'display-1': 'size-display-1',
      h1: 'size-heading-1 font-medium',
      h2: 'size-heading-2 font-medium',
      h3: 'size-heading-3 font-medium',
      h4: 'size-heading-4 font-medium',
      h5: 'size-heading-5 font-medium',
      h6: 'size-heading-6 font-medium',
      caption: 'size-caption',
      warning: 'size-warning',
      footer: 'size-footer',
      label: 'size-label',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'primary',
    weight: 'normal',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      as: Component = 'span', // Default to 'span' if 'as' is not provided
      className,
      variant,
      size,
      weight,
      children,
      ...props
    },
    ref
  ) => {
    // Apply default styles based on the tag type
    const combinedStyles = typographyVariants({
      variant,
      size,
      weight,
      className,
    });

    return (
      <Component className={combinedStyles} ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);
Typography.displayName = 'Typography';

export { Typography as Typography, typographyVariants };
