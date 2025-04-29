'use client';

import React from 'react';
import { FaHome, FaBook, FaUsers, FaChartLine, FaBuilding, FaUser, FaCog } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';

const navItems = [
  {
    icon: FaHome,
    label: 'Dashboard',
    href: '/large/dashboard',
  },
  {
    icon: FaBook,
    label: 'Training',
    href: '/large/training',
  },
  {
    icon: FaChartLine,
    label: 'Progress',
    href: '/large/progress',
  },
  {
    icon: FaBuilding,
    label: 'Organization',
    href: '/large/organization',
  },
  {
    icon: FaUsers,
    label: 'Teams',
    href: '/large/teams',
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: '/large/profile',
  },
  {
    icon: FaCog,
    label: 'Settings',
    href: '/large/settings',
  },
];

function LargeLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background-primary">
      <Sidebar edition="Community" navItems={navItems} />
      <main className={`transition-all duration-300 ${isCollapsed ? 'pl-20' : 'pl-64'}`}>
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function LargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <LargeLayoutContent>{children}</LargeLayoutContent>
    </SidebarProvider>
  );
}