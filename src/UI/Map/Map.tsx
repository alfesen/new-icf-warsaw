const Map = ({ className }: { className?: string }) => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.526087934971!2d21.014778615677912!3d52.14294167185636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193263e192290b%3A0x20d5745302f1fb4!2sInternational%20Christian%20Fellowship%20of%20Warsaw!5e0!3m2!1spl!2spl!4v1670840616492!5m2!1spl!2spl'
      width='600'
      height='450'
      allowFullScreen={false}
      className={className}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'></iframe>
  )
}

export default Map
