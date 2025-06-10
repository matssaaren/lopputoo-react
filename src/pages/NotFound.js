import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import './NotFound.css'

const NotFound = () => (
  <Layout>
    <Helmet>
      <title>404 - Not Found</title>
    </Helmet>
    <section className="not-found">
      <h1>404</h1>
      <p>The page you requested was not found.</p>
    </section>
  </Layout>
)

export default NotFound
