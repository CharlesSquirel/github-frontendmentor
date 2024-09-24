interface UserDateProps {
  date?: string;
}

export default function UserDate({
  date,
}: UserDateProps) {
  return (
    <p className='sm:text-[15px] text-[13px] text-darkGray dark:text-white_dark'>
      {date}
    </p>
  );
}
