import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './home.css'

const Home = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Cybernetics</title>
      </Helmet>
      <Navbar />
      <main className="home-main">
        <h1>Real Life Cybernetics</h1>
        <p>
          Welcome to our website dedicated to the fascinating world of cybernetics.
          Here you can learn how technology interacts with biology and explore
          recent advancements.
        </p>
        <img src="/external/image1764-sqeo.svg" alt="Cybernetics" />
      </main>
    </div>
  )
}

export default Home
