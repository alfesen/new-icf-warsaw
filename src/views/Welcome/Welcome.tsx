import s from './Welcome.module.scss'

const Welcome = () => {
  return (
    <section className={`container ${s.welcome}`}>
      <h2 className={s.welcome__heading}>Welcome to ICF Warsaw</h2>
        <p className={s.welcome__text}>
          The International Christian Fellowship of Warsaw is an
          English-speaking church that worships Jesus Christ as Lord and Savior
          and the hope for all people. We are a church family made up of people
          from over <span>30 nations, dozens of religious backgrounds</span>
          , and many <span>diverse cultures</span>. In our service to Jesus
          Christ we are committed to providing{' '}
          <span>
            inspiring worship, relevant teaching, and authentic friendships
          </span>
          . If you are looking for a church home while in Warsaw, or are just
          curious as to who we are, we invite you to come and join us. We would
          love to meet you!
        </p>
      
    </section>
  )
}

export default Welcome
