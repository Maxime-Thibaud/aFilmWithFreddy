import React from 'react'
import {Link} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import './Home.css'
import Graveyard from './Graveyard'



class Home extends React.Component {
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
                    <p>Votre plus grande peur... C'est d'être :</p>
                    <select
                        className="inputForm"
                        type="select" 
                        name="fear" 
                        size="5" 
                        onChange={this.fearHandleChange}
                        value={this.state.userFear}>
                        <option value="tué par un clown">tué par un clown</option>
                        <option value="mordu par un vampire">mordu par un vampire</option>
                        <option value="décapité par une goule">décapité par une goule</option>
                        <option value="écrasé par un piano">écrasé par un piano</option>
                        <option value="mort de fatigue après un hackathon">mort de fatigue après un hackathon</option>

                    </select>
                    <button><Link to = {{pathname: "/livingroom", state: this.state}} >Heureusement, un nouvel ami vous invite...</Link></button>												
                </div>
                <Route path="/graveyard" component = {() => <Graveyard {...this.state}/>}/>
            </div>
        )
    } 
}

export default Home