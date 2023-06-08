import { createContext, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useGetListMovie } from '../services/hooks/hookMovie'
import { PLOT_DEFAULT, TYPE_DEFAULT, YEAR_DEFAULT } from './const'
import { IFormInputs, Movie, ParamType } from './type'
export const MovieContext = createContext({})

const MovieApp = ({ children }: any) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { get: getMovies, loadingMovies } = useGetListMovie()
  const form = useForm<IFormInputs>()

  //params
  const [params, setParams] = useState<ParamType>({
    type: TYPE_DEFAULT,
    y: YEAR_DEFAULT,
    plot: PLOT_DEFAULT,
    page: 1
  })

  //pagination
  const [totalResults, setTotalResults] = useState<number>(0)
  const [numberOfPages, setNumberOfPages] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>()

  const getNumberOfPages = () => {
    if (totalResults % 10 > 0) {
      const numberOfpages = totalResults / 10 + 1
      setNumberOfPages(numberOfpages)
      return
    }
    const numberOfpages = totalResults / 10
    setNumberOfPages(numberOfpages)
  }

  // go to page pagination
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    fetchMovies(params, pageNumber)
    window.scrollTo(0, 0)
  }

  /**
   Fetch data movies
  */
  const fetchMovies = useCallback(
    async (params: ParamType, pageNumber?: number) => {
      if (pageNumber) {
        const data = await getMovies({
          searchOption: {
            s: params.s,
            type: params.type,
            y: params.y,
            plot: params.plot,
            page: pageNumber
          }
        })
        setMovies(data.Search)
        setTotalResults(data.totalResults)
      } else {
        const data = await getMovies({
          searchOption: {
            s: params.s,
            type: params.type,
            y: params.y,
            plot: params.plot,
            page: params.page
          }
        })
        setMovies(data.Search)
        setTotalResults(data.totalResults)
        setCurrentPage(1)
      }
    },
    [getMovies]
  )

  /**
   Get movies selected
  */
  const showDetail = async (i: ParamType) => {
    const data = await getMovies({
      searchOption: {
        i
      }
    })
    setSelectedMovie(data)
  }

  /**
   * The function updates the parameters with values from a form.
   */
  const onSubmit = () => {
    setParams((pre: ParamType) => {
      return {
        ...pre,
        s: form.getValues('search'),
        type: form.getValues('type') || TYPE_DEFAULT,
        y: form.getValues('year') || YEAR_DEFAULT,
        plot: form.getValues('plot') || PLOT_DEFAULT
      }
    })
  }

  useEffect(() => {
    getNumberOfPages()
  })

  useEffect(() => {
    if (params?.s) {
      fetchMovies(params)
    }
  }, [params])

  useEffect(() => {
    const pages = []

    if (!numberOfPages) return
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(
        <p key={i} onClick={(e) => goToPage(i)}>
          {i}
        </p>
      )
    }
  }, [numberOfPages])

  return (
    <MovieContext.Provider
      value={{
        onSubmit,
        showDetail,
        goToPage,
        form,
        movies,
        selectedMovie,
        loadingMovies,
        numberOfPages,
        currentPage
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieApp
