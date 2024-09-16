import UserStatsColumn from './UserStatsColumn';

export default function UserStats() {
  return (
    <div className='flex mb-[37px] bg-lightGray rounded-[10px] md:gap-[90px] py-[15px] px-[30px] md:pl-[32px] dark:bg-background_dark justify-between md:justify-start'>
      <UserStatsColumn
        title='Repos'
        data='8'
      />
      <UserStatsColumn
        title='Followers'
        data='3938'
      />
      <UserStatsColumn
        title='Following'
        data='9'
      />
    </div>
  );
}
