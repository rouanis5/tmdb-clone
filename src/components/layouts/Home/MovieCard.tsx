import { movieType } from '../../../types/tmdb.type'

type movieCardType = Pick<
  movieType,
  'title' | 'release_date' | 'poster_path' | 'vote_average'
>

const MovieCard = ({
  title,
  release_date,
  poster_path,
  vote_average,
}: movieCardType) => (
  <div className="w-40 flex-shrink-0">
    <img
      className="pointer-events-none w-full rounded-md shadow-sm"
      src={'https://image.tmdb.org/t/p/w500' + poster_path}
      alt={title + 'poster'}
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
        {vote_average * 10}
        <span className="mb-1 text-[.5em]">%</span>
      </span>
    </div>
    <div className="ml-2 mr-1">
      <a className="font-bold leading-5" href="#">
        {title}
      </a>
      <br />
      <a className="text-md font-light" href="#">
        {release_date}
      </a>
    </div>
  </div>
)

export default MovieCard