import { Fragment, useState, useEffect } from 'react'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Home from './pages/Home'

import welcome from './assets/images/welcome/welcome-lg.jpg'

function App() {
  const [headerImage, setHeaderImage] = useState('')

  useEffect(() => {
    if (window.location.pathname === '/welcome-location') {
      setHeaderImage(welcome)
    }
  })

  return (
    <Fragment>
      <Header image={headerImage} />
      <main className='container'>
        <Home />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
