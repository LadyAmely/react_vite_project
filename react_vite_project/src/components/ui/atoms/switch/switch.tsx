import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../../lib/utils';

const switchVariants = cva(
  'relative w-9 h-5 bg-neutral-quaternary rounded-full transition-all duration-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all',
  {
    variants: {
      variant: {
        default: 'peer-checked:bg-purple-600',
        secondary: 'peer-checked:bg-cyan-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof switchVariants> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          ref={ref} 
          {...props} 
        />
        <div className={cn(switchVariants({ variant }), className)} />
        {label && (
          <span className="select-none ms-3 text-sm font-medium text-heading">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch, switchVariants };