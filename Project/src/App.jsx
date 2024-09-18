import { useState } from 'react'
import Navigation from './components/Navigation'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Hero />
    </>
  )
}

export default App
