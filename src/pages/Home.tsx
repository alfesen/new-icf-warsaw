import s from './Home.module.scss'

import Announcements from '../views/Announcements/Announcements'
import Welcome from '../views/Welcome/Welcome'

const Home = () => {
  return (
    <div className={s.home}>
      <Welcome />
      <Announcements />
    </div>
  )
}

export default Home
