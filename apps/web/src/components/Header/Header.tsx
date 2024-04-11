import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <header
      className={
        'flex items-center justify-between h-[var(--header-height) px-2 py-2 border-l border-slate-200'
      }
    >
      <div className={'flex items-center'}>
        <h1 className={'text-xl font-bold text-slate-700'}>
          <a href="/">ページタイトル</a>
        </h1>
      </div>
      <div className={''} />
    </header>
  );
};
