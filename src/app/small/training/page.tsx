'use client';

import React from 'react';
import { FaBook, FaCheckCircle, FaClock, FaStar, FaPlay } from 'react-icons/fa';
import Card from '@/components/Card';

interface CourseModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'not-started';
}

const courseModules: CourseModule[] = [
  {
    id: 1,
    title: 'Foundations of Personal Growth',
    description: 'Master the fundamentals of self-development and goal setting',
    duration: '2 hours',
    progress: 100,
    status: 'completed',
  },
  {
    id: 2,
    title: 'Effective Communication Skills',
    description: 'Learn to express yourself clearly and build stronger relationships',
    duration: '3 hours',
    progress: 60,
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Time Management Mastery',
    description: 'Optimize your productivity and achieve work-life balance',
    duration: '2.5 hours',
    progress: 0,
    status: 'not-started',
  },
];

const recommendedCourses = [
  {
    title: 'Leadership Essentials',
    description: 'Develop core leadership skills for personal growth',
    duration: '4 hours',
  },
  {
    title: 'Emotional Intelligence',
    description: 'Enhance your EQ for better relationships',
    duration: '3 hours',
  },
];

export default function TrainingPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Learning Journey</h1>
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium">120 XP Earned</span>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FaBook className="text-primary" />
          Current Modules
        </h2>
        <div className="grid gap-6">
          {courseModules.map((module) => (
            <Card key={module.id} className="transform transition-all hover:scale-[1.01]">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{module.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{module.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaClock className="mr-1" />
                      {module.duration}
                    </div>
                    {module.status === 'completed' && (
                      <FaCheckCircle className="text-green-500 text-xl" />
                    )}
                    {module.status === 'in-progress' && (
                      <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Progress: {module.progress}%
                  </div>
                </div>
                {module.status !== 'completed' && (
                  <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    <FaPlay className="text-sm" />
                    {module.status === 'in-progress' ? 'Continue Learning' : 'Start Module'}
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendedCourses.map((course, index) => (
            <Card key={index} className="transform transition-all hover:scale-[1.01]">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaClock className="mr-1" />
                    {course.duration}
                  </div>
                  <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                    Add to My Path
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 