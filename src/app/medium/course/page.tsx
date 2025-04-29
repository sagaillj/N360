import { Button } from '@/components/ui/Button';
import { dummyCourse } from '@/lib/dummyData';
import { FaCheck, FaLock, FaPlay } from 'react-icons/fa';
import { EditionBadge } from '@/components/EditionBadge';

const ModuleCard = ({ module, isCompleted, isCurrent }: {
  module: typeof dummyCourse.modules[0];
  isCompleted: boolean;
  isCurrent: boolean;
}) => (
  <div className={`bg-white rounded-lg shadow p-6 ${
    isCurrent ? 'border-2 border-primary' : ''
  }`}>
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-semibold text-secondary">
          {module.title}
        </h3>
        <p className="mt-2 text-gray-600">
          {module.description}
        </p>
      </div>
      {isCompleted ? (
        <div className="text-primary">
          <FaCheck className="w-6 h-6" />
        </div>
      ) : isCurrent ? (
        <Button size="sm">
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
);

export default function GroupCoursePage() {
  const currentModuleIndex = dummyCourse.modules.findIndex(
    (m) => m.status === 'in_progress'
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary">
            Group Training: {dummyCourse.title}
          </h1>
          <EditionBadge edition="Medium" />
          <p className="mt-2 text-gray-600">
            Complete this training together as a group
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Group Progress
            </span>
            <span className="text-sm font-medium text-primary">
              {dummyCourse.modules.filter(m => m.status === 'completed').length}/
              {dummyCourse.modules.length} modules
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{
                width: `${
                  (dummyCourse.modules.filter(m => m.status === 'completed').length /
                    dummyCourse.modules.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Module List */}
        <div className="space-y-4">
          {dummyCourse.modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              isCompleted={module.status === 'completed'}
              isCurrent={index === currentModuleIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 