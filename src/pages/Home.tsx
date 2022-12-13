import s from './Home.module.scss'

import Announcements from '../components/HomeComponents/Announcements/Announcements'
import Welcome from '../components/HomeComponents/Welcome/Welcome'
import { Fragment } from 'react'
import Shortcuts from '../components/HomeComponents/Shortcuts/Shortcuts'
import UsefulLinks from '../components/HomeComponents/UsefulLinks/UsefulLinks'
import { Slide } from 'react-awesome-reveal'

const Home = () => {
  return (
    <Fragment>
      <div className={s.home__top}>
        <Slide direction='up' triggerOnce={true}>
          <Welcome />
        </Slide>
        <Slide direction='up' triggerOnce={true}>
          <Announcements />
        </Slide>
      </div>
      <Slide direction='up' triggerOnce={true}>
        <Shortcuts />
      </Slide>
      <Slide direction='up' triggerOnce={true}>
        <UsefulLinks />
      </Slide>
    </Fragment>
  )
}

export default Home
