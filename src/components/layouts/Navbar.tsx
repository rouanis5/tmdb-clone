'use client'
import NavbarLink from './NavbarLink'
import Container from './Container'
import { LinkPropsType } from '../../types/links.type'

const logo = '/logo/alt-short.svg'

const links: LinkPropsType[] = [
  {
    name: 'movies',
    url: '#',
    subLinks: [
      {
        name: 'popular',
        url: '#',
      },
      {
        name: 'now playing',
        url: '#',
      },
      {
        name: 'upcoming',
        url: '#',
      },
      {
        name: 'top rated',
        url: '#',
      },
    ],
  },
  {
    name: 'TV shows',
    url: '#',
    subLinks: [
      {
        name: 'popular',
        url: '#',
      },
      {
        name: 'airing today',
        url: '#',
      },
      {
        name: 'on TV',
        url: '#',
      },
      {
        name: 'top rated',
        url: '#',
      },
    ],
  },
]

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-primary py-3">
      <Container className="flex items-center justify-between">
        <ul className="flex items-center gap-x-5">
          <li>
            <a href="#">
              <img className="block w-40" src={logo} alt="" />
            </a>
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
