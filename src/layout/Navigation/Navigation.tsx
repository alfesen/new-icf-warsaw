import { Fragment, useState } from 'react'
import s from './Navigation.module.scss'
import Burger from '../../UI/Burger/Burger'
import NavItem from './NavItem/NavItem'
import links from '../../db/links.json'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  const { about, churchLife, give, contact } = links

  const toggleNavigation = (isActive: boolean) => {
    setIsActive(is => (isActive === true ? true : false))
  }

  return (
    <Fragment>
      <div className={s.navigation__button}>
        <Burger onToggle={toggleNavigation} />
      </div>
      <nav className={`${s.navigation} ${isActive ? s.show : ''}`}>
        <ul className={s.navigation__list}>
          <NavItem title={about.title} links={about.links} />
          <NavItem title={churchLife.title} links={churchLife.links} />
          <NavItem title={give.title} links={give.links} />
          <NavItem title='Sermons' />
          <NavItem title={contact.title} links={contact.links} />
          <li>
            <a
              target='_blank'
              className={`btn ${s['btn--nav']}`}
              href='https://www.youtube.com/@icfwarsaw4803'>
              Recordings
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navigation
