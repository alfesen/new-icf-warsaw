import s from './UsefulLinks.module.scss'
import donate from '../../../assets/images/links/donate-sm.jpg'
// import Map from '../../../UI/Map/Map'

const UsefulLinks = () => {
  return (
    <div className={s.links}>
      <div className={s.link}>
        <div className={s.link__text}>Where we are</div>
        {/* <Map className={s.link__map} /> */}
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
