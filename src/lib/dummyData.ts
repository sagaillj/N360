import { User, Group, Organization, Project, Task, Course, CourseModule, MapPoint, MapNote } from '@/types';

// Dummy Users
export const dummyUsers: User[] = [
  { 
    id: '1', 
    name: 'John Doe', 
    email: 'john@example.com',
    role: 'individual' 
  },
  { 
    id: '2', 
    name: 'Jane Smith', 
    email: 'jane@example.com',
    role: 'org_admin' 
  },
  { 
    id: '3', 
    name: 'Mike Brown', 
    email: 'mike@example.com',
    role: 'org_admin' 
  },
  { 
    id: '4', 
    name: 'Sarah Johnson', 
    email: 'sarah@example.com',
    role: 'org_admin' 
  }
];

// Dummy Groups
export const dummyGroups: Group[] = [
  {
    id: '1',
    name: 'Downtown Community Group',
    description: 'A group focused on downtown community initiatives',
    members: [
      dummyUsers[0],
      dummyUsers[1]
    ],
    leader: dummyUsers[0],
    projects: []
  },
  {
    id: '2',
    name: 'Westside Initiative',
    description: 'A group focused on westside neighborhood projects',
    members: [
      dummyUsers[2],
      dummyUsers[3]
    ],
    leader: dummyUsers[2],
    projects: []
  }
];

// Dummy Organizations
export const dummyOrganizations: Organization[] = [
  {
    id: '1',
    name: 'First Baptist Church',
    description: 'A church committed to community transformation',
    address: '123 Main St, Louisville, KY',
    contactEmail: 'info@firstbaptist.org',
    members: [dummyUsers[1], dummyUsers[2]],
    admins: [dummyUsers[1]],
    groups: dummyGroups,
    projects: [],
  },
];

export const dummyCourse: Course = {
  id: 'course-1',
  title: 'Community Leadership Fundamentals',
  description: 'Learn the essentials of community leadership and engagement',
  modules: [
    {
      id: 'module-1',
      title: 'Introduction to Community Engagement',
      status: 'completed',
      progress: 100,
    },
    {
      id: 'module-2',
      title: 'Building Relationships',
      status: 'completed',
      progress: 100,
    },
    {
      id: 'module-3',
      title: 'Project Planning',
      status: 'in-progress',
      progress: 60,
    },
    {
      id: 'module-4',
      title: 'Resource Management',
      status: 'not-started',
      progress: 0,
    },
  ],
};

export const dummyProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Local Park Cleanup Initiative',
    description: 'Organizing community efforts to clean and maintain local parks',
    startDate: '2024-03-01',
    endDate: '2024-04-30',
    tasks: [
      {
        id: 'task-1',
        title: 'Volunteer Recruitment',
        status: 'completed',
        dueDate: '2024-03-15',
      },
      {
        id: 'task-2',
        title: 'Equipment Procurement',
        status: 'completed',
        dueDate: '2024-03-20',
      },
      {
        id: 'task-3',
        title: 'Schedule Planning',
        status: 'in-progress',
        dueDate: '2024-03-25',
      },
      {
        id: 'task-4',
        title: 'Execute Cleanup Day',
        status: 'not-started',
        dueDate: '2024-04-15',
      },
    ],
  },
];

// Dummy Map Points
export const dummyMapPoints: MapPoint[] = [
  {
    id: '1',
    latitude: 38.2527,
    longitude: -85.7585,
    address: '123 Maple St, Louisville, KY',
    notes: [
      {
        id: '1',
        content: 'Initial visit completed. Family interested in community garden.',
        author: dummyUsers[1],
        createdAt: new Date('2023-04-20'),
      },
    ],
    status: 'visited',
  },
  {
    id: '2',
    latitude: 38.2530,
    longitude: -85.7580,
    address: '456 Oak Ave, Louisville, KY',
    notes: [],
    status: 'not_visited',
  },
]; 