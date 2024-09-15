interface UserStatsProps {
  title: string;
  data: string;
}

export default function UserStatsColumn({
  title,
  data,
}: UserStatsProps) {
  return (
    <div className='flex flex-col'>
      <p className='text-[13px] text-darkGray'>
        {title}
      </p>
      <p className='font-bold text-[22px] text-black'>
        {data}
      </p>
    </div>
  );
}
