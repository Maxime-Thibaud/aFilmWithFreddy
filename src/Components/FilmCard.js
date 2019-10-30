import React from 'react';
import './FilmCard.css'


function FilmCard({ title, year, director, posterUrl }){
    return (
        <div className = 'Card'>
        <img 
            src = {posterUrl}
            alt = {title}/>
        <title>{title}</title>
        <p>{director}-{year}</p>
        </div>
    );
}

export default FilmCard;

