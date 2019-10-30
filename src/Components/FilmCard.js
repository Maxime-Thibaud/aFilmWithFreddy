import React from 'react';
import './FilmCard.css'


function FilmCard({ title, year, director, posterUrl }){
    return (
        <div className = 'Card'>
            <div className = "imageLayout">
                <img 
                src = {posterUrl}
                alt = {title}/>
            </div>
        <p className="filmTitle">{title}</p>
        <div className="filmInfo">
            <p className="filmDirector">{director}</p>
            <p className="filmYear">{year}</p>
        </div>
        
        </div>
    );
}

export default FilmCard;

