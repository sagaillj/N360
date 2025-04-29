'use client';

import React from 'react';
import {
  FaUser,
  FaCamera,
  FaChartLine,
  FaCertificate,
  FaCalendarAlt,
  FaCreditCard,
  FaFileInvoice,
  FaCheckCircle,
} from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface Achievement {
  name: string;
  date: string;
  description: string;
}

interface BillingHistory {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  invoice: string;
}

const achievements: Achievement[] = [
  {
    name: 'First Module Completed',
    date: 'Jan 2024',
    description: 'Completed the Introduction to Leadership module',
  },
  {
    name: 'Perfect Score',
    date: 'Feb 2024',
    description: 'Achieved 100% on Communication Skills assessment',
  },
  {
    name: 'Quick Learner',
    date: 'Mar 2024',
    description: 'Completed 5 modules ahead of schedule',
  },
];

const skills = [
  { name: 'Leadership Fundamentals', level: 75 },
  { name: 'Communication', level: 85 },
  { name: 'Problem Solving', level: 70 },
  { name: 'Team Collaboration', level: 80 },
];

const billingHistory: BillingHistory[] = [
  {
    id: '1',
    date: '2024-05-01',
    amount: 99,
    status: 'paid',
    invoice: 'INV-2024-001',
  },
  {
    id: '2',
    date: '2024-04-01',
    amount: 99,
    status: 'paid',
    invoice: 'INV-2024-002',
  },
];

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Information */}
        <Card className="md:col-span-2">
          <div className="p-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img
                  src="/avatars/profile.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                  <FaCamera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Alex Thompson</h2>
                    <p className="text-gray-600 dark:text-gray-300">Individual Learner</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FaCalendarAlt className="text-primary" />
                    <span>Member since January 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Aspiring leader focused on developing essential management and communication skills.
                Committed to personal growth and professional development.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Skills Progress</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <ProgressBar
                      progress={skill.level}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaCertificate className="text-primary" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="font-medium">{achievement.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {achievement.description}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">{achievement.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Billing Section - Full Width */}
        <Card className="md:col-span-3">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaCreditCard className="text-primary" />
                Subscription & Billing
              </h2>
            </div>

            {/* Current Subscription */}
            <div className="mb-8">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Small Edition</span>
                  <span className="text-green-500 flex items-center gap-1">
                    <FaCheckCircle className="w-4 h-4" />
                    Active
                  </span>
                </div>
                <div className="text-2xl font-bold mb-2">$99/month</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Next billing date: June 1, 2024
                </div>
                <div className="mt-4">
                  <button className="px-3 py-1 text-sm text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>

            {/* Billing History */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Invoice</th>
                      <th className="pb-3 font-medium">Amount</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingHistory.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <td className="py-4">
                          {new Date(item.date).toLocaleDateString()}
                        </td>
                        <td className="py-4">{item.invoice}</td>
                        <td className="py-4">${item.amount}</td>
                        <td className="py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-sm ${
                              item.status === 'paid'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                : item.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                                : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button className="text-primary hover:text-primary/80 transition-colors">
                            <FaFileInvoice className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 