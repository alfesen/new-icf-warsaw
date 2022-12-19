import s from './SideNavigation.module.scss'
import { NavLink } from 'react-router-dom'
import { formatLink } from '../../helpers/formatLink'
import { useState } from 'react'
import Card from '../../UI/Card/Card'
import { Fade } from 'react-awesome-reveal'

const SideNavigation = ({
  links,
  collectionTitle,
}: {
  links: string[]
  collectionTitle: string
}) => {
  const [showNav, setShowNav] = useState(false)

  const renderLinks = links.map(link => {
    const formattedLink = formatLink(link)
    const formattedTitle = formatLink(collectionTitle)
    return (
      <NavLink
        key={`${formattedLink}_key_${Math.random()}`}
        className={`${s.link} ${showNav ? s.show : ''}`}
        activeClassName={s.active}
        to={`/${formattedTitle}/${formattedLink}`}>
        {link}
      </NavLink>
    )
  })

  const buttonSymbol = showNav ? '-' : '+'
  const buttonText = showNav ? 'Hide' : 'Show'

  const toggleNavigation = () => {
    setShowNav(show => !show)
  }

  return (
    <Fade triggerOnce>
      <Card className={s.aside}>
        <button onClick={toggleNavigation} className={s.aside__button}>
          <span>{buttonSymbol}</span> {buttonText} navigation
        </button>
        {renderLinks}
      </Card>
    </Fade>
  )
}

export default SideNavigation
