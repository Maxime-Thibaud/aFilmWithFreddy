import React from 'react';
import './LivingRoom.css';
import {Link} from 'react-router-dom';

const LivingRoom = (props) => {
	return (
		<div className="background-LivingRoom">
		<div className="freddy-text-button">
			<div className="text-button">
				<p className="freddy-quote">Hey mon copain ! Je vois que tu es bien seul pour la soirée d'Halloween... ! Ce qu'il faudrait, c'est qu'on se regarde un petit film d'horreur. Alors qu'est ce que l'on va regarder... ?</p>
				<button className='buttonNextLivingRoom'><Link to ={{pathname: "/filmchoice", state: props.location.state}}>Suivant</Link></button>
			</div>
		</div>
	</div>
	)
}
	


export default LivingRoom;