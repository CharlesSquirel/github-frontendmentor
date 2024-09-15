import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import UserCard from './components/UserCard/UserCard';

export default function Home() {
  return (
    <div className='flex flex-col w-[730px]'>
      <Header />
      <SearchForm />
      <UserCard />
    </div>
  );
}
