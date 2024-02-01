import { menues } from '@/config/menu.config';
import React, { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <aside className={'position-sticky w-[300px]'}>
      <div className={'flex items-center px-4 py-4'}>
        <h1 className={'text-2xl font-bold text-slate-700'}>
          <a href="/">Raicho</a>
        </h1>
      </div>
      <div className={'px-4 py-2'}>
        <ul>
          {menues.map((menu) => (
            <li key={menu.id}>
              <div className={'text-slate-600'}>
                <div
                  className={
                    'flex items-center text-base p-2 rounded-lg border border-transparent hover:bg-white hover:border-slate-200'
                  }
                >
                  <i className={'text-lg pr-2'}>
                    <menu.icon />
                  </i>
                  <a href={menu.path} className={'block p-2 last:p-0'}>
                    {menu.title}
                  </a>
                </div>
                {menu.children && (
                  <ul className={'pl-4 ml-4 border-l border-slate-300'}>
                    {menu.children.map((child) => (
                      <li className={'p-2'} key={child.id}>
                        <a href={child.path}>{child.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
