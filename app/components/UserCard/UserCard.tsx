import Image from 'next/image';
import userMockImg from '../../assets/user.svg';
import locationImg from '../../assets/icon-location.svg';
import twitterImg from '../../assets/icon-twitter.svg';
import urlImg from '../../assets/icon-website.svg';
import companyImg from '../../assets/icon-company.svg';
import UserStats from './UserStats';
import UserInfo from './UserInfo';

export default function UserCard() {
  return (
    <article className='bg-white gap-[37px] p-[48px] min-h-[419px] rounded-[15px] shadow-lg flex items-start'>
      <Image
        src={userMockImg}
        alt="User's avatar"
        width={117}
        height={117}
        className='rounded-full'
      />
      <div className='flex flex-col w-[480px]'>
        <div className='flex justify-between'>
          <h2 className='font-bold text-[26px] text-black dark:text-white'>
            The Octocat
          </h2>
          <p className='text-[15px] text-darkGray dark:text-white_dark'>
            Joined 25 Jan 2011
          </p>
        </div>
        <p className='text-blue mb-[20px]'>
          @octocat
        </p>
        <p className='text-darkGray text-[15px] mb-[32px]'>
          This profile has no bio
        </p>
        <UserStats />
        <div className='flex gap-8 items-centers'>
          <div className='flex flex-col gap-[20px]'>
            <UserInfo
              src={locationImg}
              text='San Francisco'
              width={14}
              height={20}
            />
            <UserInfo
              src={urlImg}
              text='https://github.blog'
              width={20}
              height={20}
              isLink
            />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <UserInfo
              src={twitterImg}
              text='Not Avaible'
              width={20}
              height={16}
            />
            <UserInfo
              src={companyImg}
              text='@github'
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
