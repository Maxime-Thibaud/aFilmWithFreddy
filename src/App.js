import React from "react"
import "./App.css"
import FilmChoice from "./Components/FilmChoice"
import LivingRoom from './Components/LivingRoom'
import Graveyard from './Components/Graveyard'
import { Switch, Route} from 'react-router-dom'

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component= {LivingRoom}/>
				<Route path="/filmchoice" component= {FilmChoice}/>
				<Route path="/graveyard" component= {Graveyard}/>
			</Switch>
		</div>
	)
}

export default App
