import s from './ChurchLife.module.scss'
import {churchLife} from '../../db/links.json'
import SideNavigation from '../../layout/SideNavigation/SideNavigation'

const ChurchLife = () => {
  return (
    <div className={s['church-life']}>
      <SideNavigation collectionTitle={churchLife.title} links={churchLife.links} />
    </div>
  )
}

export default ChurchLife