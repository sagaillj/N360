'use client';

import React from 'react';
import { FaHome, FaBook, FaUsers, FaChartLine, FaUser, FaCog } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';

const navItems = [
  {
    icon: FaHome,
    label: 'Dashboard',
    href: '/medium/dashboard',
  },
  {
    icon: FaBook,
    label: 'Training',
    href: '/medium/training',
  },
  {
    icon: FaChartLine,
    label: 'Progress',
    href: '/medium/progress',
  },
  {
    icon: FaUsers,
    label: 'Teams',
    href: '/medium/teams',
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: '/medium/profile',
  },
  {
    icon: FaCog,
    label: 'Settings',
    href: '/medium/settings',
  },
];

function MediumLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background-primary">
      <Sidebar edition="Group" navItems={navItems} />
      <main className={`transition-all duration-300 ${isCollapsed ? 'pl-20' : 'pl-64'}`}>
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function MediumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <MediumLayoutContent>{children}</MediumLayoutContent>
    </SidebarProvider>
  );
}