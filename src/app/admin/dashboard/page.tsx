import React from 'react';

const dummyStats = [
  { label: 'Total Users', value: 128 },
  { label: 'Organizations', value: 12 },
  { label: 'Active Projects', value: 34 },
  { label: 'Reports', value: 7 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {dummyStats.map(stat => (
            <div key={stat.label} className="bg-background-secondary rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/admin/users" className="block bg-accent-primary text-white rounded-lg p-6 text-center font-semibold hover:bg-accent-secondary transition-colors">User Management</a>
          <a href="/admin/organizations" className="block bg-accent-primary text-white rounded-lg p-6 text-center font-semibold hover:bg-accent-secondary transition-colors">Organization Management</a>
          <a href="/admin/analytics" className="block bg-accent-primary text-white rounded-lg p-6 text-center font-semibold hover:bg-accent-secondary transition-colors">Analytics/Reports</a>
        </div>
      </div>
    </div>
  );
} 