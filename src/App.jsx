import { useEffect, useState } from 'react'
import './App.css'
import Auth from './pages/auth'
import MainPage from './pages/mainPage'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const storedShowLogin = localStorage.getItem('showLogin') === 'true';
    setShowLogin(storedShowLogin);
  }, []);

  return (
    <>
      {showLogin ? <Auth /> : <MainPage />}
    </>
  )
}

export default App
