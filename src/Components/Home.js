import React from 'react'
import {Link} from 'react-router-dom';


function Home ({userName, userDob, userFear, usernameHandleChange, dobHandleChange, fearHandleChange}) {
    return (
        <div className = "homeBackground">
            <div className = "beginStory">
                <p className="storyText">Aujourd'hui, c'est Halloween, vous n'avez rien de prévu. Vous vous sentez un peu seul...	</p>
            </div>
            <div className="userForm">						
                <p>Entrez votre nom :</p>
                <input 
                    name="username"
                    type="text" 
                    value={userName}
                    onChange={usernameHandleChange}
                />
                <p>Entrez votre année de naissance :</p>
                <input 
                    name="dob" 
                    type="text" 
                    value={userDob}
                    onChange={dobHandleChange}
                />
                <p>Votre plus grande peur... C'est d'être : :</p>
                <select 
                    type="select" 
                    name="fear" 
                    size="4" 
                    onChange={fearHandleChange}
                    value={userFear}>
                    <option value="tué par un clown">"tué par un clown"</option>
                    <option value="mordu par un vampire">"mordu par un vampire"</option>
                    <option value="décapité par une goule">"décapité par une goule"</option>
                    <option value="écrasé par un piano">"écrasé par un piano"</option>
                </select>
                <button><Link to = "/livingroom">Découvrir la suite...</Link></button>												
            </div>
        </div>
    )
    
}

export default Home