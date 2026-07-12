import * as React from 'react';
import { cn } from '../../../lib/utils';

const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn("text-sm font-medium text-center text-body border-b border-default", className)} 
      {...props} 
    />
  )
);
Tabs.displayName = 'Tabs';

export { Tabs };