import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './not-found.css'

const NotFound = () => {
  return (
    <div className="page">
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <Navbar />
      <main className="not-found-main">
        <h1>404</h1>
        <p>The page you requested was not found.</p>
      </main>
    </div>
  )
}

export default NotFound
