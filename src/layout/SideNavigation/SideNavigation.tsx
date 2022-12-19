import s from './SideNavigation.module.scss'
import { NavLink } from 'react-router-dom'
import { formatLink } from '../../helpers/formatLink'

const SideNavigation = ({ links }: { links: string[] }) => {
  const renderLinks = links.map(link => {
    const formattedLink = formatLink(link)
    return <NavLink to={`/${formattedLink}`}>{link}</NavLink>
  })

  return <aside className={s.aside}>{renderLinks}</aside>
}

export default SideNavigation
