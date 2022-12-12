import s from './Home.module.scss'

import Announcements from '../components/HomeComponents/Announcements/Announcements'
import Welcome from '../components/HomeComponents/Welcome/Welcome'
import { Fragment } from 'react'
import Shortcuts from '../components/HomeComponents/Shortcuts/Shortcuts'

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
