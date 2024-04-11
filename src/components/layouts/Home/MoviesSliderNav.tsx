'use client'
import { useRouter } from 'next/navigation'
import { NavDataType } from '../../../types/moviesNav.type'
import { useEffect, useRef, useState } from 'react'

const MovieSliderNav = ({ navData }: { navData: NavDataType[] }) => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<number>(navData[0].id)
  const marker = useRef<HTMLLIElement>(null)
  const currentCartegory = useRef<HTMLAnchorElement>(null)

  const run = (target: HTMLAnchorElement, id: number) => {
    setActiveCategory(id)
    router.replace(target.href, {
      scroll: false,
    })

    // marker style
    if (marker.current) {
      marker.current.style.width = target.offsetWidth + 'px'
      marker.current.style.left = target.offsetLeft + 'px'
    }
  }

  useEffect(() => {
    if (currentCartegory.current) {
      const { tag } = navData.filter((el) => el.id === activeCategory)[0]
      run(currentCartegory.current, activeCategory)
    }
  }, [])

  return (
    <ul className="relative flex overflow-hidden rounded-full border border-black">
      <li
        ref={marker}
        className="absolute inset-y-0 -z-10 inline-block w-0 rounded-full bg-primary transition-all "
      />
      {navData.map(({ id, name, tag }) => {
        const refProp = id === activeCategory ? { ref: currentCartegory } : {}
        const condiationalClass =
          id === activeCategory ? 'text-tertiary' : 'hover:bg-gray-300'
        return (
          <li key={id}>
            <a
              className={`inline-block rounded-full py-1 px-4 text-sm font-semibold capitalize ${condiationalClass}`}
              href={`?${new URLSearchParams({ tag: tag })}`}
              onClick={(e) => {
                e.preventDefault()
                run(e.target as HTMLAnchorElement, id)
              }}
              {...refProp}
            >
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default MovieSliderNav
