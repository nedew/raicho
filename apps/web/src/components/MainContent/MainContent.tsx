import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainContent: FC<Props> = ({ children }) => {
  return (
    <main
      className="
      bg-neutral-100 w-full h-[calc(100vh-calc(0.5rem*2))]
        border border-slate-250 border-solid py-4 px-content-side
      "
    >
      {children}
    </main>
  );
};
