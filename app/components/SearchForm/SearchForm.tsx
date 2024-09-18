import Image from 'next/image';
import searchImg from '../../assets/icon-search.svg';
import SubmitUserBtn from './SubmitUserBtn';
import SearchInput from './SearchInput';
export default function SearchForm() {
  return (
    <form className='sm:p-3 py-2 pr-2 sm:mb-[24px] mb-[16px] w-full flex bg-white rounded-[15px] dark:bg-gray_dark justify-between text-[18px] text-heading placeholder:text-darkBlue shadow-lg h-[69px] items-center'>
      <div className='flex items-center sm:gap-6 md:pl-8 sm:pl-5 pl-4 gap-2'>
        <Image
          src={searchImg}
          alt={''}
          width={24}
          height={24}
          className='sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]'
        />
        <SearchInput />
      </div>
      <div className='flex items-center gap-6'>
        <p
          aria-live='polite'
          role='alert'
          className='text-red font-bold md:text-[15px] text-[13px] hidden md:block'
        >
          No results
        </p>
        <SubmitUserBtn />
      </div>
    </form>
  );
}
