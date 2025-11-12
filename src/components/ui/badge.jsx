import React from 'react';
import { cn } from '../../lib/utils';

const Badge = React.forwardRef(({ 
  className, 
  variant = 'default', 
  children,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-gray-900 text-white',
    secondary: 'bg-gray-100 text-gray-900',
    outline: 'border border-gray-300 bg-transparent text-gray-900',
  };

  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export { Badge };
