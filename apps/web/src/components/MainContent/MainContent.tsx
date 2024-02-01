import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainContent: FC<Props> = ({ children }) => {
  return (
    <main
      className="
      bg-white my-2 mr-2 rounded-xl w-full h-[calc(100vh-calc(0.5rem*2))]
        border border-slate-250 border-solid p-4
      "
      // shadow-[0_0_5px_0_rgba(0,0,0,0.1),0_1px_1px_-1px_rgba(0,0,0,0.1)]
    >
      {children}
    </main>
  );
};
