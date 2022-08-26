import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { fetchPopStreaming } from '../../../reducers/popularMoviesSlice'
import Container from '../Container'
import MovieCard from './MovieCard'

function MoviesSlider() {
  const { data, loading, error } = useAppSelector((state) => state.popular)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPopStreaming())
  }, [])

  return (
    <Container className="py-14 xl:px-0">
      {loading && 'loading'}
      {error && <h2>{error}</h2>}
      <div className="w-full overflow-x-auto pb-10">
        <div
          // drag='x'
          // dragConstraints={{right: 0, left: (-carousel.current?.scrollWidth + carousel.current?.offsetWidth)}}
          className="flex gap-x-5"
        >
          {data?.results?.map(
            ({
              id,
              title: t,
              release_date: rd,
              poster_path: pp,
              vote_average: va,
            }) => (
              <MovieCard
                key={id}
                title={t}
                release_date={rd}
                poster_path={pp}
                vote_average={va}
              />
            )
          )}
        </div>
      </div>
    </Container>
  )
}

export default MoviesSlider
