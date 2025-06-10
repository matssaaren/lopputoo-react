import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import './Contact.css'

const Contact = () => (
  <Layout>
    <Helmet>
      <title>Contact - Cybernetics</title>
    </Helmet>
    <section className="contact">
      <h1>Contact</h1>
      <p>
        You can reach us at
        <a href="mailto:info@example.com">info@example.com</a>
      </p>
    </section>
  </Layout>
)

export default Contact
