import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from '../UI/Services'

const Layout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Services/>
     <Footer/>
    </>
  )
}

export default Layout