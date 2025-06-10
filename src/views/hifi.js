import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './hifi.css'

const Hifi = () => {
const Hifi = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Hi-Fi Prototype</title>
      </Helmet>
      <Navbar />
      <header className="hifi-header">
        <h1 className="hifi-title">Hi-Fi Prototype</h1>
      </header>
      <main className="hifi-main">
        <img
          src="https://via.placeholder.com/600x400"
          alt="placeholder hero"
          className="hifi-hero"
        />
        <p className="hifi-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hifi-features">
          <div className="hifi-feature">
            <img src="https://via.placeholder.com/150" alt="feature 1" />
            <h2>Feature One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="hifi-feature">
            <img src="https://via.placeholder.com/150" alt="feature 2" />
            <h2>Feature Two</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="hifi-feature">
            <img src="https://via.placeholder.com/150" alt="feature 3" />
            <h2>Feature Three</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hifi
