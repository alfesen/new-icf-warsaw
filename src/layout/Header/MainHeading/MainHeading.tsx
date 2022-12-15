import s from './MainHeading.module.scss'
import { Fragment } from 'react'

const MainHeading = () => {
  return (
    <Fragment>
      <h1 className={s['main-heading']}>
        <span className={s['main-heading--primary']}>
          International Christian Fellowship
        </span>
        <span className={s['main-heading--secondary']}>of Warsaw</span>
      </h1>
    </Fragment>
  )
}

export default MainHeading
