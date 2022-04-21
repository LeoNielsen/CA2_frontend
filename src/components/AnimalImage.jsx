import React from 'react'
import "../styles/AnimalImage.css"

const AnimalImage = ( { id ,url, onclick } ) => {
  return (
    <div>
        <img className='card-container' id={id} src={url} onClick={onclick}/>
    </div>
  )
}

export default AnimalImage