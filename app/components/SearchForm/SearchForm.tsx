import Image from 'next/image';
import searchImg from '../../assets/icon-search.svg';

export default function SearchForm() {
  return (
    <form className='md:p-3 py-2 pr-2 md:mb-[24px] mb-[16px] w-full flex bg-white rounded-[15px] dark:bg-gray_dark justify-between text-[18px] text-heading placeholder:text-darkBlue shadow-lg h-[69px] items-center'>
      <div className='flex items-center md:gap-6 md:pl-8 pl-4 gap-2'>
        <Image
          src={searchImg}
          alt={''}
          width={24}
          height={24}
          className='md:w-[24px] md:h-[24px] w-[20px] h-[20px]'
        />
        <input
          type='text'
          className='caret-blue dark:text-white_dark md:text-[18px] text-[13px] text-heading md:w-[254px] w-[184px] outline-0 cursor-pointer placeholder:text-darkBlue'
          placeholder='Search GitHub username…'
        />
      </div>
      <div className='flex items-center gap-6'>
        <p
          role='alert'
          className='text-red font-bold md:text-[15px] text-[13px] hidden md:block'
        >
          No results
        </p>
        <button
          type='submit'
          className='bg-blue hover:opacity-80 text-white_dark md:w-[106px] md:h-[50px] w-[84px] h-[46px] rounded-[10px] font-bold md:text-[16px] text-[14px]'
        >
          Search
        </button>
      </div>
    </form>
  );
}
