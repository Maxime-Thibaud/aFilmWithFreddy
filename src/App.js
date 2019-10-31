import React from "react"
import "./App.css"
import FilmChoice from "./Components/FilmChoice"
import LivingRoom from './Components/LivingRoom'
import Graveyard from './Components/Graveyard'
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom';
import Home from './Components/Home'


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: "",
			userFear: "",
			userDob: ""
		}
		this.dobHandleChange = this.dobHandleChange.bind(this)
		this.usernameHandleChange = this.usernameHandleChange.bind(this)
		this.fearHandleChange = this.fearHandleChange.bind(this)
	}
	usernameHandleChange(event) {
		this.setState({
			userName: event.target.value,
		})
	}
	dobHandleChange(event) {
		this.setState({
			userDob: event.target.value,
		})
	}
	fearHandleChange(event) {
		this.setState({
			userFear: event.target.value,
		})
	}	
	render() {
		return (
			<div>
					<Route exact path = "/" component = {()=> <Home 
																{...this.state}
																usernameHandleChange={this.usernameHandleChange}
																dobHandleChange={this.dobHandleChange}
																fearHandleChange={this.fearHandleChange} />}
																 />
					<Route path="/livingroom" component = {LivingRoom}/>
					<Route path="/filmchoice" component = {FilmChoice}/>
					<Route path="/graveyard" component = {() => <Graveyard {...this.state}/>}/>
			</div>	
		)
	}

}

export default App
