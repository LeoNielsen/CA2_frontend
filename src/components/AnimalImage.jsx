import React from 'react'
import "../styles/AnimalImage.css"

const AnimalImage = ( { url } ) => {
  return (
    <div>
        <img className='card-container' src={url} />
    </div>
  )
}

export default AnimalImage