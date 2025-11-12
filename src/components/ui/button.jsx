import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border-2 border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900',
    ghost: 'hover:bg-gray-100 text-gray-900',
  };

  const sizes = {
    default: 'px-4 py-2 text-base',
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-6 py-3 text-lg',
    icon: 'w-10 h-10 p-0',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
