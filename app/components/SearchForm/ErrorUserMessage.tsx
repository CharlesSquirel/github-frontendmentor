'use client';

import { useUser } from '@/app/context/GithubSearchContext';

export default function ErrorUserMessage() {
  const { githubUser } = useUser();

  return (
    <>
      {!githubUser && (
        <p
          aria-live='polite'
          role='alert'
          className='text-red font-bold md:text-[15px] text-[13px] hidden md:block'
        >
          No results
        </p>
      )}
    </>
  );
}
