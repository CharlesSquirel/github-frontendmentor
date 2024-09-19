import Image from 'next/image';

interface UserInfoProps {
  src: string;
  text?: string;
  width: number;
  height: number;
  isLink?: boolean;
}

export default function UserInfo({
  src,
  text,
  width,
  height,
  isLink,
}: UserInfoProps) {
  return (
    <div className='flex gap-[16px] items-center'>
      <Image
        src={src}
        alt=''
        width={width}
        height={height}
      />
      <p
        className={`${
          isLink
            ? 'underline cursor-pointer hover:opacity-85'
            : ''
        } sm:text-[15px] text-[13px] text-darkBlue dark:text-white_dark`}
      >
        {isLink ? (
          <a href={text}>{text}</a>
        ) : (
          text
        )}
      </p>
    </div>
  );
}
