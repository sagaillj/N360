'use client';

import { FC } from 'react';

interface EditionBadgeProps {
  edition: 'Small' | 'Medium' | 'Large';
  className?: string;
}

const EditionBadge: FC<EditionBadgeProps> = ({ edition, className = '' }) => {
  const colors = {
    Small: {
      text: 'text-accent-yellow',
      border: 'border-accent-yellow',
      glow: 'after:bg-accent-yellow',
      label: 'Individual',
    },
    Medium: {
      text: 'text-accent-peach',
      border: 'border-accent-peach',
      glow: 'after:bg-accent-peach',
      label: 'Group',
    },
    Large: {
      text: 'text-accent-green',
      border: 'border-accent-green',
      glow: 'after:bg-accent-green',
      label: 'Community',
    },
  };

  const { text, border, glow, label } = colors[edition];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div
        className={`
          relative px-4 py-2 rounded-full border ${border}
          bg-background-secondary backdrop-blur-sm
          ${text} font-semibold text-sm
          after:absolute after:inset-0 after:opacity-10 after:rounded-full ${glow}
          transition-all duration-300 hover:scale-105
          flex items-center gap-2
        `}
      >
        <span className="relative z-10">
          {label} Edition
        </span>
        <div className={`w-2 h-2 rounded-full ${text} bg-current animate-pulse`} />
      </div>
      <div
        className={`
          absolute inset-0 -z-10 opacity-20 blur-xl ${glow}
          transition-opacity duration-300 group-hover:opacity-30
        `}
      />
    </div>
  );
};

export { EditionBadge }; 