'use client';

import { useUser } from '@/app/context/GithubSearchContext';

export default function SearchInput() {
  const { setUserSearch } = useUser();
  return (
    <input
      onChange={(e) =>
        setUserSearch(e.target.value)
      }
      type='text'
      className='caret-blue dark:text-white_dark sm:text-[18px] text-[13px] text-heading sm:w-[254px] w-[184px] outline-0 cursor-pointer bg-transparent placeholder:text-darkBlue placeholder:dark:text-white_dark'
      placeholder='Search GitHub username…'
    />
  );
}
