import s from './UsefulLinks.module.scss'
import donate from '../../../assets/images/links/donate-sm.jpg'
import map from '../../../assets/images/links/map-sm.jpg'

const UsefulLinks = () => {
  return (
    <div className={s.links}>
      <div className={s.link}>
        <a href='/directions'>
          <div className={s.link__text}>Where we are</div>
          <img className={s.link__img} src={map} alt='Giving to ICF images' />
        </a>
      </div>
      <div className={s.link}>
        <div className={s.link__text}>Donate</div>
        <a href='/givingtoicf'>
          <img
            className={s.link__img}
            src={donate}
            alt='Giving to ICF images'
          />
        </a>
      </div>
    </div>
  )
}

export default UsefulLinks
