import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './contact.css'

const Contact = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Contact - Cybernetics</title>
      </Helmet>
      <Navbar />
      <main className="contact-main">
        <h1>Contact</h1>
        <p>You can reach us at <a href="mailto:info@example.com">info@example.com</a></p>
      </main>
    </div>
  )
}

export default Contact
