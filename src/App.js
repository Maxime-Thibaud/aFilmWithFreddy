import React from "react"
import "./App.css"
import FilmChoice from "./Components/FilmChoice"
import LivingRoom from './Components/LivingRoom'
import Graveyard from './Components/Graveyard'

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
				<div className = "homeBackground">
					<div className = "beginStory">
						<p className="storyText">Aujourd'hui, c'est Halloween, vous n'avez rien de prévu. Vous vous sentez un peu seul...	</p>
					</div>
					<div className="userForm">						
						<p>Entrez votre nom :</p>
						<input 
							name="username"
							type="text" 
							value={this.state.userName}
							onChange={this.usernameHandleChange}
						/>
						<p>Entrez votre année de naissance :</p>
						<input 
							name="dob" 
							type="text" 
							value={this.state.userDob}
							onChange={this.dobHandleChange}
						/>
						<p>Votre plus grande peur... C'est d'être : :</p>
						<select 
							type="select" 
							name="fear" 
							size="4" 
							onChange={this.fearHandleChange}
							value={this.state.userFear}>
							<option value="tué par un clown">"tué par un clown"</option>
							<option value="mordu par un vampire">"mordu par un vampire"</option>
							<option value="décapité par une goule">"décapité par une goule"</option>
							<option value="écrasé par un piano">"écrasé par un piano"</option>
						</select>
						<button onClick={this.getUserInfo}>Commencer</button>	
					</div>
				</div>
				<LivingRoom />
				<FilmChoice />
				<Graveyard {...this.state}/>
			</div>	
		)
	}
	
}

export default App
