import Image from 'next/image';
import userMockImg from '../../assets/user.svg';
import locationImg from '../../assets/icon-location.svg';
import twitterImg from '../../assets/icon-twitter.svg';
import urlImg from '../../assets/icon-website.svg';
import companyImg from '../../assets/icon-company.svg';
import UserStats from './UserStats';
import UserInfo from './UserInfo';
import UserCardHeaderDesktop from './UserCardHeaderDesktop';
import UserCardHeaderMobile from './UserCardHeaderMobile';

export default function UserCard() {
  return (
    <article className='bg-white gap-[37px] sm:p-[40px] md:p-[48px] py-[32px] px-[24px] min-h-[419px] rounded-[15px] shadow-lg flex items-start dark:bg-gray_dark'>
      <Image
        src={userMockImg}
        alt="User's avatar"
        width={117}
        height={117}
        className='rounded-full hidden md:block'
      />
      <div className='flex flex-col sm:w-[493px] md:w-[480px] w-[279px]'>
        <UserCardHeaderMobile
          userDate='Joined 25 Jan 2011'
          userName='The Octocat'
          userTag='@octocat'
        />

        <UserCardHeaderDesktop
          userDate='Joined 25 Jan 2011'
          userName='The Octocat'
          userTag='@octocat'
        />

        <UserStats />

        <div className='flex md:flex-row flex-col md:gap-8 gap-4 items-centers'>
          <div className='flex flex-col md:gap-[20px] gap-4'>
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
          <div className='flex flex-col md:gap-[20px] gap-4'>
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
