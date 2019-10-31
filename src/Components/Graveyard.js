import React from 'react';
import './Graveyard.css'

function Graveyard({userName, userFear, userDob}) {
  return(
    <div className="graveyard">
      <div className ="tomb">
        <p className="userGrave"> {userName} </p>
        <p className="userDobDod"> {userDob} - 2019 </p>
        <p className="userDeath"> {userFear} </p>
      </div>      
    </div>
  );
}

export default Graveyard;