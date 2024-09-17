interface UserNameProps {
  name: string;
}

export default function UserName({
  name,
}: UserNameProps) {
  return (
    <h2 className='font-bold sm:text-[26px] text-[13px] text-black dark:text-white_dark'>
      {name}
    </h2>
  );
}
