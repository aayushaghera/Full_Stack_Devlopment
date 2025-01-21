import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RulesList from './components/RuleList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RulesList></RulesList>
        
    </>
  )
}

export default App
