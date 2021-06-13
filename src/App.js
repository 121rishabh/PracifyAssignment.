import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Awards from './Components/Awards'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
function App() {
  return (
    <div className ="app">
       <Navbar />
       <Main />
       <Awards />
       <Reviews />
       <Footer />
    </div>
  )
}

export default App
