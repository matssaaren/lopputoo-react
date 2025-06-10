import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import './galery.css'

const Gallery = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Gallery - Cybernetics</title>
      </Helmet>
      <Navbar />
      <main className="gallery-main">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          {[1,2,3,4].map((n) => (
            <img key={n} src={`https://via.placeholder.com/300?text=Image+${n}`} alt={`gallery ${n}`} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Gallery
