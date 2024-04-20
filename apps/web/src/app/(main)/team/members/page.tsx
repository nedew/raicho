import { UserTable } from '@/components/UserTable/UserTable';
import { FC } from 'react';

const Members: FC = () => {
  return (
    <div>
      <h1>Members Page</h1>
      <UserTable users={[]} />
    </div>
  );
};

export default Members;
