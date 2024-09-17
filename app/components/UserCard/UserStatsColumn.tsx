interface UserStatsProps {
  title: string;
  data: string;
}

export default function UserStatsColumn({
  title,
  data,
}: UserStatsProps) {
  return (
    <div className='flex flex-col sm:gap-0 gap-2 items-center sm:items-start'>
      <p className='sm:text-[13px] text-[11px] text-darkGray dark:text-white_dark'>
        {title}
      </p>
      <p className='font-bold sm:text-[22px] text-[16px] text-black dark:text-white_dark'>
        {data}
      </p>
    </div>
  );
}
