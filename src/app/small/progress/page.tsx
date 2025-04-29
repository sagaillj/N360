'use client';

import React from 'react';
import { FaTrophy, FaChartLine, FaCheckCircle, FaStopwatch, FaMedal, FaLightbulb } from 'react-icons/fa';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

interface SkillProgress {
  skill: string;
  level: number;
  progress: number;
  recentGain: number;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: JSX.Element;
}

const skillProgress: SkillProgress[] = [
  { skill: 'Personal Development', level: 3, progress: 75, recentGain: 15 },
  { skill: 'Communication', level: 2, progress: 45, recentGain: 10 },
  { skill: 'Time Management', level: 1, progress: 30, recentGain: 5 },
];

const recentAchievements: Achievement[] = [
  {
    title: 'Fast Learner',
    description: 'Completed 3 modules in record time',
    date: '2 days ago',
    icon: <FaStopwatch className="text-blue-500" />,
  },
  {
    title: 'Milestone Reached',
    description: 'Achieved Level 3 in Personal Development',
    date: '1 week ago',
    icon: <FaMedal className="text-yellow-500" />,
  },
  {
    title: 'Insight Master',
    description: 'Shared 5 valuable insights with the community',
    date: '2 weeks ago',
    icon: <FaLightbulb className="text-purple-500" />,
  },
];

const weeklyStats = {
  xpGained: 120,
  hoursSpent: 8.5,
  tasksCompleted: 12,
  streakDays: 5,
};

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Growth Journey</h1>
        <div className="flex items-center space-x-2">
          <FaTrophy className="text-yellow-400" />
          <span className="text-sm font-medium">Level 3 Achiever</span>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-full md:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaChartLine className="text-primary" />
              Weekly Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary">{weeklyStats.xpGained}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">XP Gained</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary">{weeklyStats.hoursSpent}h</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Time Invested</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary">{weeklyStats.tasksCompleted}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Tasks Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary">{weeklyStats.streakDays}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Day Streak</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="md:col-span-1">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Skill Progress</h2>
            <div className="space-y-6">
              {skillProgress.map((skill) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Level {skill.level}
                    </span>
                  </div>
                  <ProgressBar
                    progress={skill.progress}
                    className="h-2"
                  />
                  <div className="text-sm text-green-600 dark:text-green-400">
                    +{skill.recentGain}% this week
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="md:col-span-1">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transform transition-all hover:scale-[1.02]"
                >
                  <div className="p-2 rounded-full bg-white dark:bg-gray-700">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-gray-500">{achievement.date}</span>
                  </div>
                  <FaCheckCircle className="text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
} 