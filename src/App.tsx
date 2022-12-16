import { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './layout/Header/Header'
import Home from './pages/Home/Home'
import Sermons from './pages/Sermons/Sermons'
import Footer from './layout/Footer/Footer'

function App() {
 

  return (
    <Fragment>
      <Header />
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
