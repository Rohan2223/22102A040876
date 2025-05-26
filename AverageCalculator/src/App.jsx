import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from "./Calculator";
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Calculator />
      <hr style={{ margin: "40px 0" }} />
    </div>
  )
}

export default App
