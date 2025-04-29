'use client';

import { FaHome, FaBook, FaChartBar, FaUser } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';

const navItems = [
  {
    icon: FaHome,
    label: 'Dashboard',
    href: '/small/dashboard',
  },
  {
    icon: FaBook,
    label: 'Training',
    href: '/small/training',
  },
  {
    icon: FaChartBar,
    label: 'Progress',
    href: '/small/progress',
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: '/small/profile',
  },
];

function SmallLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background-primary">
      <Sidebar edition="Small" navItems={navItems} />
      <main className={`transition-all duration-300 ${isCollapsed ? 'pl-20' : 'pl-64'}`}>
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function SmallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SmallLayoutContent>{children}</SmallLayoutContent>
    </SidebarProvider>
  );
} 