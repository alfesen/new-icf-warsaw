import s from './UsefulLinks.module.scss'
import donate from '../../../assets/images/links/donate-sm.jpg'
import map from '../../../assets/images/links/map-sm.jpg'
import UsefulLink from '../../../UI/UsefulLink/UsefulLink'

const UsefulLinks = () => {
  return (
    <div className={s.links}>
      <UsefulLink url='/welcome-location' text='Where we are' image={map} />
      <UsefulLink url='/givingtoicf' text='Giving to ICF' image={donate} />
    </div>
  )
}

export default UsefulLinks
