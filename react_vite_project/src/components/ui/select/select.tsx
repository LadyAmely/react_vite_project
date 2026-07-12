import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const selectVariants = cva(
  'block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-2 focus:outline-none shadow-xs placeholder:text-body transition-all',
  {
    variants: {
      variant: {
        default: 'focus:ring-purple-300 focus:border-purple-600',
        secondary: 'focus:ring-cyan-300 focus:border-cyan-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof selectVariants> {
  label?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, label, children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2.5 text-sm font-medium text-heading">
            {label}
          </label>
        )}
        <select
          className={cn(selectVariants({ variant }), className)}
          ref={ref}
          {...props}
        >
          {children}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select, selectVariants };