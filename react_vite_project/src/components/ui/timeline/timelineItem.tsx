import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

export const timelineItemVariants = cva(
  'z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 shrink-0 transition-colors', 
  {
    variants: {
      variant: {
        default: 'bg-brand-softer ring-buffer text-fg-brand-strong',
        secondary: 'bg-cyan-100 ring-cyan-50 text-cyan-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement>, VariantProps<typeof timelineItemVariants> {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, variant, date, title, description, icon, ...props }, ref) => {
    return (
      <li ref={ref} className={cn("relative mb-6 sm:mb-0", className)} {...props}>
        <div className="flex items-center">
          <div className={cn(timelineItemVariants({ variant }))}>
            {icon}
          </div>
          <div className="hidden sm:flex w-full bg-neutral-quaternary h-px"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <time className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
            {date}
          </time>
          <h3 className="text-lg font-semibold text-heading my-2">{title}</h3>
          <p className="text-body mb-4">{description}</p>
        </div>
      </li>
    );
  }
);
TimelineItem.displayName = 'TimelineItem';

export { TimelineItem };