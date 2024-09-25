import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import UserCard from './components/UserCard/UserCard';
import GithubUserProvider from './context/GithubSearchContext';

export default function Home() {
  return (
    <div
      className='flex flex-col sm:w-[573px] md:w-[730px] w-[327px] min-h-[613px]'
      data-testid='app'
    >
      <Header />
      <GithubUserProvider>
        <SearchForm />
        <UserCard />
      </GithubUserProvider>
    </div>
  );
}
