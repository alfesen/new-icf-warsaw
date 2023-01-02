import s from './Donations.module.scss'
import { give } from '../../db/links.json'
import SideNavigation from '../../layout/SideNavigation/SideNavigation'

const Donations = () => {
  return (
    <div className={s.donations}>
      <SideNavigation
        collectionTitle={give.title}
        links={give.links}
      />
    </div>
  )
}

export default Donations
