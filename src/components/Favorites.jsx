import React from 'react'
import { useState, useEffect } from 'react'
import apiFacade from '../apiFacade'
import "../styles/Favorites.css"
import AnimalImage from './AnimalImage'




const favorites = () => {

const [userInfo, setUserInfo] = useState([])

const getFavorites = () => {
  const getFavorites = apiFacade.fetchFavorites().then(data => {
    setUserInfo(data)
    console.log(data);
  })
}


// const getUserInfo = async () => {
//   const getUserInfo = apiFacade.fetchUserInfo()
 
//   setUserInfo(getUserInfo);
// }

useEffect (() => {
  getFavorites()
}, [])




 
  return (
    <div className='card-list' >
      {
      userInfo.map((image) => {
        return <AnimalImage url={image.url} />
      })
      }
    
    </div>
  )
}

export default favorites