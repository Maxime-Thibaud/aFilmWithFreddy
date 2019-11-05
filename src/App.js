import React from "react"
import "./App.css"
import FilmChoice from "./Components/FilmChoice"
import LivingRoom from './Components/LivingRoom'
import Graveyard from './Components/Graveyard'
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom';
import Home from './Components/Home'


function App() {
	return (
		<div>
			<Route exact path = "/" component = {Home}/>
			<Route path="/livingroom" component = {LivingRoom}/>
			<Route path="/filmchoice" component = {FilmChoice}/>
			<Route path="/graveyard" component = {Graveyard}/>
		</div>
	)
}

export default App
