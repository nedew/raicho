import { HeaderMenubar } from '@/components/Header/HeaderMenubar';
import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className={'border-l border-slate-200'}>
      <div className={'flex items-center pt-4 pb-2 px-content-side'}>
        <h1 className={'text-xl font-bold text-slate-700'}>
          <a href="/">Raicho</a>
        </h1>
      </div>
      <div className={'px-3'}>
        <HeaderMenubar />
      </div>
    </header>
  );
};
