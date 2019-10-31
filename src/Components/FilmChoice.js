import React from 'react'
import axios from "axios"
import FilmCard from './FilmCard'
import './FilmChoice.css'
import {Link} from 'react-router-dom';

class FilmChoice extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "",
            director: "",
            year: "",
            posterUrl: ""
        }
        this.getMovie = this.getMovie.bind(this)     
    }
    getMovie () {
        let randomId = Math.floor(Math.random() * 82)
        axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies")
			.then(response => response.data)
			.then(data => {
				this.setState({
                    title: data.movies[randomId].title,
                    director: data.movies[randomId].director,
                    posterUrl: data.movies[randomId].posterUrl,
                    year: data.movies[randomId].year                					
				})
			})
    }
    render () {
        return (
            <div className = 'CinemaBackground'>
                <div className = "boxButtonGetMovie">
                    <button 
                        className = {this.state.title === "" ? "getMovie" : "getMovieSelected"} 
                        onClick={this.getMovie}>Laissez Freddy vous choisir un film...</button>
                        <button className = {this.state.year === "" ? "off" : "on"}><Link to={{pathname:"/graveyard", state: this.props.location.state}}>Pouet pouet</Link></button>

                </div>
                < FilmCard {...this.state} />
            </div>
        )
    }
}

export default FilmChoice
