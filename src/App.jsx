import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Outlet />
    </>
  )
}

export default App
