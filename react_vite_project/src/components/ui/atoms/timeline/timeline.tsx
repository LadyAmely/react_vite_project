import * as React from 'react';
import { cn } from '../../../../lib/utils';

const Timeline = React.forwardRef<HTMLOListElement, React.OlHTMLAttributes<HTMLOListElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <ol ref={ref} className={cn("items-center sm:flex", className)} {...props}>
        {children}
      </ol>
    );
  }
);
Timeline.displayName = 'Timeline';

export { Timeline };