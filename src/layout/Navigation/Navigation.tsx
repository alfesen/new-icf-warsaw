import { Fragment, useState } from 'react'
import s from './Navigation.module.scss'
import Burger from '../../UI/Burger/Burger'
import NavItem from './NavItem/NavItem'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)

  const aboutUsLinks = [
    'Welcome & location',
    'Our pastors and staff',
    'What to expect',
    'What we believe',
    'EU Regulation 2016/79',
    'Privacy Policy & RODO',
    'Leadership team',
    'Ministry leaders',
  ]
  const churchLifeLinks = [
    'Upcoming events',
    'Small groups',
    'ICF Kids',
    'Young adults',
    'Women',
    'Men',
    'Sermon Archives',
    'ICF Library',
    'Daily Hope',
  ]
  const giveLinks = ['Giving to ICF', '1%', 'Missionaries']
  const contactLinks = ['Contact', 'Facebook', 'Instagram']

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
          <NavItem title='About us' links={aboutUsLinks} />
          <NavItem title='Church Life' links={churchLifeLinks} />
          <NavItem title='Give' links={giveLinks} />
          <NavItem title='Sermons' />
          <NavItem title='Contact' links={contactLinks} />
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
