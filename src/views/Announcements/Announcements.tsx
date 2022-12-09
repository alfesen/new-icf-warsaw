import s from './Announcements.module.scss'
import Card from '../../models/UI/Card/Card'

const Announcements = () => {
  return (
    <Card className={s.announcements}>
      <div className={s.announcements__main}>
        <h3>
          ICF Warsaw is meeting in-person for worship services, Our worship
          services will also be live streaming online
        </h3>
        <h3>10am on Sunday morning for in-person worship</h3>
      </div>
      {/* There will be list of announcements */}
    </Card>
  )
}

export default Announcements
