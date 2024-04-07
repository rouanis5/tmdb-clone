import { motion } from 'framer-motion'
import { movieType } from '../../../types/tmdb.type'
import { useMemo } from 'react'

type movieCardType = Pick<
  movieType,
  'title' | 'release_date' | 'poster_path' | 'vote_average'
>

const MovieCard = ({
  title,
  release_date,
  poster_path,
  vote_average,
}: movieCardType) => {
  const vote_percentage = useMemo(() => vote_average * 10, [vote_average])

  return (
    <motion.div
      layout="position"
      className="w-40 flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img
        className="pointer-events-none h-60 w-full rounded-md bg-gray-300 shadow-sm"
        loading="lazy"
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={title + ' poster'}
      />
      <div
        className="daisy-radial-progress ml-2 -mt-7 mb-2 border-4 border-black bg-black text-sm text-green-500"
        style={
          {
            '--value': vote_percentage,
            '--size': '2.3rem',
            '--thickness': '2px',
          } as React.CSSProperties
        }
      >
        <span className="text-white">
          {Math.ceil(vote_percentage)}
          <span className="mb-1 text-[.5em]">%</span>
        </span>
      </div>
      <div className="ml-2 mr-1">
        <a className="font-bold" href="#">
          {title}
        </a>
        <br />
        <a className="text-md font-light" href="#">
          {release_date}
        </a>
      </div>
    </motion.div>
  )
}

export default MovieCard
