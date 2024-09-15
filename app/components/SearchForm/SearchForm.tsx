import Image from 'next/image';
import searchImg from '../../assets/icon-search.svg';

export default function SearchForm() {
  return (
    <form className='p-3 mb-[24px] w-full flex bg-white rounded-[15px] dark:bg-gray_dark justify-between text-[18px] text-heading placeholder:text-darkBlue shadow-lg h-[69px] items-center'>
      <div className='flex items-center gap-6 pl-8'>
        <Image
          src={searchImg}
          alt={''}
          width={24}
          height={24}
        />
        <input
          type='text'
          className='caret-blue dark:text-white_dark text-[18px] text-heading w-[254px] outline-0 cursor-pointer placeholder:text-darkBlue'
          placeholder='Search GitHub username…'
        />
      </div>
      <div className='flex items-center gap-6'>
        <p
          role='alert'
          className='text-red font-bold text-[15px]'
        >
          No results
        </p>
        <button
          type='submit'
          className='bg-blue hover:opacity-80 text-white_dark w-[106px] h-[50px] rounded-[10px] font-bold text-[16px]'
        >
          Search
        </button>
      </div>
    </form>
  );
}
