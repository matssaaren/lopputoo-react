import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import './Info.css'

const Info = () => (
  <Layout>
    <Helmet>
      <title>Info - Cybernetics</title>
    </Helmet>
    <section className="info">
      <h1>About Cybernetics</h1>
      <p>
        Cybernetics studies feedback and control in living beings and machines.
        This site introduces its history and real-life applications.
      </p>
    </section>
  </Layout>
)

export default Info
