import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'

type Route = 'home' | 'register'

export default function App() {
  const [route, setRoute] = useState<Route>('home')

  const go = (next: Route) => {
    setRoute(next)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <>
      <Header isHome={route === 'home'} onHome={() => go('home')} onRegister={() => go('register')} />
      {route === 'home' ? (
        <HomePage onRegister={() => go('register')} />
      ) : (
        <RegisterPage onHome={() => go('home')} />
      )}
    </>
  )
}
