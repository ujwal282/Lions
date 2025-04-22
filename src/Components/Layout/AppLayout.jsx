import React from 'react'
import Nav from '../Navigation/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout