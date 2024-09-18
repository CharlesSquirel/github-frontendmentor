import UserStatsColumn from './UserStatsColumn';

interface UserStatsProps {
  followers?: string;
  following?: string;
  repos?: string;
}

export default function UserStats({
  followers,
  following,
  repos,
}: UserStatsProps) {
  return (
    <div className='flex mb-[37px] sm-[30px] bg-lightGray rounded-[10px] md:gap-[90px] py-[15px] px-[30px] sm:pl-[32px] dark:bg-background_dark justify-between md:justify-start'>
      <UserStatsColumn
        title='Repos'
        data={repos}
      />
      <UserStatsColumn
        title='Followers'
        data={followers}
      />
      <UserStatsColumn
        title='Following'
        data={following}
      />
    </div>
  );
}
