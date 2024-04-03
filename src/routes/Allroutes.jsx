import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../components/signup'
import Login from '../components/login'
import Tracker from '../components/tracker'

const Allroutes = () => {
  return (
    <div>


        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/tracker' element={<Tracker />} />
        </Routes>
    </div>
  )
}

export default Allroutes