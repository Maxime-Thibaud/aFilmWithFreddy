import React from 'react';
import './Graveyard.css'

function Graveyard(props) {
  return(
    <div className="graveyard">
      <div className ="tomb">
        <p className="userGrave"> {props.location.state.userName} </p>
        <p className="userDobDod"> {props.location.state.userDob} - 2019 </p>
        <p className="userDeath"> {props.location.state.userFear} </p>
      </div>      
      <button>Retour à l'accueil</button>
    </div>
  );
}

export default Graveyard;