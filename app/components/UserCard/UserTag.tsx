interface UserTagProps {
  tag?: string;
}

export default function UserTag({
  tag,
}: UserTagProps) {
  return (
    <p className='text-blue md:mb-[20px] mb-[5px] sm:text-[16px] text-[13px]'>
      {tag ? tag : '@octocat'}
    </p>
  );
}
