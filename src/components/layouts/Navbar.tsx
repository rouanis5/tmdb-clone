'use client'
import NavbarLink from '@/components/layouts/NavbarLink'
import Container from '@/components/layouts/Container'
import { LinkPropsType } from '@/types/links.type'
import Link from 'next/link'
import config from '@/data/config.json'

const logo = '/logo/alt-short.svg'

const links: LinkPropsType[] = [
  {
    name: 'movies',
    url: '/',
    subLinks: [
      {
        name: 'popular',
        url: '/?tag=pop',
      },
      {
        name: 'for rent',
        url: '/?tag=rent',
      },
      {
        name: 'in theaters',
        url: '/?tag=theater',
      },
    ],
  },
  {
    name: 'About',
    url: config.PUBLIC_PORTFOLIO + '/about',
    subLinks: [
      {
        name: 'portfolio',
        url: config.PUBLIC_PORTFOLIO,
      },
      { name: 'linkedin', url: config.PUBLIC_LINKEDIN },
      { name: 'github', url: config.PUBLIC_GITHUB },
    ],
  },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-primary py-3">
      <Container className="flex items-center justify-between">
        <ul className="flex items-center gap-x-5">
          <li>
            <Link href="/">
              <img className="block w-40" src={logo} alt="" />
            </Link>
          </li>
          {links.map(({ name, url, subLinks }) => {
            return (
              <NavbarLink
                key={name}
                name={name}
                url={url}
                subLinks={subLinks}
              />
            )
          })}
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
