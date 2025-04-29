import { FC } from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  color = 'bg-accent-green',
  className = '',
  showLabel = false,
  size = 'md',
}) => {
  const height = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1">
        {showLabel && (
          <div className="flex justify-between w-full">
            <span className="text-sm text-text-secondary">Progress</span>
            <span className="text-sm font-medium text-text-primary">{progress}%</span>
          </div>
        )}
      </div>
      <div className={`w-full bg-background-elevated rounded-full overflow-hidden ${height[size]}`}>
        <div
          className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 