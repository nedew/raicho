import { Header } from '@/components/Header/Header';
import { MainContent } from '@/components/MainContent/MainContent';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={'flex flex-col w-full'}>
        <Header />
        <MainContent>{children}</MainContent>
      </div>
    </>
  );
};

export default MainLayout;
