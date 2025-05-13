
import React from 'react';
import { cn } from '@/lib/utils';

interface ToolBoxProps {
  title: string;
  items?: string[];
  color?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  className?: string;
}

const ToolBox: React.FC<ToolBoxProps> = ({ 
  title, 
  items = [], 
  color = 'bg-purple-600',
  size = 'medium',
  className
}) => {
  const sizeClasses = {
    small: 'w-28 h-16 text-xs',
    medium: 'w-40 h-24 text-sm',
    large: 'w-60 h-32',
    xl: 'w-80 h-40'
  };

  return (
    <div 
      className={cn(
        'rounded-md p-2 text-white flex flex-col justify-center items-center text-center shadow-md', 
        color, 
        sizeClasses[size],
        className
      )}
    >
      <div className="font-bold text-xs mb-1">{title}</div>
      {items.length > 0 && (
        <div className="text-[10px] line-clamp-4 overflow-hidden">
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolBox;
