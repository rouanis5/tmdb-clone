// import { motion } from 'framer-motion'
import Image from 'next/image'
import { movieType } from '@/types/tmdb.type'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

type movieCardType = Pick<
  movieType,
  'title' | 'release_date' | 'poster_path' | 'vote_average'
>

function LikeBtn(props: { className?: string; name: string }) {
  return (
    <span className={props.className}>
      <Drawer>
        <DrawerTrigger>
          <span className="rounded-full size-7 bg-white grid place-items-center transition-colors hover:bg-neutral-200">
            <Heart className="size-4 text-red-700" />
          </span>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              Add `<i>{props.name}` to favorite movies </i>?
            </DrawerTitle>
            <DrawerDescription>
              This action can be undone at any time.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="secondary">Like</Button>
            <DrawerClose>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </span>
  )
}

function MovieCard({
  title,
  release_date,
  poster_path,
  vote_average,
}: movieCardType) {
  return (
    <div className="w-40 flex-shrink-0 relative">
      <LikeBtn
        className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"
        name={title}
      />
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
