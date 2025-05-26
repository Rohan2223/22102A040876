import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stockprice from "./GoodList";
import GoodList from './GoodList';
function App() {
  const [count, setCount] = useState(0)

 return (
    <div>
      <GoodList />
    </div>
    
  ); 
}
export default App;
