import s from './MainHeading.module.scss'

const MainHeading = () => {
  return (
    <h1 className={s['main-heading']}>
      <span className={s['main-heading--primary']}>WELCOME TO ICF WARSAW</span>
      <span className={s['main-heading--secondary']}>Find your way...</span>
    </h1>
  )
}

export default MainHeading
