import * as React from 'react'
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'

//Routes.jsx replaces App.jsx as the central hub of this the Application.

//Core Components
import Header from '../components/Core/Header.jsx'
import Footer from '../components/Core/Footer.jsx'
import Home from '../components/Core/Home.jsx'
import NotFound from './NotFound'



const Layout = () => {
  // Sets up the web address routes

  return (
    <div className="Layout">
      <Header />
      <div className="main__container">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Error Handling */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
