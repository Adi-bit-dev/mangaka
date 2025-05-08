import { useState } from 'react'
import './App.css'
import Auth from './pages/auth'
import MainPage from './pages/mainPage'

function App() {
  const isloggedin = localStorage.getItem('isloggedin') === 'true';

  return (
    <>
      {isloggedin ? <MainPage /> : <Auth />}
    </>
  )
}

export default App
