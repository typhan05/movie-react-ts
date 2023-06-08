import MovieList from './components/MovieList'
import SearchForm from './components/SearchForm'

const Home = () => {
  return (
    <div className='container mx-auto px-4'>
      <SearchForm />
      <MovieList />
    </div>
  )
}

export default Home
