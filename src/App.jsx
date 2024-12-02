import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import Home from './Pages/Home'

const App = () => {
  return (
    <div className='mb-10'>
    <Navbar />
    <main className="">
      <Home/>
    </main>
    </div>
  )
}

export default App