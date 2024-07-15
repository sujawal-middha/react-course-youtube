import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Veet with Tailwind</h1>
      <Card username="Sujawal" />
      <Card username='Json' post='staff Engg.'/>
      <Card />
    </>
  )
}

export default App
