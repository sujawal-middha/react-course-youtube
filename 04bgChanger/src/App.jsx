import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [color, setColor] = useState('olive')
  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
     <div className='w-full h-screen duration-0 bg-black' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
              <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Blue</button>
              <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button>
              <button onClick={()=>setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg'>Pink</button>
          </div>
        </div>  
     </div>
  )
}

export default App
