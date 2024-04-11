import { Header } from '@/components/Header/Header';
import { MainContent } from '@/components/MainContent/MainContent';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={'flex flex-grow-1'}>
        <Sidebar />
        <div className={'flex flex-col w-full'}>
          <Header />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
