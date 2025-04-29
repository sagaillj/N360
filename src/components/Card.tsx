import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ElementType;
  onClick?: () => void;
  hover?: boolean;
}

const Card: FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  icon: Icon,
  onClick,
  hover = true,
}) => {
  return (
    <div
      className={`
        bg-background-secondary rounded-xl border border-border-primary p-5
        ${hover ? 'transition-all duration-200 hover:border-border-secondary hover:shadow-lg' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {(title || Icon) && (
        <div className="flex items-start mb-4">
          {Icon && (
            <div className="mr-4 mt-1">
              <Icon className="w-5 h-5 text-text-secondary" />
            </div>
          )}
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-text-secondary">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card; 