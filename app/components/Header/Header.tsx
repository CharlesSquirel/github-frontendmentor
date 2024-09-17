import DarkmodeBtn from './DarkmodeBtn';

export default function Header() {
  return (
    <div className='flex justify-between w-full mb-[35px]'>
      <h1 className='font-bold text-[26px] text-heading dark:text-white_dark '>
        devfinder
      </h1>
      <DarkmodeBtn />
    </div>
  );
}
