import { list } from '../apis/movie'
import { useGetList } from './hookApi'

const useGetListMovie = () => {
  const { loading: loadingMovies, get, error, setError } = useGetList(list)
  return {
    loadingMovies,
    get,
    error,
    setError
  }
}

export { useGetListMovie }
