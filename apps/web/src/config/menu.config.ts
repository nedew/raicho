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
    title: 'ホーム',
    path: '/',
    icon: 'home',
  },
  {
    id: 'team',
    title: 'チーム',
    path: '/team',
    icon: 'info',
    children: [
      {
        id: 'team-about',
        title: 'チームについて',
        path: '/about',
        icon: 'info',
      },
      {
        id: 'team-members',
        title: 'メンバー',
        path: '/members',
        icon: 'info',
      },
    ],
  },
  {
    id: 'attendance',
    title: '勤怠管理',
    path: '/attendance',
    icon: 'info',
  },
];
