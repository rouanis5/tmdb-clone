// import MovieSliderNav from './MoviesSliderNav'
import Container from '../Container'
import MovieCard from './MovieCard'
import SkeletonMovieCard from './SkeletonMovieCard'
import movieService from '../../../services/moviesService'
import { Suspense } from 'react'
// import { AnimatePresence } from 'framer-motion'

async function MoviesRow({ tag }: { tag?: string }) {
  const data = await movieService
    .fetchByTag(tag)
    .catch((e) => console.log({ e }))

  return (
    <>
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
    </>
  )
}

export default function MoviesSlider({ title }: { title: string }) {
  return (
    <div className="my-14">
      <Container className="mb-4 flex items-center gap-x-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {/* <MovieSliderNav navData={navData} /> */}
      </Container>
      <Container className="relative !px-0">
        <Container
          // drag='x'
          // dragConstraints={{right: 0, left: (-carousel.current?.scrollWidth + carousel.current?.offsetWidth)}}
          className="flex gap-x-5 overflow-x-auto overflow-y-hidden pt-3 pb-10"
        >
          {/* left white shadow */}
          <span className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-white/0 to-slate-100/100"></span>
          {/* right white shadow */}
          <span className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-white/0 to-slate-100/100"></span>
          <Suspense
            fallback={[...Array(10)].map((e, i) => (
              <SkeletonMovieCard key={i} />
            ))}
          >
            <MoviesRow />
          </Suspense>
          {/* <AnimatePresence> */}
        </Container>
      </Container>
    </div>
  )
}
