import * as React from 'react';
import { cn } from '../../../lib/utils';

const TabsList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-wrap -mb-px", className)} {...props} />
  )
);
TabsList.displayName = 'TabsList';

export { TabsList };