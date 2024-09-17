import Image from 'next/image';
import moonImg from '../../assets/icon-moon.svg';

export default function Header() {
  return (
    <div className='flex justify-between w-full mb-[35px]'>
      <h1 className='font-bold text-[26px] text-heading dark:text-white_dark '>
        devfinder
      </h1>
      <div className='flex gap-4'>
        <p className='uppercase text-darkGray text-[13px] font-bold tracking-[2.5px] dark:text-white_dark'>
          Dark
        </p>
        <button type='button'>
          <Image
            src={moonImg}
            alt='Switch color mode button'
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
