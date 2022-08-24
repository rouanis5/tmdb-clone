import NavbarLink from './NavbarLink'
import { useAppSelector } from '../../app/hooks'

const logo = new URL('../../assets/images/logo/alt-short.svg', import.meta.url)
  .href

const Navbar = () => {
  const links = useAppSelector(state => state.navbar);
  return (
    <nav className="flex items-center justify-between bg-primary px-10 py-3">
      <ul className="flex items-center gap-x-5">
        <li>
          <a href="#">
            <img className="block w-40" src={logo} alt="" />
          </a>
        </li>
        {links.map(({ name, url, subLinks }) => {
          return (
            <NavbarLink key={name} name={name} url={url} subLinks={subLinks} />
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
