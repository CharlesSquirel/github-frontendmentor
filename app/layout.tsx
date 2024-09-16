import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const space_mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title:
    'Frontend Mentor | GitHub user search app',
  description:
    'Frontend Mentor | GitHub user search app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${space_mono.className} antialiased bg-lightGray dark:bg-background_dark md:grid h-screen md:place-items-center text-[15px] leading-[25px] text-black dark:text-white_dark px-[24px] md:px-0 pt-[31px] md:pt-0 pb-[70px] md:pb-0`}
      >
        {children}
      </body>
    </html>
  );
}
