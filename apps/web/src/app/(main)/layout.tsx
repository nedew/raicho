import Sidebar from '@/components/Sidebar';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
