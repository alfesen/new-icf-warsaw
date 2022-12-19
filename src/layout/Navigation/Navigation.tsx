import { Fragment, useState } from 'react'
import s from './Navigation.module.scss'
import Burger from '../../UI/Burger/Burger'
import NavItem from './NavItem/NavItem'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  const about = {
    title: 'About',
    links: [
      'Welcome & location',
      'Our pastors and staff',
      'What to expect',
      'What we believe',
      'EU Regulation 2016/79',
      'Privacy Policy & RODO',
      'Leadership team',
      'Ministry leaders',
    ],
  }
  const churchLife = {
    title: 'Church Life',
    links: [
      'Upcoming events',
      'Small groups',
      'ICF Kids',
      'Young adults',
      'Women',
      'Men',
      'Sermon Archives',
      'ICF Library',
      'Daily Hope',
    ],
  }
  const give = {
    title: 'Give',
    links: ['Giving to ICF', '1%', 'Missionaries'],
  }
  const contact = {
    title: 'Contact',
    links: ['Contact', 'Facebook', 'Instagram'],
  }

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
