import NavbarLink from './NavbarLink'
import Container from './Container'
import { useAppSelector } from '../../app/hooks'

const logo = new URL('../../assets/images/logo/alt-short.svg', import.meta.url)
  .href

const Navbar = () => {
  const links = useAppSelector((state) => state.navbar)
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
