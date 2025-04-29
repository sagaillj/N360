'use client';

import React from 'react';

import { BaseLayout } from '@/components/layout/BaseLayout';
import { Button } from '@/components/ui/Button';
import { dummyCourse, dummyProjects, dummyUsers } from '@/lib/dummyData';
import { formatDate } from '@/lib/utils';
import { FaBook, FaChartLine, FaClock, FaCalendar, FaStar, FaHeart, FaHome, FaUser, FaTrophy, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import { EditionBadge } from '@/components/EditionBadge';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface ActivityItem {
  id: number;
  title: string;
  timestamp: string;
  type: 'training' | 'progress' | 'achievement' | 'goal';
  description: string;
}

const recentActivity: ActivityItem[] = [
  {
    id: 1,
    title: 'Completed Module 1: Introduction to Leadership',
    timestamp: '2 hours ago',
    type: 'training',
    description: 'Completed your first community assessment',
  },
  {
    id: 2,
    title: 'Achieved 75% completion in Personal Growth track',
    timestamp: '1 day ago',
    type: 'progress',
    description: 'Started Module 2: Understanding Community Needs',
  },
  {
    id: 3,
    title: 'Set new weekly learning goal',
    timestamp: '2 days ago',
    type: 'goal',
    description: 'Achieved 80% of your weekly learning target',
  },
];

const getActivityIcon = (type: ActivityItem['type']) => {
  switch (type) {
    case 'training':
      return <FaBook className="text-accent-yellow" />;
    case 'progress':
      return <FaTrophy className="text-accent-peach" />;
    case 'goal':
      return <FaCheckCircle className="text-accent-green" />;
    default:
      return <FaHome className="text-accent-yellow" />;
  }
};

export default function DashboardPage() {
  const user = dummyUsers[0]; // John Doe
  const project = dummyProjects[0];
  const completedModules = dummyCourse.modules.filter(m => m.status === 'completed').length;
  const totalModules = dummyCourse.modules.length;
  const completedTasks = project.tasks.filter(t => t.status === 'completed').length;
  const totalTasks = project.tasks.length;

  return (
    <BaseLayout>
      <div className="space-y-8 p-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-3 animate-fade-in">
                Welcome back, {user.name}!
              </h1>
              <div className="flex items-center space-x-3 mb-3">
                <EditionBadge edition="Personal" />
              </div>
              <p className="text-lg text-text-secondary animate-fade-in-delay">
                Ready to make an impact in your neighborhood today?
              </p>
            </div>
            <div className="flex items-center space-x-2 text-accent-yellow animate-fade-in">
              <FaStar className="w-5 h-5" />
              <span className="text-sm font-medium">Level 2 Achiever</span>
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Neighborhood 360 Training"
            subtitle="Your learning journey"
            icon={FaBook}
            className="p-6 transform hover:scale-102 transition-all duration-300"
          >
            <div className="mt-4 space-y-4">
              <ProgressBar 
                progress={(completedModules / totalModules) * 100} 
                showLabel 
                size="lg"
                color="bg-accent-yellow"
              />
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Modules Completed</span>
                <span className="text-accent-yellow font-medium">{completedModules}/{totalModules}</span>
              </div>
              <button className="w-full bg-accent-yellow/10 hover:bg-accent-yellow/20 text-accent-yellow py-2 px-4 rounded-lg transition-colors">
                Continue Course
              </button>
            </div>
          </Card>

          <Card
            title={project.title}
            subtitle="Project progress"
            icon={FaChartLine}
            className="p-6 transform hover:scale-102 transition-all duration-300"
          >
            <div className="mt-4 space-y-4">
              <ProgressBar 
                progress={(completedTasks / totalTasks) * 100} 
                showLabel 
                size="lg"
                color="bg-accent-peach"
              />
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Tasks Completed</span>
                <span className="text-accent-peach font-medium">{completedTasks}/{totalTasks}</span>
              </div>
              <button className="w-full bg-accent-peach/10 hover:bg-accent-peach/20 text-accent-peach py-2 px-4 rounded-lg transition-colors">
                View Project
              </button>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Button className="w-full">
            <FaBook className="mr-2" />
            Resume Course
          </Button>
          <Button className="w-full">
            <FaChartLine className="mr-2" />
            View Project Tracker
          </Button>
          <Button className="w-full">
            <FaHeart className="mr-2" />
            Update Profile
          </Button>
        </div>

        {/* Personal Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Learning Journey"
            subtitle="Your training progress"
            icon={FaBook}
            className="p-6 transform hover:scale-102 transition-all duration-300"
          >
            <div className="mt-4 space-y-4">
              <ProgressBar 
                progress={45} 
                showLabel 
                size="lg"
                color="bg-accent-yellow"
              />
              <p className="text-sm text-text-secondary">
                Next milestone: Complete Module 2
              </p>
            </div>
          </Card>

          <Card
            title="Weekly Goals"
            subtitle="Track your achievements"
            icon={FaStar}
            className="p-6 transform hover:scale-102 transition-all duration-300"
          >
            <div className="mt-4">
              <div className="text-4xl font-bold text-accent-yellow">4/5</div>
              <div className="text-sm text-text-secondary mt-1">
                Weekly goals completed
              </div>
              <div className="mt-3 flex space-x-1">
                {[1, 2, 3, 4, 5].map((goal) => (
                  <div
                    key={goal}
                    className={`w-full h-2 rounded-full transition-all duration-300 ${
                      goal <= 4 ? 'bg-accent-yellow' : 'bg-background-elevated'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>

          <Card
            title="Upcoming Tasks"
            subtitle="Stay on track"
            icon={FaCalendar}
            className="p-6 transform hover:scale-102 transition-all duration-300"
          >
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between group cursor-pointer">
                <span className="text-text-primary group-hover:text-accent-yellow transition-colors">
                  Complete Assessment
                </span>
                <span className="text-sm text-text-secondary">Today</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <span className="text-text-primary group-hover:text-accent-yellow transition-colors">
                  Review Module 2
                </span>
                <span className="text-sm text-text-secondary">Tomorrow</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Motivation Section */}
        <div className="mt-12">
          <Card className="p-6 bg-gradient-to-r from-background-secondary to-background-tertiary">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-background-elevated">
                <FaHeart className="w-6 h-6 text-accent-peach animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  Your Impact Matters
                </h3>
                <p className="text-text-secondary">
                  Every step you take brings positive change to your community
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-text-primary mb-6">Your Activity</h2>
          <Card className="p-0 divide-y divide-border-primary">
            {recentActivity.map((activity, index) => {
              return (
                <div 
                  key={activity.id} 
                  className="p-4 first:pt-5 last:pb-5 hover:bg-background-tertiary transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-background-elevated flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getActivityIcon(activity.type)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                title: 'Continue Training',
                icon: FaBook,
                color: 'text-accent-yellow',
                description: 'Resume your learning journey'
              },
              { 
                title: 'Track Progress',
                icon: FaChartLine,
                color: 'text-accent-peach',
                description: 'View your achievements'
              },
            ].map((action, index) => (
              <Card
                key={index}
                className="p-4 cursor-pointer group hover:transform hover:scale-102 transition-all duration-300"
                hover={true}
              >
                <div className="flex items-center">
                  <div className="rounded-full p-3 bg-background-elevated group-hover:bg-background-tertiary transition-colors duration-300">
                    <action.icon className={`w-5 h-5 ${action.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-text-primary group-hover:text-accent-yellow transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 