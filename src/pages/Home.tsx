import s from './Home.module.scss'

import Announcements from '../views/Announcements/Announcements'
import Welcome from '../views/Welcome/Welcome'
import { Fragment } from 'react'
import Shortcuts from '../views/Shortcuts/Shortcuts'

const Home = () => {
  return (
    <Fragment>
      <div className={s.home__top}>
        <Welcome />
        <Announcements />
      </div>
      <div className={s.home__shortcuts}>
        <Shortcuts />
      </div>
    </Fragment>
  )
}

export default Home
