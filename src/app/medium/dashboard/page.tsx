import { FaBook, FaChartLine, FaClock, FaUsers, FaCalendar } from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface ActivityItem {
  id: number;
  title: string;
  timestamp: string;
  type: 'training' | 'progress' | 'team';
  description: string;
}

const recentActivity: ActivityItem[] = [
  {
    id: 1,
    title: 'Community Engagement Training',
    timestamp: '2 hours ago',
    type: 'training',
    description: 'Completed Module 3: Building Lasting Relationships',
  },
  {
    id: 2,
    title: 'Progress Milestone',
    timestamp: '1 day ago',
    type: 'progress',
    description: 'Reached 75% completion in Neighborhood Assessment',
  },
  {
    id: 3,
    title: 'Team Update',
    timestamp: '2 days ago',
    type: 'team',
    description: 'New team member Sarah joined your organization',
  },
];

const getActivityIcon = (type: ActivityItem['type']) => {
  switch (type) {
    case 'training':
      return FaBook;
    case 'progress':
      return FaChartLine;
    case 'team':
      return FaUsers;
    default:
      return FaClock;
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-text-primary mb-3">
          Welcome Back, Organization Name!
        </h1>
        <p className="text-lg text-text-secondary">
          Ready to make an impact in your community? Here's your progress so far.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Training Progress"
          subtitle="Keep up the momentum"
          icon={FaBook}
          className="p-6"
        >
          <div className="mt-4">
            <ProgressBar progress={65} showLabel size="lg" />
          </div>
        </Card>

        <Card
          title="Active Members"
          subtitle="Growing together"
          icon={FaUsers}
          className="p-6"
        >
          <div className="mt-4">
            <div className="text-4xl font-bold text-accent-peach">12</div>
            <div className="text-sm text-text-secondary mt-1">
              +3 from last month
            </div>
          </div>
        </Card>

        <Card
          title="Upcoming Sessions"
          subtitle="Mark your calendar"
          icon={FaCalendar}
          className="p-6"
        >
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-text-primary">Community Workshop</span>
              <span className="text-sm text-text-secondary">Tomorrow</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-primary">Team Meeting</span>
              <span className="text-sm text-text-secondary">In 3 days</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Recent Activity</h2>
        <Card className="p-0 divide-y divide-border-primary">
          {recentActivity.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            return (
              <div key={activity.id} className="p-4 first:pt-5 last:pb-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center">
                      <Icon className="w-4 h-4 text-text-secondary" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-text-primary">
                        {activity.title}
                      </h3>
                      <span className="text-xs text-text-secondary">
                        {activity.timestamp}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Start Training', icon: FaBook, color: 'text-accent-yellow' },
            { title: 'View Progress', icon: FaChartLine, color: 'text-accent-peach' },
            { title: 'Team Chat', icon: FaUsers, color: 'text-accent-green' },
            { title: 'Schedule Meeting', icon: FaCalendar, color: 'text-accent-orange' },
          ].map((action, index) => (
            <Card
              key={index}
              className="p-4 cursor-pointer hover:transform hover:scale-102 transition-all duration-200"
              hover={true}
            >
              <div className="flex items-center">
                <action.icon className={`w-5 h-5 ${action.color} mr-3`} />
                <span className="text-text-primary font-medium">{action.title}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 