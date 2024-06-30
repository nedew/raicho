import { menues } from '@/config/menu.config';
import Link from 'next/link';
import { FC } from 'react';

export const HeaderMenubar: FC = () => {
  return (
    <div className={'flex m-[-1px] gap-2'}>
      {menues.map((menu) => (
        <div key={menu.path} className={'px-3 py-2'}>
          <Link href={menu.path} className={'text-sm text-slate-600 hover:text-slate-800'}>
            {menu.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
