import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Admin/>
    </>
  )
}

export default App
