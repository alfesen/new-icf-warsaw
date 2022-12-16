import { Fragment, useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './layout/Header/Header'
import Home from './pages/Home/Home'
import Sermons from './pages/Sermons/Sermons'
import Footer from './layout/Footer/Footer'

import welcome from './assets/images/headers/welcome-lg.jpg'
import sermon from './assets/images/headers/sermons.jpg'

function App() {
  const [headerImage, setHeaderImage] = useState('')

  useEffect(() => {
    if (window.location.pathname === '/welcome-location') {
      setHeaderImage(welcome)
    }
    if (window.location.pathname === '/sermons') {
      setHeaderImage(sermon)
    }
  })

  return (
    <Fragment>
      <Header image={headerImage} />
      <main className='container'>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/sermons'>
            <Sermons />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
