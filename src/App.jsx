import { useState } from 'react'
import './App.css'
import Navbar from './routes/Navbar'
import Allroutes from './routes/Allroutes'

function App() {

  return (
    <div>
      <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
   <Navbar />
   <Allroutes />
   </div>
  )
}

export default App
