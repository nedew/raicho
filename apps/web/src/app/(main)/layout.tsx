import { MainContent } from '@/components/MainContent/MainContent';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={'flex flex-grow-1'}>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default MainLayout;
