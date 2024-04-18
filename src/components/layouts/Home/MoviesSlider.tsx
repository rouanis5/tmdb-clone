import MovieSliderNav from './MoviesSliderNav'
import Container from '../Container'
import SkeletonMovieCard from './SkeletonMovieCard'
import { Suspense } from 'react'
import { NavDataType } from '../../../types/moviesNav.type'
import movieService from '../../../services/moviesService'
import MoviesRow from './MoviesRow'

const navData: NavDataType[] = [
  {
    id: 1,
    name: 'streaming',
    tag: 'pop',
  },
  {
    id: 3,
    name: 'For Rent',
    tag: 'rent',
  },
  {
    id: 4,
    name: 'In Theaters',
    tag: 'theater',
  },
]

async function AsyncMoviesRow(props: { tag?: string }) {
  const data = await movieService.fetchByTag(props.tag).catch((e) => null)

  if (data === null) {
    return <div>something went wrong!</div>
  }
  return <MoviesRow data={data} />
}

function MoviesRowFallback() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <SkeletonMovieCard key={i} />
      ))}
    </>
  )
}

export default function MoviesSlider({
  title,
  tag,
}: {
  title: string
  tag?: string
}) {
  return (
    <div className="my-14">
      <Container className="mb-4 flex items-center gap-x-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <MovieSliderNav navData={navData} />
      </Container>
      <Container className="relative !px-0">
        <Container className="flex gap-x-5 overflow-x-auto overflow-y-hidden pt-3 pb-10">
          {/* left white shadow */}
          <span className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-white/0 to-slate-100/100"></span>
          {/* right white shadow */}
          <span className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-white/0 to-slate-100/100"></span>
          <Suspense fallback={<MoviesRowFallback />}>
            {/* @ts-expect-error Server Component */}
            <AsyncMoviesRow tag={tag} />
          </Suspense>
        </Container>
      </Container>
    </div>
  )
}
