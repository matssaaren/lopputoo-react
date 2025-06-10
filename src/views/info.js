import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './info.css'

const Info = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Info - Cybernetics</title>
      </Helmet>
      <Navbar />
      <main className="info-main">
        <h1>About Cybernetics</h1>
        <p>
          Cybernetics studies feedback and control in living beings and machines.
          This site introduces its history and real-life applications.
        </p>
      </main>
    </div>
  )
}

export default Info
