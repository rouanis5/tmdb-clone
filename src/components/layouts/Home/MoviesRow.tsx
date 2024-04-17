'use client'
import { tmdbDataType } from '../../../types/tmdb.type'
import Autoanimate from '../Autoanimate'
import MovieCard from './MovieCard'

export default function MoviesRow(props: { data?: tmdbDataType }) {
  return (
    <>
      <Autoanimate className="flex gap-x-5">
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
