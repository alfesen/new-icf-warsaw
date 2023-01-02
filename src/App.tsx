import { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './layout/Header/Header'
import Home from './pages/Home/Home'
import Sermons from './pages/Sermons/Sermons'
import Footer from './layout/Footer/Footer'
import About from './pages/About/About'
import ChurchLife from './pages/ChurchLife/ChurchLife'
import Donations from './pages/Donations/Donations'

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
          <Route exact path='/about/:pageTitle'>
            <About />
          </Route>
          <Route exact path='/church-life/:pageTitle'>
            <ChurchLife />
          </Route>
          <Route exact path='/give/:pageTitle'>
            <Donations />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
