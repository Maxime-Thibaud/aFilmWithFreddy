import React from "react"
import "./App.css"
import FilmChoice from "./Components/FilmChoice"
import LivingRoom from './Components/LivingRoom'
import Graveyard from './Components/Graveyard'

function App() {
	return (
		<div>
			<LivingRoom />
			<FilmChoice />
			<Graveyard />
		</div>
	)
}

export default App
