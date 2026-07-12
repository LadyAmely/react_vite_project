import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const tabsTriggerVariants = cva(
  'inline-block p-4 border-b border-transparent rounded-t-base transition-all',
  {
    variants: {
      active: {
        true: 'text-fg-brand border-brand',
        false: 'hover:text-fg-brand hover:border-brand',
      },
      disabled: {
        true: 'text-fg-disabled cursor-not-allowed',
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
    },
  }
);

interface TabsTriggerProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, active, disabled, children, ...props }, ref) => {
    return (
      <li className="me-2">
        <button
          ref={ref}
          disabled={disabled}
          className={cn(tabsTriggerVariants({ active, disabled }), className)}
          {...props}
        >
          {children}
        </button>
      </li>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

export { TabsTrigger };