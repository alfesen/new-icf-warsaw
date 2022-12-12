import s from './Home.module.scss'

import Announcements from '../components/HomeComponents/Announcements/Announcements'
import Welcome from '../components/HomeComponents/Welcome/Welcome'
import { Fragment } from 'react'
import Shortcuts from '../components/HomeComponents/Shortcuts/Shortcuts'
import UsefulLinks from '../components/HomeComponents/UsefulLinks/UsefulLinks'

const Home = () => {
  return (
    <Fragment>
      <div className={s.home__top}>
        <Welcome />
        <Announcements />
      </div>
      <Shortcuts />
      <UsefulLinks />
    </Fragment>
  )
}

export default Home
