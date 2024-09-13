export default function SearchForm() {
  return (
    <form className='w-full flex bg-white rounded-[15px] dark:bg-gray_dark justify-between text-[18px] text-heading placeholder:text-darkBlue'>
      <input
        type='text'
        className='outline-0 cursor-pointer'
        placeholder='Search GitHub username…'
      />
      <button
        type='submit'
        className='bg-blue text-white_dark w-[106px] h-[50px] rounded-[10px] font-bold text-[16px]'
      >
        Search
      </button>
    </form>
  );
}
