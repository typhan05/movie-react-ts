import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MovieContext } from '../../context/MovieContext'
import Loading from '../../components/Loading'
import { noImage } from '../../utils/helper'

const Detail = () => {
  let { id } = useParams()
  const { showDetail, selectedMovie, loadingMovies } = useContext<any>(MovieContext)
  useEffect(() => {
    showDetail(id)
  }, [])

  return (
    <div className='container mx-auto px-4'>
      {loadingMovies ? (
        <Loading />
      ) : (
        <div className='grid md:grid-cols-4 md:gap-8 gap-4'>
          {selectedMovie ? (
            <>
              <div className='col-span-1'>
                {selectedMovie.Poster === 'N/A' ? (
                  <img src={noImage} alt={selectedMovie.Title} />
                ) : (
                  <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                )}
              </div>
              <div className='col-span-3'>
                <p className='text-2xl font-bold mb-4'>{selectedMovie.Title}</p>
                <p className='text-gray-400 mb-2'>{selectedMovie.Plot}</p>
                <div className='flex font-bold mb-2'>
                  Released: <p className='ml-2 font-normal text-gray-400'>{selectedMovie.Released}</p>
                </div>
                <div className='flex font-bold mb-2'>
                  Runtime: <p className='ml-2 font-normal text-gray-400'>{selectedMovie.Runtime}</p>
                </div>
                <div className='flex font-bold mb-2'>
                  Genre: <p className='ml-2 font-normal text-gray-400'>{selectedMovie.Genre}</p>
                </div>

                <div className='flex font-bold mb-2'>
                  IMDB Rating: <p className='ml-2 font-normal text-gray-400'>{selectedMovie.imdbRating}</p>
                </div>

                <div className='flex font-bold mb-2'>
                  Director(s): <p className='ml-2 font-normal text-gray-400'>{selectedMovie.Director}</p>
                </div>

                <div className='flex font-bold mb-2'>
                  Writer(s): <p className='ml-2 font-normal text-gray-400'>{selectedMovie.Writer}</p>
                </div>

                <div className='flex font-bold mb-2'>
                  Language(s): <p className='ml-2 font-normal text-gray-400'>{selectedMovie.Language}</p>
                </div>
              </div>
            </>
          ) : (
            <p>No detail</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Detail
