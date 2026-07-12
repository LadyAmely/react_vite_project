import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

const radioVariants = cva(
  'w-4 h-4 rounded-full border appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-neutral-400 bg-white checked:border-purple-600 checked:bg-purple-600 focus:ring-purple-300',
        secondary: 'border-neutral-400 bg-white checked:border-cyan-500 checked:bg-cyan-500 focus:ring-cyan-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof radioVariants> {}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={cn(radioVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Radio.displayName = 'Radio';

export { Radio, radioVariants };