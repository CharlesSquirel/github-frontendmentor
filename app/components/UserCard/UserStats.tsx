import UserStatsColumn from './UserStatsColumn';

export default function UserStats() {
  return (
    <div className='flex mb-[37px] bg-lightGray rounded-[10px] gap-[90px] py-[15px] pl-[32px]'>
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
