import React from 'react'
import { useState } from 'react';
import apiFacade from "../apiFacade.js";
import "../styles/Animal.css";
const Animal = () => {
    const [animal, setAnimal] = useState("");


    function getCat() {
        apiFacade.fetchCat().then(data => {
            console.log(data);
            setAnimal(data)
        });
        
    }

    function getDog() {
        apiFacade.fetchDog().then(data => setAnimal(data));
    }

    function addFavorite() {
        apiFacade.addFavorites(animal);
    }

    const onclick = (e) => {
        addFavorite()
    }

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    {animal != "" ?
                        <>
                            <div className='column'>
                                <img className='animal-img' src={animal.url} onClick={onclick} />
                            </div>
                            <div className='column'>
                                <div className='animal-fact-section'>
                                    <h2>Did you know..?</h2>
                                    <h3>{animal.fact}</h3>
                                    <button onClick={getCat}>Generate Cat</button>
                                    <button onClick={getDog}>Generate Dog</button>
                                </div>
                            </div>
                        </> : <>
                            <div className='column'>
                                <div className='section'>
                                    <h2 className='center'>Get pet facts here!</h2>
                                    <h3 className='center'>Click here to get a random cat fact!</h3>
                                    <button onClick={getCat}>Generate Cat</button>
                                    <button onClick={getDog}>Generate Dog</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </main>
    )
}

export default Animal