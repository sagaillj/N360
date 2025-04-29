import React from 'react';
import { FaHome, FaBook, FaUsers, FaCalendar, FaTrophy, FaCheckCircle, FaChartLine, FaBuilding } from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';
import { EditionBadge } from '@/components/EditionBadge';

interface ActivityItem {
  type: 'training' | 'team' | 'organization';
  title: string;
  timestamp: string;
}

const recentActivity: ActivityItem[] = [
  {
    type: 'training',
    title: 'New Training Module Released',
    timestamp: '2 hours ago'
  },
  {
    type: 'team',
    title: 'Team Progress Update',
    timestamp: '4 hours ago'
  },
  {
    type: 'organization',
    title: 'Organization Milestone Achieved',
    timestamp: '1 day ago'
  }
];

const getActivityIcon = (type: ActivityItem['type']): React.ElementType => {
  switch (type) {
    case 'training':
      return FaBook;
    case 'team':
      return FaUsers;
    case 'organization':
      return FaBuilding;
    default:
      return FaCheckCircle;
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Organization Dashboard</h1>
          <p className="text-text-secondary">Track your organization's progress and impact</p>
        </div>
        <EditionBadge edition="Large" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={FaUsers}
          title="Active Members"
          className="hover:scale-105 transition-transform"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">248</p>
            <p className="text-sm text-gray-400">Across all teams</p>
          </div>
        </Card>

        <Card
          icon={FaCalendar}
          title="Upcoming Sessions"
          className="hover:scale-105 transition-transform"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-gray-400">Scheduled this week</p>
          </div>
        </Card>

        <Card
          icon={FaChartLine}
          title="Growth Metrics"
          className="hover:scale-105 transition-transform"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">+15%</p>
            <p className="text-sm text-gray-400">Month over month</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Department Progress"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Engineering</p>
                <p className="text-sm text-gray-400">85%</p>
              </div>
              <ProgressBar progress={85} size="md" color="yellow" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Marketing</p>
                <p className="text-sm text-gray-400">72%</p>
              </div>
              <ProgressBar progress={72} size="md" color="peach" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">Operations</p>
                <p className="text-sm text-gray-400">68%</p>
              </div>
              <ProgressBar progress={68} size="md" color="green" />
            </div>
          </div>
        </Card>

        <Card
          title="Recent Activity"
          className="transition-all duration-300 hover:shadow-lg"
        >
          <div className="divide-y divide-gray-700">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="py-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-background-secondary group-hover:scale-110 transition-transform">
                    {React.createElement(getActivityIcon(activity.type), {
                      className: 'w-5 h-5 text-text-secondary'
                    })}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-400">{activity.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 