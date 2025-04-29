'use client';

import React from 'react';
import {
  FaBook,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaPlay,
  FaUserFriends,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface GroupModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  totalParticipants: number;
  activeParticipants: number;
  progress: number;
  status: 'completed' | 'in-progress' | 'not-started';
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  progress: number;
  lastActive: string;
}

const groupModules: GroupModule[] = [
  {
    id: 1,
    title: 'Team Communication Essentials',
    description: 'Master effective team communication and collaboration strategies',
    duration: '4 hours',
    totalParticipants: 12,
    activeParticipants: 8,
    progress: 75,
    status: 'in-progress',
  },
  {
    id: 2,
    title: 'Group Project Management',
    description: 'Learn to plan, execute, and deliver successful group projects',
    duration: '6 hours',
    totalParticipants: 12,
    activeParticipants: 10,
    progress: 45,
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Conflict Resolution Workshop',
    description: 'Develop skills to handle team conflicts professionally',
    duration: '3 hours',
    totalParticipants: 12,
    activeParticipants: 0,
    progress: 0,
    status: 'not-started',
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Team Lead',
    avatar: '/avatars/sarah.jpg',
    progress: 85,
    lastActive: '2 hours ago',
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Developer',
    avatar: '/avatars/mike.jpg',
    progress: 65,
    lastActive: '1 hour ago',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Designer',
    avatar: '/avatars/emma.jpg',
    progress: 70,
    lastActive: '30 minutes ago',
  },
];

export default function TrainingPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Group Training Portal</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Collaborate and grow together as a team
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium">Team Progress: 65%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Active Modules */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <FaBook className="text-primary" />
                Active Training Modules
              </h2>
              <div className="space-y-6">
                {groupModules.map((module) => (
                  <div
                    key={module.id}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-4"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {module.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <FaClock className="mr-1" />
                          {module.duration}
                        </div>
                        {module.status === 'completed' && (
                          <FaCheckCircle className="text-green-500 text-xl" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-primary" />
                        <span>
                          {module.activeParticipants}/{module.totalParticipants} Participating
                        </span>
                      </div>
                      <span>{module.progress}% Complete</span>
                    </div>

                    <ProgressBar
                      progress={module.progress}
                      className="h-2"
                    />

                    {module.status !== 'completed' && (
                      <div className="flex justify-end">
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                          <FaPlay className="text-sm" />
                          {module.status === 'in-progress' ? 'Continue Module' : 'Start Module'}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Team Progress */}
        <div className="space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <FaUserFriends className="text-primary" />
                Team Progress
              </h2>
              <div className="space-y-6">
                {teamMembers.map((member) => (
                  <div key={member.id} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {member.role}
                        </div>
                      </div>
                    </div>
                    <ProgressBar
                      progress={member.progress}
                      className="h-1.5"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>{member.progress}% Complete</span>
                      <span>Last active: {member.lastActive}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <FaChalkboardTeacher className="text-primary" />
                Upcoming Sessions
              </h2>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="font-medium">Team Communication Workshop</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Tomorrow, 2:00 PM
                  </div>
                  <div className="text-sm text-primary mt-2">8 team members attending</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="font-medium">Project Management Review</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Friday, 11:00 AM
                  </div>
                  <div className="text-sm text-primary mt-2">10 team members attending</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 