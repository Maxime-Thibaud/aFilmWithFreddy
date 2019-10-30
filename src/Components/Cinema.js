import React from 'react'
import './Cinema.css'

function Cinema ({ posterUrl }) {
    return(
        <div className = 'CinemaBackground'>
            <div className = 'BoxOfPictureFromTheMovie'>
                <img 
                    className = 'PictureFromTheMovie' 
                    src= {posterUrl === "" ? "" : posterUrl}
                    alt="Picture of the movie"/>
            </div>
        </div>
    )
}

export default Cinema