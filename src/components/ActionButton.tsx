
import React from 'react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  label: string;
  variant?: 'filled' | 'outlined';
  color?: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  label, 
  variant = 'outlined',
  color = 'blue',
  className
}) => {
  return (
    <button 
      className={cn(
        'px-4 py-1 rounded-full text-xs font-medium transition-colors',
        className
      )}
    >
      {label}
    </button>
  );
};

export default ActionButton;
