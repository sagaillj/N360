import React from 'react';
import { Button } from '@/components/ui/Button';
import { FaCheck, FaLock, FaPlay, FaUsers, FaClock } from 'react-icons/fa';
import { CourseModule } from '@/types';
import ProgressBar from './ProgressBar';

interface ModuleCardProps {
  module: CourseModule;
  isCompleted: boolean;
  isCurrent: boolean;
  variant?: 'personal' | 'group';
  onContinue?: () => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ 
  module, 
  isCompleted, 
  isCurrent,
  variant = 'personal',
  onContinue 
}) => (
  <div 
    className={`bg-white rounded-lg shadow p-6 ${
      isCurrent ? 'border-2 border-primary' : ''
    } transition-all duration-300 hover:shadow-md`}
  >
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-secondary">
            {module.title}
          </h3>
          <p className="mt-2 text-gray-600">
            {module.description}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="mr-1" />
            {module.duration}
          </div>
          {isCompleted ? (
            <div className="text-primary">
              <FaCheck className="w-6 h-6" />
            </div>
          ) : isCurrent ? (
            <Button size="sm" onClick={onContinue}>
              <FaPlay className="mr-2" />
              Continue
            </Button>
          ) : (
            <div className="text-gray-400">
              <FaLock className="w-6 h-6" />
            </div>
          )}
        </div>
      </div>

      {variant === 'group' && module.totalParticipants && (
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaUsers className="text-primary" />
            <span>
              {module.activeParticipants}/{module.totalParticipants} Participating
            </span>
          </div>
          <span>{module.progress}% Complete</span>
        </div>
      )}

      <ProgressBar
        progress={module.progress}
        className="h-2"
        color={variant === 'personal' ? 'bg-accent-yellow' : 'bg-primary'}
      />
    </div>
  </div>
); 