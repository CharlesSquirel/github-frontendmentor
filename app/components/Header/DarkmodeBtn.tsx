'use client';

import {
  useEffect,
  useState,
} from 'react';
import MoonIcon from '@/app/icons/MoonIcon';
import SunIcon from '@/app/icons/SunIcon';

export default function DarkmodeBtn() {
  const [isDark, setIsDark] =
    useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentTheme =
        localStorage.getItem('theme');
      if (currentTheme === 'dark') {
        document.documentElement.classList.add(
          'dark'
        );
        setIsDark(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    const currentClasses =
      document.documentElement
        .classList;
    if (
      currentClasses.contains('dark')
    ) {
      currentClasses.remove('dark');
      localStorage.setItem(
        'theme',
        'light'
      );
      setIsDark(false);
    } else {
      currentClasses.add('dark');
      localStorage.setItem(
        'theme',
        'dark'
      );
      setIsDark(true);
    }
  };
  return (
    <div
      className={`flex gap-4 cursor-pointer group`}
    >
      <p
        className={`uppercase text-darkGray text-[13px] font-bold tracking-[2.5px] dark:text-white_dark
    ${
      !isDark
        ? 'group-hover:text-heading'
        : 'group-hover:text-lightModeHover'
    }`}
      >
        {!isDark ? 'Dark' : 'Light'}
      </p>
      <button
        type='button'
        onClick={toggleTheme}
        aria-label='Dark mode button'
      >
        {!isDark ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )}
      </button>
    </div>
  );
}
