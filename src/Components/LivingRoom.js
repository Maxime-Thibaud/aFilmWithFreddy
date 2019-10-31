import React from 'react';
import './LivingRoom.css';
import {Link} from 'react-router-dom';

const LivingRoom = () => (
	<div className="background-LivingRoom">
		<div className="freddy-text-button">
			<div className="text-button">
				<p className="freddy-quote">Hey mon copain ! Alors qu'est ce que l'on va regarder comme film ? Vas-y choisis en un</p>
				<button className='buttonNextLivingRoom'><Link to ="/filmchoice">Suivant</Link></button>
			</div>
		</div>
	</div>
)

export default LivingRoom;