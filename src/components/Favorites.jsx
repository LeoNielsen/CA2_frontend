import React from 'react'
import { useState, useEffect } from 'react'
import apiFacade from '../apiFacade'
import "../styles/Favorites.css"
import AnimalImage from './AnimalImage'
import {Link} from "react-router-dom";




const favorites = ( { loggedIn } ) => {

const [userInfo, setUserInfo] = useState([])

const getFavorites = () => {
  const getFavorites = apiFacade.fetchFavorites().then(data => {
    setUserInfo(data)
    console.log(data);
  })
}

useEffect (() => {
  getFavorites()
}, [])

const onclick = (e) => {

  const image = userInfo.filter((image) => image.id==e.currentTarget.id)
  const newUserInfo = userInfo.filter((image) => image.id!=e.currentTarget.id)
  setUserInfo(newUserInfo);
  apiFacade.removeFavorites(image.at(0));

}
 
  return (
    <>
    {loggedIn ? (
    <div className='card-list' >
      {
      userInfo.map((image) => {
        return <AnimalImage id={image.id} url={image.url} onclick={onclick}/>
      })
      }
    
    </div>) 
    :
    (<div className='container'>
      <h2>you most be logged in to be able to see your favorites</h2>
      <Link to="/login"> <button className="login-button">login</button></Link>
    </div>)
    }
    </>
    
  )
}

export default favorites