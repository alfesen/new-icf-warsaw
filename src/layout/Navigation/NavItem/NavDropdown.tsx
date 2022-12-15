import s from './NavDropdown.module.scss'
import { formatLink } from '../../../helpers/formatLink'

const NavDropdown = ({ links }: { links: string[] }) => {
  const renderLinks =
    links &&
    links.map(link => {
      const parsedLink = formatLink(link)
      return (
        <a
          className={s.link}
          key={`${link.replaceAll(' ', '')}_link`}
          href={`/${parsedLink}`}>
          {link}
        </a>
      )
    })

  return <div className={s.links}>{renderLinks}</div>
}

export default NavDropdown
