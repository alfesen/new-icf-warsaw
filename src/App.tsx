import {Fragment} from 'react'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Home from './pages/Home'

function App() {
  return (
    <Fragment>
      <Header />
      <main className='container'>
        <Home />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
