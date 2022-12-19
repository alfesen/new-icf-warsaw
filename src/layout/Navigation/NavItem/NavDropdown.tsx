import s from './NavDropdown.module.scss'
import { formatLink } from '../../../helpers/formatLink'

const NavDropdown = ({ links, collectionTitle }: { links: string[], collectionTitle: string}) => {
  const renderLinks =
    links &&
    links.map(link => {
      const parsedLink = formatLink(link)
      const parsedTitle = formatLink(collectionTitle)
      return (
        <a
          className={s.link}
          key={`${link.replaceAll(' ', '')}_link`}
          href={`/${parsedTitle}/${parsedLink}`}>
          {link}
        </a>
      )
    })

  return <div className={s.links}>{renderLinks}</div>
}

export default NavDropdown
