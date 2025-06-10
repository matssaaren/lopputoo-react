import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import './Home.css'

const Home = () => (
  <Layout>
    <Helmet>
      <title>Cybernetics</title>
    </Helmet>
    <section className="home">
      <h1>Real Life Cybernetics</h1>
      <p>
        Welcome to our website dedicated to the fascinating world of cybernetics.
        Here you can learn how technology interacts with biology and explore
        recent advancements.
      </p>
      <img src="https://placehold.co/600x400" alt="Cybernetics" className="hero" />
    </section>
  </Layout>
)

export default Home
