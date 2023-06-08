import { useContext } from 'react'
import Card from '../../../../components/Card'
import { MovieContext } from '../../../../context/MovieContext'
import { Pagination } from '../../../../components/Pagination'
import Loading from '../../../../components/Loading'

const MovieList = () => {
  const { movies, loadingMovies, numberOfPages, currentPage, goToPage } = useContext<any>(MovieContext)
  return (
    <>
      {loadingMovies ? (
        <Loading />
      ) : (
        <>
          {movies ? (
            <div className='grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4'>
              {movies.map((movie: any) => {
                return (
                  <Card
                    key={movie.imdbID}
                    image={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    id={movie.imdbID}
                  />
                )
              })}
            </div>
          ) : (
            <p className='text-center text-gray-500 italic'>No movie result</p>
          )}
          {numberOfPages ? <Pagination currentPage={currentPage} goTo={goToPage} /> : null}
        </>
      )}
    </>
  )
}

export default MovieList
