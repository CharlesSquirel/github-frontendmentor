interface UserBioProps {
  bio?: string;
}

export default function UserBio({
  bio,
}: UserBioProps) {
  return (
    <p className='text-darkGray md:text-[15px] text-[13px] md:mb-[32px] mb-0 dark:text-white_dark'>
      {bio
        ? bio
        : 'This profile has no bio'}
    </p>
  );
}
