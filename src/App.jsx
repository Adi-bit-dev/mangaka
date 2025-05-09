import { useState } from 'react'
import './App.css'
import Auth from './pages/auth'
import MainPage from './pages/mainPage'
import Comicstapped from './pages/comicstapped'

// this is the place from where you can access the two pages ->
//  the Main page 
// the Comicstapped page

// good luck :)

function App() {
  const isloggedin = localStorage.getItem('isloggedin') === 'true';

  return (
    <>
      {/* {isloggedin ? <MainPage /> : <Auth />} */}
      {/* for your convenience you can access the two pages from here */}
      <Comicstapped />
      <MainPage />
    </>
  )
}

export default App
