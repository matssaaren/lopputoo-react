import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Box from '../components/Box'
import './Hifi.css'

const features = [
  { title: 'Feature One', text: 'Lorem ipsum dolor sit amet.' },
  { title: 'Feature Two', text: 'Ut enim ad minim veniam.' },
  { title: 'Feature Three', text: 'Duis aute irure dolor in reprehenderit.' },
]

const Hifi = () => (
  <Layout>
    <Helmet>
      <title>Hi-Fi Prototype</title>
    </Helmet>
    <section className="hifi">
      <h1>Hi-Fi Prototype</h1>
      <img src="https://placehold.co/600x400" alt="hero" className="hero" />
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="features">
        {features.map((f, i) => (
          <Box key={i}>
            <img src="https://placehold.co/150" alt={f.title} />
            <h2>{f.title}</h2>
            <p>{f.text}</p>
          </Box>
        ))}
      </div>
    </section>
  </Layout>
)

export default Hifi
