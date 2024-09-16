import Image from 'next/image';
import userMockImg from '../../assets/user.svg';
import UserName from './UserName';
import UserTag from './UserTag';
import UserDate from './UserDate';
import { UserCardHeaderProps } from '@/app/utils/types';
import UserBio from './UserBio';

export default function UserCardHeaderMobile({
  userName,
  userTag,
  userDate,
}: UserCardHeaderProps) {
  return (
    <div className='md:hidden mb-[23px]'>
      <div className='flex gap-5 mb-[33px]'>
        <Image
          src={userMockImg}
          alt="User's avatar"
          width={70}
          height={70}
          className='rounded-full w-[70px] h-[70px]'
        />

        <div className='flex flex-col'>
          <UserName name={userName} />
          <UserTag tag={userTag} />
          <UserDate date={userDate} />
        </div>
      </div>
      <UserBio />
    </div>
  );
}
