type Menu = {
  id: string;
  title: string;
  path: string;
  icon: string;
};

type PrimaryMenu = Menu & {
  children?: Menu[];
};

type Menues = PrimaryMenu[];

export const menues: Menues = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    id: 'team',
    title: 'Team',
    path: '/team',
    icon: 'info',
    children: [
      {
        id: 'team-about',
        title: 'About',
        path: '/about',
        icon: 'info',
      },
      {
        id: 'team-members',
        title: 'team',
        path: '/members',
        icon: 'info',
      },
    ],
  },
  {
    id: 'attendance',
    title: 'Attendance',
    path: '/attendance',
    icon: 'info',
  },
];
