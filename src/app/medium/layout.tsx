'use client';

import { FaHome, FaBook, FaChartBar, FaUser, FaBuilding } from 'react-icons/fa';
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
    icon: FaChartBar,
    label: 'Progress',
    href: '/medium/progress',
  },
  {
    icon: FaBuilding,
    label: 'Organization',
    href: '/medium/organization',
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: '/medium/profile',
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
      <Sidebar edition="Medium" navItems={navItems} />
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