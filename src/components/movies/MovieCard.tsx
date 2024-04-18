// import { motion } from 'framer-motion'
import Image from 'next/image'
import { movieType } from '@/types/tmdb.type'

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
  return (
    // <motion.div
    //   layout="position"
    //   className="w-40 flex-shrink-0"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    // >
    <div className="w-40 flex-shrink-0">
      <Image
        className="pointer-events-none h-60 w-full object-contain rounded-md bg-gray-300 shadow-sm"
        width={160}
        height={338}
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={title + ' poster'}
      />
      <div
        className="daisy-radial-progress ml-2 -mt-7 mb-2 border-4 border-black bg-black text-sm text-green-500"
        style={
          {
            '--value': vote_average * 10,
            '--size': '2.3rem',
            '--thickness': '2px',
          } as React.CSSProperties
        }
      >
        <span className="text-white">
          {Math.ceil(vote_average * 10)}
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
    </div>
  )
}

export default MovieCard
