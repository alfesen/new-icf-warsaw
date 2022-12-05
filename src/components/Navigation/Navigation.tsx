
import Burger from '../../models/UI/Burger/Burger'
import NavItem from './NavItem/NavItem'

const Navigation = () => {

  const aboutUsLinks = [
    'Welcome & location',
    'Our pastors and staff',
    'What to expect',
    'What we believe',
    'EU Regulation 2016/79',
    'ICF Warsaw Privacy Policy & RODO',
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
  return (
    <nav>
        <Burger/>
      <ul>
        <NavItem title='Home' />
        <NavItem title='About us' links={aboutUsLinks} />
        <NavItem title='Church Life' links={churchLifeLinks} />
        <NavItem title='Give' links={giveLinks} />
        <NavItem title='Sermons' />
        <NavItem title='Contact' links={contactLinks} />
      </ul>
    </nav>
  )
}

export default Navigation
