interface UserBioProps {
  userBio?: string;
}

export default function UserBio({
  userBio,
}: UserBioProps) {
  return (
    <p className='text-darkGray sm:text-[15px] text-[13px] md:mb-[32px] mb-0 dark:text-white_dark'>
      {userBio}
    </p>
  );
}
