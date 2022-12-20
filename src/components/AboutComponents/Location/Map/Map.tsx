import s from './Map.module.scss'

const Map = () => {
  return (
    <div className={s.map}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.52608793493!2d21.014778615170346!3d52.142941671857116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193263e192290b%3A0x20d5745302f1fb4!2sInternational%20Christian%20Fellowship%20of%20Warsaw!5e0!3m2!1spl!2spl!4v1671538224890!5m2!1spl!2spl'
        width='600'
        height='450'
        className={s.map__image}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Puławska 326, 02-825 Warszawa'></iframe>
    </div>
  )
}

export default Map
