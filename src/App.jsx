import { useState } from 'react'
import './App.css'
import Auth from './pages/auth'
import MainPage from './pages/mainPage'
import Comicstapped from './pages/comicstapped'

function App() {
  // const isloggedin = localStorage.getItem('isloggedin') === 'true';

  return (
    <>
      {/* {isloggedin ? <MainPage /> : <Auth />} */}
    <Comicstapped />
    </>
  )
}

export default App
