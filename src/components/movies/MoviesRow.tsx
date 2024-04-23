'use client'
import { tmdbDataType } from '@/types/tmdb.type'
import Autoanimate from '@/components/layouts/Autoanimate'
import MovieCard from '@/components/movies/MovieCard'

export default function MoviesRow(props: { data?: tmdbDataType }) {
  return (
    <>
      <Autoanimate className="flex  gap-x-5">
        {props.data?.results?.map(
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
      </Autoanimate>
    </>
  )
}
