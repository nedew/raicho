import { menues } from '@/config/menu.config';
import React, { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <aside className={'position-sticky w-[280px]'}>
      <div className={'flex items-center px-4 py-4'}>
        <h1 className={'text-2xl font-bold text-slate-700'}>
          <a href="/">Raicho</a>
        </h1>
      </div>
      <div className={'px-4 py-2'}>
        <ul>
          {menues.map((menu) => (
            <li className={'pb-2'} key={menu.id}>
              <div className={'text-slate-500'}>
                <a href={menu.path} className={'block pb-2 last:pb-0'}>
                  {menu.title}
                </a>
                {menu.children && (
                  <ul className={'pl-5'}>
                    {menu.children.map((child) => (
                      <li className={'pb-2 last:pb-0'} key={child.id}>
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
