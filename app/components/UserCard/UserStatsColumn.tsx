interface UserStatsProps {
  title: string;
  data: string;
}

export default function UserStatsColumn({
  title,
  data,
}: UserStatsProps) {
  return (
    <div className='flex flex-col md:gap-0 gap-2 items-center md:items-start'>
      <p className='md:text-[13px] text-[11px] text-darkGray dark:text-white_dark'>
        {title}
      </p>
      <p className='font-bold md:text-[22px] text-[16px] text-black dark:text-white_dark'>
        {data}
      </p>
    </div>
  );
}
