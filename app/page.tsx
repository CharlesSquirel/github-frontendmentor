import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';

export default function Home() {
  return (
    <div className='flex flex-col gap-5 w-[730px]'>
      <Header />
      <SearchForm />
    </div>
  );
}
