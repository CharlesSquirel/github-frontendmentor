import UserName from './UserName';
import UserDate from './UserDate';
import UserTag from './UserTag';
import UserBio from './UserBio';
import { UserCardHeaderProps } from '@/app/utils/types';

export default function UserCardHeaderDesktop({
  userDate,
  userName,
  userTag,
  userBio,
}: UserCardHeaderProps) {
  return (
    <div className='hidden md:block'>
      <div className='md:justify-between flex'>
        <UserName name={userName} />
        <UserDate date={userDate} />
      </div>
      <UserTag tag={userTag} />
      <UserBio bio={userBio} />
    </div>
  );
}
