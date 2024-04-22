import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default Routers