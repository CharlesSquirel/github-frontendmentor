'use client';

import { useUser } from '@/app/context/GithubSearchContext';

export default function SubmitUserBtn() {
  const { fetchUser, userSearch } =
    useUser();
  const handleSubmit = (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    console.log(
      `userSearch in btn: ${userSearch}`
    );
    fetchUser(userSearch);
  };
  return (
    <button
      onClick={handleSubmit}
      type='submit'
      className='bg-blue hover:opacity-80 text-white_dark sm:w-[106px] sm:h-[50px] w-[84px] h-[46px] rounded-[10px] font-bold sm:text-[16px] text-[14px]'
    >
      Search
    </button>
  );
}
