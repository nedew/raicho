import { IconType } from 'react-icons';
import { FiClock, FiHome, FiUsers } from 'react-icons/fi';

type Menu = {
  id: string;
  title: string;
  path: string;
};

type PrimaryMenu = Menu & {
  icon: IconType;
  children?: Menu[];
};

type Menues = PrimaryMenu[];

export const menues: Menues = [
  {
    id: 'home',
    title: 'ホーム',
    path: '/',
    icon: FiHome,
  },
  {
    id: 'team',
    title: 'チーム',
    path: '/team',
    icon: FiUsers,
    children: [
      {
        id: 'team-about',
        title: 'チームについて',
        path: '/about',
      },
      {
        id: 'team-members',
        title: 'メンバー',
        path: '/members',
      },
    ],
  },
  {
    id: 'attendance',
    title: '勤怠管理',
    path: '/attendance',
    icon: FiClock,
  },
];
