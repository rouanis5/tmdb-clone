'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { NavDataType } from '@/types/moviesNav.type'
import { useEffect, useRef, useState } from 'react'

const MovieSliderNav = ({ navData }: { navData: NavDataType[] }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [activeCategoryId, setActiveCategoryId] = useState<number>(
    navData[0].id
  )
  const listItemRef = useRef<HTMLLIElement>(null)
  const categoryRef = useRef<HTMLAnchorElement>(null)

  const tag = searchParams.get('tag')

  function run(target: HTMLAnchorElement, id: number) {
    setActiveCategoryId(id)
    router.replace(target.href, {
      scroll: false,
    })
  }

  useEffect(() => {
    // marker style
    if (listItemRef.current && categoryRef.current) {
      listItemRef.current.style.width = categoryRef.current.offsetWidth + 'px'
      listItemRef.current.style.left = categoryRef.current.offsetLeft + 'px'
    }
  }, [listItemRef, categoryRef, activeCategoryId])

  useEffect(() => {
    const linkId = navData.find((link) => link.tag === tag)?.id || 1
    setActiveCategoryId(linkId)
  }, [tag])

  return (
    <ul className="relative flex w-fit overflow-hidden rounded-full border border-black">
      <li
        ref={listItemRef}
        className="absolute inset-y-0 -z-10 inline-block w-0 rounded-full bg-primary transition-all"
      />
      {navData.map(({ id, name, tag }) => {
        const refProp = id === activeCategoryId ? { ref: categoryRef } : {}
        const condiationalClass =
          id === activeCategoryId ? 'text-tertiary' : 'hover:bg-gray-300'
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
