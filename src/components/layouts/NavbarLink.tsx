import { LinkPropsType } from '@/types/links.type'
import Link from 'next/link'

const NavbarLink = ({ name, url, subLinks }: LinkPropsType) => {
  return (
    <>
      <li className="group group relative inline-block p-2 capitalize">
        <a href={url} className="font-semibold text-white ">
          {name}
        </a>
        <ul className="border-gray-3s00 absolute top-full left-0 hidden rounded-md border bg-white py-2 group-hover:block">
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
    </>
  )
}

export default NavbarLink
