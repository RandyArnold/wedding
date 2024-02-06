import { useState } from 'react'
import {Navbar} from './components/Navbar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Navbar />
</>
  )
}

export default App
