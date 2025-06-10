import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Card from '../components/Card'
import './Gallery.css'

const Gallery = () => (
  <Layout>
    <Helmet>
      <title>Gallery - Cybernetics</title>
    </Helmet>
    <section className="gallery">
      <h1>Gallery</h1>
      <div className="grid">
        {[1, 2, 3, 4].map(n => (
          <Card key={n} image={`https://placehold.co/300?text=Image+${n}`} />
        ))}
      </div>
    </section>
  </Layout>
)

export default Gallery
