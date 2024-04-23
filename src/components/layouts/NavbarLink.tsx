import { LinkPropsType } from '@/types/links.type'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const NavbarLink = ({ name, url, subLinks }: LinkPropsType) => {
  return (
    <li className="group relative inline-block p-2 capitalize">
      <Link
        href={url}
        className="font-semibold text-white flex gap-x-2 items-center group"
      >
        <span>{name}</span>
        <ChevronDown className="inline size-4 transition-transform duration-300 group-hover:-scale-100" />
      </Link>
      <ul className="border-gray-300 absolute top-full left-0 hidden rounded-md border bg-white py-2 group-hover:block">
        {subLinks.map(({ name, url }) => {
          return (
            <li
              key={name}
              className="flex break-inside-avoid whitespace-nowrap px-7 py-1 text-sm hover:bg-gray-100"
            >
              <Link href={url}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default NavbarLink
