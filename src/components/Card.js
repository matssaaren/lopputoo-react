import React from 'react'
import './Card.css'

const Card = ({ image, title, children }) => (
  <div className="card">
    {image && <img src={image} alt={title || 'card'} />}
    {title && <h2>{title}</h2>}
    {children && <p>{children}</p>}
  </div>
)

export default Card
