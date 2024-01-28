import { menues } from '@/config/menu.config';
import React, { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <aside className={'position-sticky w-[300px]'}>
      <div>Raicho</div>
      <div>
        <ul>
          {menues.map((menu) => (
            <li key={menu.id}>
              <div>
                <a href={menu.path}>{menu.title}</a>
                {menu.children && (
                  <ul>
                    {menu.children.map((child) => (
                      <li key={child.id}>
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
